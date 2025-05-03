// lib/generate-sitemap.ts
const BASE_URL = 'https://webcresson.com'

export function generateMultilangSitemap(paths: string[], locale: 'fr' | 'pt') {
  const today = new Date().toISOString().split('T')[0]

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${paths
    .map((p) => {
      const cleanPath = p.startsWith('/') ? p : `/${p}`
      const url = `${BASE_URL}/${locale}${cleanPath}`

      return `
  <url>
    <loc>${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${BASE_URL}/fr${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="pt" href="${BASE_URL}/pt${cleanPath}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/fr${cleanPath}" />
  </url>`
    })
    .join('\n')}
</urlset>`
}
