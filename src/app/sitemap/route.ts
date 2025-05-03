import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET() {
  const baseUrl = 'https://webcresson.com'

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${baseUrl}/fr/sitemap-static.xml</loc></sitemap>
  <sitemap><loc>${baseUrl}/pt/sitemap-static.xml</loc></sitemap>

  <sitemap><loc>${baseUrl}/fr/sitemap-services.xml</loc></sitemap>
  <sitemap><loc>${baseUrl}/pt/sitemap-services.xml</loc></sitemap>

  <sitemap><loc>${baseUrl}/fr/sitemap-solutions.xml</loc></sitemap>
  <sitemap><loc>${baseUrl}/pt/sitemap-solutions.xml</loc></sitemap>

  <sitemap><loc>${baseUrl}/fr/sitemap-pages.xml</loc></sitemap>
  <sitemap><loc>${baseUrl}/pt/sitemap-pages.xml</loc></sitemap>

  <sitemap><loc>${baseUrl}/sitemap-images.xml</loc></sitemap>
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
