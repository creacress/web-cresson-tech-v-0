import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = "https://webcresson.com";
  const dirPath = path.resolve(process.cwd(), 'src/app/solutions');

  const today = new Date().toISOString().split('T')[0];
  let slugs: string[] = [];

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    const validDirs = await Promise.all(
      entries
        .filter(entry => entry.isDirectory())
        .map(async (entry) => {
          const pageFile = path.join(dirPath, entry.name, 'page.tsx');
          try {
            await fs.access(pageFile);
            return entry.name;
          } catch {
            return null;
          }
        })
    );

    slugs = validDirs.filter(Boolean) as string[];

  } catch (e) {
    console.error("Erreur lecture solutions:", e);
  }

  const xmlItems = slugs.map(slug => `
  <url>
    <loc>${baseUrl}/solutions/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
