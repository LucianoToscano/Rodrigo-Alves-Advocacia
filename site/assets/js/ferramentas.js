/** V3.7 — listas pessoais por assunto; sem persistência, requisições ou coleta. */
(()=>{
  'use strict';
  const root=document.querySelector('[data-checklist]');
  if(!root)return;
  const progress=document.querySelector('[data-check-progress]');
  const select=document.querySelector('[data-doc-category]');
  const printTopic=document.querySelector('[data-print-topic]');
  const validKeys=new Set([...root.querySelectorAll('[data-docset]')].map(el=>el.dataset.docset));
  const visibleChecks=()=>[...root.querySelectorAll('input[data-check-item]')].filter(input=>!input.closest('[hidden]'));
  function updateProgress(){
    const list=visibleChecks();
    const checked=list.filter(i=>i.checked).length;
    if(progress)progress.textContent=`${checked} de ${list.length} itens marcados`;
  }
  function choose(key, announce=true){
    if(!select || !validKeys.has(key))return;
    select.value=key;
    for(const group of root.querySelectorAll('[data-docset]')){
      group.hidden=group.dataset.docset!==key;
      // Each category is independent, but no checklists are saved between page loads.
    }
    if(printTopic)printTopic.textContent=`Lista para impressão: ${select.selectedOptions[0].textContent.trim()}`;
    updateProgress();
    if(announce && progress)progress.setAttribute('aria-atomic','true');
  }
  root.addEventListener('change',updateProgress);
  if(select){
    select.addEventListener('change',()=>choose(select.value));
    const params=new URLSearchParams(window.location.search);
    const fromLink=params.get('assunto');
    choose(fromLink && validKeys.has(fromLink)?fromLink:select.value,false);
  } else updateProgress();
  document.querySelector('[data-reset-checklist]')?.addEventListener('click',()=>{
    visibleChecks().forEach(input=>input.checked=false);
    updateProgress();
    if(progress)progress.focus?.();
  });
  document.querySelector('[data-print-checklist]')?.addEventListener('click',()=>window.print());
})();
