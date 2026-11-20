import { servicios } from '../content.js'

// peek-list: la lista a la izquierda; la imagen de la derecha cambia según la fila
// que se señala, se enfoca o se toca (lo hace system.js).
export default function Servicios() {
  return (
    <section className="section" id="servicios" style={{ "--hm": 2 }} aria-labelledby="servicios-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="servicios-h">{servicios.title} <span className="muted">{servicios.muted}</span></h2>
        </div>
        <div className="grid grid--top fill" data-peek="">
          <ul className="rows span-5">
            {servicios.items.map((s) => (
              <li key={s.key} data-peek-to={s.key} tabIndex={0}>
                <span className="rows__name">{s.name}</span>
                <p>{s.line}</p>
              </li>
            ))}
          </ul>
          <div className="frame frame--photo frame--fill span-6 start-7">
            {servicios.items.map((s, i) =>
              s.diagram ? (
                <div key={s.key} className="peek-diagram" data-peek-for={s.key} hidden={i > 0}>
                  <div className="dg" data-diagram={JSON.stringify(s.diagram)} data-dg-still=""></div>
                </div>
              ) : (
                <img key={s.key} className="frame__img" data-peek-for={s.key} src={s.img.src} alt={s.img.alt} hidden={i > 0} />
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
