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
    else window.location.href = url
    // system.js limpia la línea de estado en el mismo submit: escribimos después
    if (status) setTimeout(() => { status.textContent = 'Abrimos WhatsApp con tu mensaje. Si no se abrió, revisá que tu navegador permita ventanas nuevas.' }, 0)
  })
}
