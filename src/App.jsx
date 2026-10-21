import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import { profile } from './data.js'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-line px-5 py-8 text-center text-sm">&copy; {new Date().getFullYear()} {profile.name}</footer>
    </>
  )
}
