import { NextResponse } from 'next/server'

export async function GET() {
  const isProd = process.env.NODE_ENV === 'production'
  const baseUrl = 'https://webcresson.com'

  const robots = isProd
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
Sitemap: ${baseUrl}/sitemap-static.xml
Sitemap: ${baseUrl}/sitemap-services.xml
Sitemap: ${baseUrl}/sitemap-solutions.xml
Sitemap: ${baseUrl}/sitemap-images.xml
`.trim()
    : `
User-agent: *
Disallow: /
# Blocage complet sur non-prod
`.trim()

  return new NextResponse(robots, {
    headers: { 'Content-Type': 'text/plain' },
  })
}
