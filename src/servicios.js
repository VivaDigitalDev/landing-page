// Las páginas de cada servicio (/servicios/<slug>/): textos, lo que incluye y los trabajos.
// Los slugs son los mismos de la web anterior, así los links viejos siguen funcionando.
// Cada caso lleva `media`: un video (mp4 con su póster) o una o más fotos.

const foto = (n, alt) => ({ src: `/img/casos/foto-${n}.jpg`, alt })
const post = (n, alt) => ({ src: `/img/redes/${n}.jpg`, alt })

export const paginas = {
  'estrategia-branding': {
    key: 'branding',
    title: 'Estrategia y *branding*',
    meta: 'Estrategia de marca, identidad visual, naming y manual de marca para pymes. Viva Digital, Rosario.',
    intro: 'Creamos identidades que se reconocen, se entienden y pueden crecer sin perder coherencia.',
    hero: { src: '/img/hero-branding.webp', pos: '65% 45%', alt: 'Una persona fotografía con el celular una pared con afiches de Viva: «Brands with a pulse», el logo y el asterisco' },
    incluye: [
      { t: 'Estrategia de marca', d: 'Qué te hace distinto, a quién le hablás y cómo querés que te recuerden.' },
      { t: 'Identidad visual', d: 'Logo, colores, tipografías y el sistema que los ordena.' },
      { t: 'Naming y voz', d: 'El nombre, el tono y las palabras que usa tu marca.' },
      { t: 'Manual de marca', d: 'Las reglas para que cualquiera aplique la marca bien.' },
    ],
    casos: [
      {
        title: 'Fundación P3000',
        rubro: 'Fundación educativa',
        text: [
          'Rediseñamos la identidad de Fundación P3000 para reflejar su visión de futuro: una educación más conectada, innovadora y humana.',
          'Creamos un sistema visual moderno y flexible, pensado para acompañar su crecimiento en todos sus puntos de contacto.',
        ],
        media: [{ video: '/img/casos/branding-p3000.mp4', poster: '/img/casos/branding-p3000.jpg', w: 1200, h: 676, alt: 'Presentación animada de la identidad de Fundación P3000' }],
      },
      {
        title: 'The Golf Room',
        rubro: 'Golf indoor',
        text: [
          'The Golf Room es un espacio de golf indoor que buscaba una identidad moderna, sin perder la esencia clásica del deporte.',
          'Desarrollamos una marca fresca, urbana y premium, que combina golf, comunidad y lifestyle en un sistema visual reconocible.',
        ],
        media: [{ video: '/img/casos/branding-golf.mp4', poster: '/img/casos/branding-golf.jpg', w: 1200, h: 676, alt: 'Presentación animada del brandbook de The Golf Room' }],
      },
    ],
  },

  'contenido-redes': {
    key: 'contenido',
    title: 'Contenido y *redes*',
    meta: 'Estrategia de contenidos, dirección creativa y diseño mensual de redes para pymes. Viva Digital, Rosario.',
    intro: 'Convertimos la estrategia de marca en contenidos consistentes, relevantes y reconocibles.',
    hero: { src: '/img/servicio-redes.webp', pos: '50% 35%', alt: 'Posteo de The Golf Room: «Golf after office», con un jugador sacando un palo de su bolsa' },
    incluye: [
      { t: 'Estrategia de contenidos', d: 'Qué contar, en qué redes y con qué frecuencia.' },
      { t: 'Dirección creativa', d: 'La idea y el estilo de cada pieza y cada campaña.' },
      { t: 'Diseño mensual', d: 'Posteos, historias y reels listos para publicar cada mes.' },
      { t: 'Campañas', d: 'Lanzamientos y fechas especiales con su propia idea.' },
    ],
    casos: [
      {
        title: 'The Golf Room',
        rubro: 'Golf indoor',
        link: 'https://www.instagram.com/thegolfroomclub/',
        text: ['Llevamos la marca de The Golf Room a sus redes: el espacio, la comunidad y el juego, con humor y una voz propia.'],
        media: [
          post('golf-1', 'Posteo de The Golf Room: una charla de WhatsApp que dice «No puedo, tengo una reunión» y la reunión es en el golf'),
          post('golf-2', 'Posteo de The Golf Room: «Golf after office», con palos de golf en una bolsa'),
          post('golf-3', 'Posteo de The Golf Room: «¿Primera vez en The Golf Room?», con un guante y una pelota en el tee'),
          post('golf-4', 'Posteo de The Golf Room: «Vos neceee…» frente al simulador'),
        ],
      },
      {
        title: 'Lola Pets',
        rubro: 'Imágenes con IA',
        link: 'https://www.instagram.com/losdisenosdelola/',
        text: ['Imágenes de producto creadas con inteligencia artificial para la tienda de Los Diseños de Lola: las camas y los accesorios en casas y con perros, sin producir una sesión de fotos.'],
        media: [
          post('lola-1', 'Posteo de Lola Pets: un cocker sobre una cama negra en un living con luz natural'),
          post('lola-2', 'Posteo de Lola Pets: un border collie estirándose sobre una colchoneta'),
          post('lola-3', 'Posteo de Lola Pets: una mujer con un perro chico y un bolso de transporte'),
          post('lola-4', 'Posteo de Lola Pets: un schnauzer junto a su comedero'),
        ],
      },
      {
        title: 'Goma Paz',
        rubro: 'Distribuidora',
        link: 'https://www.instagram.com/gomapaz/',
        text: ['Piezas para mostrar el surtido de Goma Paz: productos, preguntas frecuentes y novedades de temporada, con su naranja de marca.'],
        media: [
          post('goma-1', 'Posteo de Goma Paz: una persona sostiene cartuchos de silicona'),
          post('goma-2', 'Posteo de Goma Paz: «¿Tu negocio está preparado para el verano?» frente a estanterías con mangueras y mediasombras'),
          post('goma-3', 'Posteo de Goma Paz: preguntas frecuentes sobre mediasombras'),
          post('goma-4', 'Posteo de Goma Paz: «Errores frecuentes al preparar el jardín»'),
        ],
      },
    ],
  },

  'fotografia-producto': {
    key: 'foto',
    title: 'Fotografía y *video*',
    meta: 'Fotografía, video, reels y video con dron para locales, gastronomía, alojamientos y marcas. Viva Digital, Rosario.',
    intro: 'Producimos fotos, videos y videos con dron para mostrar la calidad, el carácter y los detalles de cada producto y cada lugar.',
    hero: { src: '/img/hero-foto.webp', pos: '50% 45%', alt: 'Cámara en un trípode mostrando en pantalla la foto de unas galletitas, en una cocina con luz natural' },
    incluye: [
      { t: 'Concepto y producción', d: 'La idea, la luz, la locación y el armado de cada escena.' },
      { t: 'Fotografía', d: 'Producto, ambiente y equipo, con el mismo criterio de color.' },
      { t: 'Video y reels', d: 'Videos de marca y reels verticales listos para publicar.' },
      { t: 'Video con dron', d: 'Imágenes aéreas de tu local, tu evento o tu ciudad.' },
    ],
    // un bloque por proyecto: fotos y videos juntos; The Golf Room al final
    casos: [
      {
        title: 'Café de especialidad',
        rubro: 'Gastronomía · foto y video',
        text: ['El local entre pinos, la barra y la preparación del café, en fotos y en video.'],
        media: [
          { video: '/img/casos/videos/cafe1.mp4', poster: '/img/casos/videos/cafe1.jpg', w: 1280, h: 720, alt: 'Video de la preparación de un café en la barra, del grano a la taza' },
          foto('cafe-1', 'Fachada de madera y vidrio de un café entre pinos'),
          foto('cafe-2', 'Cartel de Wüd Haus junto a una escalera de hierro'),
        ],
      },
      {
        title: 'Reels para cafés y locales',
        rubro: 'Video para redes',
        text: ['Reels verticales con la molienda, la preparación y la gente, listos para Instagram y TikTok. Activá el sonido en cada uno.'],
        media: [
          { video: '/img/casos/videos/cafe6.mp4', poster: '/img/casos/videos/cafe6.jpg', w: 720, h: 1280, alt: 'Reel de la preparación de un café, de la molienda a la taza' },
          { video: '/img/casos/videos/cafe2.mp4', poster: '/img/casos/videos/cafe2.jpg', w: 720, h: 1280, alt: 'Reel de un café de especialidad: manos abriendo una bolsa de café' },
          { video: '/img/casos/videos/cafe3.mp4', poster: '/img/casos/videos/cafe3.jpg', w: 720, h: 1280, alt: 'Reel en una cafetería: un cliente cuenta su experiencia' },
          { video: '/img/casos/videos/cafe5.mp4', poster: '/img/casos/videos/cafe5.jpg', w: 720, h: 1280, alt: 'Reel en el bosque: una persona toma un café en una mesa al aire libre' },
        ],
      },
      {
        title: 'Izakaya',
        rubro: 'Gastronomía · foto',
        text: ['La cocina, la barra y los platos de un bar japonés, con su luz roja de faroles.'],
        media: [
          foto('izakaya-1', 'Barra de un izakaya con faroles rojos encendidos'),
          foto('izakaya-2', 'Entrada de un izakaya de noche con gente en la barra'),
          foto('izakaya-3', 'Bowl de ramen con huevo sobre la barra'),
        ],
      },
      {
        title: 'Video con dron',
        rubro: 'Video aéreo',
        text: ['Filmamos desde el aire para mostrar tu local, tu evento o tu ciudad desde otro ángulo. Acá, Rosario y el río Paraná al atardecer.'],
        media: [
          { video: '/img/casos/videos/drone1.mp4', poster: '/img/casos/videos/drone1.jpg', w: 1280, h: 720, alt: 'Video con dron de barcos en el río Paraná al atardecer' },
          { video: '/img/casos/videos/drone2.mp4', poster: '/img/casos/videos/drone2.jpg', w: 1280, h: 720, alt: 'Video con dron del puente Rosario-Victoria y el río' },
        ],
      },
      {
        title: 'Cabañas en las sierras',
        rubro: 'Turismo y alojamiento · foto',
        text: ['Las cabañas, sus galerías y el paisaje, del atardecer a la noche.'],
        media: [
          foto('sierras-1', 'Sillón colgante de ratán en la galería, con vista a las sierras'),
          foto('sierras-2', 'Cabaña de madera sobre las rocas, con el paisaje de las sierras'),
          foto('sierras-3', 'Dormitorio de la cabaña con luz natural'),
        ],
      },
      {
        title: 'Casa de campo',
        rubro: 'Alojamiento · foto',
        text: ['Los ambientes, los detalles y la luz natural de una casa para alquilar.'],
        media: [
          foto('casa-1', 'Living y comedor con techo de madera blanca'),
          foto('casa-2', 'Mesa de madera con flores y copas junto a la ventana'),
          foto('casa-3', 'Sillón de ratán con almohadones junto al ventanal'),
        ],
      },
      {
        title: 'Viajes',
        rubro: 'Video de viaje',
        text: ['Videos de viaje y turismo, con tomas en movimiento y paisajes.'],
        media: [
          { video: '/img/casos/videos/viaje1.mp4', poster: '/img/casos/videos/viaje1.jpg', w: 1280, h: 720, alt: 'Video de viaje: un volcán nevado sobre un lago' },
          { video: '/img/casos/videos/viaje2.mp4', poster: '/img/casos/videos/viaje2.jpg', w: 1280, h: 720, alt: 'Video de viaje: personas frente a una cascada' },
        ],
      },
      {
        title: 'The Golf Room',
        rubro: 'Golf indoor · foto y video',
        text: ['Reels y fotos para las redes de The Golf Room: el simulador, el club y su comunidad.'],
        media: [
          { video: '/img/casos/videos/tgr3.mp4', poster: '/img/casos/videos/tgr3.jpg', w: 720, h: 1280, alt: 'Reel de The Golf Room: «Game on» y el cartel del club' },
          { video: '/img/casos/videos/tgr1.mp4', poster: '/img/casos/videos/tgr1.jpg', w: 720, h: 1280, alt: 'Reel de The Golf Room: un jugador sentado frente al club' },
          { video: '/img/casos/videos/tgr2.mp4', poster: '/img/casos/videos/tgr2.jpg', w: 720, h: 1280, alt: 'Reel de The Golf Room: un jugador entra al club' },
          foto('golf-1', 'Un jugador hace su swing frente al simulador de The Golf Room'),
        ],
      },
    ],
  },

  'web-ecommerce': {
    key: 'web',
    title: 'Web y *ecommerce*',
    meta: 'Landing pages, sitios institucionales y tiendas online para pymes. Viva Digital, Rosario.',
    intro: 'Diseñamos sitios claros y memorables que conectan la identidad de marca con los objetivos del negocio.',
    hero: { src: '/img/hero-web.webp', pos: '45% 50%', alt: 'Manos escribiendo código en una notebook con un sticker de Viva, con una taza bordó en el escritorio' },
    incluye: [
      { t: 'Diseño UX/UI', d: 'Cómo se recorre el sitio y cómo se ve cada pantalla.' },
      { t: 'Landing pages', d: 'Una página enfocada en vender un producto o una campaña.' },
      { t: 'Sitios institucionales', d: 'Quiénes son, qué hacen y cómo contactarlos.' },
      { t: 'Actualización y mantenimiento', d: 'Contenidos al día, mejoras y cambios en sitios que ya tenés.' },
    ],
    casos: [
      {
        title: 'Awaynt',
        rubro: 'App para Mac',
        text: [
          'Diseñamos y desarrollamos la web de Awaynt, una app para Mac: el producto se explica con su propia interfaz, una demo que se puede tocar, los precios y la descarga.',
        ],
        link: 'https://awaynt.app/',
        media: [{ src: '/img/casos/web-awaynt.jpg', w: 1440, h: 900, alt: 'Portada de la web de Awaynt, con el título «Not away.» y el menú de la app' }],
      },
      {
        title: 'Fundación P3000',
        rubro: 'Fundación educativa',
        text: [
          'Diseñamos y desarrollamos el sitio de Fundación P3000, con una estética institucional y moderna para presentar sus propuestas, actividades, equipo y blog de forma clara.',
        ],
        link: 'https://p3000.vivadigital.com.ar/',
        media: [{ src: '/img/casos/web-p3000-sitio.jpg', w: 1440, h: 900, alt: 'Portada del sitio de Fundación P3000: «Aprender para ser, crear y conectar»' }],
      },
      {
        title: 'La Egipciana',
        rubro: 'Alimentos',
        text: [
          'Actualizamos el contenido de su landing: revisamos, completamos y pusimos al día la información, manteniendo la estructura y el diseño original.',
        ],
        media: [{ video: '/img/casos/web-egipciana.mp4', poster: '/img/casos/web-egipciana.jpg', w: 960, h: 600, alt: 'Recorrido por la landing de La Egipciana' }],
      },
    ],
  },

  automatizacion: {
    key: 'automatizacion',
    title: 'Automatización para tu *negocio*',
    meta: 'Chatbots de WhatsApp, flujos automáticos e integraciones para pymes. Viva Digital, Rosario.',
    intro: 'Conectamos procesos y herramientas para que tu negocio responda, ordene y agende con menos trabajo manual.',
    hero: { diagram: true },
    thumb: { src: '/img/sticker-robot.webp' },
    incluye: [
      { t: 'Diagnóstico', d: 'Qué tareas se repiten y cuáles conviene automatizar primero.' },
      { t: 'Flujos automáticos', d: 'Avisos, recordatorios y seguimientos que se hacen solos.' },
      { t: 'Integraciones', d: 'Tus herramientas conectadas: planillas, mail, agenda y pagos.' },
      { t: 'Chatbots', d: 'Un WhatsApp que responde, toma datos y agenda las 24 horas.' },
    ],
    casos: [],
  },
}

export const slugs = Object.keys(paginas)
export const slugDe = (key) => slugs.find((s) => paginas[s].key === key)
