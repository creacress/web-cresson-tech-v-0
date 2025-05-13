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
  const today = new Date().toISOString().split('T')[0];

  const staticPaths: SitemapEntry[] = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: today },
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: today },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/pricing", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/pricing/custom", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/etude-de-cas", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/scraping-intelligent", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/services/audit-gratuit", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/page-services", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/deep-learning", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/ia-archeologie", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/ia-generative", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/bi-ia", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/machine-learning-deep-learning", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/intelligence-artificielle", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/machine-learning", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/services/rpa-automatisation", changefreq: "weekly", priority: "0.9", lastmod: today },
    { path: "/solutions/ia-finance", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/solutions/ia-ressources-humaines", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/solutions/ia-sante", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/solutions/logistique-ia", changefreq: "weekly", priority: "0.8", lastmod: today },
    { path: "/legal-mentions", changefreq: "monthly", priority: "0.6", lastmod: today },
    { path: "/terms-of-sale", changefreq: "monthly", priority: "0.6", lastmod: today },
    { path: "/ads/landing-ia", changefreq: "never", priority: "0.1", lastmod: today }
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
    const entries = await fs.readdir(dynamicPagesDir, { withFileTypes: true });
    const serviceDirs = entries.filter(dirent => dirent.isDirectory());

    const paths = await Promise.all(
      serviceDirs.map(async (dir): Promise<SitemapEntry | null> => {
        const servicePath = path.resolve(dynamicPagesDir, dir.name);
        const files = await fs.readdir(servicePath);
        if (files.includes('page.tsx')) {
          const stats = await fs.stat(path.resolve(servicePath, 'page.tsx'));
          return {
            path: `/services/${dir.name}`,
            changefreq: "weekly",
            priority: "0.8",
            lastmod: stats.mtime.toISOString().split('T')[0],
          };
        }
        return null;
      })
    );

    return paths.filter((p): p is SitemapEntry => p !== null);
  } catch (error) {
    console.error("Erreur sitemap dynamique:", error);
    return [];
  }
}