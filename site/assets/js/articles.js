(()=>{'use strict';
document.querySelectorAll('[data-share-article]').forEach(btn=>btn.addEventListener('click',async()=>{
 const title=document.querySelector('main h1')?.textContent||document.title;const url=window.location.href;
 try{if(navigator.share){await navigator.share({title,url});return} if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);btn.textContent='Link copiado ✓';return}
  const link=document.createElement('input');link.value=url;link.setAttribute('aria-label','Endereço do artigo');document.body.append(link);link.select();document.execCommand('copy');link.remove();btn.textContent='Link copiado ✓';}
 catch(err){if(err.name!=='AbortError')btn.textContent='Copie o endereço do navegador'}
}));
})();
