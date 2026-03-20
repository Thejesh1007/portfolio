import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section id="about"          style={{ minHeight: '100vh', background: 'var(--bg-card)' }} />
        <section id="skills"         style={{ minHeight: '60vh',  background: 'var(--bg)' }} />
        <section id="projects"       style={{ minHeight: '100vh', background: 'var(--bg-card)' }} />
        <section id="certifications" style={{ minHeight: '60vh',  background: 'var(--bg)' }} />
        <section id="contact"        style={{ minHeight: '60vh',  background: 'var(--bg-card)' }} />
      </main>
    </>
  )
}