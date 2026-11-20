import { metodo } from '../content.js'

// steps: los cuatro pasos del método, cada uno con una imagen de esa etapa.
export default function Metodo() {
  return (
    <section className="section ground-surface" id="metodo" style={{ "--hm": 2 }} aria-labelledby="metodo-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="metodo-h">{metodo.title}</h2>
          <p>{metodo.lead}</p>
        </div>
        <div className="grid">
          {metodo.steps.map((s) => (
            <article className="card card--row card--open span-3" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.line}</p>
              <div className="panel"><img className="frame__img" src={s.img.src} alt={s.img.alt} loading="lazy" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
