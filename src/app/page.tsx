import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <div id="inicio">
        <Hero />
      </div>
      <About />
      <Services />
      <Portfolio />
      <div id="contacto">
        <Contact /> 
      </div>
    </main>
  )
}