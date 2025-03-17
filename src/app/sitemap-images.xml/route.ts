import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://webcresson.com";
  const images = [
    { url: "/Logo_webcressontech.webp", title: "Logo WebCressonTech" },
    { url: "/logo_la_poste.webp", title: "Logo La Poste" },
    { url: "/Logo_webcressontech.ico", title: "Favicon WebCressonTech" },
    { url: "/deep-learning.webp", title: "Illustration Deep Learning" },
    { url: "/Machine_Learning.webp", title: "Illustration Machine Learning" },
    { url: "/Développement_IA.webp", title: "Développement en Intelligence Artificielle" },
    { url: "/rpa.webp", title: "Automatisation RPA" },
    { url: "/robot_humain_main.webp", title: "Interaction Humain-Robot" },
    { url: "/favicon.ico", title: "Favicon du site" }
  ];

  const sitemapImages = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images
    .map(
      ({ url, title }) => `  <url>
    <loc>${baseUrl}${url}</loc>
    <image:image>
      <image:loc>${baseUrl}${url}</image:loc>
      <image:title>${title}</image:title>
    </image:image>
  </url>`
    ).join("\n")}
</urlset>`;

  return new NextResponse(sitemapImages, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
