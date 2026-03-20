import '../styles/Certifications.css'

const CERTS = [
  {
    icon: '🐍',
    name: 'Python Programming',
    issuer: 'NxtWave',
    badge: 'Completed',
    type: 'done',
  },
  {
    icon: '🟢',
    name: 'Node.js Development',
    issuer: 'NxtWave',
    badge: 'Completed',
    type: 'done',
  },
  {
    icon: '🗄️',
    name: 'SQL & Database Management',
    issuer: 'NxtWave',
    badge: 'In Progress',
    type: 'progress',
  },
  {
    icon: '⚛️',
    name: 'React.js Development',
    issuer: 'NxtWave',
    badge: 'In Progress',
    type: 'progress',
  },
  {
    icon: '🏛️',
    name: 'ACM Student Chapter Member',
    issuer: 'VVIT — organized college-level tech events',
    badge: 'Achievement',
    type: 'achievement',
  },
  {
    icon: '💻',
    name: '82 Problems Solved — Striver\'s A-Z Sheet',
    issuer: 'LeetCode · 39 Medium · 3 Hard',
    badge: 'Achievement',
    type: 'achievement',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications section">
      <div className="container certifications-inner">
        <p className="section-label">// certifications</p>
        <h2 className="section-title">Certifications & Achievements</h2>
        <div className="divider" />
        <div className="cert-grid">
          {CERTS.map(({ icon, name, issuer, badge, type }) => (
            <div className="cert-card" key={name}>
              <span className="cert-icon">{icon}</span>
              <div className="cert-content">
                <span className="cert-name">{name}</span>
                <span className="cert-issuer">{issuer}</span>
                <span className={`cert-badge ${type}`}>{badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}