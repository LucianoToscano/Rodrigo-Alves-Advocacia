import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..');
const js=readFileSync(path.join(root,'site/assets/js/assistente-rodrigo.js'),'utf8');
const css=readFileSync(path.join(root,'site/assets/css/assistente-rodrigo.css'),'utf8');
test('AVR-001 V2: arquivo histórico das 10 poses continua preservado',()=>{
 for(let i=1;i<=10;i++){
  const file=path.join(root,`site/assets/img/assistente-rodrigo-v2/pose-${String(i).padStart(2,'0')}.webp`);
  assert.ok(existsSync(file),file);
  const bytes=readFileSync(file);
  assert.equal(bytes.toString('ascii',0,4),'RIFF');
  assert.equal(bytes.toString('ascii',8,12),'WEBP');
 }
});
test('AVR-001 V2→V3: menu seguro e movimento agora contínuo',()=>{
 for(const snippet of ['getContext(\'webgl2\'','prefers-reduced-motion: reduce','localStorage','visibilitychange','aria-expanded','Escape'])assert.ok(js.includes(snippet),snippet);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.doesNotMatch(js,/(\bfetch\s*\(|\bXMLHttpRequest\b|\beval\s*\(|\bWebSocket\b)/);
});
test('AVR-001 V2→V3: sem entrada de dados de casos individuais',()=>{
 assert.doesNotMatch(js,/\btextarea\b|\.createElement\(['"]input['"]\)|FormData\(/);
 assert.match(js,/não envie documentos/i);
});