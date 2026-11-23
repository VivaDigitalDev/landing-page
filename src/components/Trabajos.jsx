import { trabajos } from '../content.js'
import { Arrow, Rich } from './ui.jsx'

// Momento "photo-chapters": la sección se queda en pantalla mientras cada caso
// tapa al anterior desde abajo (moments/photo-chapters).
export default function Trabajos() {
  return (
    <section className="section" id="trabajos" data-moment="photo-chapters" aria-labelledby="trabajos-h">
      <div className="wrap mo-ph">
        <div className="mo-ph__head">
          <h2 id="trabajos-h"><Rich text={trabajos.title} /></h2>
          <p>{trabajos.lead}</p>
        </div>
        <ol className="mo-ph__list">
          {trabajos.items.map((t) => (
            <li className="mo-ph__ch" key={t.title}>
              <figure className="mo-ph__pic"><img src={t.img.src} alt={t.img.alt} width={t.img.w} height={t.img.h} style={t.img.posPhone ? { '--pos-phone': t.img.posPhone } : undefined} /></figure>
              <h3>{t.title}</h3>
              <p>{t.line}</p>
              {t.caso && <p className="mo-ph__more"><a className="link" href={`/servicios/${t.caso.replace('#', '/#')}`}>Ver el caso <Arrow /></a></p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
