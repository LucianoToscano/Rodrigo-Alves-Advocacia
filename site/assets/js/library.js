(()=>{'use strict';
const query=document.getElementById('library-query'),root=document.getElementById('library-results');
if(!query||!root)return;
const counter=document.querySelector('[data-count]'),empty=document.getElementById('library-empty'),reset=document.getElementById('library-reset');
const chips=[...document.querySelectorAll('[data-library-filter]')];const typeSelect=document.getElementById('library-type');
let documents=[],filter='Todos';
const normalize=str=>String(str||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLocaleLowerCase('pt-BR');
const tile=d=>{const el=document.createElement('article');el.className='library-card';const tag=document.createElement('div');tag.className='library-card-meta';tag.textContent=d.area+' · '+d.tipo;const title=document.createElement('h3');const a=document.createElement('a');a.href='../'+d.url;a.textContent=d.titulo;title.append(a);const excerpt=document.createElement('p');excerpt.textContent=d.resumo;const more=document.createElement('a');more.href=a.href;more.className='lib-read';more.textContent='Ler conteúdo ↗';el.append(tag,title,excerpt,more);return el;};
function render(){const needle=normalize(query.value).trim();const arr=documents.filter(d=>(filter==='Todos'||d.area===filter)&&(!typeSelect||typeSelect.value==='Todos'||d.tipo===typeSelect.value)&&normalize([d.area,d.tipo,d.titulo,d.resumo,d.busca].join(' ')).includes(needle));root.replaceChildren(...arr.map(tile));counter.textContent=arr.length+' '+(arr.length===1?'conteúdo encontrado':'conteúdos encontrados');empty.hidden=arr.length!==0;}
query.addEventListener('input',render);typeSelect?.addEventListener('change',render);
chips.forEach(c=>c.addEventListener('click',()=>{filter=c.dataset.libraryFilter;chips.forEach(b=>{const active=b===c;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active));});render();}));
reset?.addEventListener('click',()=>{query.value='';if(typeSelect)typeSelect.value='Todos';chips[0].click();query.focus();});
fetch('../data/conteudos.json',{credentials:'same-origin'}).then(r=>{if(!r.ok)throw new Error('Index indisponível');return r.json();}).then(items=>{documents=items.filter(x=>x.url&&x.titulo);render();}).catch(()=>{counter.textContent='Busca indisponível';empty.hidden=false;empty.querySelector('p').textContent='Abra os guias e artigos diretamente pelo menu enquanto a busca não estiver disponível.';});
})();
