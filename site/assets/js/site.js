(() => {
 'use strict';
 const cfg = window.RA_CONFIG || {};
 const q = s => document.querySelector(s);
 const qa = s => [...document.querySelectorAll(s)];
 const topics = {
  geral: 'Olá! Gostaria de informações sobre o atendimento da Rodrigo Alves Advocacia.',
  saude: 'Olá! Gostaria de informações sobre Direito da Saúde.',
  plano: 'Olá! Gostaria de informações sobre uma negativa do meu plano de saúde.',
  medicamentos: 'Olá! Gostaria de informações sobre a cobertura de um medicamento.',
  tratamento: 'Olá! Gostaria de informações sobre cobertura de tratamento ou cirurgia.',
  previdencia: 'Olá! Gostaria de informações sobre Direito Previdenciário.',
  acidente: 'Olá! Gostaria de informações sobre auxílio-acidente.',
  pericia: 'Olá! Gostaria de informações sobre perícia do INSS.',
  bpc: 'Olá! Gostaria de informações sobre BPC/LOAS.'
 };
 const menuBtn = q('[data-menu-toggle]');
 const menu = q('[data-main-nav]');
 if (menuBtn && menu) {
   menuBtn.addEventListener('click', () => {
     const active = menu.classList.toggle('open');
     menuBtn.setAttribute('aria-expanded', String(active));
     menuBtn.textContent = active ? 'Fechar ×' : 'Menu ☰';
   });
   function closeMenu(returnFocus=false){
     menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menuBtn.textContent='Menu ☰';
     if(returnFocus)menuBtn.focus();
   }
   menu.addEventListener('click', evt => {if(evt.target.closest('a'))closeMenu();});
   document.addEventListener('keydown', evt => {
     if(evt.key==='Escape'&&menu.classList.contains('open')){evt.preventDefault();closeMenu(true);}
   });
   document.addEventListener('pointerdown', evt => {
     if(menu.classList.contains('open')&&!menu.contains(evt.target)&&!menuBtn.contains(evt.target))closeMenu();
   });
   window.addEventListener('resize',()=>{if(window.innerWidth>860&&menu.classList.contains('open'))closeMenu();});
 }
 function whatsappUrl(topic='geral', text) {
   const msg = text || topics[topic] || topics.geral;
   return `https://wa.me/${String(cfg.whatsappDigits||'').replace(/\D/g,'')}?text=${encodeURIComponent(msg)}`;
 }
 qa('[data-wa-topic]').forEach(a => {
   if(!/^55\d{11}$/.test(String(cfg.whatsappDigits||''))){
     // Do not open a guessed/invalid number: give the visitor the contact form instead.
     a.href = a.closest('body')?.querySelector('main #contato') ? '#contato' : (window.location.pathname.includes('/areas/') || window.location.pathname.includes('/blog/') ? '../contato.html' : 'contato.html');
     a.removeAttribute('target');a.removeAttribute('rel');
     a.title='Número de WhatsApp pendente de confirmação. Consulte o formulário de contato.';
   }else{ a.href = whatsappUrl(a.dataset.waTopic||'geral');a.target='_blank';a.rel='noopener noreferrer'; if(a.classList.contains('header-btn'))a.textContent='Falar no WhatsApp ↗';if(a.classList.contains('whats-float')){a.classList.add('wa-enabled');let lab=a.querySelector('.long');if(lab)lab.textContent='Falar no WhatsApp';a.setAttribute('aria-label','Abrir WhatsApp do escritório');} }
   a.addEventListener('click', () => track('whatsapp_click',{area:a.dataset.waTopic||'geral'}));
 });
 qa('[data-contact-phone]').forEach(el => {el.textContent = cfg.whatsappDisplay || '[PREENCHER TELEFONE]';});
 qa('[data-email]').forEach(el => {
   if(cfg.contactEmail){el.textContent=cfg.contactEmail;el.href='mailto:'+cfg.contactEmail;}
   else {el.textContent='[PREENCHER E-MAIL OFICIAL]';el.removeAttribute('href');}
 });
 // Metadados de URL: omitidos se ainda não houver domínio autorizado.
 if(cfg.siteUrl && /^https:\/\//.test(cfg.siteUrl)){
   const full=cfg.siteUrl+window.location.pathname;
   if(!document.querySelector('link[rel="canonical"]')){
     const canonical=document.createElement('link');canonical.rel='canonical';canonical.href=full;document.head.append(canonical);
   }
   if(!document.querySelector('meta[property="og:url"]')){
     const og=document.createElement('meta');og.setAttribute('property','og:url');og.content=full;document.head.append(og);
   }
 }
 // Consentimento: nenhum script analítico ou de marketing é carregado por padrão.
 const key='ra_cookie_consent_v1';let consent={analytics:false,marketing:false};
 let analyticsLoaded=false,marketingLoaded=false;
 try { const st=JSON.parse(localStorage.getItem(key)||'null'); if(st && typeof st.analytics==='boolean' && typeof st.marketing==='boolean')consent=st;}catch{}
 const banner=q('[data-cookie-banner]');
 const preferences=q('[data-cookie-preferences]');
 function showBanner(){if(banner)banner.hidden=false;}
 function loadScript(src,attrs={}){const s=document.createElement('script');s.src=src;s.async=true;Object.entries(attrs).forEach(([k,v])=>s.setAttribute(k,v));document.head.appendChild(s);}
 function enableAnalytics(){
   if(!consent.analytics || analyticsLoaded)return;
   if(!cfg.googleTagManagerId && !cfg.analyticsMeasurementId)return;
   analyticsLoaded=true;
   if(cfg.googleTagManagerId && /^GTM-[A-Z0-9]+$/.test(cfg.googleTagManagerId)){
     window.dataLayer=window.dataLayer||[];window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js'});
     loadScript('https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(cfg.googleTagManagerId));
   } else if(cfg.analyticsMeasurementId && /^G-[A-Z0-9]+$/.test(cfg.analyticsMeasurementId)){
     window.dataLayer=window.dataLayer||[];window.gtag=function(){window.dataLayer.push(arguments)};
     loadScript('https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(cfg.analyticsMeasurementId));
     window.gtag('js',new Date());window.gtag('config',cfg.analyticsMeasurementId,{send_page_view:true});
   }
 }
 function enableMarketing(){
   if(!consent.marketing || marketingLoaded || !/^\d+$/.test(cfg.metaPixelId||''))return;
   marketingLoaded=true;
   !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/pt_BR/fbevents.js');
   window.fbq('init',cfg.metaPixelId);window.fbq('track','PageView');
 }
 function saveConsent(c){
   // Scripts já carregados não podem ser revogados simplesmente removendo os elementos.
   // Reinicie a página após uma revogação, para que não sejam reinjetados.
   const mustReload=(analyticsLoaded&&!c.analytics)||(marketingLoaded&&!c.marketing);
   consent=c;
   try{localStorage.setItem(key,JSON.stringify(c))}catch{}
   if(banner)banner.hidden=true;
   if(preferences)preferences.hidden=true;
   if(mustReload){window.location.reload();return;}
   enableAnalytics();enableMarketing();
 }
 const isSet=()=>{try{return localStorage.getItem(key)!==null}catch{return false}};
 if(!isSet())showBanner();else{enableAnalytics();enableMarketing()}
 qa('[data-cookie-necessary]').forEach(el=>el.addEventListener('click',()=>saveConsent({analytics:false,marketing:false})));
 qa('[data-cookie-accept]').forEach(el=>el.addEventListener('click',()=>saveConsent({analytics:true,marketing:true})));
 qa('[data-cookie-custom]').forEach(el=>el.addEventListener('click',()=>{if(preferences)preferences.hidden=false;}));
 const saveCustom=q('[data-cookie-save]');
 if(saveCustom)saveCustom.addEventListener('click',()=>saveConsent({analytics:!!q('#cookie-analytics')?.checked,marketing:!!q('#cookie-marketing')?.checked}));
 qa('[data-cookie-open]').forEach(el=>el.addEventListener('click',()=>{
   const a=q('#cookie-analytics'),m=q('#cookie-marketing');
   if(a)a.checked=consent.analytics;if(m)m.checked=consent.marketing;
   showBanner();if(preferences)preferences.hidden=false;
 }));
 function track(event,props={}){
   if(consent.analytics){if(Array.isArray(window.dataLayer))window.dataLayer.push({event,...props});if(window.gtag)window.gtag('event',event,props);}
   if(consent.marketing && window.fbq && event==='form_submit')window.fbq('trackCustom','FormSubmit');
 }
 let contactSeen=false;
 if('IntersectionObserver' in window){const c=q('#contato');if(c){const io=new IntersectionObserver(es=>{if(!contactSeen&&es.some(e=>e.isIntersecting)){contactSeen=true;track('contact_scroll');io.disconnect();}},{threshold:.15});io.observe(c)}}
 else{window.addEventListener('scroll',()=>{if(!contactSeen&&q('#contato')?.getBoundingClientRect().top<window.innerHeight){contactSeen=true;track('contact_scroll')}},{passive:true})}
 const progress=q('[data-progress]');if(progress){let busy=false;window.addEventListener('scroll',()=>{if(busy)return;busy=true;requestAnimationFrame(()=>{const d=document.documentElement;progress.style.width=`${(d.scrollTop/(d.scrollHeight-d.clientHeight||1))*100}%`;busy=false})},{passive:true})}
 if(window.matchMedia('(prefers-reduced-motion: no-preference)').matches && 'IntersectionObserver' in window){const els=qa('.reveal');const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.08});els.forEach(el=>{el.classList.add('animate');io.observe(el)})}
 qa('form[data-ra-contact]').forEach(form=>{
   const status=form.querySelector('[data-form-status]');
   const submit=form.querySelector('[type="submit"]');
   const cont=form.querySelector('[data-wa-continue]');
   // A presença do HTML não comprova que o provedor aceitou o formulário.
   // A configuração só deve ser ativada após teste REAL no Netlify Forms.
   if(cfg.useNetlifyForms && submit){submit.disabled=false;}
   if(!cfg.useNetlifyForms){
     if(submit){submit.disabled=true;submit.textContent='Formulário em homologação';}
     if(status){status.textContent='O formulário está em validação técnica. Utilize o WhatsApp oficial ou o e-mail para atendimento.';status.className='submit-status form-error';status.setAttribute('role','status');}
   }
   const setStatus=(msg,ok)=>{if(status){status.textContent=msg;status.className='submit-status '+(ok?'form-ok':'form-error');status.setAttribute('role','status')}};
   form.addEventListener('submit',async e=>{
     e.preventDefault();
     if(!form.reportValidity())return;
     if(!cfg.useNetlifyForms){setStatus('O formulário está em homologação. Utilize o WhatsApp oficial ou o e-mail.',false);return}
     if(location.protocol==='file:' || ['localhost','127.0.0.1'].includes(location.hostname)){
       setStatus('Prévia local: o envio real ficará ativo após publicar no Netlify com Forms habilitado.',false);return;
     }
     submit.disabled=true;submit.textContent='Enviando…';setStatus('Aguarde a confirmação do formulário.',true);
     try{
       const data=new FormData(form);
       const res=await fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams(data).toString()});
       if(!res.ok)throw Error('Falha HTTP '+res.status);
       const area=data.get('area')||'Geral';const nome=(data.get('nome')||'').toString().trim().split(' ')[0];
       // Não incluir resumo do caso nem dados médicos no link do WhatsApp.
       const text=`Olá! Meu nome é ${nome}. Enviei um formulário pelo site sobre ${area}. Gostaria de confirmar o recebimento.`;
       if(cont && /^55\d{11}$/.test(String(cfg.whatsappDigits||''))){cont.href=whatsappUrl('geral',text);cont.hidden=false;cont.target='_blank';cont.rel='noopener noreferrer';}
       setStatus('O provedor retornou sucesso para a solicitação. Aguarde confirmação do escritório. Se desejar, inicie também uma conversa pelo WhatsApp oficial.',true);
       track('form_submit',{area});form.reset();
     }catch(err){setStatus('Não foi possível confirmar o envio. Verifique sua conexão ou utilize o WhatsApp.',false)}
     finally{submit.disabled=false;submit.textContent='Enviar solicitação';}
   });
 });
})();

/* Acesso privado de apresentação: saída de sessão autorizada pelo servidor. */
(() => {
  'use strict';
  if (document.querySelector('[data-ra-private-exit]')) return;
  const form = document.createElement('form');
  form.method = 'POST';
  form.action = '/__acesso/sair';
  form.className = 'ra-private-exit';
  form.setAttribute('data-ra-private-exit', '');
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = 'Encerrar acesso';
  button.setAttribute('aria-label', 'Encerrar acesso privado e voltar para a tela de senha');
  form.appendChild(button);
  document.body.appendChild(form);
})();


/* AVR-001: carregamento progressivo do assistente ilustrado, sem dependências externas. */
(() => {
  'use strict';
  const own = document.currentScript || [...document.scripts].find(s => /\/assets\/js\/site\.js(?:\?|$)/.test(s.src));
  if (!own || document.querySelector('script[data-ra-assistente]')) return;
  const assets = new URL('../', own.src);
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = new URL('css/assistente-rodrigo.css', assets).href;
  document.head.appendChild(css);
  const js = document.createElement('script');
  js.src = new URL('js/assistente-rodrigo.js', assets).href;
  js.defer = true;
  js.dataset.raAssistente = '1';
  document.head.appendChild(js);
})();