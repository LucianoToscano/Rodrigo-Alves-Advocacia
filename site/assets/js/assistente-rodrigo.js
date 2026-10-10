/* Assistente Rodrigo v1 — roteiro institucional local. Nenhuma IA, rede, rastreamento ou coleta. */
(() => {
  'use strict';
  const script = document.currentScript;
  if (!script || document.getElementById('ra-assistente')) return;
  const root = new URL('../../', script.src);
  const asset = path => new URL(path, root).href;
  const storageKey = 'ra_assistente_pausado_v1';
  const reducedMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const topics = [
    {id:'previdencia', title:'Aposentadoria e INSS', pose:4, description:'Veja conteúdos educativos sobre benefícios previdenciários, perícias e providências administrativas. Cada situação exige análise própria.', links:[['Começar pela orientação','orientacao/index.html'],['Benefício negado pelo INSS','areas/beneficio-negado-inss.html'],['Documentos para organizar','ferramentas/organizar-documentos.html']]},
    {id:'bpc', title:'BPC/LOAS', pose:4, description:'Conheça informações gerais sobre o BPC, critérios legais e cuidados com a documentação. Esta ferramenta não determina elegibilidade.',links:[['Entender o BPC','areas/bpc-loas.html'],['Checklist educativo','ferramentas/checklist-bpc.html']]},
    {id:'saude', title:'Direito da Saúde', pose:5, description:'Encontre orientações gerais sobre negativas de cobertura, planos de saúde, tratamentos e medicamentos. Urgências médicas requerem serviço de saúde, não este assistente.', links:[['Planos de saúde','areas/planos-de-saude.html'],['Tratamentos e cirurgias','areas/tratamentos-e-cirurgias.html'],['Guia de negativa','ferramentas/guia-negativa-plano.html']]},
    {id:'seguranca', title:'Evitar golpes', pose:6, description:'Antes de fornecer dados ou fazer qualquer pagamento, confira os canais oficiais. Um número parecido ou uma foto não comprovam a identidade de quem entrou em contato.', links:[['Central de Segurança','seguranca.html'],['Serviços de verificação','servicos/verificacao.html']]},
    {id:'contato', title:'Falar com o escritório', pose:0, description:'Para atendimento individual, utilize somente os canais publicados na página oficial de contato. Não compartilhe documentos ou dados médicos com este assistente.', links:[['Contatos institucionais','contato.html'],['Como identificar os canais','seguranca.html']]}
  ];
  const icon = document.createElement('style');
  icon.textContent = '#ra-assistente [hidden]{display:none!important}';
  document.head.append(icon);
  const wrap = document.createElement('aside');
  wrap.id = 'ra-assistente';
  wrap.className = 'ra-assistente';
  wrap.setAttribute('aria-label','Assistente de navegação do escritório');
  wrap.innerHTML = `
    <section class="ra-a-panel" id="ra-a-panel" role="region" aria-label="Orientações do assistente" hidden>
      <header class="ra-a-header"><div><strong>Assistente Rodrigo</strong><span>Guia ilustrado do site · não é atendimento ao vivo</span></div><button type="button" class="ra-a-x" data-ra-close aria-label="Fechar painel">×</button></header>
      <div class="ra-a-scroll" id="ra-a-body" aria-live="polite" aria-atomic="true"></div>
      <footer class="ra-a-footer"><span>Informação educativa, não consulta jurídica ou atendimento por IA.</span><button type="button" data-ra-pause>Pausar animações</button></footer>
    </section>
    <button type="button" class="ra-a-launch" id="ra-a-launch" aria-expanded="false" aria-controls="ra-a-panel" aria-label="Abrir o Assistente Rodrigo">
      <span class="ra-a-image" id="ra-a-image" data-pose="0" aria-hidden="true"></span>
      <span class="ra-a-label">Precisa de orientação?</span>
    </button>`;
  const mount = () => {
    if (!document.body || document.getElementById(wrap.id)) return;
    document.body.append(wrap);
    const panel = wrap.querySelector('#ra-a-panel');
    const body = wrap.querySelector('#ra-a-body');
    const launch = wrap.querySelector('#ra-a-launch');
    const avatar = wrap.querySelector('#ra-a-image');
    const pause = wrap.querySelector('[data-ra-pause]');
    let current = '';
    let paused = false;
    try { paused = localStorage.getItem(storageKey) === '1'; } catch {}
    const element = (tag, className, value) => {
      const el = document.createElement(tag); if (className) el.className=className;
      if (value != null) el.textContent=value; return el;
    };
    function setPose(pose) { avatar.dataset.pose=String(reducedMotion?.matches || paused ? 0 : pose); }
    function setPaused(value) {
      paused=!!value; wrap.classList.toggle('ra-a-paused', paused);
      pause.textContent=paused?'Ativar animações':'Pausar animações';
      if (paused) setPose(0);
      try { localStorage.setItem(storageKey, paused?'1':'0'); }catch{}
    }
    function link(text,path) { const a=element('a','ra-a-link',text+' ↗'); a.href=asset(path); return a; }
    function showHome() {
      current=''; setPose(0); body.replaceChildren();
      body.append(element('p','ra-a-message','Olá! Posso indicar os conteúdos e serviços deste site. Por onde deseja começar?'));
      const options=element('div','ra-a-options');
      topics.forEach(t=>{const b=element('button','ra-a-option',t.title); b.type='button'; b.addEventListener('click',()=>showTopic(t.id)); options.append(b);});
      body.append(options);
      body.append(element('p','ra-a-note','Não digite CPF, senha, número de processo ou informações de saúde aqui.'));
    }
    function showTopic(id) {
      const item=topics.find(t=>t.id===id); if (!item) return showHome();
      current=id;setPose(item.pose);body.replaceChildren();
      const back=element('button','ra-a-back','← Outros assuntos'); back.type='button';back.addEventListener('click',showHome);
      body.append(back, element('h3','ra-a-topic',item.title),element('p','ra-a-message',item.description));
      const list=element('div','ra-a-links');item.links.forEach(([text,path])=>list.append(link(text,path)));body.append(list);
      if (id==='contato') body.append(element('p','ra-a-note','Este personagem é um guia ilustrado, não o advogado falando em tempo real.'));
    }
    function openPanel(){panel.hidden=false;launch.setAttribute('aria-expanded','true');launch.setAttribute('aria-label','Fechar o Assistente Rodrigo');wrap.classList.add('ra-a-open');setPose(current?topics.find(t=>t.id===current)?.pose||0:0);if(!body.childElementCount)showHome();}
    function closePanel(){panel.hidden=true;launch.setAttribute('aria-expanded','false');launch.setAttribute('aria-label','Abrir o Assistente Rodrigo');wrap.classList.remove('ra-a-open');setPose(0);launch.focus();}
    launch.addEventListener('click',()=>panel.hidden?openPanel():closePanel());
    wrap.querySelector('[data-ra-close]').addEventListener('click',closePanel);
    pause.addEventListener('click',()=>setPaused(!paused));
    wrap.addEventListener('keydown',ev=>{if(ev.key==='Escape'&&!panel.hidden){ev.preventDefault();closePanel();}});
    launch.addEventListener('mouseenter',()=>{if(panel.hidden&&!paused)setPose(1);});
    launch.addEventListener('mouseleave',()=>{if(panel.hidden)setPose(0);});
    reducedMotion?.addEventListener?.('change',()=>setPose(current?topics.find(t=>t.id===current)?.pose||0:0));
    setPaused(paused);
  };
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mount,{once:true});
  else mount();
})();