/* AVR-001 V3 — Assistente ilustrado integrado ao site, sem API/IA/coleta de dados.
   Carrega uma única arte em resolução alta com transparência e movimento contínuo. */
(() => {
 'use strict';
 const script=document.currentScript;
 if(!script || document.getElementById('ra-assistente'))return;
 const base=new URL('../../',script.src);
 const href=path=>new URL(path,base).href;
 const storageKey='ra_assistente_pausado_v3';
 const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)');
 const topics={
  previdencia:{text:'Informações educativas sobre aposentadorias, perícias e benefícios do INSS. Cada situação exige análise individual.',href:'areas/beneficio-negado-inss.html',label:'Ver informações sobre o INSS'},
  bpc:{text:'O BPC/LOAS é um benefício assistencial sujeito a requisitos legais. Conheça nossos guias e checklists.',href:'areas/bpc-loas.html',label:'Ler o guia de BPC/LOAS'},
  saude:{text:'Veja orientações gerais sobre negativas dos planos de saúde, medicamentos e tratamentos.',href:'areas/planos-de-saude.html',label:'Ver Direito da Saúde'},
  seguranca:{text:'Atenção aos golpes: confirme canais oficiais e não faça pagamentos para liberar processos sem verificar a autenticidade.',href:'seguranca.html',label:'Abrir a Central de Segurança'},
  contato:{text:'Para atendimento individual, consulte os contatos oficiais do escritório. Não envie documentos ou dados sensíveis por este guia.',href:'contato.html',label:'Consultar canais de contato'}
 };
 const root=document.createElement('aside');
 root.id='ra-assistente';root.className='ra-v3 ra-assistente-institucional';root.setAttribute('data-ra-v3','');
 root.setAttribute('aria-label','Assistente ilustrado de orientação do site');
 root.innerHTML=`
  <button type="button" class="ra-avatar" data-ra-avatar aria-controls="ra-assistente-painel" aria-expanded="false" aria-label="Abrir guia ilustrado de orientação">
    <img data-ra-image alt="" width="811" height="1506" decoding="async" src="${href('assets/img/assistente-rodrigo-v3.webp')}">
    <canvas aria-hidden="true"></canvas>
  </button>
  <span class="ra-hint" aria-hidden="true">Posso orientar?</span>
  <button type="button" class="ra-pause" data-ra-pause aria-pressed="false">Pausar animação</button>
  <section id="ra-assistente-painel" class="ra-panel" data-ra-panel hidden role="region" aria-label="Orientações educativas">
   <button type="button" data-ra-close class="ra-close" aria-label="Fechar assistente">×</button>
   <h2>Como posso orientar?</h2>
   <p>Sou um guia ilustrado do site, não o advogado em atendimento ao vivo.</p>
   <div class="ra-choices">
    <button type="button" data-topic="previdencia">INSS</button>
    <button type="button" data-topic="bpc">BPC/LOAS</button>
    <button type="button" data-topic="saude">Direito da Saúde</button>
    <button type="button" data-topic="seguranca">Segurança</button>
    <button type="button" data-topic="contato">Contato</button>
   </div>
   <div class="ra-result"><span data-ra-message>Escolha um assunto para ver as orientações.</span>
    <a data-ra-link hidden href="#">Abrir informações</a>
   </div>
  </section>
  <span class="ra-visually-hidden" data-ra-status aria-live="polite">Assistente ilustrado disponível</span>`;
 document.body.appendChild(root);
 const image=root.querySelector('[data-ra-image]');
 const canvas=root.querySelector('canvas');
 const avatar=root.querySelector('[data-ra-avatar]');
 const panel=root.querySelector('[data-ra-panel]');
 const pauseBtn=root.querySelector('[data-ra-pause]');
 const status=root.querySelector('[data-ra-status]');
 const choices=[...root.querySelectorAll('[data-topic]')];
 const textBox=root.querySelector('[data-ra-message]');
 const action=root.querySelector('[data-ra-link]');
 let renderer=null, motionEnabled=true;
 try{motionEnabled=(localStorage.getItem(storageKey)??localStorage.getItem('ra_assistente_pausado_v2'))!=='1'}catch{}
 if(reduced?.matches)motionEnabled=false;
 function setPauseLabel(){
  pauseBtn.textContent=motionEnabled?'Pausar animação':'Ativar animação';
  pauseBtn.setAttribute('aria-pressed',String(!motionEnabled));
  root.classList.toggle('ra-paused',!motionEnabled);
  renderer?.setMotion(motionEnabled);
 }
 setPauseLabel();
 pauseBtn.addEventListener('click',()=>{
  motionEnabled=!motionEnabled;
  try{localStorage.setItem(storageKey,motionEnabled?'0':'1')}catch{}
  setPauseLabel();
 });
 // Preferência de movimento do sistema permanece soberana até escolha explícita do visitante.
 reduced?.addEventListener?.('change',evt=>{if(evt.matches){motionEnabled=false;setPauseLabel()}});
 const close=(restoreFocus=true)=>{panel.hidden=true;avatar.setAttribute('aria-expanded','false');if(restoreFocus)avatar.focus()};
 avatar.addEventListener('click',()=>{
  const willOpen=panel.hidden;panel.hidden=!willOpen;
  avatar.setAttribute('aria-expanded',String(willOpen));
  if(willOpen)choices[0]?.focus();
 });
 root.querySelector('[data-ra-close]').addEventListener('click',close);
 root.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden){e.preventDefault();close()}});
 document.addEventListener('pointerdown',e=>{if(!panel.hidden&&!root.contains(e.target))close(false)},{passive:true});
 choices.forEach(button=>button.addEventListener('click',()=>{
  const entry=topics[button.dataset.topic];if(!entry)return;
  choices.forEach(el=>el.setAttribute('aria-pressed',String(el===button)));
  textBox.textContent=entry.text;
  action.textContent=entry.label;action.href=href(entry.href);action.hidden=false;
  renderer?.acknowledge();
 }));
 let initialized=false;
 function initCanvas(){
  if(initialized||!image.complete||!image.naturalWidth)return;
  initialized=true;
  try{
   renderer=new ContinuousPuppet(canvas,image,root);
   renderer.setMotion(motionEnabled);
   image.style.visibility='hidden';
  }catch(err){
   try{
    renderer=new CanvasFallback(canvas,image);
    renderer.setMotion(motionEnabled);
    image.style.visibility='hidden';
   }catch(err2){
    root.classList.add('ra-fallback');
    status.textContent='Assistente disponível em modo estático';
   }
  }
 }
 image.addEventListener('load',initCanvas,{once:true});
 image.addEventListener('error',()=>{root.classList.add('ra-fallback');status.textContent='Não foi possível carregar a ilustração';},{once:true});
 if(image.complete&&image.naturalWidth)initCanvas();
 function CanvasFallback(canvas,img){
  const ctx=canvas.getContext('2d',{alpha:true,desynchronized:true});if(!ctx)throw Error('Canvas 2D indisponível');
  const dpr=Math.min(window.devicePixelRatio||1,2);
  const W=Math.min(img.naturalWidth, Math.max(1,Math.round(canvas.getBoundingClientRect().width*dpr)));
  const H=Math.max(1,Math.round(W*img.naturalHeight/img.naturalWidth));
  canvas.width=W;canvas.height=H; ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  let active=true,motion=true,last=0,elapsed=0,ack=0,raf=0;const gaze=[0,0],target=[0,0];
  const soft=(a,b,x)=>{const z=Math.max(0,Math.min(1,(x-a)/(b-a)));return z*z*(3-2*z)};
  const onPointer=e=>{const rect=canvas.getBoundingClientRect();target[0]=Math.max(-1,Math.min(1,(e.clientX-rect.left)/rect.width*2-1));target[1]=Math.max(-1,Math.min(1,(e.clientY-rect.top)/rect.height*2-1))};
  const onLeave=()=>{target[0]=target[1]=0};
  avatar.addEventListener('pointermove',onPointer,{passive:true});avatar.addEventListener('pointerleave',onLeave);
  function frame(now){if(!active)return;raf=requestAnimationFrame(frame);if(now-last<1000/30)return;
   const dt=Math.min(.05,(now-last)/1000||.032);last=now;if(motion)elapsed+=dt;
   gaze[0]+=(target[0]-gaze[0])*Math.min(1,dt*4.5);gaze[1]+=(target[1]-gaze[1])*Math.min(1,dt*4.5);
   ack*=Math.pow(.15,dt);
   ctx.clearRect(0,0,W,H);
   const t=elapsed,m=motion?1:0,band=4;
   for(let y=0;y<H;y+=band){
    const dy=Math.min(band,H-y),v=(y+.5*dy)/H;
    const head=1-soft(.16,.32,v);
    const chest=soft(.20,.38,v)*(1-soft(.60,.73,v));
    const dx=m*(head*(7*Math.sin(t*.43)+7*gaze[0]+1.2*Math.sin(t*.67)) +chest*(2.4*Math.sin(t*1.62)));
    const scale=1+m*chest*.0045*Math.sin(t*1.62);
    ctx.drawImage(img,0,y*img.naturalHeight/H,img.naturalWidth,dy*img.naturalHeight/H,dx-W*(scale-1)*.5,y,W*scale,dy);
   }
  }
  const visibility=()=>{if(document.hidden){active=false;cancelAnimationFrame(raf)}else if(!active){active=true;last=performance.now();raf=requestAnimationFrame(frame)}};
  document.addEventListener('visibilitychange',visibility);
  raf=requestAnimationFrame(frame);
  this.setMotion=m=>{motion=!!m;target[0]=target[1]=0};
  this.acknowledge=()=>{ack=1};
  this.destroy=()=>{active=false;cancelAnimationFrame(raf);document.removeEventListener('visibilitychange',visibility);avatar.removeEventListener('pointermove',onPointer);avatar.removeEventListener('pointerleave',onLeave)};
 }
 function ContinuousPuppet(canvas,img,root){
  const gl=canvas.getContext('webgl2',{alpha:true,antialias:true,premultipliedAlpha:true,preserveDrawingBuffer:false,desynchronized:true});
  if(!gl)throw Error('WebGL2 não disponível');
  const vs=`#version 300 es
precision highp float;
in vec2 a_uv;
out vec2 v_uv;
uniform float u_time;
uniform vec2 u_gaze;
uniform float u_motion;
uniform float u_ack;
void main(){
  vec2 p=a_uv;
  float t=u_time;
  float m=u_motion;
  // Rotação discreta da cabeça com continuidade pelo pescoço; nunca troca de retrato.
  float head=1.0-smoothstep(0.17,0.31,p.y);
  float theta=m*head*(sin(t*0.67)*0.016+u_gaze.x*0.019);
  vec2 around=p-vec2(0.427,0.255);
  p = mix(p,vec2(cos(theta)*around.x-sin(theta)*around.y,
                  sin(theta)*around.x+cos(theta)*around.y)+vec2(0.427,0.255),head);
  p.x+=head*m*(sin(t*0.43)*0.008+u_gaze.x*0.009);
  p.y+=head*m*(sin(t*0.74)*0.003+u_gaze.y*0.003);
  // Respiração: deslocamento inferior a 1.3% da largura do tronco, sem efeito elástico exagerado.
  float torso=smoothstep(0.21,0.39,p.y)*(1.0-smoothstep(0.58,0.73,p.y));
  float chest=exp(-pow((p.x-.55)/.36,2.0));
  p.x+=(p.x-.53)*torso*chest*m*(0.016*sin(t*1.62));
  p.y-=torso*chest*m*(0.002+0.0035*sin(t*1.62));
  // Microgesto da mão aberta, movendo continuamente os pontos da malha.
  float hand=exp(-pow((p.x-.10)/.22,2.0)-pow((p.y-.36)/.15,2.0));
  p.y+=hand*m*(0.0065*sin(t*1.02)+0.0055*u_ack);
  p.x+=hand*m*(0.007*sin(t*0.76)+0.004*u_ack);
  // Peso corporal e quadril, sem fingir uma caminhada com pernas estáticas.
  float pelvis=smoothstep(.46,.66,p.y)*(1.0-smoothstep(.86,.99,p.y));
  p.x+=pelvis*m*.0028*sin(t*.64);
  gl_Position=vec4(p.x*2.-1.,1.-p.y*2.,0.,1.);
  v_uv=a_uv;
}`;
  const fs=`#version 300 es
precision highp float;
in vec2 v_uv;
uniform sampler2D u_image;
out vec4 outColor;
void main(){ outColor=texture(u_image,v_uv); }
`;
  const createShader=(type,src)=>{const s=gl.createShader(type);gl.shaderSource(s,src);gl.compileShader(s);if(!gl.getShaderParameter(s,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(s));return s};
  const program=gl.createProgram();gl.attachShader(program,createShader(gl.VERTEX_SHADER,vs));gl.attachShader(program,createShader(gl.FRAGMENT_SHADER,fs));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error(gl.getProgramInfoLog(program));gl.useProgram(program);
  const X=54,Y=94,coords=new Float32Array((X+1)*(Y+1)*2),tris=new Uint16Array(X*Y*6);
  let n=0;for(let y=0;y<=Y;y++)for(let x=0;x<=X;x++){coords[n++]=x/X;coords[n++]=y/Y}
  n=0;for(let y=0;y<Y;y++)for(let x=0;x<X;x++){const a=y*(X+1)+x,b=a+1,c=a+X+1,d=c+1;tris[n++]=a;tris[n++]=c;tris[n++]=b;tris[n++]=b;tris[n++]=c;tris[n++]=d}
  const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,coords,gl.STATIC_DRAW);
  const pos=gl.getAttribLocation(program,'a_uv');gl.enableVertexAttribArray(pos);gl.vertexAttribPointer(pos,2,gl.FLOAT,false,0,0);
  const idx=gl.createBuffer();gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,idx);gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,tris,gl.STATIC_DRAW);
  const tex=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,tex);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,0);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,img);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.generateMipmap(gl.TEXTURE_2D);
  const tloc=gl.getUniformLocation(program,'u_time');
  const gloc=gl.getUniformLocation(program,'u_gaze');
  const mloc=gl.getUniformLocation(program,'u_motion');
  const aloc=gl.getUniformLocation(program,'u_ack');
  const gaze=[0,0],target=[0,0];let motion=true,ack=0,active=true,raf=0;
  const resizeCanvas=()=>{
   const size=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);
   canvas.width=Math.max(1,Math.round(size.width*dpr));
   canvas.height=Math.max(1,Math.round(size.height*dpr));
   gl.viewport(0,0,canvas.width,canvas.height);
  };
  resizeCanvas();window.addEventListener('resize',resizeCanvas,{passive:true});
  gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  const onMove=e=>{const rect=canvas.getBoundingClientRect();target[0]=Math.max(-1,Math.min(1,((e.clientX-rect.left)/rect.width-.5)*2));target[1]=Math.max(-1,Math.min(1,((e.clientY-rect.top)/rect.height-.5)*2))};
  const onLeave=()=>{target[0]=0;target[1]=0};
  avatar.addEventListener('pointermove',onMove,{passive:true});avatar.addEventListener('pointerleave',onLeave);
  let start=performance.now();let elapsed=0,last=start;
  const draw=now=>{if(!active)return;raf=requestAnimationFrame(draw);if(now-last<1000/30)return;const dt=Math.min(.05,(now-last)/1000);last=now;
   if(motion)elapsed+=dt;
   gaze[0]+=(target[0]-gaze[0])*Math.min(1,dt*4.5);gaze[1]+=(target[1]-gaze[1])*Math.min(1,dt*4.5);
   ack*=Math.pow(.15,dt);
   gl.uniform1f(tloc,elapsed);gl.uniform2f(gloc,gaze[0],gaze[1]);gl.uniform1f(mloc,motion?1:0);gl.uniform1f(aloc,ack);
   gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);gl.drawElements(gl.TRIANGLES,tris.length,gl.UNSIGNED_SHORT,0)
  };
  const watch=()=>{const visible=!document.hidden;if(visible&&!active){active=true;last=performance.now();raf=requestAnimationFrame(draw)}else if(!visible&&active){active=false;cancelAnimationFrame(raf)}};
  document.addEventListener('visibilitychange',watch);
  raf=requestAnimationFrame(draw);
  this.setMotion=value=>{motion=!!value;target[0]=target[1]=0;};
  this.acknowledge=()=>{ack=1};
  this.destroy=()=>{active=false;cancelAnimationFrame(raf);document.removeEventListener('visibilitychange',watch);avatar.removeEventListener('pointermove',onMove);avatar.removeEventListener('pointerleave',onLeave);window.removeEventListener('resize',resizeCanvas);gl.deleteTexture(tex);gl.deleteProgram(program)};
 }
})();