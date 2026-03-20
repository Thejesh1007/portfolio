import '../styles/About.css'

const STATS = [
  { icon: '🎓', value: 'B.Tech CSE', label: 'Final Year — VVIT' },
  { icon: '📍', value: 'Andhra Pradesh', label: 'India' },
  { icon: '🚀', value: '3 Projects', label: 'Built & Deployed' },
  { icon: '🧩', value: '82 Problems', label: 'LeetCode Solved' },
]

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container about-inner">
        <div className="about-left">
          <p className="section-label">// about me</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="divider" />
          <p className="about-text">
            I'm a <strong>final-year B.Tech CSE student</strong> at VVIT, Andhra Pradesh,
            passionate about building full-stack web applications that solve real problems.
          </p>
          <p className="about-text">
            I specialize in the <strong>React + Node.js + PostgreSQL</strong> stack and have
            built and deployed 3 production-grade applications — covering AI tooling,
            e-commerce, and role-based hiring workflows.
          </p>
          <p className="about-text">
            I'm currently <strong>open to Full Stack Developer internships</strong> where I
            can contribute to real products, grow fast, and work with a strong team.
          </p>
        </div>

        <div className="about-right">
          {STATS.map(({ icon, value, label }) => (
            <div className="about-stat" key={label}>
              <span className="about-stat-icon">{icon}</span>
              <span className="about-stat-value">{value}</span>
              <span className="about-stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}