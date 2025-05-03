import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export const runtime = 'nodejs'

type SitemapEntry = {
  path: string
  changefreq: string
  priority: string
  lastmod: string
}

export async function GET() {
  const baseUrl = 'https://webcresson.com'
  const locale = 'pt'
  const today = new Date().toISOString().split('T')[0]

  const staticPaths: SitemapEntry[] = [
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: today },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/services/page-services", changefreq: "weekly", priority: "0.9", lastmod: today },
  ]

  const dynamicPaths = await getDynamicPaths()

  const allPaths = [...staticPaths, ...dynamicPaths]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${allPaths.map(({ path, changefreq, priority, lastmod }) => `
  <url>
    <loc>${baseUrl}/${locale}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="fr" href="${baseUrl}/fr${path}" />
    <xhtml:link rel="alternate" hreflang="pt" href="${baseUrl}/pt${path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/fr${path}" />
  </url>`).join('\n')}
</urlset>`.trim()

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}

async function getDynamicPaths(): Promise<SitemapEntry[]> {
  const dir = path.resolve(process.cwd(), 'src/app/services')
  const today = new Date().toISOString().split('T')[0]

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    const folders = entries.filter(d => d.isDirectory())

    const dynamic = await Promise.all(
      folders.map(async (folder): Promise<SitemapEntry | null> => {
        const filePath = path.join(dir, folder.name, 'page.tsx')
        try {
          const stat = await fs.stat(filePath)
          return {
            path: `/services/${folder.name}`,
            changefreq: 'weekly',
            priority: '0.8',
            lastmod: stat.mtime.toISOString().split('T')[0],
          }
        } catch {
          return null
        }
      })
    )

    return dynamic.filter((p): p is SitemapEntry => p !== null)
  } catch (err) {
    console.error('Erreur dans getDynamicPaths:', err)
    return []
  }
}
