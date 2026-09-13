import { useEffect, useState } from 'react'
import './App.css'

type Theme = 'light' | 'dark'

const Icon = ({ name }: { name: 'arrow' | 'github' | 'linkedin' | 'moon' | 'sun' }) => {
  if (name === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.35 1.09 2.92.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.82c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.77c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    )
  }

  if (name === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6.5 8.2H3.2V19H6.5V8.2ZM4.85 3a1.94 1.94 0 1 0 0 3.88 1.94 1.94 0 0 0 0-3.88ZM19.8 12.82c0-3.25-1.73-4.76-4.04-4.76a3.5 3.5 0 0 0-3.18 1.75V8.2H9.27V19h3.31v-5.35c0-1.41.27-2.78 2.02-2.78 1.72 0 1.74 1.61 1.74 2.87V19h3.31l.15-6.18Z" />
      </svg>
    )
  }

  if (name === 'moon') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.1 15.4A8.5 8.5 0 0 1 8.6 3.9 8.5 8.5 0 1 0 20.1 15.4Z" />
      </svg>
    )
  }

  if (name === 'sun') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v2.2M12 19.8V22M4.9 4.9l1.6 1.6m11 11 1.6 1.6M2 12h2.2M19.8 12H22M4.9 19.1l1.6-1.6m11-11 1.6-1.6" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" />
    </svg>
  )
}

const skills = [
  {
    label: 'Application',
    items: ['C#', '.NET', 'Dynamics 365', 'Power Platform', 'Java'],
  },
  {
    label: 'Interface',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'PCF'],
  },
  {
    label: 'Cloud & data',
    items: ['Azure Functions', 'Azure Queues', 'Key Vault', 'API integrations', 'Oracle SQL'],
  },
  {
    label: 'Quality',
    items: ['Playwright', 'Storybook', 'React Testing Library', 'Selenium', 'Accessibility'],
  },
]

const projects = [
  {
    number: '01',
    title: 'Enterprise operations platform',
    client: 'John Deere · Staff augmentation',
    description:
      'Full-stack delivery for a multi-tenant Azure application spanning 12+ legal entities, 100+ locations, and thousands of daily users. Built integrations and invoicing and time-tracking interfaces. I have led multiple flagship UI redesigns from architecture and task decomposition through delivery and maintenance.',
    tags: ['Full-stack', 'React', 'Azure', 'Architecture'],
  },
  {
    number: '02',
    title: 'Global scheduling experience',
    client: 'Microsoft · Staff augmentation',
    description:
      'Redesigned and refactored the Field Service Schedule Board in React, with accessibility and localization built into an experience used worldwide across Microsoft Field Service users.',
    tags: ['React', 'Accessibility', 'Localization', 'Dynamics 365'],
  },
  {
    number: '03',
    title: 'Forecasting application',
    client: 'Hitachi Solutions · Internal IP',
    description:
      'Delivered a React forecasting product with role-based experiences, chat, dashboards, spreadsheet-like data entry, and configuration tooling—finishing ahead of schedule despite reduced capacity. This forecaster is now used in our entire sales estimation process and is integral to our successful delivery of multiple enterprise engagements.',
    tags: ['React', 'Product UI', 'Dashboards', 'Data entry'],
  },
]

const testimonials = [
  {
    attribution: 'Client Project Manager, John Deere',
    quote:
      'Just reaching out quickly to express my thanks to Christian for his work on [Project]. I know I probably tell him “Thanks” for the great work just about every day, but our dealers have also been providing great feedback on the new functionality. The dealers have been jumping in to use it right away, and it’s been great to work with them on some quick wins and enhancement feedback. I’ve also really appreciated how Christian has been willing to demonstrate the functionality to dealers himself and take questions live. On top of that, he’s done a great job of suggesting improvements and keeping track of new work items around this functionality that I’ve prioritized immediately. It’s been super easy to work with him, brainstorm quick fixes, and let him focus and get after it.',
  },
  {
    attribution: 'Engagement Lead',
    quote:
      'Christian has been absolutely crushing it on [Client StartUp]. We had our go-live last night. It was a very late night, and he stuck it out to help resolve some data issues and validate that everything came over correctly. I don’t know what the process looks like for a spot bonus, but if there’s a way I can formally recommend him for one, or if that needs to come from you, I think it would be well deserved.',
  },
  {
    attribution: 'Functional Architect',
    quote:
      'Christian joined the [Client] project as an Associate Developer and quickly proved himself to be a quick learner and very easy to work with. He listens, he understands, and he gets it 95% right on the first try. I have been so impressed by him and would gladly work with him on any future projects. Five stars in my book.',
  },
  {
    attribution: 'Senior Developer',
    quote:
      'Christian’s attention to detail and commitment to quality were instrumental in identifying and resolving potential issues before they could impact [External API] integrations at John Deere.',
  },
  {
    attribution: 'Client Scrum Master',
    quote:
      'Christian was extremely dependable on our [Client] project. He was a resource who would finish the work he committed to—oftentimes early—and require very little in the way of reminders, such as updating hours. On top of his excellent drive and collaboration, I enjoyed getting to know Christian more over the project on a personal level and thought he brought very good energy to the overall team dynamic. Great work, Christian!',
  },
]

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Christian Sarran, home">
          <span className="brand-mark" aria-hidden="true">CS</span>
          <span>Christian Sarran</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#profile">Profile</a>
          <a href="#experience">Experience</a>
          <a href="#work">Work</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#credentials">Credentials</a>
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            aria-label={`Switch to ${nextTheme} mode`}
            title={`Switch to ${nextTheme} mode`}
            onClick={() => setTheme(nextTheme)}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a
            className="header-social"
            href="https://github.com/Chris034"
            target="_blank"
            rel="noreferrer"
            aria-label="View Christian Sarran on GitHub (opens in a new tab)"
          >
            <Icon name="github" />
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero section-shell" id="top">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Senior Software Developer</p>
            <h1>
              Engineering dependable
              <span> digital products.</span>
            </h1>
            <p className="hero-intro">
              Full-stack developer building thoughtful enterprise software across React,
              .NET, Dynamics 365, and Azure.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <Icon name="arrow" />
              </a>
              <a
                className="button button-secondary"
                href="https://www.linkedin.com/in/christian-sarran-290290140/"
                target="_blank"
                rel="noreferrer"
              >
                Connect on LinkedIn <Icon name="linkedin" />
              </a>
            </div>
          </div>

          <div className="hero-visual reveal" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="signal-card signal-main">
              <div className="signal-label">PRODUCT ENGINEERING</div>
              <div className="signal-title">Clarity in complex systems</div>
              <div className="signal-grid">
                <span>01</span><i /><span>DISCOVER</span>
                <span>02</span><i /><span>DESIGN</span>
                <span>03</span><i /><span>DELIVER</span>
              </div>
            </div>
            <div className="signal-card signal-tag">
              <span className="pulse-dot" />
              FULL-STACK
            </div>
          </div>
        </section>

        <section className="profile section-shell section-rule" id="profile">
          <div className="section-heading">
            <p className="section-index">01 / Profile</p>
            <h2>Software built for people,<br />systems, and scale.</h2>
          </div>
          <div className="profile-copy">
            <p className="lead">
              I turn complex requirements into clear, resilient software—working across
              the interface, application layer, integrations, and cloud infrastructure.
            </p>
            <p>
              At Hitachi Solutions, I partner with clients and cross-functional agile teams
              to deliver Dynamics 365 and custom web experiences under strict deadlines.
              My work pairs technical depth with accessible UI thinking, careful
              communication, and a strong customer-service focus.
            </p>
            <p>
              I also use AI-assisted development workflows with context files and
              environment schema definitions to improve generation accuracy,
              consistency, and productivity.
            </p>
          </div>
        </section>

        <section className="skills section-shell section-rule" aria-labelledby="skills-title">
          <div className="section-heading">
            <p className="section-index">02 / Technology</p>
            <h2 id="skills-title">Tools chosen for<br />the problem.</h2>
          </div>
          <div className="skill-groups">
            {skills.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="experience section-shell section-rule" id="experience">
          <div className="section-heading">
            <p className="section-index">03 / Experience</p>
            <h2>Building across<br />the stack.</h2>
          </div>
          <div className="timeline">
            <article className="role current">
              <div className="role-meta">
                <p>Jun 2022 — Present</p>
                <span>Current</span>
              </div>
              <div className="role-body">
                <p className="company">Hitachi Solutions</p>
                <h3>Senior Software Developer Consultant</h3>
                <p>
                  Develop C#/.NET plugins, console applications, custom actions, web
                  resources, and PCF controls for Dynamics 365, alongside responsive
                  interfaces in React, TypeScript, JavaScript, CSS, and HTML. Build API
                  integrations with Azure Functions, Queues, and Key Vault while
                  collaborating across client and agile teams.

                  Consistently develivered excellence across serveral enterprise and
                  product engagements explimifying adaptability, technical depth, and a strong customer-service focus.
                </p>
                <div className="role-note">
                  <span aria-hidden="true">✦</span>
                  <p>Recipient of the annual Rising Star Award, with consistently excellent customer service and CSAT.</p>
                </div>
              </div>
            </article>

            <article className="role">
              <div className="role-meta"><p>Sep 2021 — Apr 2022</p></div>
              <div className="role-body">
                <p className="company">Loblaw Digital</p>
                <h3>Front End Developer</h3>
                <p>
                  Maintained a reusable React component library with JavaScript, HTML,
                  CSS, and GraphQL; translated designs into responsive, accessible
                  interfaces; built Playwright, Storybook, and React Testing Library
                  coverage; and addressed backend issues in Java.
                </p>
              </div>
            </article>

            <article className="role">
              <div className="role-meta"><p>May 2019 — Dec 2019</p></div>
              <div className="role-body">
                <p className="company">Ministry of Education</p>
                <h3>IT QA Assistant</h3>
                <p>
                  Supported Selenium testing across 20 applications, Oracle SQL data
                  validation and modification, defect and test reporting, knowledge
                  transfer, and mentoring.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="work section-shell section-rule" id="work">
          <div className="work-heading">
            <div>
              <p className="section-index">04 / Selected work</p>
              <h2>Complex work,<br />clearly delivered.</h2>
            </div>
            <p>A selection of enterprise and product engagements delivered at Hitachi Solutions.</p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <p className="project-number">{project.number}</p>
                <div className="project-content">
                  <p className="project-client">{project.client}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul aria-label={`${project.title} technologies and focus areas`}>
                    {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="testimonials section-shell section-rule" id="testimonials">
          <div className="section-heading">
            <p className="section-index">05 / Testimonials</p>
            <h2>Trusted when the<br />work matters.</h2>
            <p className="section-intro">
              Feedback from client and delivery partners across enterprise engagements.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <figure
                className={`testimonial-card${index === 0 ? ' testimonial-featured' : ''}`}
                key={testimonial.attribution}
              >
                <span className="quote-mark" aria-hidden="true">“</span>
                <blockquote>
                  <p>{testimonial.quote}</p>
                </blockquote>
                <figcaption>
                  <span aria-hidden="true" />
                  {testimonial.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="credentials section-shell section-rule" id="credentials">
          <div className="section-heading">
            <p className="section-index">06 / Credentials</p>
            <h2>Continual learning,<br />grounded in practice.</h2>
          </div>
          <div className="credential-content">
            <article className="education-card">
              <p className="credential-label">Education</p>
              <p className="credential-year">2021</p>
              <h3>University of Toronto</h3>
              <p>Honours Bachelor of Science</p>
              <p>Specialist in Statistics Co-op, Machine Learning and Data Mining</p>
            </article>
            <div className="certifications">
              <p className="credential-label">Microsoft certifications</p>
              <ul>
                <li><strong>PL-200</strong><span>Power Platform Functional Consultant</span></li>
                <li><strong>PL-400</strong><span>Power Platform Developer</span></li>
                <li><strong>PL-900</strong><span>Power Platform Fundamentals</span></li>
                <li><strong>AZ-900</strong><span>Azure Fundamentals</span></li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner section-shell">
          <p className="section-index">Connect</p>
          <h2>Let’s build software<br />that holds up.</h2>
          <p className="footer-copy">Find my work and professional profile on the platforms below.</p>
          <div className="footer-links">
            <a href="https://github.com/Chris034" target="_blank" rel="noreferrer">
              <Icon name="github" /> GitHub <Icon name="arrow" />
            </a>
            <a href="https://www.linkedin.com/in/christian-sarran-290290140/" target="_blank" rel="noreferrer">
              <Icon name="linkedin" /> LinkedIn <Icon name="arrow" />
            </a>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Christian Sarran</p>
            <a href="#top">Back to top <span aria-hidden="true">↑</span></a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
