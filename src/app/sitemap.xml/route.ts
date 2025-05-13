import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://webcresson.com";

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap-static.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-services.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-solutions.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap-images.xml</loc>
  </sitemap>
</sitemapindex>`;

  return new NextResponse(sitemapIndex, {
    headers: { "Content-Type": "application/xml" },
  });
}
