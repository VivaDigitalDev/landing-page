// Arma el HTML estático de cada página después del build: la home en dist/index.html y
// cada servicio en dist/servicios/<slug>/index.html, todas sobre el mismo esqueleto.
import { readFile, writeFile, mkdir, rm } from 'node:fs/promises'

const { render, head, routes } = await import('../.ssr/entry-server.js')
const shell = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8')
if (!shell.includes('<!--app-->')) throw new Error('dist/index.html no tiene el marcador <!--app-->')

for (const url of routes) {
  const html = head(url, shell).replace('<!--app-->', render(url))
  const dir = new URL(`../dist${url}`, import.meta.url)
  await mkdir(dir, { recursive: true })
  await writeFile(new URL('index.html', dir), html)
  console.log(`prerender: ${url}`)
}
await rm(new URL('../.ssr', import.meta.url), { recursive: true, force: true })
