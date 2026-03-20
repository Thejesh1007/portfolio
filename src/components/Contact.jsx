import { Mail, Github, Linkedin } from 'lucide-react'
import '../styles/Contact.css'

const CONTACTS = [
  {
    icon: <Mail size={20} />,
    label: 'Email',
    value: 'kambhalamatamthejesh@gmail.com',
    href: 'mailto:kambhalamatamthejesh@gmail.com',
  },
  {
    icon: <Linkedin size={20} />,
    label: 'LinkedIn',
    value: 'thejesh-kambhalamatam',
    href: 'https://linkedin.com/in/thejesh-kambhalamatam-19854a311',
  },
  {
    icon: <Github size={20} />,
    label: 'GitHub',
    value: 'Thejesh1007',
    href: 'https://github.com/Thejesh1007',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact-inner">
        <p className="section-label">// contact</p>
        <h2 className="section-title">Get In Touch</h2>
        <div className="divider" />
        <p className="section-subtitle">
          I'm actively looking for Full Stack Developer internship opportunities.
          If you have a role or just want to connect — feel free to reach out!
        </p>
        <div className="contact-cards">
          {CONTACTS.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">{icon}</div>
              <span className="contact-card-label">{label}</span>
              <span className="contact-card-value">{value}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

