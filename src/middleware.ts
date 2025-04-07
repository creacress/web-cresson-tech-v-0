import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')

  // Redirection www → root
  if (hostname?.startsWith('www.')) {
    const newURL = new URL(request.url)
    newURL.host = hostname.replace('www.', '')
    return NextResponse.redirect(newURL, 308)
  }

  // Maintenance mode activé (via .env)
  const maintenanceEnabled = process.env.SITE_MAINTENANCE === 'true'
  const isNotMaintenancePage = !request.nextUrl.pathname.startsWith('/maintenance')

  if (maintenanceEnabled && isNotMaintenancePage) {
    const maintenanceUrl = new URL('/maintenance', request.url)
    return NextResponse.redirect(maintenanceUrl)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Ne redirige pas assets, api, favicon, etc.
}
