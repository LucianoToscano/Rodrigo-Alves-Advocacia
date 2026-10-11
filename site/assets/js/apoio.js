/* Rede de Apoio — filtragem local, sem coleta, cookies ou requisicoes. */
(()=>{'use strict';
const choices=Array.from(document.querySelectorAll('[data-help-choice]'));
const routes=Array.from(document.querySelectorAll('[data-help-route]'));
const feedback=document.querySelector('[data-help-feedback]');
const reset=document.querySelector('[data-help-reset]');
function choose(id,focus){
 let label='',visible=0;
 choices.forEach(btn=>{const selected=btn.dataset.helpChoice===id;btn.setAttribute('aria-pressed',String(selected));if(selected)label=btn.textContent.trim();});
 routes.forEach(card=>{const show=!id||card.dataset.helpRoute===id;card.hidden=!show;if(show)visible++;});
 if(reset)reset.hidden=!id;
 if(feedback)feedback.textContent=id?'Orientação selecionada: '+label+'. Veja o roteiro abaixo.':visible+' situações disponíveis. Selecione o assunto para ver um roteiro.';
 if(id&&focus){const heading=document.querySelector('[data-help-route="'+id+'"] h3');heading?.focus({preventScroll:true});heading?.scrollIntoView({block:'start',behavior:'auto'});}
}
choices.forEach(btn=>btn.addEventListener('click',()=>choose(btn.dataset.helpChoice,true)));
reset?.addEventListener('click',()=>{choose('',false);choices[0]?.focus();});
document.querySelector('[data-help-print]')?.addEventListener('click',()=>window.print());
choose('',false);
const cause=document.querySelector('[data-help-cause]');
const search=document.querySelector('[data-help-search]');
const orgs=Array.from(document.querySelectorAll('[data-help-org]'));
const status=document.querySelector('[data-help-org-feedback]');
const empty=document.querySelector('[data-help-org-empty]');
function clean(text){return String(text||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR').trim();}
function filter(){
 const category=cause?.value||'',term=clean(search?.value);let matches=0;
 orgs.forEach(org=>{const ok=(!category||category===org.dataset.cause)&&(!term||clean(org.dataset.search).includes(term));org.hidden=!ok;if(ok)matches++;});
 if(status)status.textContent=matches===1?'1 instituição encontrada.':matches+' instituições encontradas.';
 if(empty)empty.hidden=matches!==0;
}
cause?.addEventListener('change',filter);
search?.addEventListener('input',filter);
filter();
})();