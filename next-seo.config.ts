// next-seo.config.ts
const siteUrl = 'https://webcresson.com'

export const defaultSeo = {
  title: 'Solutions IA & RPA sur-mesure | WebCressonTech',
  description:
    'Automatisez les tâches, collectez vos données et prédisez l’avenir avec nos solutions sur-mesure en IA, RPA et scraping web.',
  canonical: siteUrl,
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    site_name: 'WebCressonTech',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'WebCressonTech',
      },
    ],
  },
  twitter: {
    handle: '@webcresson',
    site: '@webcresson',
    cardType: 'summary_large_image',
  },
}
