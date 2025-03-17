import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"

export default function Resume() {
  return (
    <div className="max-w-[850px] mx-auto p-6 bg-white text-gray-800">
      {/* Header / Contact Info */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Aniket</h1>
        <h2 className="text-xl text-gray-600 mb-4">Full Stack Developer</h2>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4" />
            <span>johndoe@example.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone className="w-4 h-4" />
            <span>(123) 456-7890</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-1">
            <Github className="w-4 h-4" />
            <span>github.com/johndoe</span>
          </div>
          <div className="flex items-center gap-1">
            <Linkedin className="w-4 h-4" />
            <span>linkedin.com/in/johndoe</span>
          </div>
        </div>
      </header>

      {/* Professional Summary */}
      <section className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Professional Summary</h2>
        <p className="text-gray-700">
          Versatile Full Stack Developer with extensive experience building modern web applications. Proficient in
          front-end frameworks like React and Vue.js, as well as back-end technologies including Node.js. Strong
          expertise in containerization with Docker, test automation with Playwright, and CI/CD workflows using GitHub
          Actions. Passionate about creating efficient, scalable, and maintainable code with a focus on user experience.
        </p>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Front-End</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>React.js, Redux, Next.js</li>
              <li>Vue.js, Vuex, Nuxt.js</li>
              <li>JavaScript (ES6+), TypeScript</li>
              <li>HTML5, CSS3, Sass/SCSS</li>
              <li>Tailwind CSS, Bootstrap</li>
              <li>Responsive Web Design</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Back-End</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Node.js, Express.js</li>
              <li>RESTful APIs, GraphQL</li>
              <li>MongoDB, PostgreSQL, MySQL</li>
              <li>Firebase, Supabase</li>
              <li>Authentication & Authorization</li>
              <li>Serverless Functions</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="font-semibold mb-2">DevOps & Tools</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Docker, Kubernetes</li>
              <li>GitHub Actions, CI/CD</li>
              <li>AWS, Azure, Vercel, Netlify</li>
              <li>Git, GitHub, GitLab</li>
              <li>Agile/Scrum Methodologies</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Testing</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>Playwright, Cypress</li>
              <li>Jest, React Testing Library</li>
              <li>Vitest, Vue Testing Library</li>
              <li>TDD, BDD</li>
              <li>End-to-End Testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Work Experience</h2>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-lg font-semibold">Senior Full Stack Developer</h3>
            <span className="text-gray-600">Jan 2021 - Present</span>
          </div>
          <div className="flex flex-wrap justify-between items-baseline mb-2">
            <h4 className="text-gray-700">Tech Innovations Inc.</h4>
            <span className="text-gray-600">San Francisco, CA</span>
          </div>
          <ul className="list-disc list-outside ml-5 text-gray-700">
            <li>Lead the development of a microservices-based e-commerce platform using React, Node.js, and Docker</li>
            <li>Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 40%</li>
            <li>Architected and developed RESTful APIs serving over 1M requests daily</li>
            <li>Established automated testing strategies using Playwright, achieving 90% test coverage</li>
            <li>Mentored junior developers and conducted code reviews to ensure code quality</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-lg font-semibold">Full Stack Developer</h3>
            <span className="text-gray-600">Mar 2018 - Dec 2020</span>
          </div>
          <div className="flex flex-wrap justify-between items-baseline mb-2">
            <h4 className="text-gray-700">WebSolutions Co.</h4>
            <span className="text-gray-600">Austin, TX</span>
          </div>
          <ul className="list-disc list-outside ml-5 text-gray-700">
            <li>Developed and maintained multiple Vue.js applications with Vuex state management</li>
            <li>Built Node.js backend services integrated with MongoDB and PostgreSQL</li>
            <li>Containerized applications using Docker for consistent development and deployment</li>
            <li>Implemented responsive designs and cross-browser compatibility</li>
            <li>Collaborated with UX/UI designers to implement pixel-perfect interfaces</li>
          </ul>
        </div>

        <div>
          <div className="flex flex-wrap justify-between items-baseline">
            <h3 className="text-lg font-semibold">Front-End Developer</h3>
            <span className="text-gray-600">Jun 2016 - Feb 2018</span>
          </div>
          <div className="flex flex-wrap justify-between items-baseline mb-2">
            <h4 className="text-gray-700">Digital Creations LLC</h4>
            <span className="text-gray-600">Seattle, WA</span>
          </div>
          <ul className="list-disc list-outside ml-5 text-gray-700">
            <li>Developed responsive web applications using React and JavaScript ES6</li>
            <li>Collaborated with back-end developers to integrate front-end with APIs</li>
            <li>Optimized web performance, improving load times by 35%</li>
            <li>Participated in daily stand-ups and sprint planning in an Agile environment</li>
          </ul>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Education</h2>
        <div className="flex flex-wrap justify-between items-baseline">
          <h3 className="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
          <span className="text-gray-600">2012 - 2016</span>
        </div>
        <p className="text-gray-700">University of California, Berkeley</p>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-bold border-b-2 border-gray-300 pb-1 mb-3">Notable Projects</h2>

        <div className="mb-4">
          <h3 className="text-lg font-semibold">E-commerce Platform</h3>
          <p className="text-gray-700 mb-1">
            <span className="italic">Technologies: React, Node.js, MongoDB, Docker, GitHub Actions</span>
          </p>
          <p className="text-gray-700">
            Developed a full-featured e-commerce platform with user authentication, product catalog, shopping cart, and
            payment processing. Implemented CI/CD with GitHub Actions and containerized with Docker for easy deployment.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Real-time Chat Application</h3>
          <p className="text-gray-700 mb-1">
            <span className="italic">Technologies: Vue.js, Socket.io, Express, PostgreSQL</span>
          </p>
          <p className="text-gray-700">
            Built a real-time chat application with features including private messaging, group chats, and file sharing.
            Implemented WebSocket communication for instant message delivery and notifications.
          </p>
        </div>
      </section>
    </div>
  )
}

