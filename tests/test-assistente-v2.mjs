import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync,existsSync } from 'node:fs';
import path from 'node:path';
const root=path.resolve(import.meta.dirname, '..');
const js=readFileSync(path.join(root,'site/assets/js/assistente-rodrigo.js'),'utf8');
const css=readFileSync(path.join(root,'site/assets/css/assistente-rodrigo.css'),'utf8');
test('V2: ten isolated transparent poses exist',()=>{
 for(let i=1;i<=10;i++){
   const file=path.join(root,`site/assets/img/assistente-rodrigo-v2/pose-${String(i).padStart(2,'0')}.webp`);
   assert.ok(existsSync(file),file);
   const bytes=readFileSync(file);
   assert.equal(bytes.toString('ascii',0,4),'RIFF');
   assert.equal(bytes.toString('ascii',8,12),'WEBP');
 }
});
test('V2: safe guided menu, automatic idle, reduced motion',()=>{
 for(const snippet of ['setTimeout(nextAction','prefers-reduced-motion: reduce','ra-a-walking','localStorage','visibilitychange','aria-expanded','Escape','raContentRoot'])assert.ok(js.includes(snippet),snippet);
 assert.match(css,/prefers-reduced-motion:reduce/);
 assert.match(css,/ra-a-breathe/);
 assert.doesNotMatch(js,/(\bfetch\s*\(|\bXMLHttpRequest\b|\beval\s*\(|\bWebSocket\b)/);
});
test('V2: no text inputs or user cases collected',()=>{
 assert.doesNotMatch(js,/\btextarea\b|\.createElement\(['"]input['"]\)|FormData\(/);
 assert.match(js,/não recebe mensagens/i);
});