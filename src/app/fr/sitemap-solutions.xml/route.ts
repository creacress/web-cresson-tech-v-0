import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  const baseUrl = 'https://webcresson.com'
  const locale = 'pt'
  const today = new Date().toISOString().split('T')[0]

  const solutions = [
    '/solutions/ia-finance',
    '/solutions/ia-ressources-humaines',
    '/solutions/ia-sante',
    '/solutions/logistique-ia',
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${solutions.map(path => `
  <url>
    <loc>${baseUrl}/${locale}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr${path}" />
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/pt${path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/fr${path}" />
  </url>`).join('\n')}
</urlset>`.trim()

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
