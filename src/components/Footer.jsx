import { cierre, nav, servicios, trabajos } from '../content.js'
import { MainButton } from './ui.jsx'

// footer.closing: fila 1 el cierre (close-type), fila 2 los links (footer-columns).
export default function Footer() {
  const year = new Date().getFullYear()
  const cols = [
    { h: 'Servicios', links: servicios.items.slice(0, 3).map((s) => [s.name, '#servicios']) },
    { h: 'Trabajos', links: trabajos.items.map((t) => [t.title, '#trabajos']) },
    { h: 'Método', links: [['Cómo trabajamos', '#metodo']] },
    { h: 'Preguntas', links: [['Preguntas frecuentes', '#preguntas']] },
  ]
  return (
    <footer className="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--type">
          <div className="section-head">
            <h2 id="close-h">{cierre.title}</h2>
            <p>{cierre.line}</p>
          </div>
          <MainButton className="btn--xl" />
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4 stack-4">
              <a className="nav__logo footer__logo" href="#top" aria-label="Viva Digital, volver al inicio">
                <img className="logo" src="/logo-claro.svg" alt="Viva" width="240" height="95" />
              </a>
              <p className="footer__lede">{cierre.lede}</p>
            </div>
            {cols.map((c, i) => (
              <div className="span-2 footer__col" key={c.h} data-nav={nav[i].id}>
                <h3>{c.h}</h3>
                <ul>{c.links.map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul>
              </div>
            ))}
          </div>
          <div className="footer__legal">
            <span>© {year} Viva Digital, Rosario</span>
            <div className="socials"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
