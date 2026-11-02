import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {dirname,join,resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>readFileSync(join(root,p),'utf8');

test('Central do Cidadão contém oito caminhos de apoio e fontes governamentais',()=>{
  const c=read('site/servicos/index.html');
  assert.match(c,/id="apoio-cidadao"/);
  assert.equal((c.match(/class="ra-citizen-card"/g)||[]).length,8);
  for(const source of ['www.gov.br/mds','www.gov.br/saude','www.gov.br/ans','www.bcb.gov.br','www.dpu.def.br']){
    assert.ok(c.includes(source),source);
  }
  for(const term of ['CRAS','CREAS','SAMU','192','136','NIP','Pix','doação de sangue']){
    assert.match(c,new RegExp(term,'i'));
  }
});

test('Apoio ao Cidadão não inclui formulário nem cria cadastro de dados pessoais',()=>{
  const c=read('site/servicos/index.html');
  const section=c.match(/<section class="ra-citizen"[^>]*>([\s\S]*?)<\/section>/)?.[1];
  assert.ok(section);
  assert.doesNotMatch(section,/<form\b|<input\b|type="file"|data-netlify/);
  assert.match(section,/não recebe documentos/);
});

test('Glossário apresenta doze termos, com busca apenas local',()=>{
  const html=read('site/orientacao/index.html');
  const js=read('site/assets/js/orientacao-v36.js');
  assert.match(html,/id="glossario"/);
  assert.match(html,/data-glossary-search/);
  assert.equal((html.match(/data-glossary-entry/g)||[]).length,12);
  assert.match(html,/Auxílio-doença/);
  assert.match(html,/NIP da ANS/);
  assert.match(js,/data-glossary-search/);
  assert.match(js,/status\.textContent/);
  assert.doesNotMatch(js,/fetch\(|sendBeacon|localStorage|sessionStorage/);
});

test('Página inicial oferece acesso humano e reforça conferência contra golpes',()=>{
  const home=read('site/index.html');
  assert.match(home,/class="ra-citizen-home"/);
  assert.match(home,/servicos\/index.html#apoio-cidadao/);
  assert.match(home,/orientacao\/index.html#glossario/);
  assert.match(home,/seguranca.html/);
  assert.match(home,/noindex,nofollow,noarchive/);
});

test('Política LGPD informa fornecedores e impressão preserva listas',()=>{
  const policy=read('site/privacidade.html');
  const css=read('site/assets/css/acessibilidade-v37.css');
  assert.match(policy,/Google Fonts/);
  assert.match(policy,/VLibras/);
  assert.match(policy,/www.gov.br\/anpd/);
  assert.match(css,/@page\s*\{\s*size:\s*A4/);
  assert.match(css,/break-inside:avoid/);
});

test('Novos recursos não alteram autenticação, deploy e o bloqueio noindex',()=>{
  const t=read('netlify.toml');
  assert.match(t,/function\s*=\s*"portal-guard"/);
  assert.match(t,/path\s*=\s*"\/\*"/);
  for(const p of ['site/index.html','site/servicos/index.html','site/orientacao/index.html']){
    assert.match(read(p),/noindex,nofollow,noarchive/);
  }
});
