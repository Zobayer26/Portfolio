import { useEffect } from "react"
import Hero from "./components/UserInterface/Hero"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Aos from "aos"
import 'aos/dist/aos.css'
import Services from "./components/UserInterface/Services"
import Portfolio from "./components/UserInterface/Portfolio"
import Contact from "./components/UserInterface/Contact"

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Services/>
        <Portfolio/>
        <Contact/>
      </main>
      <Footer />
    </div>
  )
}

export default App