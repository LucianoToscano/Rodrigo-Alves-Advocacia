import assert from 'node:assert/strict';
import {test} from 'node:test';
import {readFileSync, readdirSync} from 'node:fs';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const read=(f)=>readFileSync(join(root,f),'utf8');
function officialDV(body) { // ISO 7064 MOD 97-10 / CNJ Resolução 65 Anexo VIII
  assert.match(body,/^\d{18}$/);
  return String(98n-(BigInt(body+'00')%97n)).padStart(2,'0');
}
function checkCNJ(number){
  const n=number.replace(/\D/g,'');
  if(n.length!==20) return false;
  return n.slice(7,9)===officialDV(n.slice(0,7)+n.slice(9));
}
test('CNJ fixture: dois zeros (0₁ 0₀), não 0100',()=>{
  assert.equal(officialDV('000000120248260100'),'39');
  assert.equal(checkCNJ('0000001-39.2024.8.26.0100'),true);
  assert.equal(checkCNJ('0000001-15.2024.8.26.0100'),false);
  assert.equal(checkCNJ('0000001-99.2024.8.26.0100'),false);
  assert.equal(checkCNJ('0000001-39.2024.8.26.010O'),false);
});
test('CNJ end-user JS uses same official formula',()=>{
 const s=read('site/assets/js/servicos.js');
 assert.match(s,/raw\.slice\(0,7\)\+raw\.slice\(9\)\+'00'/);
 assert.ok(!s.includes("+'0100'"));
});
test('Netlify protection routes are static, ordered and unambiguous',()=>{
 const toml=read('netlify.toml'),login=read('netlify/edge-functions/portal-login.ts'),guard=read('netlify/edge-functions/portal-guard.ts');
 assert.match(toml,/function\s*=\s*"portal-guard"\s+path\s*=\s*"\/\*"/);
 assert.doesNotMatch(toml,/function\s*=\s*"portal-login"/);
 assert.match(login,/path:\s*'\/__acesso\/entrar'/);
 assert.match(login,/rateLimit:\s*\{windowLimit:5,windowSize:60/);
 assert.doesNotMatch(guard,/export\s+const\s+config\s*=/);
});
test('home does not offer unusable intake form and has direct contacts',()=>{
 const s=read('site/index.html');
 assert.ok(!s.includes('data-ra-contact=""'));
 assert.ok(!s.includes('data-netlify="true"'));
 assert.match(s,/ra-contact-direct/);
 assert.match(s,/mailto:rodrigoalves\.advprev@gmail\.com/);
 assert.match(s,/wa\.me\/5584996150539/);
});
test('private phase: 37 pages noindex; historical assets preserved',()=>{
 const dir=join(root,'site');
 function collect(p) {return readdirSync(p,{withFileTypes:true}).flatMap(ent=>ent.isDirectory()?collect(join(p,ent.name)):[join(p,ent.name)]);}
 const pages=collect(dir).filter(p=>p.endsWith('.html'));
 assert.equal(pages.length,37);
 for(const p of pages) assert.match(readFileSync(p,'utf8'),/content="noindex,nofollow,noarchive"\s+name="robots"/);
 for(const name of ['rodrigo-hero-v2.webp','rodrigo-mobile-v2.webp','rodrigo-perfil-v2.webp']) assert.ok(collect(dir).some(p=>p.endsWith('/'+name)));
});
