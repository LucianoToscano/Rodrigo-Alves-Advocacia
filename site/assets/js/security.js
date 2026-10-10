/** Segurança V6.4: consulta local da lista pública aprovada. Não certifica identidade. */
(()=>{'use strict';
 const cfg=window.RA_CONFIG||{};
 const cleanPhone=x=>{
  if(typeof x!=='string')return null;
  const raw=x.trim();if(!raw||raw.length>90)return null;
  let v=raw;
  if(/^https?:/i.test(v)){
   try{const u=new URL(v);if(u.protocol!=='https:')return null;
    const host=u.hostname.toLowerCase();
    if(host==='wa.me'||host==='api.whatsapp.com'){
      v=host==='wa.me'?u.pathname.replace(/^\//,''):u.searchParams.get('phone')||'';
    }else return null;
   }catch{return null;}
  }else if(/^tel:/i.test(v))v=v.slice(4);
  if(!/^[+0-9 ()-]+$/.test(v))return null;
  let digits=v.replace(/\D/g,'');
  if(digits.startsWith('00'))digits=digits.slice(2);
  if(digits.length===10||digits.length===11)digits='55'+digits;
  return /^55\d{2}\d{8,9}$/.test(digits)?digits:null;
 };
 const insta=x=>{
  const raw=x.trim();if(!raw||raw.length>120)return null;
  if(/^@?[A-Za-z0-9._]+$/.test(raw))return raw.replace(/^@/,'').toLowerCase();
  try{const u=new URL(raw);if(u.protocol!=='https:'||!['instagram.com','www.instagram.com'].includes(u.hostname.toLowerCase()))return null;
   let p=u.pathname.split('/').filter(Boolean);if(p.length!==1||! /^[a-zA-Z0-9._]+$/.test(p[0]))return null;
   return p[0].toLowerCase();
  }catch{return null;}
 };
 const officialPhone=cleanPhone(String(cfg.whatsappDigits||''));
 const officialUsers=[cfg.instagramInstitucional,cfg.instagramPrevidenciario].filter(Boolean).map(x=>insta(x)).filter(Boolean);
 const registryReady=Boolean(cfg.channelsApproved&&officialPhone&&officialUsers.length===2);
 const $=s=>document.querySelector(s);
 const form=$('[data-security-form]');
 if(form){
  const kind=$('[data-security-kind]'),input=$('[data-security-value]'),result=$('[data-security-result]');
  const messages={
   unavailable:'Consulta indisponível: os registros de canais oficiais não foram carregados ou precisam de revisão. Utilize um contato independente já conhecido. Não realize transferências enquanto houver dúvida.',
   invalid:'Informe um número com DDD ou um @usuário válido. Não digite CPF, dados bancários, senhas ou informações de processos.',
   matchPhone:'NÚMERO CADASTRADO. Consta na relação divulgada de canais autorizados. Isso não comprova a identidade de quem está usando a conta nem valida pedidos de pagamento. Confirme solicitações financeiras por um canal independente.',
   matchInsta:'PERFIL CADASTRADO. Este @usuário corresponde à relação divulgada. Isso não prova a autoria de mensagens recebidas, nem elimina o risco de conta comprometida.',
   differentPhone:'NÚMERO NÃO CADASTRADO. Este número não consta na relação atual. Isso não prova fraude. Não envie dinheiro ou dados sensíveis; confirme com o escritório por um contato já conhecido.',
   differentInsta:'PERFIL NÃO CADASTRADO. Este usuário não consta na relação atual. Isso não prova fraude. Não confie apenas em foto, nome ou selo.'
  };
  function show(type,message){result.hidden=false;result.dataset.result=type;result.textContent=message;}
  form.addEventListener('submit',e=>{
   e.preventDefault(); if(!registryReady)return show('unavailable',messages.unavailable);
   const value=input.value.trim();if(!value)return show('invalid',messages.invalid);
   const parsed=kind.value==='whatsapp'?cleanPhone(value):insta(value);
   if(!parsed)return show('invalid',messages.invalid);
   const matches=kind.value==='whatsapp'?parsed===officialPhone:officialUsers.includes(parsed);
   show(matches?'match':'different',messages[matches?(kind.value==='whatsapp'?'matchPhone':'matchInsta'):(kind.value==='whatsapp'?'differentPhone':'differentInsta')]);
  });
  kind.addEventListener('change',()=>{input.value='';input.placeholder=kind.value==='whatsapp'?'(84) 9XXXX-XXXX':'@usuario';result.hidden=true;});
 }
 document.querySelectorAll('[data-registry-review]').forEach(el=>{el.textContent=cfg.channelRegistryReviewedAt?`Última confirmação informada: ${cfg.channelRegistryReviewedAt.split('-').reverse().join('/')}`:'Última confirmação pendente';});
 document.querySelectorAll('[data-official-phone]').forEach(el=>{if(cfg.whatsappDisplay)el.textContent=cfg.whatsappDisplay;});
 document.querySelectorAll('[data-official-email]').forEach(el=>{if(cfg.contactEmail){el.textContent=cfg.contactEmail;if(el.tagName==='A')el.href='mailto:'+cfg.contactEmail;}});
 document.querySelectorAll('[data-official-instagram-office]').forEach(el=>{if(cfg.instagramInstitucional)el.href=cfg.instagramInstitucional;});
 document.querySelectorAll('[data-official-instagram-personal]').forEach(el=>{if(cfg.instagramPrevidenciario)el.href=cfg.instagramPrevidenciario;});
 // Compartilhamento apenas mediante clique, sem registrar dados do visitante.
 const share=$('[data-security-share]');if(share)share.addEventListener('click',async()=>{
  const url=cfg.siteUrl?cfg.siteUrl.replace(/\/$/,'')+'/seguranca':window.location.href;
  if(navigator.share){try{await navigator.share({title:'Segurança | Rodrigo Alves Advocacia',url});}catch{}}else if(navigator.clipboard&&window.isSecureContext){try{await navigator.clipboard.writeText(url);share.textContent='Link copiado';}catch{share.textContent='Copie o endereço do navegador';}}else share.textContent='Copie o endereço do navegador';
 });
})();
