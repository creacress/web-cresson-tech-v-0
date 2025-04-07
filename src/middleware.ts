import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')

  if (hostname?.startsWith('www.')) {
    const newURL = new URL(request.url)
    newURL.host = hostname.replace('www.', '')
    return NextResponse.redirect(newURL, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Ne redirige pas assets, api, etc.
}
