import { hero } from '../content.js'
import { MainButton, Rich } from './ui.jsx'

// Hero "split" sobre el rojo de la marca: el título a la izquierda y la foto del equipo
// a la derecha, entera (no queda nadie tapado por el texto). En celular, el texto primero.
export default function Hero() {
  return (
    <section className="hero hero--split hero--brand" data-enter="" aria-labelledby="hero-h">
      <div className="wrap">
        <div className="hero-text grid hero__grid">
          <div className="hero__text span-6">
            <h1 id="hero-h" className="hero__title">
              {hero.title.split('|').map((line) => <span key={line}><Rich text={line} /></span>)}
            </h1>
            <p className="hero__lead">{hero.lead}</p>
            <div className="btn-row">
              <MainButton />
              <a className="btn btn--secondary" href="#trabajos">Ver trabajos</a>
            </div>
          </div>
          <div className="hero__media span-6 start-7">
            <picture>
              <source srcSet={hero.photo.webp} type="image/webp" />
              <img src={hero.photo.src} alt={hero.photo.alt} fetchpriority="high" width="2000" height="1116"
                style={{ '--ly-pos': '62% 50%', '--ly-pos-phone': '60% 50%' }} />
            </picture>
            <img className="hero__sticker" src={hero.sticker.src} alt="" aria-hidden="true" width={hero.sticker.w} height={hero.sticker.h} />
          </div>
        </div>
      </div>
    </section>
  )
}
