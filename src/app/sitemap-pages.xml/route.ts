// src/app/sitemap-pages.xml/route.ts
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const runtime = 'nodejs';

type SitemapEntry = {
  path: string;
  changefreq: string;
  priority: string;
  lastmod: string;
};

export async function GET() {
  const baseUrl = "https://webcresson.com";

  const staticPaths: SitemapEntry[] = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: "2025-04-08" },
    { path: "/solutions/ia-finance", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/solutions/ia-ressources-humaines", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/solutions/ia-sante", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/solutions/logistique-ia", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/pricing", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/pricing/custom", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/scraping-intelligent", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: "2025-04-08" },
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: "2025-04-08" },
    { path: "/etude-de-cas", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/audit-gratuit", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/deep-learning", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/ia-archeologie", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/ia-generative", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/bi-ia", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/machine-learning-deep-learning", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/intelligence-artificielle", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/machine-learning", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/page-services", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/services/rpa-automatisation", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/terms-of-sale", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" },
    { path: "/legal-mentions", changefreq: "weekly", priority: "0.9", lastmod: "2025-04-08" }
  ];

  const dynamicPaths = await getDynamicPaths();

  const sitemapPages = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPaths, ...dynamicPaths]
  .map(({ path, changefreq, priority, lastmod }) => `
  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <lastmod>${lastmod}</lastmod>
  </url>`).join('')}
</urlset>`.trim();

  return new NextResponse(sitemapPages, {
    headers: { "Content-Type": "application/xml" },
  });
}

async function getDynamicPaths(): Promise<SitemapEntry[]> {
  const dynamicPagesDir = path.resolve(process.cwd(), "src/app/services");

  try {
    if (!(await fs.stat(dynamicPagesDir)).isDirectory()) {
      return [];
    }

    const serviceDirs = await fs.readdir(dynamicPagesDir);

    const paths = await Promise.all(
      serviceDirs.map(async (dir): Promise<SitemapEntry | null> => {
        const servicePath = path.resolve(dynamicPagesDir, dir);
        try {
          const files = await fs.readdir(servicePath);
          if (files.includes('page.tsx')) {
            const stats = await fs.stat(path.resolve(servicePath, 'page.tsx'));
            return {
              path: `/services/${dir}`,
              changefreq: "weekly",
              priority: "0.8",
              lastmod: stats.mtime.toISOString(),
            };
          }
        } catch (err) {
          console.error(`Erreur dans ${servicePath}:`, err);
        }
        return null;
      })
    );

    return paths.filter((p): p is SitemapEntry => p !== null);
  } catch (error) {
    console.error("Erreur lors de la lecture du dossier services:", error);
    return [];
  }
}
