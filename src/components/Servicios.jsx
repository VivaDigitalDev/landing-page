import { Fragment } from 'react'
import { servicios } from '../content.js'
import { slugDe } from '../servicios.js'
import { Arrow, Rich } from './ui.jsx'

// peek-list: la lista a la izquierda; la imagen de la derecha cambia según la fila
// que se señala, se enfoca o se toca (lo hace system.js).
export default function Servicios() {
  return (
    <section className="section" id="servicios" style={{ "--hm": 2 }} aria-labelledby="servicios-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="servicios-h"><Rich text={servicios.title} /></h2>
          <p>{servicios.muted}</p>
        </div>
        <div className="grid grid--top fill" data-peek="">
          <ul className="rows span-5">
            {servicios.items.map((s) => (
              <li key={s.key} data-peek-to={s.key}>
                {/* toda la fila lleva a la página del servicio (el link se estira sobre la fila) */}
                <a className="rows__link" href={`/servicios/${slugDe(s.key)}/`}><span className="rows__name">{s.name}</span><Arrow /></a>
                <p>{s.line}</p>
                {/* en celular y tablet la imagen va chica dentro de la fila (no hay hover) */}
                <img className="rows__thumb" src={s.img ? s.img.src : s.sticker} alt="" aria-hidden="true" loading="lazy"
                  style={s.img && s.img.pos ? { objectPosition: s.img.pos } : undefined} />
              </li>
            ))}
          </ul>
          <div className="frame frame--photo frame--fill span-6 start-7">
            {servicios.items.map((s, i) =>
              s.diagram ? (
                <Fragment key={s.key}>
                  <div className="peek-diagram" data-peek-for={s.key} hidden={i > 0}>
                    <div className="dg" data-diagram={JSON.stringify(s.diagram)} data-dg-still=""></div>
                  </div>
                  {s.sticker && <img className="peek-sticker" src={s.sticker} alt="" aria-hidden="true" width="640" height="560" />}
                </Fragment>
              ) : (
                <Fragment key={s.key}>
                  <img className="frame__img" data-peek-for={s.key} src={s.img.src} alt={s.img.alt} hidden={i > 0}
                    style={s.img.pos ? { objectPosition: s.img.pos } : undefined} />
                  {s.sticker && <img className="peek-sticker" src={s.sticker} alt="" aria-hidden="true" width="640" height="560" />}
                </Fragment>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
