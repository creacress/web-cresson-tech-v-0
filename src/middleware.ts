import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale, isValidLocale, Locale } from '@/lib/i18n-config'

const ALLOWED_IPS = ['91.167.54.242']
const BLOCKED_IPS = ['139.59.136.184', '178.128.207.138']
const BLOCKED_AGENTS = ['curl', 'python', 'nmap', 'sqlmap', 'scanner']
const ALLOWED_POST_ROUTES = ['/contact', '/api/send-email']

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const path = url.pathname
  const method = request.method
  const hostname = request.headers.get('host') || ''
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0'

  // 1. IP whitelist
  if (ALLOWED_IPS.includes(ip)) {
    console.info(`✅ IP whitelistée : ${ip} (${path})`)
    return NextResponse.next()
  }

  // 2. Redirect www → non-www
  if (hostname.startsWith('www.')) {
    url.host = hostname.replace('www.', '')
    return NextResponse.redirect(url, 308)
  }

  // 3. Maintenance mode
  if (process.env.SITE_MAINTENANCE === 'true' && !path.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', request.url))
  }

  // 4. IP bloquée
  if (BLOCKED_IPS.includes(ip)) {
    console.warn(`⛔ IP bloquée : ${ip} (${path})`)
    return new NextResponse('Accès refusé', { status: 403 })
  }

  // 5. Bot user-agent
  if (BLOCKED_AGENTS.some(agent => userAgent.includes(agent))) {
    console.warn(`⛔ User-Agent suspect : ${userAgent} (${ip})`)
    return new NextResponse('Bot interdit', { status: 403 })
  }

  // 6. Méthodes HTTP interdites
  const isUnsafeMethod = ['POST', 'PUT', 'DELETE'].includes(method)
  const isAllowedPost = ALLOWED_POST_ROUTES.some(route => path.startsWith(route))
  if (isUnsafeMethod && !isAllowedPost) {
    console.warn(`🚫 Méthode ${method} interdite sur ${path}`)
    return new NextResponse('Méthode non autorisée', { status: 403 })
  }

  // 7. Rediriger `/` → `/locale` via cookie > Accept-Language > fallback
  if (path === '/') {
    const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
    if (cookieLocale && isValidLocale(cookieLocale)) {
      return NextResponse.redirect(new URL(`/${cookieLocale}`, request.url))
    }

    const acceptLang = request.headers.get('accept-language') || ''
    const preferredLocale = acceptLang
      .split(',')
      .map(l => l.split(';')[0].trim())
      .map(l => l.split('-')[0])
      .find((l): l is Locale => isValidLocale(l)) ?? defaultLocale

    return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url))
  }

  // 8. Si pas de locale → redirection
  const pathnameLocale = path.split('/')[1]
  if (!isValidLocale(pathnameLocale)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${path}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.*\\.xml).*)',
  ],
}
