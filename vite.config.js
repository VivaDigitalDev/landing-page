import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La página se escribe en React (src/components) y se renderiza a HTML estático:
// - en desarrollo, este plugin renderiza <App /> en cada request y lo inyecta en index.html;
// - en el build, scripts/prerender.mjs arma la home y una página por servicio (/servicios/<slug>/).
// El kit de diseño (public/assets) corre sobre ese HTML ya armado.
const ssrInDev = () => ({
  name: 'viva-ssr-dev',
  apply: 'serve',
  configureServer(server) {
    return () => {
      server.middlewares.use(async (req, res, next) => {
        const url = req.url.split('?')[0]
        if (url !== '/' && url !== '/index.html' && !/^\/servicios\/[^/.]+\/?$/.test(url)) return next()
        try {
          const fs = await import('node:fs/promises')
          let html = await fs.readFile(new URL('./index.html', import.meta.url), 'utf8')
          html = await server.transformIndexHtml(req.url, html)
          const { render, head } = await server.ssrLoadModule('/src/entry-server.jsx')
          html = head(url, html).replace('<!--app-->', render(url))
          res.setHeader('Content-Type', 'text/html')
          res.end(html)
        } catch (e) {
          server.ssrFixStacktrace(e)
          next(e)
        }
      })
    }
  },
})

export default defineConfig({
  base: '/',
  build: { assetsDir: '_app' },
  plugins: [react(), ssrInDev()],
})
