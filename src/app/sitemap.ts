// src/app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://www.webcresson.com'
    const now = new Date()

    const routes = [
      '/',
      '/about',
      '/blog',
      // Blog sections
      '/blog/debutant',
      '/blog/ia-education',
      '/blog/ia-entreprise',
      '/blog/ia-finance',
      '/blog/ia-industrie',
      '/blog/ia-operations',
      '/blog/ia-services',
      '/blog/intelligence-artificelle',

      '/contact',
      '/bug-bounty',
      '/developpement-python',
      '/IA',
      '/IA/Dev',
      '/maintenance',
      '/pricing',
      '/pricing/custom',
      '/services',
      // Services pages
      '/services/analyse-semantique-nlp',
      '/services/audit-gratuit',
      '/services/bi-ia',
      '/services/data-engineering',
      '/services/developpement-api',
      '/services/generateur-ia',
      '/services/ia-archeologie',
      '/services/ia-generative',
      '/services/intelligence-artificielle',
      '/services/machine-deep-learning',
      '/services/rpa-automatisation',
      '/services/scraping-intelligent',

      '/solutions',
      '/solutions/julie',
      '/solutions/lisa',
      '/solutions/marc',
      '/website',
    ].filter(route => route !== '/api')

    return routes.map((url) => ({
        url: `${base}${url}`,
        lastModified: now,
        changeFrequency: url === '/' ? 'daily' : 'weekly',
        priority: url === '/' ? 1 : 0.7,
    }))
}