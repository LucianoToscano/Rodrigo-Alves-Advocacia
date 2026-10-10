/* V3.7 accessibility enhancement: does not send preference values to servers. */
(()=>{
 'use strict';
 const root=document.documentElement;
 const KEY='ra_display_preferences';
 let current={size:'normal',contrast:'normal'};
 try{const s=JSON.parse(localStorage.getItem(KEY)||'null');if(s&&s.size==='large')current.size='large';if(s&&s.contrast==='high')current.contrast='high';}catch{}
 const $=sel=>document.querySelector(sel);
 const status=$('[data-ra-a11y-status]');
 const apply=()=>{
   root.dataset.raTextSize=current.size;
   root.dataset.raContrast=current.contrast;
   $('[data-ra-contrast]')?.setAttribute('aria-pressed',String(current.contrast==='high'));
   if(status)status.textContent=(current.size==='large'?'Texto ampliado. ':'Texto padrão. ')+(current.contrast==='high'?'Alto contraste ativo.':'Contraste padrão.');
 };
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(current));}catch{}apply();};
 apply();
 $('[data-ra-bigger]')?.addEventListener('click',()=>{current.size='large';save();});
 $('[data-ra-normal]')?.addEventListener('click',()=>{current.size='normal';save();});
 $('[data-ra-contrast]')?.addEventListener('click',()=>{current.contrast=current.contrast==='high'?'normal':'high';save();});
 $('[data-ra-reset]')?.addEventListener('click',()=>{current={size:'normal',contrast:'normal'};save();});
 const voice=$('[data-ra-voice-status]');
 const read=$('[data-ra-read-page]'),stop=$('[data-ra-stop-audio]');
 const canSpeak='speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
 if(read&&!canSpeak){read.disabled=true; if(voice)voice.textContent='Leitura por voz indisponível neste navegador. Utilize um leitor de tela do dispositivo.';}
 read?.addEventListener('click',()=>{
  if(!canSpeak)return;
  window.speechSynthesis.cancel();
  const section=$('.ra-access-content');if(!section)return;
  const content=[...section.querySelectorAll('h2,h3,article p,article li')].map(x=>x.textContent.trim()).filter(Boolean).join('. ').slice(0,7000);
  const utterance=new SpeechSynthesisUtterance(content);utterance.lang='pt-BR';utterance.rate=.95;
  utterance.onend=()=>{if(voice)voice.textContent='Leitura concluída.';};
  utterance.onerror=()=>{if(voice)voice.textContent='Não foi possível reproduzir o áudio. Tente um leitor de tela.';};
  window.speechSynthesis.speak(utterance);
  if(voice)voice.textContent='Lendo orientações com a voz disponibilizada pelo navegador.';
 });
 stop?.addEventListener('click',()=>{if(canSpeak)window.speechSynthesis.cancel();if(voice)voice.textContent='Leitura interrompida.';});
 const enable=$('[data-ra-vlibras-enable]'),vlstatus=$('[data-ra-vlibras-status]');
 let loading=false;
 enable?.addEventListener('click',()=>{
   if(loading)return;loading=true;enable.disabled=true;
   if(vlstatus)vlstatus.textContent='Carregando tradutor externo, conforme sua escolha...';
   const script=document.createElement('script');script.src='https://vlibras.gov.br/app/vlibras-plugin.js';script.async=true;
   script.onload=()=>{if(vlstatus)vlstatus.textContent='Widget carregado. Utilize o botão do VLibras que aparecer na página. A tradução automática pode conter erros.';};
   script.onerror=()=>{loading=false;enable.disabled=false;if(vlstatus)vlstatus.textContent='Serviço externo indisponível. Use o link para o VLibras oficial.';};
   document.body.append(script);
 });
})();
