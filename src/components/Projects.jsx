import { ExternalLink, Github } from 'lucide-react'
import '../styles/Projects.css'

const PROJECTS = [
  {
    number: '01',
    name: 'PrepWise',
    tagline: 'AI-powered study preparation platform for Indian students with three learning modes.',
    bullets: [
      'Built Descriptive, Objective, and Seminar modes powered by Google Gemini API (gemini-2.5-flash)',
      'Implemented JWT authentication, user session management, and secure REST API with Express.js',
      'Deployed full-stack app on Vercel + Render with Neon PostgreSQL and Prisma ORM v5',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'Gemini API'],
    live: 'https://prepwise-lilac-chi.vercel.app',
    github: 'https://github.com/Thejesh1007/prepwise',
  },
  {
    number: '02',
    name: 'ShopSphere',
    tagline: 'Full-stack e-commerce platform with product management, cart, and order workflows.',
    bullets: [
      'Built complete shopping flow — product listings, cart, checkout, and order management',
      'Implemented Role-Based Access Control (RBAC) with Admin, and Customer roles using JWT',
      'Designed relational schema with PostgreSQL and Prisma ORM, deployed on Render + Vercel',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'bcryptjs'],
    live: 'https://shopsphere-rho.vercel.app',
    github: 'https://github.com/Thejesh1007/shopsphere',
  },
  {
    number: '03',
    name: 'Talent Hiring Platform',
    tagline: 'Role-based hiring system with separate dashboards for candidates, recruiters, and admins.',
    bullets: [
      'Architected three-role system — Candidate, Recruiter, Admin — each with dedicated dashboards',
      'Built job posting, application tracking, and status management workflows end-to-end',
      'Secured all routes with JWT middleware and bcrypt password hashing on Node.js/Express backend',
    ],
    stack: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT', 'bcrypt'],
    live: 'https://talent-hiring-platform.vercel.app',
    github: 'https://github.com/Thejesh1007/talent-hiring-platform',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container projects-inner">
        <p className="section-label">// projects</p>
        <h2 className="section-title">What I've Built</h2>
        <div className="divider" />
        <div className="projects-grid">
          {PROJECTS.map(({ number, name, tagline, bullets, stack, live, github }) => (
            <div className="project-card" key={number}>
              <div className="project-card-left">
                <span className="project-number">Project {number}</span>
                <h3 className="project-name">{name}</h3>
                <p className="project-tagline">{tagline}</p>
                <ul className="project-bullets">
                  {bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
                <div className="project-stack">
                  {stack.map(t => (
                    <span className="badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="project-card-right">
                <a href={live} target="_blank" rel="noopener noreferrer" className="project-link project-link-live">
                  <ExternalLink size={13} /> Live Demo
                </a>
                <a href={github} target="_blank" rel="noopener noreferrer" className="project-link project-link-github">
                  <Github size={13} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}