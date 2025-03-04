import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET() {
  const baseUrl = "https://webcresson.com";

  const staticPaths = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: "2025-03-03" },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-03" },
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: "2025-03-03" },
    { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: "2025-03-03" },
    { path: "/services/ia-generative", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-03" },
    { path: "/services/deep-learning", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-03" },
    { path: "/services/machine-learning", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-03" },
    { path: "/services/rpa-automatisation", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-03" },
    { path: "/services/ia-archeologie", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-03" },
    { path: "/TermsOfSale", changefreq: "yearly", priority: "0.6", lastmod: "2025-03-03" },
    { path: "/LegalMentions", changefreq: "yearly", priority: "0.6", lastmod: "2025-03-03" },
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
    )
    .join("")}
</urlset>`.trim();

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}

async function getDynamicPaths() {
  const dynamicPagesDir = path.join(process.cwd(), "src", "app", "services");

  try {
    const serviceDirs = await fs.readdir(dynamicPagesDir);

    // Déclare un tableau de chemins avec des valeurs valides seulement
    const paths: ({ path: string, changefreq: string, priority: string, lastmod: string } | null)[] = await Promise.all(
      serviceDirs.map(async (dir) => {
        const servicePath = path.join(dynamicPagesDir, dir);

        try {
          const files = await fs.readdir(servicePath);
          if (files.includes('page.tsx')) {
            const stats = await fs.stat(path.join(servicePath, 'page.tsx'));
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
        return null; // Retourne null si 'page.tsx' n'est pas trouvé
      })
    );

    // Filtrer les valeurs nulles et assurer que le tableau a uniquement des objets valides
    return paths.filter((path): path is { path: string, changefreq: string, priority: string, lastmod: string } => path !== null);
  } catch (error) {
    console.error("Erreur lors de la lecture du dossier services:", error);
    return [];
  }
}

