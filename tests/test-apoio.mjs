import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const page=read('site/apoio/index.html');
const css=read('site/assets/css/apoio.css');
const script=read('site/assets/js/apoio.js');
const routes=['alimentos','inss','medicamentos','familia','moradia','direitos','violencia','emocional'];

test('central tem oito roteiros e duas jornadas legíveis sem JavaScript',()=>{
 assert.match(page,/<main id="conteudo"/);
 assert.match(page,/Preciso de ajuda/);
 assert.match(page,/Quero ajudar/);
 for(const id of routes){
  assert.ok(page.includes('data-help-route="'+id+'"'));
  assert.ok(page.includes('data-help-choice="'+id+'"'));
 }
 assert.equal((page.match(/data-help-route=/g)||[]).length,8);
 assert.equal((page.match(/data-help-org data-cause=/g)||[]).length,8);
 assert.doesNotMatch(page,/<article[^>]*data-help-route[^>]*hidden/);
});

test('não há formulário ou captação de dados, senhas e valores',()=>{
 assert.doesNotMatch(page,/<form\b|type="file"|name="cpf"|name="senha"|data-netlify="true"/i);
 assert.doesNotMatch(page,/chave pix|pix copia e cola|transferir para nossa conta/i);
 assert.match(page,/não arrecada, recebe, intermedeia ou confirma doações/);
 assert.match(page,/não representa parceria, certificação ou endosso/i);
 assert.doesNotMatch(script,/fetch\s*\(|localStorage|sessionStorage|sendBeacon|XMLHttpRequest|innerHTML\s*=/);
});

test('redirecionamentos de doação usam páginas oficiais e não URLs de pagamentos de terceiros',()=>{
 for(const host of ['doe.graacc.org.br','ama.org.br','pequenoprincipe.org.br','abrale.org.br','hospitaldeamor.com.br','aacd.org.br','acaodacidadania.org.br','fadc.org.br']){
  assert.ok(page.includes(host),host);
 }
 assert.doesNotMatch(page,/href="http:\/\//i);
 assert.doesNotMatch(page,/href="(?:javascript:|data:)/i);
});

test('telefones de urgência e serviços sociais estão presentes',()=>{
 for(const n of ['190','192','180','100','188','135','136','121'])assert.ok(page.includes(n),n);
 for(const host of ['gov.br','meu.inss.gov.br','aplicacoes.mds.gov.br','redome.inca.gov.br','hemoce.ce.gov.br'])assert.ok(page.includes(host),host);
});

test('página mantém acessibilidade e fase privada',()=>{
 assert.match(page,/name="robots" content="noindex,nofollow,noarchive"/);
 assert.match(page,/href="\.\.\/assets\/css\/acessibilidade-v37.css"/);
 assert.match(page,/src="\.\.\/assets\/js\/acessibilidade-v37.js"/);
 assert.match(page,/src="\.\.\/assets\/js\/apoio.js"/);
 assert.match(page,/href="\.\.\/assets\/css\/apoio.css"/);
 assert.match(page,/aria-live="polite"/);
 assert.match(page,/href="\.\.\/acessibilidade.html"/);
 assert.match(css,/@media print/);
 assert.match(css,/@media\(max-width:650px\)/);
});

test('novo módulo é encontrável na página inicial e no guia existente',()=>{
 assert.match(read('site/index.html'),/id="apoio-social"/);
 assert.match(read('site/index.html'),/href="apoio\/index.html"/);
 assert.match(read('site/orientacao/index.html'),/href="\.\.\/apoio\/index.html"/);
});

test('proteção anterior do portal não é substituída',()=>{
 const toml=read('netlify.toml');
 assert.match(toml,/function = "portal-guard"/);
 assert.match(toml,/publish = "site"/);
});

test('a central solidária não usa chamadas comerciais destacadas',()=>{
 assert.doesNotMatch(page,/class="btn btn-gold header-btn"/);
 assert.doesNotMatch(page,/class="whats-float"/);
 assert.match(page,/href="\.\.\/contato\.html"/);
});
