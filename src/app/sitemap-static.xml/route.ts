import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

export async function GET() {
  const baseUrl = 'https://webcresson.com'
  const root = path.resolve(process.cwd(), 'src/app')
  const today = new Date().toISOString().split('T')[0]

  const ignoredDirs = ['api', 'services', 'solutions', 'sitemap-pages.xml', 'sitemap-services.xml', 'sitemap-solutions.xml', 'sitemap-images.xml', 'sitemap-static.xml', 'sitemap.xml', 'robots.txt']

  const pages: string[] = []

  const walk = async (dir: string, prefix = '') => {
    const entries = await fs.readdir(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (ignoredDirs.includes(entry.name)) continue
      const fullPath = path.join(dir, entry.name)
      const relativePath = path.relative(root, fullPath)
      const webPath = `/${prefix}${entry.name}`.replace(/\/page\.tsx$/, '').replace(/\/index\.tsx$/, '')

      if (entry.isDirectory()) {
        await walk(fullPath, `${prefix}${entry.name}/`)
      } else if (entry.name === 'page.tsx') {
        pages.push(webPath)
      }
    }
  }

  await walk(root)

  const xmlItems = pages.map(p => `
  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`

  return new NextResponse(xml, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
