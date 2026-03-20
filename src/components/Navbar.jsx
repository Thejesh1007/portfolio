import { useState, useEffect } from 'react'
import { Menu, X, Download } from 'lucide-react'
import '../styles/Navbar.css'

const NAV_LINKS = [
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skills' },
  { label: 'Projects', to: 'projects' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <button className="navbar-logo" onClick={() => scrollTo('hero')}>
          TK<span>.</span>
        </button>
        <ul className="navbar-links">
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <button onClick={() => scrollTo(to)}>{label}</button>
            </li>
          ))}
        </ul>
        <div className="navbar-resume">
          <a
            href="/resume-product.pdf"
            download="Thejesh_Kambhalamatam_Resume.pdf"
            className="btn btn-primary"
            style={{ fontSize: '0.83rem', padding: '8px 18px' }}
          >
            <Download size={14} />
            Resume
          </a>
        </div>
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map(({ label, to }) => (
          <button key={to} onClick={() => { scrollTo(to); closeMenu() }}>
            {label}
          </button>
        ))}
        <a
          href="/resume-product.pdf"
          download="Thejesh_Kambhalamatam_Resume.pdf"
          className="btn btn-primary mobile-resume"
          onClick={closeMenu}
        >
          <Download size={14} />
          Download Resume
        </a>
      </div>
    </nav>
  )
}

