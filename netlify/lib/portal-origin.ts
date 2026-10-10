export function isSameOriginSubmission(request: Request): boolean {
  const expectedOrigin = new URL(request.url).origin;
  const origin = request.headers.get('origin');
  const referer = request.headers.get('referer');
  const fetchSite = request.headers.get('sec-fetch-site');
  if (fetchSite !== null && fetchSite !== 'same-origin') return false;
  if (origin !== null && origin !== expectedOrigin) return false;
  if (referer !== null) {
    try { if (new URL(referer).origin !== expectedOrigin) return false; }
    catch { return false; }
  }
  return origin !== null || referer !== null || fetchSite === 'same-origin';
}
