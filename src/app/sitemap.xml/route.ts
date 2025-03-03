import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

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

  // Ajouter des pages dynamiques (par exemple, pages de services)
  const dynamicPaths = await getDynamicPaths(); // Récupérer dynamiquement les pages à partir du dossier app/services

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

// Exemple de fonction pour récupérer dynamiquement les pages (par exemple, à partir du dossier app/services)
async function getDynamicPaths() {
  // Le dossier 'app' est maintenant utilisé dans Next.js 13 et plus, donc le chemin est différent
  const dynamicPagesDir = path.join(process.cwd(), "app", "services"); // Accède au dossier app/services
  const files = await fs.readdir(dynamicPagesDir);

  // Exemple de traitement pour obtenir les pages dynamiques
  return files.map(file => ({
    path: `/services/${file.replace(".tsx", "")}`, // Enlève l'extension .tsx et génère le chemin
    changefreq: "weekly",
    priority: "0.8",
    lastmod: "2025-03-03", // Vous pouvez mettre à jour cette valeur dynamiquement selon vos besoins
  }));
}
