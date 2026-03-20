import { Github, Linkedin, Code2 } from 'lucide-react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-left">
          &copy; 2026 <span>Thejesh Kambhalamatam</span> · Built with React
        </p>
        <div className="footer-right">
          <a href="https://github.com/Thejesh1007" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href="https://linkedin.com/in/thejesh-kambhalamatam-19854a311" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href="https://leetcode.com/u/Thejesh07/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <Code2 size={17} />
          </a>
        </div>
      </div>
    </footer>
  )
}

