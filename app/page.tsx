import { Github, Linkedin, Mail, ArrowDown, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import Experience from "@/app/ui/Experience";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            <Image
              src="/aniket-logo.webp"
              alt="Aniket Logo"
              width={40}
              height={40}
              className="object-contain rounded-full"
            />
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link
              href="#skills"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Link
              href="https://github.com/aniketicloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/aniketicloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:aniketicloud@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center">
        {/* Hero Section */}
        <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32 text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image
              src="/profile-removebg.png"
              alt="Aniket"
              width={128}
              height={128}
              className="object-cover grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Hi, I'm <span className="text-primary">Aniket</span>
          </h1>
          <p className="max-w-[700px] text-xl text-muted-foreground md:text-2xl">
            Full Stack Developer specializing in modern web technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg">
              <Link href="#contact">Get in touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#projects">View my work</Link>
            </Button>
          </div>
          <div className="absolute bottom-8 hidden md:block animate-bounce">
            <Link href="#about">
              <Button variant="ghost" size="icon">
                <ArrowDown className="h-6 w-6" />
                <span className="sr-only">Scroll down</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div>
              <Image
                src="/about-section.webp"
                alt="Aniket working on code"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                About Me
              </h2>
              <p className="text-muted-foreground">
                I'm a passionate Full Stack Developer with over 5 years of
                experience building modern web applications. I specialize in
                creating responsive, user-friendly interfaces and robust backend
                systems.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you can find me reading tech blogs, or
                contributing to open-source projects and making lots of proof of
                concepts. I'm always looking for new challenges and
                opportunities to grow as a developer.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Technical Skills
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  A comprehensive set of technologies I work with
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="text-primary h-10 w-10"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Frontend</h3>
                <ul className="text-center space-y-1 text-muted-foreground">
                  <li>React / Next / Remix</li>
                  <li>Vue.js / Nuxt</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>HTML5 / CSS3</li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="text-primary h-10 w-10"
                  >
                    <path d="M18 10h-4V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Backend</h3>
                <ul className="text-center space-y-1 text-muted-foreground">
                  <li>Node / Express</li>
                  <li>REST / GraphQL</li>
                  <li>Sanity / Coremedia CMS</li>
                  <li>MongoDB / PostgreSQL</li>
                  <li>Firebase / Supabase</li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="text-primary h-10 w-10"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M14 15h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-1" />
                    <path d="M10 15h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">DevOps</h3>
                <ul className="text-center space-y-1 text-muted-foreground">
                  <li>Docker</li>
                  <li>GitHub Actions</li>
                  <li>CI/CD Pipelines</li>
                  <li>AWS</li>
                  <li>Vercel / Netlify</li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-4 p-6 border rounded-lg bg-card">
                <div className="p-2 bg-primary/10 rounded-full">
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
                    className="text-primary h-10 w-10"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Testing</h3>
                <ul className="text-center space-y-1 text-muted-foreground">
                  <li>Playwright / Cypress</li>
                  <li>Vitest / Jest</li>
                  <li>React Testing Library</li>
                  <li>Visual Regression Testing</li>
                  <li>TDD / BDD</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Featured Projects
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  A selection of my recent work
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <div className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/slicks-slices.png"
                    alt="E-commerce Platform"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Pizza Platform</h3>
                  <p className="text-muted-foreground mt-2">
                    A full-featured online pizza store with product catalog,
                    shopping cart, and payment processing. The project uses
                    serverless functions, SSR, SSG pages with optimized images
                    and SEO.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Node
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Gatsby
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Sanity CMS
                    </span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button asChild size="sm" variant="outline">
                      <Link
                        href="https://github.com/aniketicloud/pizza-react-gatsby"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link
                        href="https://aniketicloud-pizza.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/remix-expense-manager.png"
                    alt="Real-time Chat App"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Expense Manager</h3>
                  <p className="text-muted-foreground mt-2">
                    An expense manager with analytics. Webapp with optimized
                    images, static and server side rendered pages with
                    Authentication and Redis implmentation.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Remix
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Redis
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Express
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      PostgreSQL
                    </span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button asChild size="sm" variant="outline">
                      <Link
                        href="https://github.com/aniketicloud/remix-expense-manager"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link
                        href="https://remix-expense-manager.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border bg-background">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/microfrontend-project.png"
                    alt="Task Management Dashboard"
                    width={600}
                    height={400}
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">
                    Sales Management Dashboard
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    A productivity tool for teams to manage projects, tasks, and
                    deadlines efficiently. This application is done with micro
                    frontend architecture. Both Vue and React is used with
                    typecript. Deployment is done with AWS.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Vue
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      React
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      AWS
                    </span>
                    <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      Micro Frontend
                    </span>
                  </div>
                  <div className="flex gap-4 mt-6">
                    <Button asChild size="sm" variant="outline">
                      <Link
                        href="https://github.com/aniketicloud/micro-frontend-project-react-vue"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button asChild size="sm">
                      <Link
                        href="https://github.com/aniketicloud/micro-frontend-project-react-vue"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Work Experience
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  My professional journey
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 mt-12">
              <Experience
                companyName="John Deere"
                from="Dec 2022"
                to="Mar 2025"
                location="Client -Remote"
                responsibilities={[
                  "Led the frontend team to deploy John Deere official site of many countries with locales.",
                  "Collaborated with back-end developers to integrate front-end with APIs",
                  "Optimized web performance, improving load times by 35%",
                  "Established automated testing strategies using Playwright, achieving pixel perfect UI components",
                  "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 40%",
                  "Containerized testing framework using Docker for consistent development and testing",
                ]}
              />
              <Experience
                companyName="DeLaval"
                from="Aug 2020"
                to="Dec 2022"
                location="Client - Office"
                responsibilities={[
                  "Lead the development of a micro frontend-based on Vue and React",
                  "Designed a design system with Storybook to match the company's branding",
                  "Developed a real-time tracking application using WebSockets and Redis",
                  "Implemented Sentry for error tracking and monitoring",
                  "Established automated testing strategies using Cypress, achieving 90% test coverage",
                ]}
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Get In Touch
                </h2>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Have a project in mind or want to discuss opportunities? I'd
                  love to hear from you!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-3xl gap-8 mt-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <Link href="mailto:aniketicloud@gmail.com">
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      aniketicloud@gmail.com
                    </p>
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <Link
                    href="https://www.linkedin.com/in/aniketicloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-semibold">LinkedIn</h3>
                    <p className="text-sm text-muted-foreground">
                      https://www.linkedin.com/in/aniketicloud
                    </p>
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <Link
                    href="https://github.com/aniketicloud"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="font-semibold">GitHub</h3>
                    <p className="text-sm text-muted-foreground">
                      https://github.com/aniketicloud
                    </p>
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                {/* TODO: convert this to a form */}
                <div className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Aniket. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/aniketicloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/aniketicloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:aniketicloud@gmail.com">
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
