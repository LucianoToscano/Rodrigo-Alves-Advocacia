/* AVR-001 · Assistente Rodrigo V2 — guia ilustrado autônomo, sem IA e sem coleta. */
(() => {
  'use strict';
  const script = document.currentScript;
  if (!script || document.getElementById('ra-assistente')) return;
  const root = new URL('../../', script.src);
  const siteUrl = path => new URL(path, root).href;
  const contentRoot = script.dataset.raContentRoot ? new URL(script.dataset.raContentRoot) : root;
  const pageUrl = path => new URL(path, contentRoot).href;
  const imagePath = index => siteUrl(`assets/img/assistente-rodrigo-v2/pose-${String(index + 1).padStart(2, '0')}.webp`);
  const STORE = 'ra_assistente_pausado_v2';
  const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  const topics = [
    { id:'previdencia', name:'Aposentadoria e INSS', pose:2, info:'Explore orientações gerais sobre aposentadoria, benefícios, perícias e recursos. A análise de cada caso depende de um profissional.', links:[['Guia para começar','orientacao/index.html'],['Benefício negado pelo INSS','areas/beneficio-negado-inss.html'],['Documentos necessários','ferramentas/organizar-documentos.html']] },
    { id:'bpc', name:'BPC / LOAS', pose:9, info:'Saiba como funciona o Benefício de Prestação Continuada e quais informações e documentos você pode organizar.', links:[['Entenda o BPC','areas/bpc-loas.html'],['Checklist educativo','ferramentas/checklist-bpc.html']] },
    { id:'saude', name:'Direito da Saúde', pose:5, info:'Conheça orientações sobre planos de saúde, negativas de cobertura, cirurgias e tratamentos. Em urgências, procure atendimento médico.', links:[['Planos de saúde','areas/planos-de-saude.html'],['Tratamentos e cirurgias','areas/tratamentos-e-cirurgias.html'],['Guia de negativa','ferramentas/guia-negativa-plano.html']] },
    { id:'seguranca', name:'Proteção contra golpes', pose:3, info:'Nunca faça pagamentos ou envie documentos apenas porque alguém usou o nome ou a foto do advogado. Verifique canais oficiais.', links:[['Central de Segurança','seguranca.html'],['Como verificar contatos','servicos/verificacao.html']] },
    { id:'contato', name:'Falar com o escritório', pose:1, info:'Encontre os contatos institucionais publicados pelo escritório. Este personagem não recebe mensagens nem realiza consultas.', links:[['Página de contato','contato.html'],['Canais e segurança','seguranca.html']] }
  ];
  const nav = [0,1,0,3,0,4,0,7,0,9,0,6,0,2,0,5,0];
  const render = () => {
    const wrap = document.createElement('aside');
    wrap.id = 'ra-assistente';
    wrap.className = 'ra-assistente';
    wrap.setAttribute('aria-label','Assistente ilustrado de orientação do site');
    wrap.innerHTML = `
      <section class="ra-a-panel" id="ra-a-panel" role="region" aria-label="Orientações do assistente" hidden>
        <div class="ra-a-header"><div><strong>Assistente Rodrigo</strong><span>Guia ilustrado do site — respostas por assunto</span></div>
          <button type="button" class="ra-a-close" data-ra-close aria-label="Fechar orientações">×</button></div>
        <div class="ra-a-scroll" id="ra-a-content" aria-live="polite" aria-atomic="true"></div>
        <div class="ra-a-footer"><span>Informações educativas. Não é atendimento jurídico individual ou IA conversacional.</span><button type="button" data-ra-pause>⏸ Pausar movimentos</button></div>
      </section>
      <div class="ra-a-journey">
        <button type="button" class="ra-a-launch" aria-expanded="false" aria-controls="ra-a-panel" aria-label="Abrir o Assistente Rodrigo">
          <span class="ra-a-figure" aria-hidden="true"><img class="ra-a-pose is-visible" src="${imagePath(0)}" alt="" width="300" height="410" draggable="false"><img class="ra-a-pose" src="${imagePath(0)}" alt="" width="300" height="410" draggable="false"></span>
          <span class="ra-a-label">Posso orientar você <span aria-hidden="true">↗</span></span>
        </button>
      </div>`;
    document.body.appendChild(wrap);
    return wrap;
  };
  function start() {
    if (!document.body || document.getElementById('ra-assistente')) return;
    const wrap = render();
    const panel = wrap.querySelector('#ra-a-panel');
    const content = wrap.querySelector('#ra-a-content');
    const launch = wrap.querySelector('.ra-a-launch');
    const walk = wrap.querySelector('.ra-a-journey');
    const frames = [...wrap.querySelectorAll('.ra-a-pose')];
    const pauseButton = wrap.querySelector('[data-ra-pause]');
    let open = false;
    let paused = false;
    let visibleFrame = 0;
    let pose = 0;
    let sequenceIndex = 0;
    let moveIndex = 0;
    let moveX = 0;
    let timer = null;
    let currentTopic = null;
    const ready = [];
    for (let index = 0; index < 10; index++) {
      const image = new Image(); image.decoding = 'async'; image.src = imagePath(index); ready.push(image);
    }
    try { paused = localStorage.getItem(STORE) === '1'; } catch {}
    const allowedMotion = () => !paused && !reduce?.matches && !document.hidden;
    const el = (tag, cls, value) => {
      const element = document.createElement(tag);
      if (cls) element.className = cls;
      if (value != null) element.textContent = value;
      return element;
    };
    function cancel() { if (timer != null) { clearTimeout(timer); timer = null; } }
    function setPose(next) {
      if (!Number.isInteger(next) || next < 0 || next > 9 || next === pose) return;
      pose = next;
      const back = 1 - visibleFrame;
      const incoming = frames[back];
      incoming.src = imagePath(next);
      incoming.classList.add('is-visible');
      frames[visibleFrame].classList.remove('is-visible');
      visibleFrame = back;
    }
    function plan(delay) { cancel(); if (allowedMotion()) timer = setTimeout(nextAction, delay); }
    function nextAction() {
      if (!allowedMotion()) return;
      // Short, bounded stroll: never cross the page, enter a form, or cover reading text.
      if (!open && window.innerWidth >= 900 && sequenceIndex > 0 && sequenceIndex % 6 === 0) {
        setPose(8);
        moveX = moveX ? 0 : -Math.min(90, Math.floor(window.innerWidth * 0.07));
        walk.style.setProperty('--ra-walk-x', `${moveX}px`);
        wrap.classList.add('ra-a-walking');
        timer = setTimeout(() => {
          wrap.classList.remove('ra-a-walking');
          setPose(0);
          plan(3000);
        }, 2700);
        sequenceIndex++;
        return;
      }
      const next = open ? (currentTopic?.pose ?? nav[sequenceIndex % nav.length]) : nav[sequenceIndex % nav.length];
      setPose(next);
      sequenceIndex++;
      plan(next === 0 ? 3000 + ((sequenceIndex % 3) * 450) : 2100 + ((sequenceIndex % 4) * 350));
    }
    function resetWalk() {
      moveX = 0;
      walk.style.setProperty('--ra-walk-x', '0px');
      wrap.classList.remove('ra-a-walking');
    }
    function setPaused(value) {
      paused = !!value;
      wrap.classList.toggle('ra-a-paused',paused);
      pauseButton.textContent = paused ? '▶ Retomar movimentos' : '⏸ Pausar movimentos';
      pauseButton.setAttribute('aria-pressed',String(paused));
      try { localStorage.setItem(STORE,paused ? '1' : '0'); } catch {}
      cancel();
      if (paused) { resetWalk();setPose(0); }
      else if (!reduce?.matches) plan(1800);
    }
    function anchor(label, path) {
      const link = el('a','ra-a-link',label);
      link.href = pageUrl(path);
      link.append(el('span','ra-a-chevron','↗'));
      return link;
    }
    function home() {
      currentTopic = null;
      content.replaceChildren();
      content.append(el('p','ra-a-message','Olá! Posso ajudar você a encontrar informações. Qual assunto gostaria de conhecer?'));
      const options = el('div','ra-a-options');
      for (const topic of topics) {
        const button = el('button','ra-a-option',topic.name);
        button.type = 'button';
        button.addEventListener('click',() => showTopic(topic.id));
        options.append(button);
      }
      content.append(options, el('p','ra-a-warning','Não envie CPF, senhas, documentos, detalhes de processos ou informações médicas aqui.'));
      if (!paused) setPose(0);
    }
    function showTopic(id) {
      const topic = topics.find(item => item.id === id);
      if (!topic) return home();
      currentTopic = topic;
      content.replaceChildren();
      const back = el('button','ra-a-back','← Voltar aos assuntos');
      back.type = 'button'; back.addEventListener('click', home);
      content.append(back,el('h3','ra-a-title',topic.name),el('p','ra-a-message',topic.info));
      const links = el('div','ra-a-links');
      for (const [name,path] of topic.links) links.append(anchor(name,path));
      content.append(links);
      if (!paused) setPose(topic.pose);
    }
    function expand() {
      open = true;
      resetWalk();
      panel.hidden = false;
      wrap.classList.add('ra-a-open');
      launch.setAttribute('aria-expanded','true');
      launch.setAttribute('aria-label','Fechar o Assistente Rodrigo');
      if (!content.children.length) home();
      if (currentTopic) setPose(currentTopic.pose);
      cancel(); plan(3800);
      const close = wrap.querySelector('[data-ra-close]');
      close.focus({preventScroll:true});
    }
    function collapse() {
      open = false;
      panel.hidden = true;
      wrap.classList.remove('ra-a-open');
      launch.setAttribute('aria-expanded','false');
      launch.setAttribute('aria-label','Abrir o Assistente Rodrigo');
      if (!paused) setPose(0);
      cancel(); plan(2500);
      launch.focus({preventScroll:true});
    }
    launch.addEventListener('click',() => open ? collapse() : expand());
    wrap.querySelector('[data-ra-close]').addEventListener('click',collapse);
    pauseButton.addEventListener('click',() => setPaused(!paused));
    wrap.addEventListener('keydown',e => { if (e.key === 'Escape' && open) { e.preventDefault();collapse(); } });
    reduce?.addEventListener?.('change',() => {
      cancel();resetWalk();
      if (reduce.matches) setPose(0);
      else plan(2100);
    });
    document.addEventListener('visibilitychange',() => {
      cancel();
      if (!document.hidden && !paused) plan(2400);
    });
    if (paused) setPaused(true);
    else { pauseButton.setAttribute('aria-pressed','false'); plan(1700); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded',start,{once:true});
  else start();
})();