import { trabajos } from '../content.js'

// Momento "photo-chapters": la sección se queda en pantalla mientras cada caso
// tapa al anterior desde abajo (moments/photo-chapters).
export default function Trabajos() {
  return (
    <section className="section" id="trabajos" data-moment="photo-chapters" aria-labelledby="trabajos-h">
      <div className="wrap mo-ph">
        <div className="mo-ph__head">
          <h2 id="trabajos-h">{trabajos.title}</h2>
          <p>{trabajos.lead}</p>
        </div>
        <ol className="mo-ph__list">
          {trabajos.items.map((t) => (
            <li className="mo-ph__ch" key={t.title}>
              <figure className="mo-ph__pic"><img src={t.img.src} alt={t.img.alt} width={t.img.w} height={t.img.h} /></figure>
              <h3>{t.title}</h3>
              <p>{t.line}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
