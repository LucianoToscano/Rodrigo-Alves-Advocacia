import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const content = rel => readFileSync(resolve(root,rel),'utf8');
test('AVR-001: required resources exist',()=>{
  for(const path of ['site/assets/js/assistente-rodrigo.js','site/assets/css/assistente-rodrigo.css','site/assets/img/assistente-rodrigo-poses.webp'])assert.ok(existsSync(resolve(root,path)),path);
});
test('AVR-001: internal destinations exist',()=>{
  for(const p of ['orientacao/index.html','areas/beneficio-negado-inss.html','ferramentas/organizar-documentos.html','areas/bpc-loas.html','ferramentas/checklist-bpc.html','areas/planos-de-saude.html','areas/tratamentos-e-cirurgias.html','ferramentas/guia-negativa-plano.html','seguranca.html','servicos/verificacao.html','contato.html'])assert.ok(existsSync(resolve(root,'site',p)),p);
});
test('AVR-001: script loader and privacy',()=>{
  const global=content('site/assets/js/site.js');
  const guide=content('site/assets/js/assistente-rodrigo.js');
  assert.match(global,/js\/assistente-rodrigo\.js/);
  assert.match(guide,/prefers-reduced-motion/);
  assert.match(guide,/localStorage/);
  assert.doesNotMatch(guide,/fetch\s*\(|XMLHttpRequest|apiKey|process\.env|eval\s*\(/);
  assert.match(guide,/Este personagem é um guia ilustrado/);
});
test('AVR-001: sprite asset is a WebP',()=>{
  const b=readFileSync(resolve(root,'site/assets/img/assistente-rodrigo-poses.webp'));
  assert.equal(b.toString('ascii',0,4),'RIFF');
  assert.equal(b.toString('ascii',8,12),'WEBP');
});