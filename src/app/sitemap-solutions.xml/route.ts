import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://webcresson.com";
  const today = new Date().toISOString().split('T')[0];

  const solutions = [
    "/solutions/ia-finance",
    "/solutions/ia-ressources-humaines",
    "/solutions/ia-sante",
    "/solutions/logistique-ia",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${solutions.map(p => `
  <url>
    <loc>${baseUrl}${p}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
