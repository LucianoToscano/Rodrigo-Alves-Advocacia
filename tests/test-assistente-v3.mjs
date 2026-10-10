import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync, existsSync} from 'node:fs';
import {resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(fileURLToPath(new URL('../',import.meta.url)));
const read=p=>readFileSync(resolve(root,p),'utf8');
const js=read('site/assets/js/assistente-rodrigo.js');
const css=read('site/assets/css/assistente-rodrigo.css');

test('AVR-001 V3: arte única WebP lossless RGBA de alta resolução',()=>{
 const p=resolve(root,'site/assets/img/assistente-rodrigo-v3.webp');
 assert.ok(existsSync(p));
 const b=readFileSync(p);
 assert.equal(b.toString('ascii',0,4),'RIFF');
 assert.equal(b.toString('ascii',8,12),'WEBP');
 assert.equal(b.toString('ascii',12,16),'VP8L','lossless pixel-identical WebP');
 assert.ok(b.length>100_000,'preserve original detail');
});
test('AVR-001 V3: renderer contínuo com alternativa, sem slideshow',()=>{
 for (const piece of ["getContext('webgl2'","getContext('2d'",'gl.drawElements','requestAnimationFrame','visibilitychange','setMotion','image.style.visibility'])
  assert.ok(js.includes(piece),piece);
 assert.doesNotMatch(js,/setInterval\s*\(|setTimeout\s*\(|pose-\d+\.webp|nextAction\(/);
 assert.match(css,/\.ra-assistente-institucional/);
});
test('AVR-001 V3: segurança, acessibilidade e links de assuntos',()=>{
 for(const piece of ['previdencia','bpc','saude','seguranca','contato','prefers-reduced-motion','aria-expanded','Escape','localStorage','Sou um guia ilustrado'])
  assert.ok(js.includes(piece),piece);
 assert.doesNotMatch(js,/\bfetch\s*\(|\bXMLHttpRequest\b|\bWebSocket\b|FormData\s*\(|<input|<textarea|\beval\s*\(/);
 assert.match(css,/prefers-reduced-motion:reduce/);
 for(const dest of ['areas/beneficio-negado-inss.html','areas/bpc-loas.html','areas/planos-de-saude.html','seguranca.html','contato.html'])
  assert.ok(js.includes(dest),dest);
});
test('AVR-001 V3: carregamento independente do site principal e sem tocar o portal',()=>{
 const global=read('site/assets/js/site.js');
 assert.doesNotMatch(global,/js\/assistente-rodrigo\.js/);
 assert.doesNotMatch(global,/css\/assistente-rodrigo\.css/);
 assert.match(global,/__acesso\/sair/);
 assert.doesNotMatch(js,/RA_PRIVATE_ACCESS_PASSWORD|RA_PRIVATE_SESSION_KEY/);
});