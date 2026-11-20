import { hero } from '../content.js'
import { MainButton, Rich } from './ui.jsx'

// Hero "photo": la foto del equipo a sangre, el texto en una caja sobre la zona calma.
export default function Hero() {
  return (
    <section className="hero hero--photo" data-enter="" data-calm="left" aria-labelledby="hero-h">
      <img className="hero__bg" src={hero.photo.src} alt={hero.photo.alt} fetchpriority="high"
        style={{ '--ly-pos': '70% 40%', '--ly-pos-phone': '62% 50%' }} />
      <img className="hero__sticker" src={hero.sticker.src} alt="" aria-hidden="true" width={hero.sticker.w} height={hero.sticker.h} />
      <div className="wrap">
        <div className="hero-text">
          <div className="hero__text hero__text--brand">
            <h1 id="hero-h" className="hero__title">
              {hero.title.split('|').map((line) => <span key={line}><Rich text={line} /></span>)}
            </h1>
            <p className="hero__lead">{hero.lead}</p>
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
