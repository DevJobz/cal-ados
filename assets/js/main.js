/* ======================================================
   BEM-ME-QUER CALÇADOS — main.js v1.0
   ====================================================== */
'use strict';
const $ = (s,c)=>(c||document).querySelector(s);
const $$ = (s,c)=>[...(c||document).querySelectorAll(s)];
const wpp = (n,m)=>'https://wa.me/'+n+'?text='+encodeURIComponent(m);
const sts = n=>'★'.repeat(n)+'☆'.repeat(5-n);

const I = {
  wpp:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.558 4.121 1.533 5.849L.057 23.5l5.797-1.522A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.659-.501-5.188-1.376l-.371-.22-3.441.904.92-3.362-.241-.387A9.945 9.945 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>`,
  map:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clk:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  phn:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.16 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>`,
  ig:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  fb:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  arL:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>`,
  arR:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,18 15,12 9,6"/></svg>`,
  zoom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  play: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5,3 19,12 5,21"/></svg>`,
  cls:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  grid: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  building:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="2" width="18" height="20" rx="1"/><path d="M3 10h18M10 2v20M3 6h4M3 14h4M3 18h4M17 6h4M17 14h4M17 18h4"/></svg>`,
  trend:`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
};
const DIF_I = {grid:I.grid,star:I.star,building:I.building,trend:I.trend};

async function carregarDados(){
  const urls=['/dados/navbar.json','/dados/hero.json','/dados/historia.json',
              '/dados/diferenciais.json','/dados/produtos.json','/dados/marcas.json',
              '/dados/galeria.json','/dados/depoimentos.json','/dados/empresa.json'];
  try{
    const rs=await Promise.all(urls.map(u=>fetch(u)));
    const ds=await Promise.all(rs.map((r,i)=>{if(!r.ok)throw new Error(urls[i]);return r.json();}));
    return{navbar:ds[0],hero:ds[1],historia:ds[2],diferenciais:ds[3],
           produtos:ds[4],marcas:ds[5],galeria:ds[6],depoimentos:ds[7],empresa:ds[8]};
  }catch(e){console.error('[BMQ]',e);return null;}
}

/* ── NAVBAR ───────────────────────────────────────── */
function renderNavbar(d){
  const el=$('#navbar');if(!el||!d)return;
  el.innerHTML=`<div class="container"><div class="nav-inner">
    <a href="#hero" class="nav-logo" aria-label="${d.logo_alt}">
      <img src="${d.logo_url}" alt="${d.logo_alt}" onerror="this.style.display='none'">
    </a>
    <div class="nav-overlay" id="navOverlay"></div>
    <nav><ul class="nav-menu" id="navMenu">
      ${d.links.map(l=>`<li><a class="nav-link" href="${l.href}">${l.label}</a></li>`).join('')}
      <li><a class="nav-cta" href="${wpp(d.wpp_num,d.cta_wpp_msg)}" target="_blank" rel="noopener">${d.cta_label}</a></li>
    </ul></nav>
    <button class="nav-burger" id="navBurger" aria-label="Menu"><span></span><span></span><span></span></button>
  </div></div>`;
}
function initNavbar(){
  const nb=$('#navbar'),b=$('#navBurger'),m=$('#navMenu'),ov=$('#navOverlay');
  if(!nb)return;
  const sc=()=>nb.classList.toggle('scrolled',scrollY>60);
  window.addEventListener('scroll',sc,{passive:true});sc();
  if(b&&m&&ov){
    const tog=o=>{b.classList.toggle('aberto',o);m.classList.toggle('aberto',o);ov.classList.toggle('ativo',o);document.body.style.overflow=o?'hidden':''};
    b.addEventListener('click',()=>tog(!m.classList.contains('aberto')));
    ov.addEventListener('click',()=>tog(false));
    $$('.nav-link',m).forEach(l=>l.addEventListener('click',()=>tog(false)));
  }
}

/* ── HERO ─────────────────────────────────────────── */
function renderHero(d){
  const el=$('#hero');if(!el||!d)return;
  el.innerHTML=`
    <div class="hero-bg" style="background-image:url('${d.imagem_fundo}')"></div>
    <div class="hero-overlay"></div>
    <canvas id="shoe-canvas" aria-hidden="true"></canvas>
    <div class="hero-content">
      <span class="hero-overline">${d.badge}</span>
      <h1 class="hero-titulo">
        <em class="hero-t1">${d.titulo_linha1.split(' ')[0]}<span>-</span>${d.titulo_linha1.split(' ').slice(1).join(' ')||''}</em>
        <span class="hero-t2">${d.titulo_linha2}</span>
      </h1>
      <p class="hero-sub">${d.subtitulo}</p>
      <div class="hero-acoes">
        <a class="btn btn-laranja" href="${d.cta_principal_href}">${d.cta_principal_label}</a>
        <a class="btn btn-outline-branco" href="${wpp('5514998220138',d.cta_wpp_msg)}" target="_blank" rel="noopener">${I.wpp} ${d.cta_wpp_label}</a>
      </div>
    </div>
    <div class="hero-stats"><div class="hero-stat-row">
      <div class="hero-stat"><div class="hero-stat-num">${d.stat_1_num}</div><div class="hero-stat-label">${d.stat_1_label}</div></div>
      <div class="hero-stat"><div class="hero-stat-num">${d.stat_2_num}</div><div class="hero-stat-label">${d.stat_2_label}</div></div>
      <div class="hero-stat"><div class="hero-stat-num"><span>${d.stat_3_txt}</span></div><div class="hero-stat-label">${d.stat_3_label}</div></div>
    </div></div>`;
  requestAnimationFrame(()=>el.classList.add('loaded'));
}

/* ── PARTÍCULAS DE CALÇADO (Canvas) ──────────────── */
function initShoeParticles(){
  const cv=$('#shoe-canvas');if(!cv)return;
  const ctx=cv.getContext('2d');let pts=[],raf;
  const resize=()=>{cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;};
  // Desenha mini-solas/sapatos como elipses rápidas com acento laranja
  class Shoe{
    constructor(){this.reset(true);}
    reset(init=false){
      this.x=Math.random()*cv.width;
      this.y=init?Math.random()*cv.height:-40;
      this.sz=Math.random()*10+6;
      this.rot=Math.random()*Math.PI*2;
      this.vx=(Math.random()-0.5)*0.6;
      this.vy=Math.random()*1.2+0.5;
      this.vr=(Math.random()-0.5)*0.04;
      this.alpha=Math.random()*0.4+0.15;
      this.tipo=Math.random()>0.5?'laranja':'branco';
    }
    get morto(){return this.y>cv.height+50;}
    update(){this.x+=this.vx;this.y+=this.vy;this.rot+=this.vr;this.x=((this.x%cv.width)+cv.width)%cv.width;}
    draw(){
      ctx.save();
      ctx.globalAlpha=this.alpha;
      ctx.translate(this.x,this.y);
      ctx.rotate(this.rot);
      // Corpo do calçado
      ctx.fillStyle=this.tipo==='laranja'?'rgba(240,125,30,1)':'rgba(253,248,245,1)';
      ctx.beginPath();
      ctx.ellipse(0,0,this.sz*1.6,this.sz*0.7,0,0,Math.PI*2);
      ctx.fill();
      // Cabedal
      ctx.beginPath();
      ctx.ellipse(this.sz*0.4,-this.sz*0.4,this.sz*0.9,this.sz*0.55,0,0,Math.PI*2);
      ctx.fill();
      ctx.restore();
    }
  }
  function frame(){
    ctx.clearRect(0,0,cv.width,cv.height);
    if(pts.length<28&&Math.random()<0.28)pts.push(new Shoe());
    pts=pts.filter(p=>!p.morto);
    pts.forEach(p=>{p.update();p.draw();});
    raf=requestAnimationFrame(frame);
  }
  window.addEventListener('resize',resize,{passive:true});resize();
  const obs=new IntersectionObserver(([e])=>e.isIntersecting?frame():cancelAnimationFrame(raf));
  const hero=$('#hero');if(hero)obs.observe(hero);else frame();
}

/* ── HISTÓRIA ─────────────────────────────────────── */
function renderHistoria(d){
  const el=$('#historia');if(!el||!d)return;
  const pars=d.texto.split('\n\n').filter(Boolean).map(p=>`<p>${p.trim()}</p>`).join('');
  el.innerHTML=`<div class="container"><div class="grid-2">
    <div class="hist-txt-col anim-left">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
      <div class="hist-corpo">${pars}</div>
      <div class="hist-assinatura">
        <span class="hist-linha"></span>
        <span class="hist-sig">${d.assinatura}</span>
      </div>
    </div>
    <div class="hist-img-col anim-right">
      <div class="hist-moldura">
        <img class="hist-img" src="${d.imagem}" alt="${d.imagem_alt}" loading="lazy"
             onerror="this.src='https://picsum.photos/seed/shoeshop/700/520'">
        <div class="hist-badge">
          <span class="hist-badge-txt">B-M-Q</span>
          <span class="hist-badge-sub">+20 anos de tradição</span>
        </div>
      </div>
    </div>
  </div></div>`;
}

/* ── DIFERENCIAIS ────────────────────────────────── */
function renderDiferenciais(d){
  const el=$('#diferenciais');if(!el||!d)return;
  const cards=d.items.map((it,i)=>`
    <div class="dif-card anim-fade delay-${i+1}">
      <div class="dif-icon">${DIF_I[it.icone]||I.star}</div>
      <div class="dif-titulo">${it.titulo}</div>
      <p class="dif-texto">${it.texto}</p>
    </div>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header center anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="difs-grid">${cards}</div>
  </div>`;
}

/* ── PRODUTOS ────────────────────────────────────── */
function renderProdutos(d){
  const el=$('#produtos');if(!el||!d)return;
  const wn=d.wpp_num;
  const cards=d.cards.map(c=>`
    <div class="prod-card anim-fade">
      <div class="prod-card-img-wrap">
        <img class="prod-card-img" src="${c.imagem}" alt="${c.titulo}" loading="lazy"
             onerror="this.src='https://picsum.photos/seed/${c.id}/500/340'">
        <span class="prod-card-badge">Disponível</span>
      </div>
      <div class="prod-card-body">
        <div class="prod-card-titulo">${c.titulo}</div>
        <p class="prod-card-desc">${c.descricao}</p>
        <a class="btn-wpp" href="${wpp(wn,c.wpp_msg)}" target="_blank" rel="noopener">
          ${I.wpp} Saber Mais
        </a>
      </div>
    </div>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header center anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
      <p class="secao-sub">${d.subtitulo}</p>
    </div>
    <div class="prods-grid">${cards}</div>
  </div>`;
}

/* ── MARCAS TICKER ───────────────────────────────── */
function renderMarcas(d){
  const el=$('#marcas');if(!el||!d)return;
  const cats=d.categorias.map(c=>{
    // Duplica para ticker infinito
    const pills=c.marcas.map(m=>`<span class="marca-pill">${m}</span>`).join('');
    return `<div class="marca-cat">
      <div class="marca-cat-nome">${c.nome}</div>
      <div class="ticker-wrap">
        <div class="ticker">
          <div class="ticker-set">${pills}</div>
          <div class="ticker-set" aria-hidden="true">${pills}</div>
          <div class="ticker-set" aria-hidden="true">${pills}</div>
        </div>
      </div>
    </div>`;}).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header center anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="marcas-cats">${cats}</div>
  </div>`;
  // Velocidades diferentes por categoria para variedade
  $$('.ticker').forEach((t,i)=>{
    const dur=[30,20,40,25][i%4];
    t.style.animationDuration=dur+'s';
    if(i%2===1) t.style.animationDirection='reverse';
  });
}

/* ── GALERIA ─────────────────────────────────────── */
let _galItems=[];
function renderGaleria(d){
  const el=$('#galeria');if(!el||!d)return;
  _galItems=d.items;
  const items=d.items.map((it,i)=>{
    const isV=it.tipo==='video';
    
    // O truque do #t=0.1 pega o primeiro frame do vídeo local para servir de capa!
    const midia = isV 
      ? `<video class="gal-img" src="${it.url}#t=0.1" preload="metadata" muted playsinline></video>`
      : `<img class="gal-img" src="${it.url}" alt="${it.legenda}" loading="lazy" onerror="this.src='https://picsum.photos/seed/bmq${i}/600/450'">`;
      
    return `<div class="gal-item" data-index="${i}" role="button" tabindex="0" aria-label="${it.legenda}">
      ${isV?'<span class="gal-vid-badge">▶ Vídeo</span>':''}
      ${midia}
      <div class="gal-overlay"><div class="gal-pi">${isV?I.play:I.zoom}</div></div>
      <div class="gal-label">${it.legenda}</div>
    </div>`;}).join('');
    
  el.innerHTML=`<div class="container">
    <div class="secao-header center anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="gal-track-wrap"><div class="gal-track" id="galTrack">${items}</div></div>
    <div class="car-ctrl">
      <button class="car-btn" id="galPrev">${I.arL}</button>
      <div class="car-dots" id="galDots"></div>
      <button class="car-btn" id="galNext">${I.arR}</button>
    </div>
  </div>`;
}
function initGalCarousel(){
  const track=$('#galTrack'),prev=$('#galPrev'),next=$('#galNext'),dots=$('#galDots');
  if(!track)return;
  let idx=0;
  const getV=()=>innerWidth<=480?1:innerWidth<=768?2:3;
  function setup(){
    const items=$$('.gal-item',track),vis=getV(),pages=Math.ceil(items.length/vis);
    dots.innerHTML='';
    for(let i=0;i<pages;i++){
      const b=document.createElement('button');b.className='c-dot'+(i===0?' ativo':'');
      b.addEventListener('click',()=>{idx=i*vis;move();});dots.appendChild(b);
    }move();
  }
  function move(){
    const items=$$('.gal-item',track);if(!items.length)return;
    const vis=getV(),w=items[0].offsetWidth+14,max=Math.max(0,items.length-vis);
    idx=Math.min(Math.max(0,idx),max);
    track.style.transform=`translateX(-${idx*w}px)`;
    $$('.c-dot',dots).forEach((d,i)=>d.classList.toggle('ativo',Math.floor(idx/vis)===i));
  }
  if(prev)prev.addEventListener('click',()=>{idx--;move();});
  if(next)next.addEventListener('click',()=>{idx++;move();});
  let sx=0;
  track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;},{passive:true});
  track.addEventListener('touchend',e=>{const dx=sx-e.changedTouches[0].clientX;if(Math.abs(dx)>48){dx>0?idx++:idx--;move();}},{passive:true});
  window.addEventListener('resize',setup,{passive:true});setup();
}

/* ── LIGHTBOX ────────────────────────────────────── */
function injectLightbox(){
  const d=document.createElement('div');d.id='lightbox';
  d.innerHTML=`<div class="lb-inner">
    <button class="lb-close">${I.cls}</button>
    <img id="lb-img" alt="">
    <iframe id="lb-iframe" allowfullscreen title="Vídeo"></iframe>
    <video id="lb-video" controls playsinline></video>
    <div class="lb-caption"></div>
  </div>
  <button class="lb-nav lb-prev">${I.arL}</button>
  <button class="lb-nav lb-next">${I.arR}</button>`;
  document.body.appendChild(d);
}

function initLightbox(){
  const box=$('#lightbox'),img=$('#lb-img'),ifr=$('#lb-iframe'),vid=$('#lb-video'),
        cls=$('.lb-close',box),lp=$('.lb-prev',box),ln=$('.lb-next',box),cap=$('.lb-caption',box);
  if(!box)return;
  let cur=0;
  
  const abrir=i=>{
    cur=i;const it=_galItems[i];if(!it)return;
    
    if(it.tipo==='video'){
      img.style.display='none';
      ifr.classList.remove('ativo');ifr.src='';
      vid.src=it.url;vid.classList.add('ativo');vid.play(); // Dá o play sozinho ao abrir
    } else {
      vid.classList.remove('ativo');vid.src='';vid.pause();
      ifr.classList.remove('ativo');ifr.src='';
      img.style.display='';img.src=it.url;img.alt=it.legenda;
    }
    
    if(cap)cap.textContent=it.legenda||'';
    box.classList.add('ativo');document.body.style.overflow='hidden';
  };
  
  const fechar=()=>{
    box.classList.remove('ativo');
    ifr.src='';ifr.classList.remove('ativo');
    vid.src='';vid.classList.remove('ativo'); // Pausa o vídeo ao fechar
    document.body.style.overflow='';
  };
  
  const nav=d=>{cur=(cur+d+_galItems.length)%_galItems.length;abrir(cur);};
  document.addEventListener('click',e=>{const it=e.target.closest('.gal-item');if(it)abrir(+it.dataset.index);});
  document.addEventListener('keydown',e=>{if(!box.classList.contains('ativo'))return;if(e.key==='Escape')fechar();if(e.key==='ArrowRight')nav(1);if(e.key==='ArrowLeft')nav(-1);});
  if(cls)cls.addEventListener('click',fechar);
  if(lp)lp.addEventListener('click',()=>nav(-1));
  if(ln)ln.addEventListener('click',()=>nav(1));
  box.addEventListener('click',e=>{if(e.target===box)fechar();});
}

/* ── DEPOIMENTOS ─────────────────────────────────── */
function renderDepoimentos(d){
  const el=$('#depoimentos');if(!el||!d)return;
  const items=d.items.map(dep=>`
    <div class="dep-item">
      <div class="dep-card">
        <div class="dep-stars">${sts(dep.estrelas)}</div>
        <blockquote class="dep-text">"${dep.texto}"</blockquote>
        <div class="dep-author">
          <img class="dep-foto" src="${dep.foto}" alt="${dep.nome}" loading="lazy"
               onerror="this.src='https://i.pravatar.cc/100?u=${encodeURIComponent(dep.nome)}'">
          <div><div class="dep-nome">${dep.nome}</div><div class="dep-tipo">${dep.tipo}</div></div>
        </div>
      </div>
    </div>`).join('');
  el.innerHTML=`<div class="container">
    <div class="secao-header center anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="dep-carousel"><div class="dep-track" id="depTrack">${items}</div></div>
    <div class="car-ctrl dep-ctrl" style="margin-top:26px">
      <button class="car-btn" id="depPrev">${I.arL}</button>
      <div class="car-dots" id="depDots"></div>
      <button class="car-btn" id="depNext">${I.arR}</button>
    </div>
  </div>`;
}
function initDepCarousel(){
  const track=$('#depTrack'),prev=$('#depPrev'),next=$('#depNext'),dots=$('#depDots');
  if(!track)return;
  const items=$$('.dep-item',track),tot=items.length;let idx=0,timer;
  if(!tot)return;
  function buildDots(){dots.innerHTML='';for(let i=0;i<tot;i++){const b=document.createElement('button');b.className='c-dot'+(i===0?' ativo':'');b.addEventListener('click',()=>{go(i);rst();});dots.appendChild(b);}}
  const go=i=>{idx=(i+tot)%tot;track.style.transform=`translateX(-${idx*100}%)`;$$('.c-dot',dots).forEach((d,j)=>d.classList.toggle('ativo',j===idx));};
  const rst=()=>{clearInterval(timer);timer=setInterval(()=>go(idx+1),7000);};
  if(prev)prev.addEventListener('click',()=>{go(idx-1);rst();});
  if(next)next.addEventListener('click',()=>{go(idx+1);rst();});
  track.addEventListener('mouseenter',()=>clearInterval(timer));
  track.addEventListener('mouseleave',rst);
  let sx=0;
  track.addEventListener('touchstart',e=>{sx=e.touches[0].clientX;clearInterval(timer);},{passive:true});
  track.addEventListener('touchend',e=>{const dx=sx-e.changedTouches[0].clientX;if(Math.abs(dx)>48){dx>0?go(idx+1):go(idx-1);}rst();},{passive:true});
  buildDots();rst();
}

/* ── CONTATO ─────────────────────────────────────── */
function renderContato(d){
  const el=$('#contato');if(!el||!d)return;
  el.innerHTML=`<div class="container">
    <div class="secao-header anim-fade">
      <div class="badge">${d.badge}</div>
      <h2 class="secao-titulo">${d.titulo}</h2>
    </div>
    <div class="contato-grid">
      <div class="contato-detalhes anim-left">
        <div class="ctc-item">
          <div class="ctc-icon">${I.map}</div>
          <div><div class="ctc-label">Endereço</div><div class="ctc-val">${d.endereco}</div></div>
        </div>
        <div class="ctc-item">
          <div class="ctc-icon">${I.clk}</div>
          <div>
            <div class="ctc-label">Horário</div>
            <div class="ctc-val">${d.horario}<br><span style="color:var(--txt-c)">${d.horario_dom}</span></div>
          </div>
        </div>
        <div class="ctc-item">
          <div class="ctc-icon">${I.phn}</div>
          <div>
            <div class="ctc-label">Contato</div>
            <div class="ctc-val"><a href="${wpp(d.wpp_num,d.wpp_msg)}" target="_blank" rel="noopener">${d.telefone}</a></div>
          </div>
        </div>
        <div class="ctc-item">
          <div class="ctc-icon">${I.ig}</div>
          <div>
            <div class="ctc-label">Redes Sociais</div>
            <div class="redes">
              ${d.instagram?`<a class="rede-btn" href="${d.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${I.ig}</a>`:''}
              ${d.facebook?`<a class="rede-btn" href="${d.facebook}" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a>`:''}
              <a class="rede-btn" href="${wpp(d.wpp_num,d.wpp_msg)}" target="_blank" rel="noopener" aria-label="WhatsApp">${I.wpp}</a>
            </div>
          </div>
        </div>
        <a class="ctc-wpp" href="${wpp(d.wpp_num,d.wpp_msg)}" target="_blank" rel="noopener">
          ${I.wpp} Falar no WhatsApp
        </a>
      </div>
      <div class="mapa-wrap anim-right">
        <iframe title="Localização Bem-Me-Quer Calçados"
          src="${d.google_maps_embed}"
          allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </div>`;
}

/* ── FOOTER ──────────────────────────────────────── */
function renderFooter(nav,empresa){
  const el=$('footer');if(!el)return;
  const n=nav||{},e=empresa||{};
  el.innerHTML=`<div class="container">
    <div class="footer-grid">
      <div>
        <div class="footer-marca">Bem-<span>Me</span>-Quer</div>
        <div class="footer-tag">Calçados & Artigos Esportivos</div>
        <p class="footer-desc">Qualidade, variedade e atendimento que cuida de você. Uma loja tradicional em Piratininga SP para toda a família.</p>
      </div>
      <div>
        <div class="footer-col-tit">Navegação</div>
        <ul class="footer-links">
          ${(n.links||[]).map(l=>`<li><a class="footer-link" href="${l.href}">${l.label}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <div class="footer-col-tit">Contato</div>
        <ul class="footer-links">
          <li><a class="footer-link" href="${wpp(e.wpp_num||'5514998220138',e.wpp_msg||'Olá!')}" target="_blank" rel="noopener">${e.telefone||'(14) 99822-0138'}</a></li>
          <li><span class="footer-link" style="cursor:default">${e.horario||'Seg–Sab: 09h às 18h'}</span></li>
          ${e.instagram?`<li><a class="footer-link" href="${e.instagram}" target="_blank" rel="noopener">Instagram</a></li>`:''}
          ${e.facebook?`<li><a class="footer-link" href="${e.facebook}" target="_blank" rel="noopener">Facebook</a></li>`:''}
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© ${new Date().getFullYear()} <strong>Bem-Me-Quer Calçados e Artigos Esportivos</strong>. Todos os direitos reservados.</span>
      <span style="font-size:.7rem;color:rgba(253,248,245,.2)">Piratininga · SP</span>
    </div>
  </div>`;
}

/* ── SCROLL ANIMATIONS ───────────────────────────── */
function initScrollAnim(){
  const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visivel');obs.unobserve(e.target);}}),{threshold:.1});
  $$('.anim-fade,.anim-left,.anim-right').forEach(el=>obs.observe(el));
}

/* ── INIT ────────────────────────────────────────── */
async function init(){
  const d=await carregarDados();
  if(!d){console.warn('[BMQ] dados não carregados');return;}
  renderNavbar(d.navbar);
  renderHero(d.hero);
  renderHistoria(d.historia);
  renderDiferenciais(d.diferenciais);
  renderProdutos(d.produtos);
  renderMarcas(d.marcas);
  renderGaleria(d.galeria);
  renderDepoimentos(d.depoimentos);
  renderContato(d.empresa);
  renderFooter(d.navbar,d.empresa);
  injectLightbox();
  requestAnimationFrame(()=>{
    initNavbar();
    initShoeParticles();
    initGalCarousel();
    initLightbox();
    initDepCarousel();
    initScrollAnim();
  });
}
document.addEventListener('DOMContentLoaded',init);
