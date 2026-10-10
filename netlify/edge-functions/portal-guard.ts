import {COOKIE_NAME, SIGNIN, SIGNOUT, PUBLIC_LOGO, PUBLIC_TOGGLE, configured, durationSeconds,
  isAllowedDestination, loginPage, unavailable, validSession, clearedCookie, privacyHeaders} from './portal-shared.ts';

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
    if (path === SIGNOUT) {
      if (method !== 'POST') return new Response('Método não permitido', {status:405,headers:privacyHeaders({'content-type':'text/plain'})});
      if (request.headers.get('origin') !== url.origin) return new Response('Origem não autorizada.', {status:403,headers:privacyHeaders({'content-type':'text/plain'})});
      return new Response(null,{status:303,headers:privacyHeaders({'location':'/','set-cookie':clearedCookie()})});
    }

    const loggedIn = await validSession(request.headers.get('cookie'), url.host, duration);
    if (!loggedIn) {
      if (method !== 'GET' && method !== 'HEAD') return new Response('Autenticação necessária.',{status:401,headers:privacyHeaders({'content-type':'text/plain'})});
      const destination = isAllowedDestination(url.pathname + url.search);
      // Never return HTML to requests for protected binary assets or data files.
      const html = path === '/' || path.endsWith('/') || path.endsWith('.html') || !/\.[a-zA-Z0-9]{1,8}$/.test(path);
      if (!html) return new Response('Autenticação necessária.',{status:401,headers:privacyHeaders({'content-type':'text/plain'})});
      return loginPage(destination);
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
export const config = {path:'/*',onError:'fail'};
