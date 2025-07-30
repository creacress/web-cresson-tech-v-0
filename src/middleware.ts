import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
}
