import { metodo } from '../content.js'
import { Rich } from './ui.jsx'

// steps: los cuatro pasos del método, con el número grande en lugar de foto
// (las piezas de clientes van solo en Trabajos).
export default function Metodo() {
  return (
    <section className="section ground-surface" id="metodo" style={{ "--hm": 2 }} aria-labelledby="metodo-h">
      <div className="wrap">
        <div className="section-head">
          <h2 id="metodo-h"><Rich text={metodo.title} /></h2>
          <p>{metodo.lead}</p>
        </div>
        <div className="grid">
          {metodo.steps.map((s) => (
            <article className="card card--row card--open span-3" key={s.n}>
              <span className="step-num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
