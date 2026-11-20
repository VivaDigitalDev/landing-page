import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// La página se escribe en React (src/components) y se renderiza a HTML estático:
// - en desarrollo, este plugin renderiza <App /> en cada request y lo inyecta en index.html;
// - en el build, scripts/prerender.mjs hace lo mismo sobre dist/index.html.
// El kit de diseño (public/assets) corre sobre ese HTML ya armado.
const ssrInDev = () => ({
  name: 'viva-ssr-dev',
  apply: 'serve',
  configureServer(server) {
    return () => {
      server.middlewares.use(async (req, res, next) => {
        if (req.url !== '/' && req.url !== '/index.html') return next()
        try {
          const fs = await import('node:fs/promises')
          let html = await fs.readFile(new URL('./index.html', import.meta.url), 'utf8')
          html = await server.transformIndexHtml(req.url, html)
          const { render } = await server.ssrLoadModule('/src/entry-server.jsx')
          html = html.replace('<!--app-->', render())
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
