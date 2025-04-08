// src/app/sitemap-images.xml/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = "https://webcresson.com";
  const images = [
    { url: "/images/Logo_webcressontech.webp", title: "Logo WebCressonTech" },
    { url: "/images/logo_la_poste.webp", title: "Logo La Poste" },
    { url: "/images/Logo_webcressontech.ico", title: "Favicon WebCressonTech" },
    { url: "/images/deep-learning.webp", title: "Illustration Deep Learning" },
    { url: "/images/Machine_Learning.webp", title: "Illustration Machine Learning" },
    { url: "/images/Développement_IA.webp", title: "Développement en Intelligence Artificielle" },
    { url: "/images/rpa.webp", title: "Automatisation RPA" },
    { url: "/images/robot_humain_main.webp", title: "Interaction Humain-Robot" },
    { url: "/images/Logo_webcressontech.ico", title: "Favicon du site" }
  ];

  const sitemapImages = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${images.map(({ url, title }) => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <image:image>
      <image:loc>${baseUrl}${url}</image:loc>
      <image:title>${title}</image:title>
    </image:image>
  </url>`).join('')}
</urlset>`.trim();

  return new NextResponse(sitemapImages, {
    headers: { "Content-Type": "application/xml" },
  });
}
