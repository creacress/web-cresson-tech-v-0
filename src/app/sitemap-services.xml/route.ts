import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = "https://webcresson.com";
  const dirPath = path.resolve(process.cwd(), "src/app/services");

  let entries: string[] = [];

  try {
    const serviceDirs = await fs.readdir(dirPath);
    entries = await Promise.all(
      serviceDirs.map(async (dir) => {
        const pagePath = path.join(dirPath, dir, 'page.tsx');
        try {
          const stats = await fs.stat(pagePath);
          return `<url>
  <loc>${baseUrl}/services/${dir}</loc>
  <lastmod>${stats.mtime.toISOString().split('T')[0]}</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.8</priority>
</url>`;
        } catch {
          return '';
        }
      })
    );
  } catch {
    entries = [];
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${entries.filter(Boolean).join('\n')}
</urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
