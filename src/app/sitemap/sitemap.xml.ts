import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://webcresson.com";

  // Définition des chemins statiques avec leurs métadonnées SEO
  const staticPaths = [
    { path: "/", changefreq: "daily", priority: "1.0", lastmod: "2025-03-02" },
    { path: "/contact", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-02" },
    { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: "2025-03-02" },
    { path: "/services", changefreq: "weekly", priority: "0.9", lastmod: "2025-03-02" },
    { path: "/services/ia-generative", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-02" },
    { path: "/services/deep-learning", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-02" },
    { path: "/services/machine-learning", changefreq: "weekly", priority: "0.8", lastmod: "2025-03-02" },
    { path: "/services/rpa-automatisation", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-02" },
    { path: "/services/ia-archeologie", changefreq: "monthly", priority: "0.8", lastmod: "2025-03-02" },
    { path: "/TermsOfSale", changefreq: "yearly", priority: "0.6", lastmod: "2025-03-02" },
    { path: "/LegalMentions", changefreq: "yearly", priority: "0.6", lastmod: "2025-03-02" },
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
