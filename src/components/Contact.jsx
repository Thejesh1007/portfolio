import { Mail, Github, Linkedin, Download } from 'lucide-react'
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
        <div className="resume-downloads">
          <p className="resume-downloads-label">Download Resume</p>
          <div className="resume-downloads-buttons">
            <a
              href="/resume-product.pdf"
              download="Thejesh_Kambhalamatam_Resume_Product.pdf"
              className="btn btn-primary"
            >
              <Download size={14} />
              Product-Based
            </a>
            <a
              href="/resume-service.pdf"
              download="Thejesh_Kambhalamatam_Resume_Service.pdf"
              className="btn btn-outline"
            >
              <Download size={14} />
              Service-Based
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

