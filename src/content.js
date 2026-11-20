// Todo el texto de la página vive acá: para cambiar un título, un servicio o un caso,
// se edita este archivo y no hace falta tocar los componentes.

export const WHATSAPP = '543412175627'
export const MAIN_ACTION = 'Pedí una propuesta'

export const nav = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'trabajos', label: 'Trabajos' },
  { id: 'metodo', label: 'Método' },
  { id: 'preguntas', label: 'Preguntas' },
]

export const hero = {
  // cada frase va en su propia línea (separadas por |); la palabra entre asteriscos va en serif itálica
  title: 'Creamos tu *marca*.|Mostramos tus *productos*.|Hacemos que se *vendan*.',
  sticker: { src: '/img/sticker-forreal.webp', w: 640, h: 220 },
  lead:
    'Agencia de marketing para pymes en Rosario: estrategia, contenido, fotos, web y automatización. Proyectos desde USD 500.',
  photo: { src: '/img/portada.jpg', webp: '/img/portada.webp', alt: 'El equipo de Viva revisa un proyecto en una notebook, en el estudio con moodboards de la marca en la pared rosa' },
}

export const servicios = {
  title: 'Servicios para tu *marca*.',
  muted: 'Contratá uno o sumalos todos.',
  items: [
    {
      key: 'branding',
      name: 'Estrategia y branding',
      line: 'Posicionamiento, logo y sistema visual para tu marca.',
      img: { src: '/img/p3000-2.jpg', alt: 'Logo de Fundación P3000 impreso sobre papel' },
    },
    {
      key: 'contenido',
      name: 'Contenido y redes',
      line: 'Planificamos, diseñamos y publicamos tus redes cada mes.',
      img: { src: '/img/rrss-galleta.jpg', alt: 'Pieza para redes de Viva: una galleta de la fortuna sobre fondo naranja cuadriculado' },
      sticker: '/img/sticker-video.webp',
    },
    {
      key: 'foto',
      name: 'Fotografía de producto',
      line: 'Fotos de catálogo y de campaña para tienda, redes y anuncios.',
      img: { src: '/img/golf-3.jpg', alt: 'Gorra de The Golf Room apoyada en el césped junto a un palo y una pelota' },
    },
    {
      key: 'web',
      name: 'Web y ecommerce',
      line: 'Landings, sitios y tiendas online pensados para vender.',
      img: { src: '/img/egip-recetas.jpg', alt: 'Sección de recetas del sitio web de La Egipciana' },
      sticker: '/img/sticker-globo.webp',
    },
    {
      key: 'automatizacion',
      name: 'Automatización',
      line: 'Chatbots de WhatsApp que responden, toman datos y cobran.',
      sticker: '/img/sticker-robot.webp',
      diagram: {
        layout: 'hub',
        alt: 'Un chatbot de WhatsApp conectado con Google Sheets, Gmail y Google Calendar.',
        center: { label: 'Chatbot', icon: 'ui:bot' },
        spokes: [
          { label: 'WhatsApp', icon: 'whatsapp' },
          { label: 'Google Sheets', icon: 'google-sheets' },
          { label: 'Gmail', icon: 'gmail' },
          { label: 'Google Calendar', icon: 'google-calendar' },
        ],
      },
    },
  ],
}

export const manifiesto = {
  label: 'Por qué Viva',
  // una sola palabra fuerte va en <strong>: se ilumina en rosa al pasar por el centro de la pantalla
  before: 'Somos el equipo creativo y estratégico que tu pyme necesitaba: diseño, contenido, web e inteligencia artificial juntos, para que tu marca se vea profesional, comunique claro y ',
  strong: 'venda más',
  after: '.',
  sticker: { src: '/img/sticker-simplify.webp', w: 640, h: 417 },
}

export const trabajos = {
  title: 'Trabajos recientes',
  lead: 'Marca, web y contenido para una fundación educativa y un golf indoor.',
  items: [
    {
      title: 'Fundación P3000: identidad',
      line: 'Logo, sistema visual y todas las piezas de su summit anual: escenario, credenciales y revista.',
      img: { src: '/img/p3000-3.jpg', alt: 'Escenario del summit de Fundación P3000 con la nueva identidad en pantalla', w: 1200, h: 675 },
    },
    {
      title: 'The Golf Room: marca',
      line: 'Brandbook, merchandising, redes y vía pública para un espacio de golf con simuladores.',
      img: { src: '/img/golf-0.jpg', alt: 'Jugador frente al simulador de The Golf Room con el logo proyectado', w: 1200, h: 675 },
    },
    {
      title: 'Fundación P3000: web',
      line: 'Landing institucional con sus propuestas, el equipo, el blog y contacto directo por WhatsApp.',
      img: { src: '/img/p3000-web.jpg', alt: 'Portada del sitio web de Fundación P3000', w: 1440, h: 900 },
    },
  ],
}

export const metodo = {
  title: 'Cómo trabajamos, en 4 pasos',
  lead: 'Un proceso por etapas, con una persona del equipo como contacto en cada una.',
  steps: [
    { n: '01', title: 'Escuchamos tu negocio', line: 'Entendemos qué vendés, a quién y qué querés lograr ahora.', img: { src: '/img/p3000-0.jpg', alt: 'Espacio de estudio de Fundación P3000 con el logo en la vidriera' } },
    { n: '02', title: 'Ordenamos prioridades', line: 'Definimos alcance, equipo, plazos y por dónde empezar.', img: { src: '/img/golf-1.jpg', alt: 'Páginas del brandbook de The Golf Room' } },
    { n: '03', title: 'Creamos las piezas', line: 'Diseñamos y producimos cada pieza como parte de un mismo sistema.', img: { src: '/img/p3000-4.jpg', alt: 'Credenciales de Fundación P3000 en cuatro colores' } },
    { n: '04', title: 'Conectamos y medimos', line: 'Publicamos, medimos resultados y ajustamos mes a mes.', img: { src: '/img/golf-5.jpg', alt: 'Cartel de vía pública de The Golf Room' } },
  ],
}

export const preguntas = {
  title: 'Preguntas frecuentes',
  lead: '¿Te queda alguna duda? Escribinos y la vemos juntos.',
  img: { src: '/img/golf-4.jpg', alt: 'Paleta de colores de The Golf Room en cinco tarjetas verticales' },
  items: [
    { q: '¿Puedo contratar un solo servicio?', a: 'Sí. Podés empezar por lo que más necesitás y sumar otros servicios después.' },
    { q: '¿Trabajan por proyecto o por mes?', a: 'Las dos formas. Depende del alcance y de si el trabajo sigue en el tiempo.' },
    { q: '¿Cuánto cuesta un proyecto?', a: 'Los proyectos van de USD 500 a más de USD 5.000 según el alcance. Te pasamos el número exacto en la propuesta.' },
    { q: '¿Trabajan con marcas fuera de Rosario?', a: 'Sí. Trabajamos a distancia con marcas de todo el país y del exterior.' },
    { q: '¿Cómo sé qué servicios necesito?', a: 'No hace falta que llegues con la respuesta: la definimos juntos según tus objetivos.' },
  ],
}

export const propuesta = {
  title: 'Pedí una propuesta',
  lead: 'Elegí los servicios y tu rango de inversión. Al enviar se abre WhatsApp con el mensaje listo.',
  hours: 'Respondemos de lunes a viernes, de 9 a 18.',
  img: { src: '/img/p3000-5.jpg', alt: 'Revista y bolsa del summit de Fundación P3000 sobre una mesa de madera' },
  servicios: ['Estrategia y branding', 'Contenido y redes', 'Fotografía de producto', 'Web y ecommerce', 'Automatización', 'Todavía no lo sé'],
  inversion: ['USD 500 a 1.000', 'USD 1.000 a 2.500', 'USD 2.500 a 5.000', 'Más de USD 5.000'],
}

export const cierre = {
  title: 'Contanos qué necesita tu *marca*',
  sticker: { src: '/img/sticker-making.webp', w: 640, h: 536 },
  line: 'Respondemos por WhatsApp de lunes a viernes, de 9 a 18.',
  lede: 'Agencia de marketing en Rosario.',
  instagram: 'https://www.instagram.com/vivadigital.agencia/',
}
