import { hero } from '../content.js'
import { MainButton, Rich } from './ui.jsx'

// Hero "photo": la foto del equipo a pantalla completa y, abajo a la izquierda, una caja roja
// chica con el título y los botones (tapa solo el piso y las piernas, nunca una cara).
// En celular y tablet la foto va arriba y el texto debajo, sobre el rojo.
export default function Hero() {
  return (
    <section className="hero hero--photo hero--brand" data-enter="" data-calm="left" aria-labelledby="hero-h">
      <picture className="hero__pic">
        <source srcSet={hero.photo.webp} type="image/webp" />
        <img className="hero__bg" src={hero.photo.src} alt={hero.photo.alt} fetchpriority="high" width="2000" height="1116"
          style={{ '--ly-pos': '58% 30%', '--ly-pos-phone': '60% 50%' }} />
      </picture>
      <img className="hero__sticker" src={hero.sticker.src} alt="" aria-hidden="true" width={hero.sticker.w} height={hero.sticker.h} />
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__text">
            <h1 id="hero-h" className="hero__title">
              {hero.title.split('|').map((line) => <span key={line}><Rich text={line} /></span>)}
            </h1>
            <div className="btn-row">
              <MainButton />
              <a className="btn btn--secondary" href="#trabajos">Ver trabajos</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
