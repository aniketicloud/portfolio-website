interface ExperienceProps {
  readonly companyName: string;
  readonly from: string;
  readonly to: string;
  readonly location: string;
  readonly responsibilities: readonly string[];
}

export default function Experience({
  companyName,
  from,
  to,
  location,
  responsibilities,
}: ExperienceProps) {
  return (
    <div className="flex flex-col gap-2 rounded-lg border p-6 bg-card">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-bold">{companyName}</h3>
        <span className="text-sm text-muted-foreground">
          {from} - {to}
        </span>
      </div>
      <p className="text-muted-foreground">{location}</p>

      <ul className="mt-2 space-y-2 text-muted-foreground">
        {responsibilities.map((responsibility, index) => (
          <li className="flex items-start gap-2" key={index + 1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-primary shrink-0"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{responsibility}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
