// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.webcresson.com'
  const now = new Date()

  const routes = [
    '/', '/about', '/blog', '/contact',
    '/services', '/solutions', '/pricing',
    '/IA', '/legal-mentions', '/terms-of-sale'
  ].filter(route => route !== '/api')

  return routes.map((url) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency: url === '/' ? 'daily' : 'weekly',
    priority: url === '/' ? 1 : 0.7,
  }))
}