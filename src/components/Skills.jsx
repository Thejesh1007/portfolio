import '../styles/Skills.css'

const SKILL_GROUPS = [
  {
    label: 'Frontend',
    skills: [
      { icon: '⚛️', name: 'React.js' },
      { icon: '🌐', name: 'HTML5' },
      { icon: '🎨', name: 'CSS3' },
      { icon: '🟨', name: 'JavaScript' },
      { icon: '🔀', name: 'React Router' },
      { icon: '📦', name: 'Context API' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { icon: '🟢', name: 'Node.js' },
      { icon: '🚂', name: 'Express.js' },
      { icon: '🔌', name: 'REST APIs' },
      { icon: '🧱', name: 'Middleware Architecture' },
    ],
  },
  {
    label: 'Database',
    skills: [
      { icon: '🐘', name: 'PostgreSQL' },
      { icon: '🔷', name: 'Prisma ORM' },
      { icon: '🗄️', name: 'SQL' },
      { icon: '📐', name: 'Data Modeling' },
    ],
  },
  {
    label: 'Auth & Security',
    skills: [
      { icon: '🔐', name: 'JWT Authentication' },
      { icon: '👥', name: 'RBAC' },
      { icon: '🔒', name: 'bcrypt' },
    ],
  },
  {
    label: 'AI Integration',
    skills: [
      { icon: '🤖', name: 'Google Gemini API' },
      { icon: '💬', name: 'Prompt Engineering' },
    ],
  },
  {
    label: 'Tools & DevOps',
    skills: [
      { icon: '🐙', name: 'Git & GitHub' },
      { icon: '📮', name: 'Postman' },
      { icon: '▲', name: 'Vercel' },
      { icon: '🎯', name: 'Render' },
      { icon: '🗃️', name: 'Neon PostgreSQL' },
      { icon: '💻', name: 'VS Code' },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container skills-inner">
        <p className="section-label">// tech stack</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="divider" />
        <div className="skills-grid">
          {SKILL_GROUPS.map(({ label, skills }) => (
            <div className="skills-group" key={label}>
              <span className="skills-group-label">{label}</span>
              <div className="skills-pills">
                {skills.map(({ icon, name }) => (
                  <div className="skill-pill" key={name}>
                    <span className="skill-pill-icon">{icon}</span>
                    {name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}