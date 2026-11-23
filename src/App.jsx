import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Servicios from './components/Servicios.jsx'
import Trabajos from './components/Trabajos.jsx'
import Manifiesto from './components/Manifiesto.jsx'
import Preguntas from './components/Preguntas.jsx'
import Metodo from './components/Metodo.jsx'
import Propuesta from './components/Propuesta.jsx'
import Footer from './components/Footer.jsx'
import { MainButton } from './components/ui.jsx'

// El orden de las secciones de la home. Cada una ocupa una o dos pantallas.
export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Servicios />
        <Manifiesto />
        <Trabajos />
        <Metodo />
        <Preguntas />
        <Propuesta />
      </main>
      <Footer />
      <nav className="actionbar" aria-label="Acción rápida">
        <MainButton arrow={false} />
      </nav>
    </>
  )
}
