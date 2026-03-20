import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <section id="certifications" style={{ minHeight: '60vh', background: 'var(--bg)' }} />
        <section id="contact"        style={{ minHeight: '60vh', background: 'var(--bg-card)' }} />
      </main>
    </>
  )
}