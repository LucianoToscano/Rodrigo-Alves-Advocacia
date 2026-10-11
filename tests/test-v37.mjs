import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const site=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../site');
const read=p=>fs.readFileSync(path.join(site,p),'utf8');
const guide=read('orientacao/index.html'),checklist=read('ferramentas/organizar-documentos.html'),access=read('acessibilidade.html');
const choices=['bpc','negativa','saude','medicamentos','acidente','pericia','golpe'];
const pages=()=>{
  const visit=p=>fs.readdirSync(p,{withFileTypes:true}).flatMap(x=>x.isDirectory()?visit(path.join(p,x.name)):[path.join(p,x.name)]);
  return visit(site).filter(p=>p.endsWith('.html'));
};
test('all seven document categories in select and lists, no sensitive text input',()=>{
  for(const k of choices){assert.match(checklist,new RegExp(`value="${k}"`));assert.match(checklist,new RegExp(`data-docset="${k}"`));}
  assert.equal((checklist.match(/<option /g)||[]).length,7);
  assert.equal((checklist.match(/data-docset=/g)||[]).length,7);
  assert.doesNotMatch(checklist,/<input[^>]*(?:type="file"|name="cpf"|type="text")/i);
});
test('each guidance scenario has a relevant checklist deep link, without personal values',()=>{
 for(const k of choices)assert.ok(guide.includes(`organizar-documentos.html?assunto=${k}`));
 assert.equal((guide.match(/class="ra-guide-checklink"/g)||[]).length,7);
});
test('category switching uses allowlisted URL code and browser print without storage',()=>{
 const js=read('assets/js/ferramentas.js');
 assert.match(js,/validKeys=new Set/);assert.match(js,/validKeys\.has\(fromLink\)/);
 assert.match(js,/window\.print\(\)/);assert.doesNotMatch(js,/fetch\(|sendBeacon|localStorage|sessionStorage/);
});
test('accessibility page includes specific paths for screen reader, hearing, motor and alternate contact',()=>{
 for(const term of ['NVDA','VoiceOver','TalkBack','Libras','Tab','Espaço','WhatsApp','mailto:rodrigoalves.advprev@gmail.com'])assert.ok(access.includes(term));
 assert.match(access,/role="status"/);assert.match(access,/data-ra-contrast/);
 assert.match(access,/data-ra-vlibras-enable/);
});
test('VLibras is explicit user-choice and not loaded by page HTML automatically',()=>{
 assert.doesNotMatch(access,/<script[^>]+src="https:\/\/vlibras/);
 const js=read('assets/js/acessibilidade-v37.js');
 assert.match(js,/enable\?\.addEventListener\('click'/);
 assert.match(js,/vlibras\.gov\.br\/app\/vlibras-plugin\.js/);
 assert.doesNotMatch(js,/eval\(|innerHTML\s*=/);
});
test('speech synthesis requires click and offers cancel and unsupported browser fallback',()=>{
 const js=read('assets/js/acessibilidade-v37.js');
 assert.match(js,/SpeechSynthesisUtterance/);assert.match(js,/speechSynthesis\.cancel/);
 assert.match(js,/read\?\.addEventListener\('click'/);assert.match(js,/read\.disabled=true/);
});
test('each page offers persistent accessibility entry and styles in correct relative location',()=>{
 assert.equal(pages().length,40);
 for(const p of pages()){
  const depth=path.relative(site,p).split(path.sep).length-1;
  const rel='../'.repeat(depth);const s=fs.readFileSync(p,'utf8');
  assert.ok(s.includes(`href="${rel}acessibilidade.html"`),p);
  assert.ok(s.includes(`href="${rel}assets/css/acessibilidade-v37.css"`),p);
  assert.ok(s.includes(`src="${rel}assets/js/acessibilidade-v37.js"`),p);
 }
});
test('local storage contains preferences only and privacy notice discloses external opt-in',()=>{
 const js=read('assets/js/acessibilidade-v37.js');
 assert.match(js,/ra_display_preferences/);assert.doesNotMatch(js,/cpf|fetch\(|sendBeacon/);
 const policy=read('privacidade.html');assert.match(policy,/Preferências de acessibilidade/);assert.match(policy,/VLibras/);
});
test('no change to Edge Function or publish directory',()=>{
 const toml=fs.readFileSync(path.resolve(site,'../netlify.toml'),'utf8');
 assert.match(toml,/publish\s*=\s*"site"/);assert.match(toml,/portal-guard/);
});
