import { preguntas, WHATSAPP } from '../content.js'
import { Rich } from './ui.jsx'

// FAQ: todas las respuestas abiertas, sin acordeón.
export default function Preguntas() {
  return (
    <section className="section" id="preguntas" style={{ "--hm": 2 }} aria-labelledby="preguntas-h">
      <div className="wrap">
        <div className="grid grid--top fill">
          <div className="span-5 stack-4">
            <h2 id="preguntas-h"><Rich text={preguntas.title} /></h2>
            <p className="muted">{preguntas.lead}</p>
            <p><a className="link" href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola Viva, tengo una consulta.')}`} target="_blank" rel="noopener">Escribinos por WhatsApp</a></p>
          </div>
          <div className="faq span-6 start-7">
            {preguntas.items.map((f) => (
              <div className="faq__item" key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
