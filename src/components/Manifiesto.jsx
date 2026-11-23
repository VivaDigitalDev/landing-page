import { manifiesto } from '../content.js'

// Momento "word-highlight": una frase grande sobre bordó que se enciende palabra por palabra
// al pasar por el centro de la pantalla; "venda más" se enciende en rosa (moments/word-highlight).
export default function Manifiesto() {
  return (
    <section className="section statement ground-inverse" id="manifiesto" data-moment="word-highlight" aria-label={manifiesto.label}>
      <div className="wrap">
        <p className="mo-wh__text">{manifiesto.before}<strong>{manifiesto.strong}</strong>{manifiesto.after}</p>
        <img className="manifiesto__mark" src={manifiesto.sticker.src} alt="" aria-hidden="true" width={manifiesto.sticker.w} height={manifiesto.sticker.h} loading="lazy" />
      </div>
    </section>
  )
}
