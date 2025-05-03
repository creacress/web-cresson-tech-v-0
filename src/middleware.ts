import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n-config'

const ALLOWED_IPS = ['91.167.54.242']
const BLOCKED_IPS = ['139.59.136.184', '178.128.207.138']
const BLOCKED_AGENTS = ['curl', 'python', 'nmap', 'sqlmap', 'scanner']
const ALLOWED_POST_ROUTES = ['/contact', '/api/send-email']

export function middleware(request: NextRequest) {
  const url = new URL(request.url)
  const hostname = request.headers.get('host') || ''
  const userAgent = request.headers.get('user-agent')?.toLowerCase() || ''
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0'
  const path = url.pathname
  const method = request.method

  // 1. IP whitelist
  if (ALLOWED_IPS.includes(ip)) return NextResponse.next()

  // 2. Redirection www → non-www
  if (hostname.startsWith('www.')) {
    url.host = hostname.replace('www.', '')
    return NextResponse.redirect(url, 308)
  }

  // 3. Maintenance
  if (process.env.SITE_MAINTENANCE === 'true' && !path.startsWith('/maintenance')) {
    return NextResponse.redirect(new URL('/maintenance', request.url))
  }

  // 4. IP bloquée
  if (BLOCKED_IPS.includes(ip)) {
    console.warn(`⛔ IP bloquée : ${ip} (${path})`)
    return new NextResponse('Accès refusé', { status: 403 })
  }

  // 5. Blocage user-agents suspects
  if (BLOCKED_AGENTS.some(agent => userAgent.includes(agent))) {
    console.warn(`⛔ User-Agent suspect : ${userAgent} (${ip})`)
    return new NextResponse('Bot interdit', { status: 403 })
  }

  // 6. Blocage méthodes POST/PUT/DELETE sauf exceptions
  const isUnsafeMethod = ['POST', 'PUT', 'DELETE'].includes(method)
  const isAllowedPost = ALLOWED_POST_ROUTES.some(route => path.startsWith(route))
  if (isUnsafeMethod && !isAllowedPost) {
    console.warn(`🚫 Méthode ${method} interdite sur ${path}`)
    return new NextResponse('Méthode non autorisée', { status: 403 })
  }

  // 7. Redirection / vers /fr ou /pt via Accept-Language
  if (path === '/') {
    const acceptLang = request.headers.get('accept-language') || ''
    const preferredLocale = acceptLang
      .split(',')
      .map(l => l.split(';')[0])
      .map(l => l.split('-')[0])
      .find(l => locales.includes(l as typeof locales[number])) || defaultLocale

    return NextResponse.redirect(new URL(`/${preferredLocale}`, request.url))
  }

  // 8. Redirection vers /[locale]/ si pas de locale explicite dans le chemin
  const pathnameLocale = path.split('/')[1]
  if (!isValidLocale(pathnameLocale)) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${path}`, request.url))
  }

  return NextResponse.next()
}

// Matcher mis à jour pour éviter de bloquer les fichiers statiques
export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.*\\.xml).*)',
  ],
}
