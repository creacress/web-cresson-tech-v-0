import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// Définition du type pour assurer la cohérence des chemins du sitemap
type SitemapEntry = {
  path: string;
  changefreq: string;
  priority: string;
  lastmod: string;
};

export async function GET() {
  const baseUrl = "https://webcresson.com";

  const staticPaths: SitemapEntry[] = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: "2025-03-03" },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-03" },
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: "2025-03-03" },
    { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: "2025-03-03" }
  ];

  const dynamicPaths = await getDynamicPaths();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticPaths, ...dynamicPaths]
    .map(
      ({ path, changefreq, priority, lastmod }) => `  <url>
    <loc>${baseUrl}${path}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <lastmod>${lastmod}</lastmod>
  </url>`
    ).join("")}
</urlset>`.trim();

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

async function getDynamicPaths(): Promise<SitemapEntry[]> {
  const dynamicPagesDir = path.resolve(process.cwd(), "src/app/services");

  try {
    if (!(await fs.stat(dynamicPagesDir)).isDirectory()) {
      console.error("Le dossier 'services' n'existe pas ou n'est pas un répertoire.");
      return [];
    }

    const serviceDirs = await fs.readdir(dynamicPagesDir);
    console.log("Dossiers trouvés dans 'services' :", serviceDirs);

    const paths = await Promise.all(
      serviceDirs.map(async (dir): Promise<SitemapEntry | null> => {
        const servicePath = path.resolve(dynamicPagesDir, dir);
        console.log("Exploration du répertoire :", servicePath);

        try {
          const files = await fs.readdir(servicePath);
          console.log(`Fichiers trouvés dans ${servicePath} :`, files);

          if (files.includes('page.tsx')) {
            const stats = await fs.stat(path.resolve(servicePath, 'page.tsx'));
            const lastmod = stats.mtime.toISOString();

            return {
              path: `/services/${dir}`,
              changefreq: "weekly",
              priority: "0.8",
              lastmod: lastmod,
            };
          }
        } catch (err) {
          console.error(`Erreur lors de la lecture de ${servicePath}:`, err);
        }
        return null;
      })
    );

    // Utilisation d'un Type Guard pour filtrer les valeurs nulles
    return paths.filter((path): path is SitemapEntry => path !== null);

  } catch (error) {
    console.error("Erreur lors de la lecture du dossier services:", error);
    return [];
  }
}