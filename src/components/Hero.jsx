import { useEffect, useState } from 'react'
import { Github, Linkedin, Code2, ArrowDown, ExternalLink } from 'lucide-react'
import '../styles/Hero.css'

const LINES = [
  { key: 'name',   value: '"Thejesh Kambhalamatam"', type: 'string' },
  { key: 'role',   value: '"Full Stack Developer"',   type: 'string' },
  { key: 'stack',  value: '["React", "Node.js", "PostgreSQL"]', type: 'array' },
  { key: 'status', value: '"Open to Internships ✓"',  type: 'status' },
]

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (visibleLines >= LINES.length) return
    const timer = setTimeout(() => {
      setVisibleLines(prev => prev + 1)
    }, 600)
    return () => clearTimeout(timer)
  }, [visibleLines])

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-inner">
        {/* Left */}
        <div className="hero-left">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Available for internships
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span>Thejesh</span><br />
            Full Stack<br />Developer
          </h1>

          <p className="hero-sub">
            I build and deploy full-stack web applications using React, Node.js, and PostgreSQL —
            from AI-powered study tools to e-commerce platforms and hiring systems.
          </p>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
            <button className="btn btn-outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Thejesh1007" target="_blank" rel="noopener noreferrer">
              <Github size={15} /> GitHub
            </a>
            <span className="hero-socials-divider" />
            <a href="https://linkedin.com/in/thejesh-kambhalamatam-19854a311" target="_blank" rel="noopener noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
            <span className="hero-socials-divider" />
            <a href="https://leetcode.com/u/Thejesh07/" target="_blank" rel="noopener noreferrer">
              <Code2 size={15} /> LeetCode
            </a>
          </div>
        </div>

        {/* Right — Terminal */}
        <div className="hero-right">
          <div className="terminal">
            <div className="terminal-bar">
              <span className="terminal-dot red" />
              <span className="terminal-dot yellow" />
              <span className="terminal-dot green" />
              <span className="terminal-title">thejesh.js</span>
            </div>
            <div className="terminal-body">
              {LINES.slice(0, visibleLines).map(({ key, value, type }, i) => (
                <div key={i} className="terminal-line" style={{ animationDelay: '0ms' }}>
                  <span className="terminal-prompt">{'>'}</span>
                  <span>
                    <span className="terminal-key">{key}</span>
                    <span className="terminal-colon">: </span>
                    <span className={`terminal-value ${type}`}>{value}</span>
                  </span>
                </div>
              ))}
              {visibleLines < LINES.length && (
                <div className="terminal-line" style={{ animationDelay: '0ms' }}>
                  <span className="terminal-prompt">{'>'}</span>
                  <span className="terminal-cursor" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <ArrowDown size={14} />
        scroll
      </div>
    </section>
  )
}