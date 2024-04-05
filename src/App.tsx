import { useEffect } from "react"
import Hero from "./components/UserInterface/Hero"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Aos from "aos"
import 'aos/dist/aos.css'
import Services from "./components/UserInterface/Services"

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
      </main>
      <Footer />
    </div>
  )
}

export default App