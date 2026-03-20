import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <section id="projects"       style={{ minHeight: '100vh', background: 'var(--bg-card)' }} />
        <section id="certifications" style={{ minHeight: '60vh',  background: 'var(--bg)' }} />
        <section id="contact"        style={{ minHeight: '60vh',  background: 'var(--bg-card)' }} />
      </main>
    </>
  )
}