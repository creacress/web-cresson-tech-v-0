import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://webcresson.com";

  // Définition des chemins statiques avec leurs métadonnées SEO
  const staticPaths = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: "2025-03-01" },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: "2025-03-01" },
    { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: "2025-03-01" },
    { path: "/services/audit-ia", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/services/ia-generative", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/services/maintenance-predictive", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/services/rpa-ia", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/services/ia-traitement-images", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/services/ia-sur-mesure", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/services/ia-archeologie", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/services/integration-saas-ia", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/services/pricing-analyse-avancee", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-01" },
    { path: "/TermsOfSale", changefreq: "yearly", priority: "0.6", lastmod: "2025-03-01" },
    { path: "/LegalMentions", changefreq: "yearly", priority: "0.6", lastmod: "2025-03-01" },
  ];

  // Génération du contenu XML du sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPaths
    .map(
      ({ path, changefreq, priority, lastmod }) => `
  <url>
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
