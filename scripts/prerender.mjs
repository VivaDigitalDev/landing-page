// Inyecta el HTML de <App /> en dist/index.html después del build.
import { readFile, writeFile, rm } from 'node:fs/promises'

const { render } = await import('../.ssr/entry-server.js')
const file = new URL('../dist/index.html', import.meta.url)
const html = await readFile(file, 'utf8')
if (!html.includes('<!--app-->')) throw new Error('dist/index.html no tiene el marcador <!--app-->')
await writeFile(file, html.replace('<!--app-->', render()))
await rm(new URL('../.ssr', import.meta.url), { recursive: true, force: true })
console.log('prerender: dist/index.html listo')
