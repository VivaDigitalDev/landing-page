import { preguntas } from '../content.js'

// FAQ: todas las respuestas abiertas, sin acordeón.
export default function Preguntas() {
  return (
    <section className="section" id="preguntas" style={{ "--hm": 2 }} aria-labelledby="preguntas-h">
      <div className="wrap">
        <div className="grid grid--top fill">
          <div className="span-5 stack-4">
            <h2 id="preguntas-h">{preguntas.title}</h2>
            <p className="muted">{preguntas.lead}</p>
            <p><a className="link" href="#propuesta">Escribinos por WhatsApp</a></p>
            <div className="frame frame--photo side-photo">
              <img className="frame__img" src={preguntas.img.src} alt={preguntas.img.alt} loading="lazy" />
            </div>
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
