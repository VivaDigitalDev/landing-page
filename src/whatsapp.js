// Arma el mensaje del pedido de propuesta y abre WhatsApp con el número de Viva.
// Sin JavaScript, el formulario igual abre el chat (action = wa.me/<número>).
const form = document.querySelector('form[data-whatsapp]')

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(form)
    const servicios = data.getAll('servicio')
    const inversion = data.get('inversion')
    const contexto = String(data.get('contexto') || '').trim()
    const text = [
      'Hola Viva, quiero pedir una propuesta.',
      '',
      `Servicios: ${servicios.length ? servicios.join(', ') : 'todavía no lo sé'}`,
      `Inversión estimada: ${inversion || 'a definir'}`,
      contexto && `Sobre mi marca: ${contexto}`,
    ]
      .filter((line) => line !== false && line !== null && line !== undefined)
      .join('\n')
      .trim()
    const url = `${form.action}?text=${encodeURIComponent(text)}`
    const status = form.querySelector('[data-form-status]')
    // con 'noopener' window.open siempre devuelve null: abrimos y cortamos el opener a mano
    const win = window.open(url, '_blank')
    if (win) win.opener = null
    // system.js limpia la línea de estado en el mismo submit: escribimos después
    if (status) setTimeout(() => {
      if (win) { status.textContent = 'Abrimos WhatsApp con tu mensaje. Te respondemos de lunes a viernes, de 9 a 18.'; return }
      // el navegador bloqueó la ventana nueva: dejamos el link a mano en lugar de sacarte de la página
      status.textContent = 'Tu navegador no abrió WhatsApp. '
      const link = document.createElement('a')
      link.className = 'link'; link.href = url; link.target = '_blank'; link.rel = 'noopener'
      link.textContent = 'Abrilo desde acá'
      status.append(link)
    }, 0)
  })
}

// En el celular, la barra fija "Pedí una propuesta" se esconde mientras el formulario está en pantalla,
// así no quedan dos botones iguales a la vista.
const bar = document.querySelector('body > nav.actionbar')
const propuesta = document.getElementById('propuesta')
if (bar && propuesta && 'IntersectionObserver' in window) {
  new IntersectionObserver(([e]) => bar.classList.toggle('is-off', e.isIntersecting), { threshold: 0.15 }).observe(propuesta)
}

// "Todavía no lo sé" no se combina con otros servicios: al marcarlo se desmarcan los demás, y al revés
document.querySelectorAll('form[data-whatsapp]').forEach((f) => {
  const checks = [...f.querySelectorAll('input[name="servicio"]')]
  const nose = checks.find((c) => c.value === 'Todavía no lo sé')
  if (!nose) return
  checks.forEach((c) => c.addEventListener('change', () => {
    if (!c.checked) return
    if (c === nose) checks.forEach((o) => { if (o !== nose) o.checked = false })
    else nose.checked = false
  }))
})

// El menú de Servicios se cierra mientras se scrollea, aunque el mouse siga encima
const navBar = document.querySelector('.nav')
if (navBar) {
  let t
  addEventListener('scroll', () => {
    navBar.classList.add('is-scrolling')
    clearTimeout(t)
    t = setTimeout(() => navBar.classList.remove('is-scrolling'), 400)
  }, { passive: true })
}
