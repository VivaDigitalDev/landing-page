import { propuesta, WHATSAPP, MAIN_ACTION } from '../content.js'

// booking-form: el pedido de propuesta. Al enviar, src/whatsapp.js arma el mensaje
// y abre WhatsApp con el número de Viva (el formulario no guarda datos).
export default function Propuesta() {
  return (
    <section className="section ground-surface" id="propuesta" style={{ "--hm": 2 }} aria-labelledby="propuesta-h">
      <div className="wrap">
        <div className="grid grid--top fill">
          <div className="span-5 stack-4">
            <h2 id="propuesta-h">{propuesta.title}</h2>
            <p>{propuesta.lead}</p>
            <p className="muted">{propuesta.hours}</p>
            <div className="frame frame--photo side-photo">
              <img className="frame__img" src={propuesta.img.src} alt={propuesta.img.alt} loading="lazy" />
            </div>
          </div>
          <form className="form form--card span-6 start-7" action={`https://wa.me/${WHATSAPP}`} method="get"
            target="_blank" data-whatsapp="" noValidate>
            <fieldset className="field">
              <legend>Servicios</legend>
              <div className="choices">
                {propuesta.servicios.map((s, i) => (
                  <label className="choice" key={s} htmlFor={`f-s${i}`}>
                    <input id={`f-s${i}`} type="checkbox" name="servicio" value={s} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className="field">
              <legend>Inversión estimada</legend>
              <div className="choices">
                {propuesta.inversion.map((s, i) => (
                  <label className="choice" key={s} htmlFor={`f-i${i}`}>
                    <input id={`f-i${i}`} type="radio" name="inversion" value={s} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="field">
              <label htmlFor="f-contexto">Tu marca y lo que necesitás</label>
              <textarea id="f-contexto" name="contexto" rows={3} autoComplete="off"></textarea>
            </div>
            <input type="hidden" name="text" value="" />
            <div className="btn-row"><button className="btn btn--primary" type="submit">{MAIN_ACTION}</button></div>
            <p className="form__status" role="status" data-form-status=""></p>
          </form>
        </div>
      </div>
    </section>
  )
}
