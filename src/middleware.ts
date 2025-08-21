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
const ALLOWED_PATHS = ['/IA/Dev'];

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

  // --- Bypass protections for specific internal endpoints (e.g., dev/probing)
  if (ALLOWED_PATHS.some(p => path.startsWith(p))) {
    return NextResponse.next({ request: { headers: reqHeaders } });
  }

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
  const isHttps = request.nextUrl.protocol === 'https:';

  // Strict CSP with nonce + strict-dynamic. In dev we allow eval for Webpack/runtime.
  const allowUnsafeEval = process.env.NODE_ENV !== 'production' || request.nextUrl.searchParams.get('csp-relax') === '1';

  const scriptSrcParts = [
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://www.googleadservices.com',
    'https://pagead2.googlesyndication.com',
    'https://www.gstatic.com',
    'https://apis.google.com',
    'https://va.vercel-scripts.com',
  ];
  const scriptSrcElemParts = [
    `script-src-elem 'self' 'nonce-${nonce}' 'strict-dynamic'`,
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://www.googleadservices.com',
    'https://pagead2.googlesyndication.com',
    'https://www.gstatic.com',
    'https://apis.google.com',
    'https://va.vercel-scripts.com',
  ];
  if (allowUnsafeEval) {
    scriptSrcParts.push("'unsafe-eval'", "'wasm-unsafe-eval'");
    scriptSrcElemParts.push("'unsafe-eval'", "'wasm-unsafe-eval'");
  }

  const csp = [
    "default-src 'self'",
    scriptSrcParts.join(' '),
    scriptSrcElemParts.join(' '),
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    "img-src 'self' https: data: blob:",
    "font-src 'self' https://fonts.gstatic.com data:",
    "connect-src 'self' https: wss:",
    "frame-ancestors 'none'",
    "frame-src https://www.googletagmanager.com https://www.google.com",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self' https://www.google.com",
    'upgrade-insecure-requests',
  ].join('; ');

  res.headers.set('Content-Security-Policy', csp);

  if (isHttps) {
    res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  }
  res.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
  return res;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
