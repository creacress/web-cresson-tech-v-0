import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function makeNonce() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) binary += String.fromCharCode(bytes[i]);
  // base64
  return btoa(binary);
}

const ALLOWED_IPS = ['91.167.54.242']
const BLOCKED_IPS = ['139.59.136.184', '178.128.207.138']
const ALLOWED_POST_ROUTES = ['/contact', '/api/send-email']

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const hostname = request.headers.get('host') || ''
  const userAgent = (request.headers.get('user-agent') || '').toLowerCase()
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0'
  const path = url.pathname
  const method = request.method

  // --- CSP nonce per request
  const nonce = makeNonce();

  // Propagate the nonce to the app via a request header
  const reqHeaders = new Headers(request.headers);
  reqHeaders.set('x-nonce', nonce);

  // --- 1. Autoriser les IP spécifiques
  if (ALLOWED_IPS.includes(ip)) return NextResponse.next()

  // --- 2. Redirection www → non-www
  if (hostname.startsWith('www.')) {
    url.host = hostname.replace('www.', '')
    return NextResponse.redirect(url, 308)
  }

  // --- 3. Mode maintenance
  const maintenanceEnabled = process.env.SITE_MAINTENANCE === 'true'
  if (maintenanceEnabled && !path.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', request.url))
  }

  // --- 4. Blocage IP
  if (BLOCKED_IPS.includes(ip)) {
    console.warn(`⛔ IP bloquée : ${ip} (${path})`)
    return new NextResponse('Accès refusé', { status: 403 })
  }

  // --- 5. Blocage user-agents suspects
  const blockedPattern = /curl|python|nmap|sqlmap|scanner/i
  if (blockedPattern.test(userAgent)) {
    console.warn(`⛔ User-Agent suspect : ${userAgent} (${ip})`)
    return new NextResponse('Bot interdit', { status: 403 })
  }

  // --- 6. Blocage méthodes HTTP sauf routes spécifiques
  const isUnsafeMethod = ['POST', 'PUT', 'DELETE'].includes(method)
  const isAllowedPost = ALLOWED_POST_ROUTES.some(route => path.startsWith(route))
  if (isUnsafeMethod && !isAllowedPost) {
    console.warn(`🚫 Méthode ${method} interdite sur ${path}`)
    return new NextResponse('Méthode non autorisée', { status: 403 })
  }

  const res = NextResponse.next({ request: { headers: reqHeaders } });
  const isProd = process.env.NODE_ENV === 'production';
  if (isProd) {
    // Strict CSP with nonce + strict-dynamic (no unsafe-inline in scripts)
    const csp = [
      "default-src 'self'",
      `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' https: data:",
      "font-src 'self' https://fonts.gstatic.com data:",
      "connect-src 'self' https:",
      "frame-ancestors 'none'",
      "frame-src https://www.googletagmanager.com",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "upgrade-insecure-requests"
    ].join('; ');
    res.headers.set('Content-Security-Policy', csp);
    if (request.nextUrl.protocol === 'https:') {
      // 1 year HSTS + includeSubDomains + preload (adjust max-age gradually if needed)
      res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    }
    res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  }
  return res;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
