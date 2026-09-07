const services={
"estrategia-branding":{title:"Estrategia & Branding",kicker:"Marcas con dirección",intro:"Creamos identidades que se reconocen, se entienden y pueden crecer sin perder coherencia.",items:["Estrategia de marca","Identidad visual","Naming & voz","Manual de marca"]},
"contenido-redes":{title:"Contenido & Redes",kicker:"Ideas que construyen comunidad",intro:"Convertimos la estrategia de marca en contenidos consistentes, relevantes y reconocibles.",items:["Estrategia de contenidos","Dirección creativa","Diseño mensual","Campañas"]},
"fotografia-producto":{title:"Fotografía de producto",kicker:"Imágenes que venden",intro:"Producimos imágenes cuidadas para mostrar la calidad, el carácter y los detalles de cada producto.",items:["Concepto visual","Producción","Foto & video","Edición"]},
"web-ecommerce":{title:"Web & Ecommerce",kicker:"Experiencias que convierten",intro:"Diseñamos sitios claros y memorables que conectan la identidad de marca con objetivos de negocio.",items:["UX/UI","Landing pages","Sitios institucionales","Tiendas online"]},
"automatizacion":{title:"Automatización",kicker:"Más tiempo para lo importante",intro:"Conectamos procesos y herramientas para que el marketing funcione con menos fricción.",items:["Diagnóstico","Flujos automáticos","Integraciones","Chatbots"]}};
if(new URLSearchParams(location.search).get('opcion')==='2'){const alt=document.createElement('link');alt.rel='stylesheet';alt.href='../option-2.css?v=1';document.head.appendChild(alt);document.body.classList.add('option-two')}
const key=document.body.dataset.service,item=services[key];if(item){document.title=`${item.title} | VIVA`;document.querySelector('[data-kicker]').textContent=item.kicker;document.querySelector('[data-title]').textContent=item.title;document.querySelector('[data-intro]').textContent=item.intro;document.querySelector('[data-list]').innerHTML=item.items.map((x,i)=>`<div><span>0${i+1}</span><h3>${x}</h3></div>`).join('')}
const heroMark=document.querySelector('.mark');if(heroMark){heroMark.innerHTML='<img src="../../viva-mark.svg" alt="Isotipo de VIVA">';heroMark.style.width='min(180px, 18vw)';heroMark.style.fontSize='0';const logo=heroMark.querySelector('img');logo.style.display='block';logo.style.width='100%';logo.style.height='auto'}
document.querySelector('.case')?.remove();
if(['contenido-redes','fotografia-producto','automatizacion'].includes(key)){
  if(!document.querySelector('script[data-dotlottie]')){
    const playerScript=document.createElement('script');playerScript.type='module';playerScript.src='https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs';playerScript.dataset.dotlottie='true';document.head.appendChild(playerScript);
  }
  const work=document.querySelector('.work');
  if(work){
    work.innerHTML=`<div style="min-height:460px;border:1px solid #131313;border-radius:28px;background:var(--accent);padding:clamp(32px,6vw,78px);display:flex;flex-direction:column;justify-content:space-between;position:relative;overflow:hidden"><p class="eyebrow">Trabajos seleccionados</p><div style="position:relative;z-index:1;padding-right:min(22vw,210px)"><h2 style="max-width:980px;font-size:clamp(54px,8vw,112px);margin-bottom:24px">Estamos preparando algo para mostrarte.</h2><p style="max-width:620px;font-size:17px;line-height:1.6;margin:0">Estamos trabajando en esta selección para que muy pronto puedas conocer nuestros proyectos de ${item.title}.</p></div><dotlottie-player src="../../assets/animations/hourglass.lottie" autoplay loop style="position:absolute;width:clamp(76px,11vw,132px);height:clamp(76px,11vw,132px);right:5%;bottom:10%" aria-label="Reloj de arena animado"></dotlottie-player></div>`;
  }
}
if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  document.documentElement.classList.add('motion-ready');
  const targets=[
    ['.hero > div:first-child','from-left'],
    ['.hero .mark','from-right'],
    ['.what > .eyebrow',''],
    ['.service-list > div',''],
    ['.work-head',''],
    ['.grid > .project',''],
    ['.work > div',''],
    ['.cta > *','']
  ];
  targets.forEach(([selector,direction])=>document.querySelectorAll(selector).forEach(el=>{
    el.classList.add('motion-reveal');
    if(direction) el.classList.add(direction);
  }));
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px'});
  document.querySelectorAll('.motion-reveal').forEach(el=>observer.observe(el));
}
