import { MAIN_ACTION } from '../content.js'

// En la home los links a secciones son #ancla; en las páginas de servicio vuelven a la home.
export const toHome = (hash, home = true) => (home ? hash : `/${hash}`)

// La flecha dibujada del botón principal (motion.css la anima en hover).
export function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  )
}

// La acción principal: el mismo texto en el nav, el hero, el cierre y la barra del celular.
export function MainButton({ className = '', arrow = true, home = true }) {
  return (
    <a className={`btn btn--primary ${className}`.trim()} href={toHome('#propuesta', home)}>
      {MAIN_ACTION}
      {arrow && <Arrow />}
    </a>
  )
}

// "Agencia de *marketing*": la palabra entre asteriscos va en serif itálica, como en las piezas de redes.
export function Rich({ text }) {
  return text.split(/(\*[^*]+\*)/).map((part, i) =>
    part.startsWith('*') && part.endsWith('*')
      ? <em className="serif" key={i}>{part.slice(1, -1)}</em>
      : part,
  )
}

export function Logo({ home = true }) {
  return (
    <a className="nav__logo" href={home ? '#top' : '/'} aria-label="Viva Digital, volver al inicio">
      <img className="logo" src="/logo.svg" alt="Viva" width="120" height="47" />
    </a>
  )
}
