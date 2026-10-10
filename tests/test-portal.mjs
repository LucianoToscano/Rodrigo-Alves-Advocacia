import assert from 'node:assert/strict';
import {test} from 'node:test';
import {webcrypto} from 'node:crypto';
if (!globalThis.crypto) globalThis.crypto = webcrypto;
const secrets = {
  RA_PRIVATE_ACCESS_PASSWORD: 'A-MOCK-PASSWORD-WITH-VERY-HIGH-ENTROPY-123',
  RA_PRIVATE_SESSION_KEY: 'A-MOCK-SESSION-KEY-1234567890-ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  RA_PRIVATE_SESSION_HOURS:'12',
};
globalThis.Netlify = {env:{get:name=>secrets[name]}};
const gate = await import('../netlify/edge-functions/portal-guard.ts');
const login = await import('../netlify/edge-functions/portal-login.ts');
const shared = await import('../netlify/lib/portal-shared.ts');
const origin = 'https://rodrigo-alves-advocacia.netlify.app';
let passed=0;
function req(path='/',opts={}){return new Request(origin+path,opts)}
const ctx = {next: async ()=>new Response('<p>conteudo privado</p>',{headers:{'content-type':'text/html'}})};
async function signedIn(dest='/'){
 const response=await login.default(req('/__acesso/entrar',{method:'POST',headers:{origin,'content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({senha:secrets.RA_PRIVATE_ACCESS_PASSWORD,return_to:dest})}));
 assert.equal(response.status,303);
 const cookie=response.headers.get('set-cookie').split(';')[0];
 return {cookie,response};
}
for (const path of ['/','/index.html','/seguranca','/areas/planos-de-saude.html','/assets/css/site.css','/assets/js/config.js','/data/conteudos.json','/assets/img/rodrigo-hero-v2.webp','/robots.txt']) {
 test(`nao autenticado: ${path}`,async()=>{
  const result=await gate.default(req(path),ctx);
  assert.ok(result.status===200||result.status===401);
  assert.equal((await result.text()).includes('conteudo privado'),false);
  passed++;
 });
}
test('tela privada original presente, sem menu e sem segredo',async()=>{
 const result=await gate.default(req('/'),ctx);
 const html=await result.text();
 assert.match(html,/RODRIGO|Rodrigo Alves/);
 assert.match(html,/Ambiente privado/);
 assert.match(html,/ACESSAR SITE/);
 assert.match(html,/logo-oficial-v2.webp/);
 assert.ok(!html.includes(secrets.RA_PRIVATE_ACCESS_PASSWORD));
 assert.equal(result.headers.get('x-robots-tag'),'noindex, nofollow, noarchive');
 passed++;
});
test('somente logo pode ser lida em publico',async()=>{
 assert.equal((await gate.default(req('/assets/img/logo-oficial-v2.webp'),ctx)).status,200);
 assert.equal((await gate.default(req('/assets/img/rodrigo-mobile-v2.webp'),ctx)).status,401);
 passed++;
});
test('credenciais ausentes: fail-closed',async()=>{
 const backup=secrets.RA_PRIVATE_SESSION_KEY;delete secrets.RA_PRIVATE_SESSION_KEY;
 try{assert.equal((await gate.default(req('/index.html'),ctx)).status,503);assert.equal((await login.default(req('/__acesso/entrar',{method:'POST',headers:{origin,'content-type':'application/x-www-form-urlencoded'},body:'senha=foo'}))).status,503);}finally{secrets.RA_PRIVATE_SESSION_KEY=backup}passed++;
});
test('senha incorreta nao gera cookie',async()=>{
 const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{origin,'content-type':'application/x-www-form-urlencoded'},body:'senha=errada'}));
 assert.equal(res.status,401);assert.equal(res.headers.has('set-cookie'),false);passed++;
});
test('login cria cookie seguro por 12 horas e permite pagina e asset',async()=>{
 const {response,cookie}=await signedIn('/seguranca.html');
 const h=response.headers.get('set-cookie');
 assert.match(h,/HttpOnly/);assert.match(h,/Secure/);assert.match(h,/SameSite=Lax/);assert.match(h,/Max-Age=43200/);
 assert.equal(response.headers.get('location'),'/seguranca.html');
 assert.equal((await gate.default(req('/seguranca.html',{headers:{cookie}}),ctx)).status,200);
 assert.equal((await gate.default(req('/assets/js/site.js',{headers:{cookie}}),ctx)).status,200);
 passed++;
});
test('adulteracao da assinatura nao concede acesso',async()=>{
 const {cookie}=await signedIn();const modified=cookie.slice(0,-1)+(cookie.endsWith('A')?'B':'A');
 const res=await gate.default(req('/areas/bpc-loas.html',{headers:{cookie:modified}}),ctx);
 assert.notEqual(await res.text(),'<p>conteudo privado</p>');passed++;
});
test('sessao expirada negada e rotacao de segredo revoga acesso',async()=>{
 const {cookie}=await signedIn();
 const realNow=Date.now;Date.now=()=>realNow()+13*60*60*1000;
 try{assert.equal(await shared.validSession(cookie,new URL(origin).host,43200),false);}finally{Date.now=realNow;}
 const k=secrets.RA_PRIVATE_SESSION_KEY;secrets.RA_PRIVATE_SESSION_KEY='ROTATED-SESSION-KEY-ABCDEFGHIJKLMNOPQRSTUVWXYZ-1234567890';
 try{assert.equal(await shared.validSession(cookie,new URL(origin).host,43200),false);}finally{secrets.RA_PRIVATE_SESSION_KEY=k;}passed++;
});
test('saida apaga cookie e bloqueia POST cross-origin',async()=>{
 const {cookie}=await signedIn();
 const denied=await gate.default(req('/__acesso/sair',{method:'POST',headers:{cookie,origin:'https://evil.example'}}),ctx);assert.equal(denied.status,403);
 const response=await gate.default(req('/__acesso/sair',{method:'POST',headers:{cookie,origin}}),ctx);
 assert.equal(response.status,303);assert.match(response.headers.get('set-cookie'),/Max-Age=0/);passed++;
});
test('login POST cross-origin negado',async()=>{
 const response=await login.default(req('/__acesso/entrar',{method:'POST',headers:{origin:'https://evil.example','content-type':'application/x-www-form-urlencoded'},body:'senha=1'}));assert.equal(response.status,403);passed++;
});

test('login sem Origin: metadado same-origin permite envio legitimo',async()=>{
 const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{'sec-fetch-site':'same-origin','content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({senha:secrets.RA_PRIVATE_ACCESS_PASSWORD,return_to:'/seguranca.html'})}));
 assert.equal(res.status,303);assert.match(res.headers.get('set-cookie'),/HttpOnly/);passed++;
});
test('login sem Origin: Referer exato pode validar navegador legado',async()=>{
 const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{referer:origin+'/index.html','content-type':'application/x-www-form-urlencoded'},body:new URLSearchParams({senha:secrets.RA_PRIVATE_ACCESS_PASSWORD})}));
 assert.equal(res.status,303);passed++;
});
test('login sem Origem, Referer ou Fetch Metadata falha fechado',async()=>{
 const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded'},body:'senha=qualquer'}));
 assert.equal(res.status,403);assert.equal(res.headers.has('set-cookie'),false);passed++;
});
test('Origin externa nunca e sobrescrita por Sec-Fetch-Site same-origin',async()=>{
 const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{origin:'https://evil.example','sec-fetch-site':'same-origin','content-type':'application/x-www-form-urlencoded'},body:'senha=qualquer'}));
 assert.equal(res.status,403);passed++;
});
test('Origin nula, parecida e mesmo site em subdominio sao rejeitados',async()=>{
 for(const headers of [{origin:'null','sec-fetch-site':'same-origin'},{origin:origin+'.evil.example'},{'sec-fetch-site':'same-site'}]){
  const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{...headers,'content-type':'application/x-www-form-urlencoded'},body:'senha=qualquer'}));
  assert.equal(res.status,403);
 }passed++;
});
test('Sec-Fetch-Site cross-site rejeita mesmo quando Origin coincide',async()=>{
 const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{origin,'sec-fetch-site':'cross-site','content-type':'application/x-www-form-urlencoded'},body:'senha=qualquer'}));
 assert.equal(res.status,403);passed++;
});
test('Referer externa ou malformada rejeitada mesmo com Sec-Fetch-Site same-origin',async()=>{
 for(const referer of ['https://evil.example/','%%%']){
  const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{referer,'sec-fetch-site':'same-origin','content-type':'application/x-www-form-urlencoded'},body:'senha=qualquer'}));
  assert.equal(res.status,403);
 }passed++;
});
test('logout aceita sinal same-origin sem Origin e bloqueia contradicoes',async()=>{
 const good=await gate.default(req('/__acesso/sair',{method:'POST',headers:{'sec-fetch-site':'same-origin'}}),ctx);
 assert.equal(good.status,303);assert.match(good.headers.get('set-cookie'),/Max-Age=0/);
 const bad=await gate.default(req('/__acesso/sair',{method:'POST',headers:{origin,'sec-fetch-site':'cross-site'}}),ctx);
 assert.equal(bad.status,403);passed++;
});
test('cabecalho X-Forwarded-Host nao substitui prova de origem',async()=>{
 const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{'x-forwarded-host':new URL(origin).host,'content-type':'application/x-www-form-urlencoded'},body:'senha=qualquer'}));
 assert.equal(res.status,403);passed++;
});
test('Origin igual mas Referer contraditoria e rejeitada',async()=>{
 const res=await login.default(req('/__acesso/entrar',{method:'POST',headers:{origin,referer:'https://evil.example','content-type':'application/x-www-form-urlencoded'},body:'senha=qualquer'}));
 assert.equal(res.status,403);passed++;
});

test('redirecionamento externo bloqueado',async()=>{
 assert.equal(shared.isAllowedDestination('//evil.test'),'/');
 assert.equal(shared.isAllowedDestination('/\\evil.test'),'/');
 assert.equal(shared.isAllowedDestination('https://evil.test'),'/');
 assert.equal(shared.isAllowedDestination('/__acesso/sair'),'/');
 assert.equal(shared.isAllowedDestination('/areas/bpc-loas.html?x=1'),'/areas/bpc-loas.html?x=1');passed++;
});
test('limite de tentativas configurado na infraestrutura',()=>{
 assert.deepEqual(login.config.rateLimit,{windowLimit:5,windowSize:60,aggregateBy:['ip','domain']});passed++;
});
console.log('Testes registrados:',passed);
