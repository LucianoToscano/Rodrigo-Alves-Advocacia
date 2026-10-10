import {COOKIE_NAME, SIGNIN, SIGNOUT, SIGNOUT_TOKEN, PUBLIC_LOGO, PUBLIC_TOGGLE, configured, durationSeconds,
  isAllowedDestination, loginPage, unavailable, validSession, clearedCookie, privacyHeaders, createLogoutCsrf, validLogoutCsrf} from '../lib/portal-shared.ts';
import {isSameOriginSubmission} from '../lib/portal-origin.ts';

// Important: this MUST be installed on /*, including images, JSON, scripts, and internal routes.
export default async function portalGuard(request: Request, context: any): Promise<Response | void> {
  try {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;
    if (method === 'OPTIONS') return new Response(null, {status:405,headers:privacyHeaders()});

    // Exception strictly needed to display the actual original brand logo before login.
    if ((path === PUBLIC_LOGO || path === PUBLIC_TOGGLE) && (method === 'GET' || method === 'HEAD')) {
      return context.next();
    }
    // The login handler on this exact path performs server-side verification and rate limiting.
    if (path === SIGNIN) {
      if (method !== 'POST') return new Response('Método não permitido', {status:405,headers:privacyHeaders({'content-type':'text/plain'})});
      return context.next();
    }
    const duration = durationSeconds();
    if (!configured() || duration === null) return unavailable();
    if (path === SIGNOUT_TOKEN) {
      if (method !== 'GET') return new Response('Método não permitido', {status:405,headers:privacyHeaders({'content-type':'text/plain'})});
      const header = request.headers.get('cookie');
      if (!(await validSession(header, url.host, duration))) {
        return new Response('Autenticação necessária.', {status:401,headers:privacyHeaders({'content-type':'text/plain'})});
      }
      const token = await createLogoutCsrf(header, url.host);
      if (!token) return unavailable();
      return new Response(JSON.stringify({token}), {status:200,headers:privacyHeaders({'content-type':'application/json; charset=utf-8'})});
    }
    if (path === SIGNOUT) {
      if (method !== 'POST') return new Response('Método não permitido', {status:405,headers:privacyHeaders({'content-type':'text/plain'})});
      if (!isSameOriginSubmission(request)) {
        if (Number(request.headers.get('content-length')||'0') > 1024) return new Response('Solicitação inválida.',{status:413,headers:privacyHeaders({'content-type':'text/plain'})});
        if (!(request.headers.get('content-type')||'').toLowerCase().startsWith('application/x-www-form-urlencoded')) {
          return new Response('Tipo de formulário inválido.',{status:415,headers:privacyHeaders({'content-type':'text/plain'})});
        }
        const body = await request.text();
        if (body.length > 1024 || !(await validLogoutCsrf(request.headers.get('cookie'), new URLSearchParams(body).get('csrf'), url.host))) {
          return new Response('Não foi possível confirmar a saída. Recarregue o site e tente novamente.',{status:403,headers:privacyHeaders({'content-type':'text/plain'})});
        }
      }
      return new Response(null,{status:303,headers:privacyHeaders({'location':'/','set-cookie':clearedCookie()})});
    }

    const loggedIn = await validSession(request.headers.get('cookie'), url.host, duration);
    if (!loggedIn) {
      if (method !== 'GET' && method !== 'HEAD') return new Response('Autenticação necessária.',{status:401,headers:privacyHeaders({'content-type':'text/plain'})});
      const destination = isAllowedDestination(url.pathname + url.search);
      // Never return HTML to requests for protected binary assets or data files.
      const html = path === '/' || path.endsWith('/') || path.endsWith('.html') || !/\.[a-zA-Z0-9]{1,8}$/.test(path);
      if (!html) return new Response('Autenticação necessária.',{status:401,headers:privacyHeaders({'content-type':'text/plain'})});
      return await loginPage(destination, false, url.host);
    }
    const next = await context.next();
    const headers = new Headers(next.headers);
    headers.set('cache-control','private, no-store, max-age=0');
    headers.set('x-robots-tag','noindex, nofollow, noarchive');
    headers.set('vary','Cookie');
    return new Response(next.body,{status:next.status,statusText:next.statusText,headers});
  } catch {
    return unavailable(); // Never allow a failed check to fall through to public content.
  }
}
// Guard route is declared exclusively in netlify.toml (before the login function).
// The default Netlify error handling fails closed, never bypasses this guard.
