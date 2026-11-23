import { paginas, slugs } from '../servicios.js'
import { servicios as home } from '../content.js'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Propuesta from './Propuesta.jsx'
import { Arrow, MainButton, Rich } from './ui.jsx'

// Página de un servicio (/servicios/<slug>/): portada con su foto, qué incluye, los trabajos
// de ese servicio (uno por pantalla) y los otros servicios. Comparte nav, footer y botón con la home.
// el ancla de cada caso: "The Golf Room" → caso-the-golf-room (la usan "Ver el caso" y el footer)
export const anclaDe = (t) => 'caso-' + t.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export default function ServicePage({ slug }) {
  const p = paginas[slug]
  const item = home.items.find((s) => s.key === p.key)
  const otros = slugs.filter((s) => s !== slug)
  return (
    <>
      <Nav home={false} local={p.casos.length ? ['trabajos', 'propuesta'] : ['propuesta']} />
      <main id="top">
        <section className="hero hero--photo hero--brand hero--service" data-enter="" data-calm="left" aria-labelledby="hero-h">
          {p.hero.diagram ? (
            // Automatización: en lugar de foto, el diagrama del chatbot sobre bordó
            <div className="hero__pic hero__pic--diagram ground-inverse">
              <div className="dg" data-diagram={JSON.stringify(item.diagram)} aria-label={item.diagram.alt} role="img"></div>
            </div>
          ) : (
            <picture className="hero__pic">
              <img className="hero__bg" src={p.hero.src} alt={p.hero.alt} fetchpriority="high"
                style={{ '--ly-pos': p.hero.pos, '--ly-pos-phone': p.hero.pos }} />
            </picture>
          )}
          <div className="wrap">
            <div className="hero-text">
              <div className="hero__text">
                <h1 id="hero-h" className="hero__title"><Rich text={p.title} /></h1>
                <p className="hero__sub">{p.intro}</p>
                <div className="btn-row">
                  <MainButton />
                  {p.casos.length > 0 && <a className="btn btn--secondary" href="#trabajos">Ver trabajos</a>}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="incluye" aria-labelledby="incluye-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="incluye-h">Qué <em className="serif">incluye</em></h2>
              <p className="muted">Contratalo solo o junto con otros servicios.</p>
            </div>
            <ol className="grid incluye fill">
              {p.incluye.map((x, i) => (
                <li className="span-6 incluye__item" key={x.t}>
                  <span className="incluye__n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{x.t}</h3>
                  <p>{x.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {p.casos.map((c, i) => (
          <section className={`section caso${i % 2 ? '' : ' ground-surface'}`} id={i === 0 ? 'trabajos' : undefined}
            key={c.title} aria-labelledby={`caso-${i}`}>
            <div className="wrap">
              <span className="caso__anchor" id={anclaDe(c.title)} aria-hidden="true"></span>
              {c.videos ? (
                <>
                  <div className="section-head">
                    <h2 id={`caso-${i}`}>{c.title}</h2>
                    <p><span className="caso__rubro">{c.rubro}.</span> {c.text.join(' ')}</p>
                  </div>
                  {/* tira deslizable: se mueve con el dedo, la rueda o las flechas; nada pasa solo */}
                  <div className="reel fill" data-reel="">
                    <div className="reel__track" tabIndex={0} role="region" aria-label="Videos, deslizá para ver más">
                      {c.videos.map((m) => (
                        <div className="frame frame--photo caso__media reel__item" key={m.video} style={{ aspectRatio: `${m.w} / ${m.h}` }}>
                          <video className="frame__img" data-caso="" data-sound="" src={m.video} poster={m.poster} width={m.w} height={m.h}
                            muted loop playsInline preload="metadata" aria-label={m.alt} />
                        </div>
                      ))}
                    </div>
                    <div className="reel__nav">
                      <button type="button" className="reel__btn" data-reel-prev="" aria-label="Videos anteriores"><Arrow /></button>
                      <button type="button" className="reel__btn" data-reel-next="" aria-label="Más videos"><Arrow /></button>
                    </div>
                  </div>
                </>
              ) : c.media.length > 1 ? (
                <>
                  <div className="section-head">
                    <h2 id={`caso-${i}`}>{c.title}</h2>
                    <p><span className="caso__rubro">{c.rubro}.</span> {c.text.join(' ')}</p>
                    {c.link && <p><a className="link" href={c.link} target="_blank" rel="noopener">{c.link.includes('instagram.com') ? 'Ver en Instagram' : 'Ver el sitio'} <Arrow /></a></p>}
                  </div>
                  <div className={`grid caso__gallery caso__gallery--${c.media.length} fill`}>
                    {c.media.map((m) => (
                      <div className={`frame frame--photo span-${spanDe(m, c.media)}${m.video ? ' caso__media' : ''}`} key={m.src || m.video}>
                        {m.video ? (
                          <video className="frame__img" data-caso="" data-sound="" src={m.video} poster={m.poster} width={m.w} height={m.h}
                            muted loop playsInline preload="metadata" aria-label={m.alt} />
                        ) : (
                          <img className="frame__img" src={m.src} alt={m.alt} loading="lazy" />
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="grid grid--top caso__split">
                  <div className="span-4 stack-4">
                    <h2 id={`caso-${i}`}>{c.title}</h2>
                    <p className="caso__rubro">{c.rubro}</p>
                    {c.text.map((t) => <p key={t}>{t}</p>)}
                    {c.link && <p><a className="link" href={c.link} target="_blank" rel="noopener">Ver el sitio <Arrow /></a></p>}
                  </div>
                  <div className={c.media[0].vertical ? 'span-4 start-9' : 'span-8 start-5'}>
                    <Media m={c.media[0]} />
                  </div>
                </div>
              )}
            </div>
          </section>
        ))}

        {p.casos.length === 0 && item.diagram && (
          <section className="section ground-surface" id="ejemplo" aria-labelledby="ejemplo-h">
            <div className="wrap">
              <div className="grid grid--top">
                <div className="span-4 stack-4">
                  <h2 id="ejemplo-h">Un <em className="serif">chatbot</em> conectado a tus herramientas</h2>
                  <p>Tu cliente escribe por WhatsApp. El chatbot responde las preguntas frecuentes, anota sus datos en una planilla, le manda la confirmación por mail y agenda el turno en tu calendario.</p>
                  <p className="muted">Lo armamos con las herramientas que ya usás.</p>
                </div>
                {/* un ejemplo de conversación con el chatbot (ilustrativo, armado en HTML) */}
                <div className="chat span-6 start-6" role="img" aria-label="Ejemplo de conversación: un cliente pide turno por WhatsApp y el chatbot lo agenda y confirma por mail">
                  <div className="chat__bar"><span className="chat__avatar" aria-hidden="true">V</span><span><strong>Tu negocio</strong><small>responde al instante</small></span></div>
                  <div className="chat__body">
                    <p className="chat__msg chat__msg--in">Hola, ¿tienen turno el jueves?</p>
                    <p className="chat__msg chat__msg--out">¡Hola! El jueves tengo 10:00 o 16:30. ¿Cuál te queda mejor?</p>
                    <p className="chat__msg chat__msg--in">16:30</p>
                    <p className="chat__msg chat__msg--out">Listo, te agendé el jueves a las 16:30. Te mandé la confirmación por mail.</p>
                    <p className="chat__note">Agendado en Google Calendar · Datos guardados en Google Sheets</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <Propuesta elegido={item.name} />

        <section className="section" id="otros" aria-labelledby="otros-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="otros-h">Otros <em className="serif">servicios</em></h2>
              <p className="muted">Podés sumarlos en el mismo proyecto.</p>
            </div>
            <div className="grid otros fill">
              {otros.map((s) => {
                const o = home.items.find((x) => x.key === paginas[s].key)
                return (
                  <a className="otro span-3" href={`/servicios/${s}/`} key={s}>
                    <div className={`frame frame--photo otro__pic${paginas[s].thumb ? ' otro__pic--sticker' : ''}`}>
                      <img className="frame__img" src={(paginas[s].thumb || paginas[s].hero).src} alt="" loading="lazy" style={{ objectPosition: paginas[s].hero.pos }} />
                    </div>
                    <span className="otro__name">{o.name} <Arrow /></span>
                    <span className="otro__line">{o.line}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer home={false} />
      <nav className="actionbar" aria-label="Acción rápida">
        <MainButton arrow={false} />
      </nav>
    </>
  )
}

// En las galerías mixtas, un video horizontal ocupa media fila y el resto se reparte lo que queda
function spanDe(m, todos) {
  const anchos = todos.filter((x) => x.video && x.w > x.h).length
  if (m.video && m.w > m.h) return 6
  const resto = todos.length - anchos
  return Math.max(3, Math.floor((12 - anchos * 6) / resto))
}

// Un video (se reproduce solo, sin sonido, con botón de pausa en src/casos.js) o una foto.
function Media({ m }) {
  const style = m.w ? { aspectRatio: `${m.w} / ${m.h}` } : undefined
  return (
    <div className={`frame frame--photo caso__media${m.vertical ? ' caso__media--vertical' : ''}`} style={style}>
      {m.video ? (
        <video className="frame__img" data-caso="" src={m.video} poster={m.poster} width={m.w} height={m.h}
          muted loop playsInline preload="metadata" aria-label={m.alt} />
      ) : (
        <img className="frame__img" src={m.src} alt={m.alt} width={m.w} height={m.h} loading="lazy" />
      )}
    </div>
  )
}
