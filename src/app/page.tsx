import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/contact'
import Footer from './components/Footer'
import Philosophy from './components/Philosophy'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar/>
      <div id="inicio">
        <Hero />
      </div>
      <About/>
      <Philosophy />
      <Services />
      <Portfolio />
      <div id="contacto">
        <Contact /> 
      </div>
      <Footer />
    </main>
  )
}