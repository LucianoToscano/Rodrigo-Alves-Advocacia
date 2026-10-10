import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const content=rel=>readFileSync(resolve(root,rel),'utf8');
test('AVR-001: recursos históricos V1 e V3 permanecem disponíveis',()=>{
 for(const p of ['site/assets/js/assistente-rodrigo.js','site/assets/css/assistente-rodrigo.css','site/assets/img/assistente-rodrigo-poses.webp','site/assets/img/assistente-rodrigo-v3.webp'])assert.ok(existsSync(resolve(root,p)),p);
});
test('AVR-001: destinos internos educativos disponíveis',()=>{
 for(const p of ['orientacao/index.html','areas/beneficio-negado-inss.html','ferramentas/organizar-documentos.html','areas/bpc-loas.html','ferramentas/checklist-bpc.html','areas/planos-de-saude.html','areas/tratamentos-e-cirurgias.html','ferramentas/guia-negativa-plano.html','seguranca.html','servicos/verificacao.html','contato.html'])assert.ok(existsSync(resolve(root,'site',p)),p);
});
test('AVR-001: carregador, limites educativos e privacidade',()=>{
 const global=content('site/assets/js/site.js'),guide=content('site/assets/js/assistente-rodrigo.js');
 assert.match(global,/js\/assistente-rodrigo\.js/);
 assert.match(guide,/prefers-reduced-motion/);
 assert.match(guide,/localStorage/);
 assert.doesNotMatch(guide,/fetch\s*\(|XMLHttpRequest|apiKey|process\.env|eval\s*\(/);
 assert.match(guide,/Sou um guia ilustrado do site/);
});
test('AVR-001: folha original V1 preservada sem carregar na V3',()=>{
 const b=readFileSync(resolve(root,'site/assets/img/assistente-rodrigo-poses.webp'));
 assert.equal(b.toString('ascii',0,4),'RIFF');
 assert.equal(b.toString('ascii',8,12),'WEBP');
 assert.doesNotMatch(content('site/assets/js/assistente-rodrigo.js'),/assistente-rodrigo-poses\.webp/);
});