import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Menu from "./components/Menu"
import Gallery from "./components/Gallery"
import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Menu />
      <Gallery />
      <About />
      <Contact />
      <Footer />

      <a
        href="https://wa.me/+91 99450 05885"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg hover:bg-green-600"
      >
        WhatsApp
      </a>

    </div>
  )
}

export default App