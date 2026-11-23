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
  sub: 'Agencia para pymes, desde Rosario.',
  title: 'Creamos tu *marca*.|Mostramos tus *productos*.|Hacemos que se *vendan*.',
  sticker: { src: '/img/sticker-forreal.webp', w: 640, h: 220 },
  photo: { src: '/img/portada.jpg', webp: '/img/portada.webp', alt: 'El equipo de Viva revisa un proyecto en una notebook, en el estudio con moodboards de la marca en la pared rosa' },
}

export const servicios = {
  title: 'Servicios para tu *marca*',
  muted: 'Contratá uno o sumalos todos.',
  items: [
    {
      key: 'branding',
      name: 'Estrategia y branding',
      line: 'Posicionamiento, logo y sistema visual para tu marca.',
      img: { src: '/img/servicio-branding.webp', alt: 'Una persona fotografía con el celular una pared con piezas de la marca Viva', pos: '55% 50%' },
    },
    {
      key: 'contenido',
      name: 'Contenido y redes',
      line: 'Planificamos, diseñamos y publicamos tus redes cada mes.',
      img: { src: '/img/servicio-redes-home.webp', alt: 'Un jugador hace su swing frente al simulador de The Golf Room', pos: '50% 40%' },
      sticker: '/img/sticker-video.webp',
    },
    {
      key: 'foto',
      name: 'Fotografía y video',
      line: 'Fotos, video y video con dron para redes, sitios y anuncios.',
      img: { src: '/img/servicio-foto.webp', alt: 'Cámara en un trípode mostrando en pantalla la foto de unas galletitas en un frasco', pos: '50% 50%' },
    },
    {
      key: 'web',
      name: 'Web y ecommerce',
      line: 'Landings y sitios pensados para vender, y su mantenimiento.',
      img: { src: '/img/servicio-web.webp', alt: 'Manos escribiendo código en una notebook con un sticker de Viva, con una taza bordó en el escritorio', pos: '40% 50%' },
      sticker: '/img/sticker-globo.webp',
    },
    {
      key: 'automatizacion',
      name: 'Automatización',
      line: 'Chatbots de WhatsApp que responden, toman datos y agendan.',
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
  before: 'Somos el equipo creativo y estratégico que tu pyme necesitaba: diseño, contenido, web y automatización juntos, para que tu marca se vea profesional, comunique claro y ',
  strong: 'venda más',
  after: '.',
  sticker: { src: '/img/sticker-simplify.webp', w: 640, h: 417 },
}

export const trabajos = {
  title: 'Trabajos *recientes*',
  lead: 'Marca, web, contenido y fotografía para pymes de distintos rubros.',
  items: [
    {
      title: 'Awaynt: web',
      caso: 'web-ecommerce#caso-awaynt',
      line: 'Diseño y desarrollo de la web de una app para Mac: la interfaz, una demo que se puede tocar, los precios y la descarga.',
      img: { src: '/img/casos/web-awaynt.jpg', alt: 'Portada de la web de Awaynt, con el título «Not away.» y el menú de la app', w: 1440, h: 900, posPhone: '8% 40%' },
    },
    {
      title: 'Fundación P3000: web',
      caso: 'web-ecommerce#caso-fundacion-p3000',
      line: 'El sitio de la fundación: sus propuestas, actividades, equipo, blog y contacto por WhatsApp.',
      img: { src: '/img/casos/web-p3000-sitio.jpg', alt: 'Portada del sitio de Fundación P3000: «Aprender para ser, crear y conectar»', w: 1440, h: 900, posPhone: '10% 40%' },
    },
    {
      title: 'Fundación P3000: identidad',
      caso: 'estrategia-branding#caso-fundacion-p3000',
      line: 'Logo, sistema visual y todas las piezas de su summit anual: escenario, credenciales y revista.',
      img: { src: '/img/p3000-3.jpg', alt: 'Escenario del summit de Fundación P3000 con la nueva identidad en pantalla', w: 1200, h: 675, posPhone: '50% 50%' },
    },
    {
      title: 'The Golf Room: marca',
      caso: 'estrategia-branding#caso-the-golf-room',
      line: 'Brandbook, merchandising, redes y vía pública para un espacio de golf con simuladores.',
      img: { src: '/img/golf-0.jpg', alt: 'Jugador frente al simulador de The Golf Room con el logo proyectado', w: 1200, h: 675, posPhone: '55% 50%' },
    },
    {
      title: 'Fotografía gastronómica',
      caso: 'fotografia-producto#caso-izakaya',
      line: 'Fotos de producto, ambiente y equipo para cafés, restaurantes y alojamientos.',
      img: { src: '/img/foto-izakaya.jpg', alt: 'Cocinero trabajando en la barra de un izakaya iluminado en rojo', w: 1600, h: 1066, posPhone: '58% 50%' },
    },
  ],

}

export const metodo = {
  title: 'Cómo *trabajamos*, en 4 pasos',
  lead: 'Un proceso por etapas, con una persona del equipo como contacto en cada una.',
  steps: [
    { n: '01', title: 'Escuchamos tu negocio', line: 'Entendemos qué vendés, a quién y qué querés lograr ahora.' },
    { n: '02', title: 'Ordenamos prioridades', line: 'Definimos alcance, equipo, plazos y por dónde empezar.' },
    { n: '03', title: 'Creamos las piezas', line: 'Diseñamos y producimos cada pieza como parte de un mismo sistema.' },
    { n: '04', title: 'Conectamos y medimos', line: 'Publicamos, medimos resultados y ajustamos mes a mes.' },
  ],
}

export const preguntas = {
  title: 'Preguntas *frecuentes*',
  lead: '¿Te queda alguna duda? Escribinos y la vemos juntos.',
  items: [
    { q: '¿Puedo contratar un solo servicio?', a: 'Sí. Podés empezar por lo que más necesitás y sumar otros servicios después.' },
    { q: '¿Trabajan por proyecto o por mes?', a: 'Las dos formas. Depende del alcance y de si el trabajo sigue en el tiempo.' },
    { q: '¿Cuánto cuesta un proyecto?', a: 'Los proyectos van de USD 500 a más de USD 5.000 según el alcance. Te pasamos el número exacto en la propuesta.' },
    { q: '¿Trabajan con marcas fuera de Rosario?', a: 'Sí. Trabajamos a distancia con marcas de todo el país y del exterior.' },
    { q: '¿Cómo sé qué servicios necesito?', a: 'No hace falta que llegues con la respuesta: la definimos juntos según tus objetivos.' },
  ],
}

export const propuesta = {
  title: 'Pedí una *propuesta*',
  lead: 'Elegí los servicios y tu rango de inversión. Al enviar se abre WhatsApp con el mensaje listo.',
  hours: 'Respondemos de lunes a viernes, de 9 a 18.',
  servicios: ['Estrategia y branding', 'Contenido y redes', 'Fotografía y video', 'Video con dron', 'Web y ecommerce', 'Automatización', 'Todavía no lo sé'],
  inversion: ['USD 500 a 1.000', 'USD 1.000 a 2.500', 'USD 2.500 a 5.000', 'Más de USD 5.000', 'A definir'],
}

export const cierre = {
  title: 'Contanos qué necesita tu *marca*',
  line: 'Respondemos por WhatsApp de lunes a viernes, de 9 a 18.',
  lede: 'Agencia de marketing en Rosario.',
  instagram: 'https://www.instagram.com/vivadigital.agencia/',
}
