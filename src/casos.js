// Videos de los casos: se reproducen sin sonido mientras están en pantalla. Cada uno tiene un botón
// de pausa y, si tiene audio, otro para activar el sonido (al activarlo en uno, los demás se silencian).
// Con "reducir movimiento" quedan quietos en su póster hasta que se aprieta play.
const videos = [...document.querySelectorAll('video[data-caso]')]
const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches
const ICON = {
  play: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.5v9l7-4.5z" fill="currentColor"/></svg>',
  pause: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.5h2v9H5zM9 3.5h2v9H9z" fill="currentColor"/></svg>',
  mute: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 6h2.5L8 3v10L4.5 10H2z" fill="currentColor"/><path d="M10.5 6l3 4m0-4l-3 4" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
  sound: '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 6h2.5L8 3v10L4.5 10H2z" fill="currentColor"/><path d="M10.5 5.5a3.5 3.5 0 0 1 0 5M12.3 3.8a6 6 0 0 1 0 8.4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>',
}

const boton = (clase) => {
  const b = document.createElement('button')
  b.type = 'button'
  b.className = clase
  return b
}

videos.forEach((v) => {
  v.muted = true
  const controles = document.createElement('div')
  controles.className = 'caso__controls'

  const play = boton('caso__play')
  const pintarPlay = () => {
    play.setAttribute('aria-label', v.paused ? 'Reproducir video' : 'Pausar video')
    play.innerHTML = v.paused ? ICON.play : ICON.pause
  }
  let elegido = quieto ? 'pausa' : null // lo que eligió la persona con el botón
  play.addEventListener('click', () => {
    if (v.paused) { elegido = 'play'; v.play() } else { elegido = 'pausa'; v.pause() }
  })
  v.addEventListener('play', pintarPlay)
  v.addEventListener('pause', pintarPlay)
  controles.append(play)

  if (v.hasAttribute('data-sound')) {
    const sonido = boton('caso__sound')
    const pintarSonido = () => {
      sonido.setAttribute('aria-label', v.muted ? 'Activar sonido' : 'Silenciar')
      sonido.setAttribute('aria-pressed', String(!v.muted))
      sonido.innerHTML = v.muted ? ICON.mute : ICON.sound
    }
    sonido.addEventListener('click', () => {
      const activar = v.muted
      if (activar) videos.forEach((o) => { if (o !== v) o.muted = true })
      v.muted = !activar
      if (activar && v.paused) { elegido = 'play'; v.play() }
    })
    v.addEventListener('volumechange', pintarSonido)
    controles.append(sonido)
    pintarSonido()
  }

  v.parentElement.append(controles)
  pintarPlay()
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting && elegido !== 'pausa') v.play().catch(() => {})
      else if (!e.isIntersecting) v.pause()
    }, { threshold: 0.6 }).observe(v)
  }
})

// Tira de videos: las flechas corren la tira un video para cada lado
document.querySelectorAll('[data-reel]').forEach((reel) => {
  const track = reel.querySelector('.reel__track')
  const prev = reel.querySelector('[data-reel-prev]')
  const next = reel.querySelector('[data-reel-next]')
  // cada flecha va al video siguiente o anterior al que está a la izquierda (o al que ya se pidió),
  // así dos clics rápidos avanzan dos videos
  const items = [...track.querySelectorAll('.reel__item')]
  let destino = null
  const actual = () => {
    if (destino !== null) return destino
    const x = track.scrollLeft + 4
    return Math.max(0, items.findIndex((it) => it.offsetLeft + it.offsetWidth > x))
  }
  const ir = (i) => {
    destino = Math.max(0, Math.min(items.length - 1, i))
    track.scrollTo({ left: items[destino].offsetLeft - items[0].offsetLeft, behavior: quieto ? 'auto' : 'smooth' })
  }
  track.addEventListener('scrollend', () => { destino = null })
  prev.addEventListener('click', () => ir(actual() - 1))
  next.addEventListener('click', () => ir(actual() + 1))
  const pintar = () => {
    prev.disabled = track.scrollLeft < 4
    next.disabled = track.scrollLeft + track.clientWidth > track.scrollWidth - 4
  }
  track.addEventListener('scroll', pintar, { passive: true })
  addEventListener('resize', pintar)
  pintar()
})
