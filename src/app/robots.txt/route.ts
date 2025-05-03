import { NextResponse } from 'next/server'

export const runtime = 'edge' // optimal pour ce type de fichier

export async function GET() {
  const isProd = process.env.NODE_ENV === 'production'
  const baseUrl = 'https://webcresson.com'

  const content = isProd
    ? `
User-agent: *
Allow: /

Disallow: /admin/
Disallow: /api/
Disallow: /private/
Disallow: /temp/
Disallow: /scripts/
Disallow: /404
Disallow: /500

Sitemap: ${baseUrl}/sitemap.xml
`.trim()
    : `
User-agent: *
Disallow: /
# Environnement non prod : tout bloqué
`.trim()

  return new NextResponse(content, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
