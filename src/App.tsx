import { useEffect, useState } from 'react'
import './App.css'

type Theme = 'light' | 'dark'

type Project = {
  number: string
  title: string
  client: string
  description: string
  tags: string[]
  url?: string
  repositoryPreview?: boolean
  image?: {
    src: string
    alt: string
    caption: string
    sourceUrl?: string
    licenseUrl?: string
  }
}

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
        <path d="M20.1 15.4A8.5 8.5 0 1 1 8.6 3.9 8.5 8.5 0 0 0 20.1 15.4Z" />
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
    label: 'Backend & APIs',
    items: ['C#', '.NET', 'API integrations', 'GraphQL', 'Java'],
  },
  {
    label: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Responsive UI'],
  },
  {
    label: 'Azure & integration',
    items: ['Azure Functions', 'Azure queues', 'Azure Key Vault', 'Serverless architecture', 'Event-driven architecture'],
  },
  {
    label: 'Enterprise platforms',
    items: ['Microsoft Dynamics 365', 'Microsoft Power Platform', 'CRM customization', 'PCF controls', 'Business process automation'],
  },
  {
    label: 'Data & quality',
    items: ['SQL', 'Oracle SQL', 'Playwright', 'React Testing Library', 'Storybook', 'Selenium'],
  },
  {
    label: 'Delivery',
    items: ['Solution architecture', 'Requirements analysis', 'Agile delivery', 'Technical ownership', 'AI-assisted development', 'Stakeholder collaboration'],
  },
]

const roles = [
  {
    period: 'Jun 2022 — Present',
    company: 'Hitachi Solutions',
    title: 'Senior Software Developer Consultant',
    bullets: [
      'Architect and deliver C#/.NET services, React and TypeScript interfaces, Microsoft Dynamics 365 CRM customizations, and Azure integrations for enterprise clients.',
      'Translate complex business requirements into configurable workflows, rules-driven applications, and integrated forecasting systems.',
      'Build serverless, event-driven integrations with Azure Functions, Azure queues, and Azure Key Vault.',
      'Lead front-end architecture and technical task decomposition through implementation, testing, production delivery, and maintenance.',
    ],
    projects: [
      {
        title: 'John Deere CRM platform',
        bullets: [
          'Extended an enterprise Microsoft Dynamics 365 CRM with C#/.NET custom-code solutions, React interfaces, and Azure integrations.',
          'Delivered custom CRM features, integrations, invoicing, and time-tracking workflows for an enterprise environment spanning 12+ legal entities, 100+ locations, and thousands of daily users.',
          'Owned key features from initial business requirements and technical design through implementation, stakeholder demonstrations, continuous support, and enhancement.',
          'Delivered high-priority conference features under tight deadlines and developed large-scale integrations across the CRM ecosystem.',
          'Mentored newer team members, promoted engineering best practices, and encouraged AI-first development workflows.',
        ],
      },
      {
        title: 'Dynamics 365 Field Service Schedule Board',
        bullets: [
          'Redesigned and refactored the React dispatcher workspace for resource availability, bookings, work orders, and scheduling.',
          'Built accessibility and localization into an experience used globally.',
        ],
      },
      {
        title: 'GlobalFoundries manufacturing forecasting framework',
        bullets: [
          'Led requirements analysis, solution architecture, and development for a forecasting framework integrated with existing business applications.',
          'Enabled sales teams to create more informed estimates and timelines while forecasting chip production schedules and manufacturing demand.',
        ],
      },
      {
        title: 'Bright Health Group care planning',
        bullets: [
          'Extended the existing CRM with configurable questionnaires and rules-driven care-planning workflows.',
          'Used questionnaire responses and configurable rules to enable healthcare experts to automatically create tailored customer care plans.',
        ],
      },
      {
        title: 'SOW forecasting and estimation platform',
        bullets: [
          'Delivered a role-based React application with dashboards, spreadsheet-like data entry, chat, and configuration tooling.',
          'Improved the accuracy of forecasts and statement-of-work estimates while completing delivery ahead of schedule.',
        ],
      },
    ],
    current: true,
  },
  {
    period: 'Sep 2021 — Apr 2022',
    company: 'Loblaw Digital',
    title: 'Front End Developer',
    bullets: [
      'Built and maintained reusable React components for Shoppers Drug Mart’s customer-facing digital experience, supporting a large and established customer base.',
      'Translated designs and wireframes into responsive, accessible user interfaces and supported the GraphQL middleware layer.',
      'Implemented component, integration, and end-to-end test coverage with React Testing Library, Storybook, and Playwright; addressed Java backend issues as needed.',
    ],
  },
  {
    period: 'May 2019 — Dec 2019',
    company: 'Ministry of Education',
    title: 'IT QA Assistant',
    bullets: [
      'Supported Selenium test automation across 20 applications and validated application data with Oracle SQL.',
      'Produced defect and test reporting, supported knowledge transfer, and mentored team members.',
    ],
  },
]

const projects: Project[] = [
  {
    number: '01',
    title: 'Mobile work order application',
    client: 'John Deere · Microsoft Dynamics 365 CRM',
    description:
      'Designed and built a mobile-friendly React application backed by an Azure Functions API exposed through Azure API Management. The backend used user selections to query multiple external APIs and databases, normalize the returned data, and generate the appropriate Dynamics 365 work orders while minimizing clicks for clear, low-friction use.',
    tags: ['React', 'Azure Functions', 'Azure API Management', 'API integrations', 'Data normalization', 'Responsive UI'],
  },
  {
    number: '02',
    title: 'Dynamics 365 Field Service Schedule Board',
    client: 'Microsoft · Global enterprise platform',
    description:
      'Redesigned and refactored the React experience for the globally used dispatcher workspace that visualizes resource availability and bookings, manages work orders, and helps match jobs to the right resources.',
    tags: ['React', 'Dynamics 365 Field Service', 'Resource scheduling', 'Accessibility', 'Localization'],
    image: {
      src: `${import.meta.env.BASE_URL}field-service-schedule-board.png`,
      alt: 'Microsoft Dynamics 365 Field Service Schedule Board showing resources, bookings, requirements, and a map',
      caption: '© Microsoft',
      sourceUrl: 'https://github.com/MicrosoftDocs/dynamics-365-customer-engagement/blob/main/ce/field-service/media/work-order-process-2.png',
      licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    },
  },
  {
    number: '03',
    title: 'Semiconductor manufacturing forecasting',
    client: 'GlobalFoundries · Enterprise delivery',
    description:
      'Architected and developed a forecasting framework integrated with existing applications, enabling sales teams to create more informed estimates and timelines while forecasting chip production schedules and manufacturing demand.',
    tags: ['Solution architecture', 'Systems integration', 'Sales estimation', 'Demand forecasting'],
  },
  {
    number: '04',
    title: 'SOW forecasting and estimation platform',
    client: 'Hitachi Solutions',
    description:
      'Delivered a React platform that improved the accuracy of forecasts and statement-of-work estimates through role-based experiences, dashboards, spreadsheet-like data entry, chat, and configuration tooling.',
    tags: ['React', 'SOW estimation', 'Data-intensive UI', 'Product delivery'],
  },
  {
    number: '05',
    title: 'Shoppers Drug Mart digital experience',
    client: 'Loblaw Digital · Front End Developer',
    description:
      'Built and maintained reusable React components for Shoppers Drug Mart’s customer-facing platform, delivered responsive and accessible interfaces, and supported its GraphQL middleware layer and Java backend.',
    tags: ['React', 'GraphQL middleware', 'Java', 'Reusable components', 'Accessible UI'],
  },
  {
    number: '06',
    title: 'DevIntercept',
    client: 'Independent project · Developer tooling',
    description:
      'Built a Windows desktop tool that improves frontend development workflows by replacing remote browser responses with local or development-server content and supporting Vite HMR, so code changes appear on the fly without full page refreshes.',
    tags: ['C#', '.NET 8', 'WPF', 'Playwright', 'Vite HMR'],
    url: 'https://github.com/Chris034/DevIntercept',
    repositoryPreview: true,
  },
  {
    number: '07',
    title: 'Cache',
    client: 'Independent project · Real-time collaboration',
    description:
      'Built a no-login, room-based web application for instantly sharing text, links, images, and files between devices or friends. Combined a React and TypeScript client with Socket.IO messaging, an Express API, MongoDB persistence, and generated OpenAPI documentation.',
    tags: ['React', 'TypeScript', 'Socket.IO', 'Express', 'MongoDB', 'OpenAPI'],
    url: 'https://github.com/Chris034/cache',
    image: {
      src: `${import.meta.env.BASE_URL}cache-landing-page.png`,
      alt: 'Cache landing page with the tagline fast and simple file sharing and buttons to create or join a room',
      caption: 'Cache landing page',
    },
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
    return savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark'
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

      <div className="portfolio-layout">
        <aside className="profile-rail">
          <div className="identity">
            <p className="eyebrow">Senior Full-Stack Software Developer</p>
            <h1>Christian<br />Sarran</h1>
            <p className="profile-summary">
              Enterprise CRM, business-process automation, and data-intensive applications
              with C#/.NET, React, TypeScript, Microsoft Azure, Dynamics 365, and Power Platform.
            </p>
          </div>

          <nav className="rail-nav" aria-label="Portfolio sections">
            <a href="#experience"><span>01</span> Experience</a>
            <a href="#work"><span>02</span> Selected work</a>
            <a href="#feedback"><span>03</span> Feedback</a>
          </nav>

          <div className="rail-section">
            <p className="rail-label">Core stack</p>
            {skills.map((group) => (
              <div className="skill-line" key={group.label}>
                <strong>{group.label}</strong>
                <span>{group.items.join(' · ')}</span>
              </div>
            ))}
          </div>

          <div className="rail-section credentials">
            <p className="rail-label">Credentials</p>
            <p>5+ years of professional experience</p>
            <p>University of Toronto · HBSc</p>
            <p>PL-200 · PL-400 · PL-900 · AZ-900</p>
          </div>

          <div className="rail-footer">
            <div className="social-links">
              <a
                href="https://github.com/Chris034"
                target="_blank"
                rel="noreferrer"
                aria-label="View Christian Sarran on GitHub (opens in a new tab)"
              >
                <Icon name="github" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/christian-sarran-290290140/"
                target="_blank"
                rel="noreferrer"
                aria-label="View Christian Sarran on LinkedIn (opens in a new tab)"
              >
                <Icon name="linkedin" /> LinkedIn
              </a>
            </div>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
              onClick={() => setTheme(nextTheme)}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
            </button>
          </div>
        </aside>

        <div className="content-column">
          <header className="mobile-header">
            <a href="#top">Christian Sarran</a>
            <button
              className="theme-toggle"
              type="button"
              aria-label={`Switch to ${nextTheme} mode`}
              title={`Switch to ${nextTheme} mode`}
              onClick={() => setTheme(nextTheme)}
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
            </button>
          </header>

          <main id="main">
            <section className="intro" id="top">
              <p className="eyebrow">C#/.NET · React/TypeScript · Microsoft Azure</p>
              <h2>Engineering dependable digital products.</h2>
              <div className="intro-copy">
                <p>
                  Senior full-stack software developer experienced in software
                  architecture, CRM customization, systems integration, accessible user
                  interfaces, test automation, and end-to-end Agile delivery.
                </p>
                <p>
                  I translate complex business requirements into enterprise systems and
                  lead delivery from technical decomposition through implementation,
                  production support, and maintenance.
                </p>
              </div>
              <div className="highlights" aria-label="Career highlights">
                <div><strong>C#/.NET + Azure</strong><span>Backend and cloud integration</span></div>
                <div><strong>React + TypeScript</strong><span>Accessible product interfaces</span></div>
                <div><strong>Dynamics 365</strong><span>CRM and workflow automation</span></div>
              </div>
            </section>

            <section className="content-section" id="experience">
              <div className="section-heading">
                <div>
                  <p className="section-index">01 / Experience</p>
                  <h2>Building across the stack.</h2>
                </div>
                <p>Product-minded engineering grounded in clear communication and dependable delivery.</p>
              </div>

              <div className="experience-list">
                {roles.map((role) => (
                  <article className="experience-item" key={`${role.company}-${role.title}`}>
                    <div className="experience-meta">
                      <p>{role.period}</p>
                      {role.current && <span>Current</span>}
                    </div>
                    <div>
                      <p className="company">{role.company}</p>
                      <h3>{role.title}</h3>
                      <ul className="experience-bullets">
                        {role.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                      </ul>
                      {'projects' in role && role.projects && (
                        <div className="role-projects">
                          <p className="role-projects-label">Key projects</p>
                          {role.projects.map((project) => (
                            <details className="role-project" key={project.title}>
                              <summary>
                                <strong>{project.title}</strong>
                                <i aria-hidden="true">+</i>
                              </summary>
                              <ul>
                                {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                              </ul>
                            </details>
                          ))}
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section" id="work">
              <div className="section-heading">
                <div>
                  <p className="section-index">02 / Selected work</p>
                  <h2>Complex work, clearly delivered.</h2>
                </div>
                <p>Enterprise, product, and independent software work.</p>
              </div>

              <div className="project-grid">
                {projects.map((project) => (
                  <article className="project-card" key={project.number}>
                    <div className="project-meta">
                      <span>{project.number}</span>
                      <p>{project.client}</p>
                    </div>
                    {project.image && (
                      <figure className="project-media">
                        <a
                          href={project.image.src}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} image full size (opens in a new tab)`}
                        >
                          <img src={project.image.src} alt={project.image.alt} loading="lazy" />
                        </a>
                        <figcaption>
                          <span>{project.image.caption}</span>
                          {project.image.sourceUrl && (
                            <a href={project.image.sourceUrl} target="_blank" rel="noreferrer">Source</a>
                          )}
                          {project.image.licenseUrl && (
                            <a href={project.image.licenseUrl} target="_blank" rel="noreferrer">CC BY 4.0</a>
                          )}
                        </figcaption>
                      </figure>
                    )}
                    {project.repositoryPreview && project.url && (
                      <a
                        className="project-repository-preview"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
                      >
                        <Icon name="github" />
                        <span>
                          <strong>View project on GitHub</strong>
                          <small>github.com/Chris034/DevIntercept</small>
                        </span>
                        <Icon name="arrow" />
                      </a>
                    )}
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-footer">
                      <ul aria-label={`${project.title} technologies and focus areas`}>
                        {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                      </ul>
                      {project.url && !project.repositoryPreview && (
                        <a
                          className="project-link"
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on GitHub (opens in a new tab)`}
                        >
                          GitHub <Icon name="arrow" />
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-section" id="feedback">
              <div className="section-heading">
                <div>
                  <p className="section-index">03 / Feedback</p>
                  <h2>Client and coworker feedback.</h2>
                </div>
                <p>Direct feedback from client and delivery partners across enterprise engagements.</p>
              </div>

              <div className="feedback-list">
                {testimonials.map((testimonial, index) => (
                  <details className="feedback-item" key={testimonial.attribution} open={index === 0}>
                    <summary>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <strong>{testimonial.attribution}</strong>
                      <i aria-hidden="true">+</i>
                    </summary>
                    <blockquote>
                      <p>“{testimonial.quote}”</p>
                    </blockquote>
                  </details>
                ))}
              </div>
            </section>
          </main>

          <footer>
            <p>© {new Date().getFullYear()} Christian Sarran</p>
            <div>
              <a href="https://github.com/Chris034" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/christian-sarran-290290140/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="#top">Back to top ↑</a>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

export default App
