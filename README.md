# Viva Digital: landing

Home de [vivadigital.com.ar](https://vivadigital.com.ar), hecha en React + Vite y publicada en GitHub Pages.

## Cómo trabajar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/ (HTML estático listo para publicar)
```

## Dónde está cada cosa

| Qué querés cambiar | Archivo |
|---|---|
| Textos, servicios, casos, preguntas, WhatsApp | `src/content.js` |
| Orden de las secciones | `src/App.jsx` |
| Cada sección | `src/components/*.jsx` |
| Estilos propios de la página | `src/page.css` |
| Colores y tipografía de marca | bloque `:root` en `index.html` |
| Imágenes | `public/img/` |
| Logo y favicon | `public/logo.svg`, `public/favicon.svg` |

Los componentes se renderizan a HTML en el build (`scripts/prerender.mjs`), así la página carga
sin esperar a JavaScript. El sistema de diseño (grilla, botones, animaciones) está en
`public/assets/` y no se edita a mano.

El formulario de "Pedí una propuesta" no guarda datos: arma el mensaje y abre WhatsApp
(`src/whatsapp.js`).

## Publicar

Cada push a `main` compila y publica en GitHub Pages (`.github/workflows/deploy.yml`).
En el repo, **Settings → Pages → Source** tiene que estar en **GitHub Actions**.
