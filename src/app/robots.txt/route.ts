import { NextResponse } from "next/server"

export const runtime = "edge"

export async function GET() {
  const content = `
User-agent: *
Allow: /

Disallow: /admin/
Disallow: /api/
Disallow: /404
Disallow: /500
Disallow: /private/
Disallow: /temp/
Disallow: /scripts/

Sitemap: https://webcresson.com/sitemap.xml
Sitemap: https://webcresson.com/sitemap-pages.xml
Sitemap: https://webcresson.com/sitemap-images.xml

# Sécurité
Security: https://webcresson.com/.well-known/security.txt
PGP: https://webcresson.com/pgp-key.txt
  `.trim()

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
