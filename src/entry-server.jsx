import { renderToStaticMarkup } from 'react-dom/server'
import App from './App.jsx'
import ServicePage from './components/ServicePage.jsx'
import { paginas, slugs } from './servicios.js'

// Todas las páginas del sitio: la home y una por servicio (mismos slugs que la web anterior).
export const routes = ['/', ...slugs.map((s) => `/servicios/${s}/`)]

const slugDeUrl = (url) => (url.match(/^\/servicios\/([^/]+)\/?/) || [])[1]

export function render(url = '/') {
  const slug = slugDeUrl(url)
  return slug && paginas[slug] ? renderToStaticMarkup(<ServicePage slug={slug} />) : renderToStaticMarkup(<App />)
}

// Cambia título, descripción, canonical y tarjetas para compartir en cada página de servicio.
export function head(url, html) {
  const slug = slugDeUrl(url)
  const p = slug && paginas[slug]
  if (!p) return html
  const nombre = p.title.replace(/\*/g, '')
  const titulo = `${nombre}: Viva Digital, agencia para pymes en Rosario`
  const set = (re, value) => { html = html.replace(re, value) }
  set(/<title>[^<]*<\/title>/, `<title>${titulo}</title>`)
  set(/(<meta name="description" content=")[^"]*/, `$1${p.meta}`)
  set(/(<meta property="og:title" content=")[^"]*/, `$1${nombre}, Viva Digital`)
  set(/(<meta property="og:description" content=")[^"]*/, `$1${p.meta}`)
  set(/(<link rel="canonical" href=")[^"]*/, `$1https://vivadigital.com.ar${url}`)
  return html
}
