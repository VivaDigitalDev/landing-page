import { hero } from '../content.js'
import { MainButton, Rich } from './ui.jsx'

// Hero "product" sobre el rojo de la marca: arriba el título (izquierda) y la frase con los
// botones (derecha); debajo, la foto del equipo a todo el ancho de la pantalla, sin nada encima
// salvo el sticker en una esquina.
export default function Hero() {
  return (
    <section className="hero hero--product hero--brand" data-enter="" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text hero__in">
          <div className="hero__head">
            <div>
              <h1 id="hero-h" className="hero__title">
                {hero.title.split('|').map((line) => <span key={line}><Rich text={line} /></span>)}
              </h1>
              <p className="hero__lead">{hero.lead}</p>
            </div>
            <div className="btn-row">
              <MainButton />
              <a className="btn btn--secondary" href="#trabajos">Ver trabajos</a>
            </div>
          </div>
          <div className="hero__stage">
            <picture>
              <source srcSet={hero.photo.webp} type="image/webp" />
              <img src={hero.photo.src} alt={hero.photo.alt} fetchpriority="high" width="2000" height="1116"
                style={{ '--ly-pos': '50% 88%', '--ly-pos-phone': '60% 60%' }} />
            </picture>
            <img className="hero__sticker" src={hero.sticker.src} alt="" aria-hidden="true" width={hero.sticker.w} height={hero.sticker.h} />
          </div>
        </div>
      </div>
    </section>
  )
}
