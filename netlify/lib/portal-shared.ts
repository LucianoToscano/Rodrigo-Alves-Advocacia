// Shared server-only utilities for the Rodrigo Alves private institutional preview.
// Never copy this file to site/ or expose environment values in responses.
export const COOKIE_NAME = '__Host-ra_private';
export const CSRF_COOKIE_NAME = '__Host-ra_login_csrf';
export const LOGIN_CSRF_SECONDS = 15 * 60;
export const SESSION_SECONDS = 12 * 60 * 60;
export const SIGNIN = '/__acesso/entrar';
export const SIGNOUT = '/__acesso/sair';
export const PUBLIC_LOGO = '/assets/img/logo-oficial-v2.webp';
export const PUBLIC_TOGGLE = '/assets/js/portal-entry.js';

const encoder = new TextEncoder();
const decoder = new TextDecoder();

function b64url(bytes: Uint8Array): string {
  let str = '';
  for (const byte of bytes) str += String.fromCharCode(byte);
  return btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}
function fromB64url(str: string): Uint8Array {
  if (!/^[A-Za-z0-9_-]+$/.test(str) || str.length > 4096) throw new Error('invalid token encoding');
  const raw = atob(str.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - str.length % 4) % 4));
  return Uint8Array.from(raw, c => c.charCodeAt(0));
}
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, s => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[s]!));
}
export function privacyHeaders(extra: Record<string, string> = {}): Headers {
  return new Headers({
    'content-type': 'text/html; charset=utf-8',
    'cache-control': 'private, no-store, max-age=0',
    'x-robots-tag': 'noindex, nofollow, noarchive',
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'no-referrer',
    'x-frame-options': 'DENY',
    'content-security-policy': "default-src 'none'; img-src 'self'; style-src 'unsafe-inline'; script-src 'self'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'; object-src 'none'",
    ...extra,
  });
}
export function unavailable(): Response {
  return new Response('Acesso temporariamente indisponível.', {
    status: 503,
    headers: privacyHeaders({'content-type':'text/plain; charset=utf-8','retry-after':'300'}),
  });
}
export function isAllowedDestination(candidate: string | null): string {
  if (!candidate || candidate.length > 512) return '/';
  // Only local paths, without protocol-relative paths, backslashes or control characters.
  if (!candidate.startsWith('/') || candidate.startsWith('//') || /[\\\x00-\x1f\x7f]/.test(candidate)) return '/';
  if (candidate.startsWith('/__acesso/') || candidate.startsWith('/.netlify/') || candidate.startsWith('/assets/')) return '/';
  try {
    const parsed = new URL(candidate, 'https://placeholder.invalid');
    if (parsed.origin !== 'https://placeholder.invalid') return '/';
    return parsed.pathname + parsed.search;
  } catch { return '/'; }
}
export function configured(): boolean {
  const password = Netlify.env.get('RA_PRIVATE_ACCESS_PASSWORD');
  const signingKey = Netlify.env.get('RA_PRIVATE_SESSION_KEY');
  return typeof password === 'string' && password.length >= 20 &&
         typeof signingKey === 'string' && signingKey.length >= 43;
}
export function durationSeconds(): number | null {
  const hours = Netlify.env.get('RA_PRIVATE_SESSION_HOURS');
  if (hours === undefined || hours === null || hours === '') return SESSION_SECONDS;
  if (!/^\d+$/.test(hours)) return null;
  const hoursValue = Number(hours);
  return hoursValue >= 1 && hoursValue <= 24 ? hoursValue * 3600 : null;
}
export function secureCookie(token: string, duration: number): string {
  return `${COOKIE_NAME}=${token}; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=${duration}`;
}
export function clearedCookie(): string {
  return `${COOKIE_NAME}=; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=0`;
}
export function constantTimeEqual(a: Uint8Array, b: Uint8Array): boolean {
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a[i] ?? 0) ^ (b[i] ?? 0);
  return diff === 0;
}
async function sha256(text: string): Promise<Uint8Array> {
  return new Uint8Array(await crypto.subtle.digest('SHA-256', encoder.encode(text)));
}
export async function validPassword(entered: string): Promise<boolean> {
  const actual = Netlify.env.get('RA_PRIVATE_ACCESS_PASSWORD');
  if (!configured() || typeof actual !== 'string' || entered.length > 256) return false;
  // Both sides are hashed and compared in constant time; secrets never reach the browser.
  return constantTimeEqual(await sha256(entered), await sha256(actual));
}
async function signingKey(): Promise<CryptoKey> {
  const secret = Netlify.env.get('RA_PRIVATE_SESSION_KEY');
  if (typeof secret !== 'string' || secret.length < 43) throw new Error('missing signing key');
  return crypto.subtle.importKey('raw', encoder.encode(secret), {name:'HMAC',hash:'SHA-256'}, false, ['sign']);
}
async function sign(value: string): Promise<string> {
  const sig = await crypto.subtle.sign('HMAC', await signingKey(), encoder.encode(value));
  return b64url(new Uint8Array(sig));
}

// Independent, short-lived CSRF token: never reuse the authenticated session signature.
export async function createLoginCsrf(host: string): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const nonce = b64url(crypto.getRandomValues(new Uint8Array(16)));
  const base = 'csrf1.' + b64url(encoder.encode(JSON.stringify({iat, exp:iat + LOGIN_CSRF_SECONDS, nonce})));
  return base + '.' + await sign('login-csrf:' + host + ':' + base);
}
export function loginCsrfCookie(token: string): string {
  return CSRF_COOKIE_NAME + '=' + token + '; Path=/; Secure; HttpOnly; SameSite=Strict; Max-Age=' + LOGIN_CSRF_SECONDS;
}
export async function validLoginCsrf(cookieHeader: string | null, submitted: string | null, host: string): Promise<boolean> {
  if (!cookieHeader || cookieHeader.length > 8192 || !submitted || submitted.length > 900 || !configured()) return false;
  const pair = cookieHeader.split(';').map(v=>v.trim()).find(v=>v.startsWith(CSRF_COOKIE_NAME + '='));
  if (!pair) return false;
  const fromCookie = pair.slice(CSRF_COOKIE_NAME.length + 1);
  if (fromCookie.length !== submitted.length || !constantTimeEqual(encoder.encode(fromCookie), encoder.encode(submitted))) return false;
  const parts = submitted.split('.');
  if (parts.length !== 3 || parts[0] !== 'csrf1') return false;
  try {
    const payload: {iat?:number,exp?:number,nonce?:string} = JSON.parse(decoder.decode(fromB64url(parts[1])));
    const expectedSignature = fromB64url(await sign('login-csrf:' + host + ':' + parts[0] + '.' + parts[1]));
    if (!constantTimeEqual(expectedSignature, fromB64url(parts[2]))) return false;
    const now = Math.floor(Date.now()/1000);
    return Number.isInteger(payload.iat) && Number.isInteger(payload.exp) &&
      typeof payload.nonce === 'string' && payload.nonce.length >= 16 &&
      payload.iat! <= now + 30 && payload.exp! > now &&
      payload.exp! - payload.iat! > 0 && payload.exp! - payload.iat! <= LOGIN_CSRF_SECONDS;
  } catch { return false; }
}

export async function createSession(host: string, duration: number): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const nonce = b64url(crypto.getRandomValues(new Uint8Array(16)));
  const payload = b64url(encoder.encode(JSON.stringify({iat, exp:iat+duration, nonce})));
  const base = `v1.${payload}`;
  return `${base}.${await sign(host + ':' + base)}`;
}
export async function validSession(cookieHeader: string | null, host: string, duration: number): Promise<boolean> {
  if (!cookieHeader || cookieHeader.length > 8192 || !configured()) return false;
  const pair = cookieHeader.split(';').map(v=>v.trim()).find(v=>v.startsWith(COOKIE_NAME + '='));
  if (!pair) return false;
  const value = pair.slice(COOKIE_NAME.length + 1);
  const parts = value.split('.');
  if (parts.length !== 3 || parts[0] !== 'v1' || !parts[1] || !parts[2]) return false;
  const base = `${parts[0]}.${parts[1]}`;
  let provided: Uint8Array;
  let payload: {iat?:number, exp?:number, nonce?:string};
  try {
    provided = fromB64url(parts[2]);
    payload = JSON.parse(decoder.decode(fromB64url(parts[1])));
  } catch { return false; }
  const expected = fromB64url(await sign(host + ':' + base));
  if (!constantTimeEqual(provided, expected)) return false;
  const now = Math.floor(Date.now() / 1000);
  return Number.isInteger(payload.iat) && Number.isInteger(payload.exp) &&
    typeof payload.nonce === 'string' && payload.nonce.length >= 16 &&
    payload.iat! <= now + 30 && payload.exp! > now &&
    payload.exp! - payload.iat! <= duration && payload.exp! - payload.iat! > 0;
}
export async function loginPage(destination = '/', error = false, host = '', invalidOrigin = false): Promise<Response> {
  const target = isAllowedDestination(destination);
  const csrf = await createLoginCsrf(host);
  const message = invalidOrigin ? '<p class="error" role="alert">Não foi possível confirmar este acesso neste navegador. Recarregue a página e tente novamente, ou utilize o navegador principal do celular.</p>' : (error ? '<p class="error" role="alert">Senha não reconhecida. Verifique e tente novamente.</p>' : '');
  const html = `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow,noarchive"><meta name="theme-color" content="#091b22"><title>Acesso privado | Rodrigo Alves Advocacia</title>
  <style>
  :root{color-scheme:dark;font-family:system-ui,-apple-system,"Segoe UI",sans-serif}*{box-sizing:border-box}html,body{margin:0;min-height:100%}body{min-height:100dvh;color:#f5f0e8;background:radial-gradient(ellipse at 70% -10%,rgba(159,138,95,.18),transparent 42%),radial-gradient(ellipse at 0 100%,rgba(49,103,110,.3),transparent 50%),linear-gradient(144deg,#07161d,#102e36 55%,#08191f);display:grid;place-items:center;padding:28px 16px;position:relative;overflow-x:hidden}body:before{content:"";pointer-events:none;position:fixed;inset:16px;border:1px solid rgba(192,170,126,.17)}.card{width:min(100%,470px);text-align:center;position:relative;padding:48px clamp(22px,6vw,56px);background:rgba(8,22,29,.59);border:1px solid rgba(192,170,126,.25);box-shadow:0 36px 100px rgba(0,0,0,.27);backdrop-filter:blur(12px)}.rule{width:58px;height:1px;background:#baa478;margin:22px auto 25px}.brand{width:min(280px,90%);height:auto;display:block;margin:auto;object-fit:contain}.eyebrow{font-size:11px;color:#d7c39c;letter-spacing:.19em;text-transform:uppercase;font-weight:650}.copy{margin:16px auto 26px;line-height:1.7;font-size:14px;color:#c6d3d1;max-width:285px}h1{margin:0;font-family:Georgia,serif;font-weight:400;font-size:clamp(25px,5vw,32px);letter-spacing:.025em}.visually-hidden{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.field{display:flex;align-items:stretch;border:1px solid #678083;background:rgba(255,255,255,.06);min-height:51px;transition:border-color .2s}.field:focus-within{border-color:#cdb584;outline:2px solid rgba(205,181,132,.18);outline-offset:2px}.field input{appearance:none;flex:1;min-width:0;border:0;outline:0;background:transparent;color:#fff;font-size:15px;padding:14px 15px}.field input::placeholder{color:#afc0be}.eye{background:transparent;border:0;color:#ebddbd;cursor:pointer;padding:0 14px;font-size:13px}.submit{margin-top:13px;display:block;width:100%;background:linear-gradient(110deg,#c1a778,#e1c99a);border:0;min-height:50px;letter-spacing:.18em;font-size:12px;font-weight:800;color:#102029;cursor:pointer}.submit:hover{filter:brightness(1.07)}.submit:focus-visible,.eye:focus-visible{outline:2px solid #fff;outline-offset:3px}.error{font-size:13px;color:#ffd4ce;margin:10px 0;text-align:left}.footnote{margin:25px 0 0;font-size:12px;color:#97acae;line-height:1.5} @media(prefers-reduced-motion:reduce){*{transition:none!important;animation:none!important}}
  </style></head><body><main class="card"><img class="brand" width="280" height="100" src="${PUBLIC_LOGO}" alt="Rodrigo Alves | Advocacia"><div class="rule"></div><div class="eyebrow">Apresentação institucional</div><h1>Ambiente privado</h1><p class="copy">Este ambiente encontra-se em fase de desenvolvimento e revisão.</p><form method="post" action="${SIGNIN}" autocomplete="off"><input type="hidden" name="return_to" value="${escapeHtml(target)}"><input type="hidden" name="csrf" value="${escapeHtml(csrf)}"><label class="visually-hidden" for="senha">Senha de acesso</label><div class="field"><input id="senha" name="senha" type="password" required maxlength="256" autocomplete="current-password" placeholder="Digite sua senha de acesso" aria-label="Senha de acesso"><button class="eye" type="button" aria-label="Mostrar senha" aria-pressed="false">Mostrar</button></div>${message}<button class="submit" type="submit">ACESSAR SITE</button></form><p class="footnote">Acesso reservado às pessoas autorizadas.</p></main><script src="/assets/js/portal-entry.js" defer></script></body></html>`;
  return new Response(html, {status:invalidOrigin?403:(error?401:200),headers:privacyHeaders({'set-cookie':loginCsrfCookie(csrf)})});
}
