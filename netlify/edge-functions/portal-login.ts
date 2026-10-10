import {SIGNIN, createSession, configured, durationSeconds, isAllowedDestination,
  loginPage, privacyHeaders, secureCookie, unavailable, validPassword, validLoginCsrf} from '../lib/portal-shared.ts';
import {isSameOriginSubmission} from '../lib/portal-origin.ts';

export default async function portalLogin(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const duration = durationSeconds();
    if (url.pathname !== SIGNIN || request.method !== 'POST') return new Response('Método não permitido',{status:405,headers:privacyHeaders()});
    if (!configured() || duration === null) return unavailable();
    // Header metadata may be absent/rewritten in embedded mobile browsers.
    // Validate a signed, host-bound double-submit cookie before accepting ambiguous requests.
    if (Number(request.headers.get('content-length') || '0') > 2048) return new Response('Solicitação inválida.',{status:413,headers:privacyHeaders({'content-type':'text/plain'})});
    if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/x-www-form-urlencoded')) return new Response('Tipo de formulário inválido.',{status:415,headers:privacyHeaders({'content-type':'text/plain'})});
    const body = await request.text();
    if (body.length > 2048) return new Response('Solicitação inválida.',{status:413,headers:privacyHeaders({'content-type':'text/plain'})});
    const params = new URLSearchParams(body);
    const destination = isAllowedDestination(params.get('return_to'));
    if (!isSameOriginSubmission(request) &&
        !(await validLoginCsrf(request.headers.get('cookie'), params.get('csrf'), url.host))) {
      // Do not expose a blank 403 page: issue a fresh cookie and signed form for retry.
      return await loginPage(destination, false, url.host);
    }
    if (!(await validPassword(params.get('senha') || ''))) return await loginPage(destination,true,url.host);
    const cookie = secureCookie(await createSession(url.host,duration),duration);
    return new Response(null,{status:303,headers:privacyHeaders({'location':destination,'set-cookie':cookie})});
  } catch { return unavailable(); }
}
// Netlify's platform-enforced IP rate limit is critical; do not remove it.
export const config = {
  path:'/__acesso/entrar', // MUST be a literal for Netlify's static config parser
  method:'POST',
  onError:'fail',
  rateLimit:{windowLimit:5,windowSize:60,aggregateBy:['ip','domain']},
};
