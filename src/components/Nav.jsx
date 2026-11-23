import { nav, servicios } from '../content.js'
import { slugDe } from '../servicios.js'
import { Logo, MainButton, toHome } from './ui.jsx'

// nav-mega: una barra fija; "Servicios" abre un panel con los cinco servicios y un caso.
export default function Nav({ home = true, local = [] }) {
  // en una página de servicio, Trabajos y el botón bajan a su propia sección; el resto vuelve a la home
  const ir = (id) => (home || local.includes(id) ? `#${id}` : `/#${id}`)
  const [first, ...rest] = nav
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Saltar al contenido</a>
        <Logo home={home} />
        <nav className="nav__links" aria-label="Principal">
          <div className="nav__item">
            <a className="nav__link" href={toHome(`#${first.id}`, home)} aria-current={home ? undefined : 'page'}>
              {first.label}{' '}
              <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                <div className="menu-col span-4">
                  <p className="t-label">Marca y contenido</p>
                  {servicios.items.slice(0, 3).map((s) => (
                    <a key={s.key} href={`/servicios/${slugDe(s.key)}/`}>{s.name}<span>{s.line}</span></a>
                  ))}
                </div>
                <div className="menu-col span-4">
                  <p className="t-label">Web y procesos</p>
                  {servicios.items.slice(3).map((s) => (
                    <a key={s.key} href={`/servicios/${slugDe(s.key)}/`}>{s.name}<span>{s.line}</span></a>
                  ))}
                </div>
                <a className="menu-card span-3 start-10" href={ir('propuesta')}>
                  <div className="panel"><img className="frame__img" src="/img/servicio-branding.webp" alt="Una persona fotografía con el celular una pared con piezas de la marca Viva" loading="lazy" style={{ objectPosition: '55% 50%' }} /></div>
                  <span className="t-card">Proyectos desde USD 500</span>
                  <span className="t-small muted">Contanos qué necesitás y te pasamos una propuesta</span>
                </a>
              </div>
            </div>
          </div>
          {rest.map((n) => (
            <div className="nav__item" key={n.id}><a className="nav__link" href={ir(n.id)}>{n.label}</a></div>
          ))}
        </nav>
        <div className="nav__actions">
          <MainButton arrow={false} home={home || local.includes('propuesta')} />
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menú">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </header>
  )
}
