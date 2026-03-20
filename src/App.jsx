import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section id="hero"           style={{ minHeight: '100vh', background: 'var(--bg)' }} />
        <section id="about"          style={{ minHeight: '100vh', background: 'var(--bg-card)' }} />
        <section id="skills"         style={{ minHeight: '60vh',  background: 'var(--bg)' }} />
        <section id="projects"       style={{ minHeight: '100vh', background: 'var(--bg-card)' }} />
        <section id="certifications" style={{ minHeight: '60vh',  background: 'var(--bg)' }} />
        <section id="contact"        style={{ minHeight: '60vh',  background: 'var(--bg-card)' }} />
      </main>
    </>
  )
}