import {SIGNIN, createSession, configured, durationSeconds, isAllowedDestination,
  loginPage, privacyHeaders, secureCookie, unavailable, validPassword} from './portal-shared.ts';

export default async function portalLogin(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const duration = durationSeconds();
    if (url.pathname !== SIGNIN || request.method !== 'POST') return new Response('Método não permitido',{status:405,headers:privacyHeaders()});
    if (!configured() || duration === null) return unavailable();
    // Cross-origin forms are rejected, including in cross-origin iframes.
    if (request.headers.get('origin') !== url.origin) return new Response('Origem não autorizada.',{status:403,headers:privacyHeaders({'content-type':'text/plain'})});
    if (Number(request.headers.get('content-length') || '0') > 2048) return new Response('Solicitação inválida.',{status:413,headers:privacyHeaders({'content-type':'text/plain'})});
    if (!(request.headers.get('content-type') || '').toLowerCase().startsWith('application/x-www-form-urlencoded')) return new Response('Tipo de formulário inválido.',{status:415,headers:privacyHeaders({'content-type':'text/plain'})});
    const body = await request.text();
    if (body.length > 2048) return new Response('Solicitação inválida.',{status:413,headers:privacyHeaders({'content-type':'text/plain'})});
    const params = new URLSearchParams(body);
    const destination = isAllowedDestination(params.get('return_to'));
    if (!(await validPassword(params.get('senha') || ''))) return loginPage(destination,true);
    const cookie = secureCookie(await createSession(url.host,duration),duration);
    return new Response(null,{status:303,headers:privacyHeaders({'location':destination,'set-cookie':cookie})});
  } catch { return unavailable(); }
}
// Netlify's platform-enforced IP rate limit is critical; do not remove it.
export const config = {
  path:SIGNIN,
  method:'POST',
  onError:'fail',
  rateLimit:{windowLimit:5,windowSize:60,aggregateBy:['ip','domain']},
};
