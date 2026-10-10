/** Ferramentas educativas Rodrigo Alves | Advocacia.
 * Todas as marcações permanecem na memória desta página; sem cookies, storage ou envio.
 * A opção PDF usa a impressão nativa do navegador, não um gerador remoto.
 */
(()=>{
  'use strict';
  const root=document.querySelector('[data-checklist]');
  if(!root)return;
  const progress=document.querySelector('[data-check-progress]');
  const select=document.querySelector('[data-doc-category]');
  const visibleChecks=()=>[...root.querySelectorAll('input[data-check-item]')].filter(input=>!input.closest('[hidden]'));
  function updateProgress(){
    const list=visibleChecks();const checked=list.filter(i=>i.checked).length;
    if(progress)progress.textContent=`${checked} de ${list.length} verificados`;
  }
  root.addEventListener('change',updateProgress);
  if(select){select.addEventListener('change',()=>{
    for(const group of root.querySelectorAll('[data-docset]')){
      group.hidden=group.dataset.docset!==select.value;
      group.querySelectorAll('input[type="checkbox"]').forEach(input=>input.checked=false);
    }
    updateProgress();
  });}
  document.querySelector('[data-reset-checklist]')?.addEventListener('click',()=>{
    root.querySelectorAll('input[type="checkbox"]').forEach(input=>input.checked=false);
    updateProgress();
  });
  document.querySelector('[data-print-checklist]')?.addEventListener('click',()=>{
    // Browser "Imprimir" permits saving to PDF. No personal data is collected.
    window.print();
  });
  updateProgress();
})();
