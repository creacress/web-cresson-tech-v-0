const siteUrl = 'https://webcresson.com'

export const seoByLocale = {
  fr: {
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
          url: `${siteUrl}/images/Logo_webcressontech.webp`,
          width: 1200,
          height: 630,
          alt: 'WebCressonTech IA & Automatisation',
        },
      ],
    },
    twitter: {
      handle: '@webcresson',
      site: '@webcresson',
      cardType: 'summary_large_image',
      title: 'WebCressonTech',
      description: 'Experts IA & Python pour automatiser et scaler vos processus.',
      images: [`${siteUrl}/images/Logo_webcressontech.webp`],
    },
  },

  pt: {
    title: 'Soluções personalizadas de IA e RPA | WebCressonTech',
    description:
      'Automatize tarefas, colete dados e preveja o futuro com soluções sob medida em IA, RPA e scraping web.',
    canonical: `${siteUrl}/pt`,
    openGraph: {
      type: 'website',
      locale: 'pt_PT',
      url: `${siteUrl}/pt`,
      site_name: 'WebCressonTech',
      images: [
        {
          url: `${siteUrl}/images/Logo_webcressontech.webp`,
          width: 1200,
          height: 630,
          alt: 'WebCressonTech IA & Automação',
        },
      ],
    },
    twitter: {
      handle: '@webcresson',
      site: '@webcresson',
      cardType: 'summary_large_image',
      title: 'WebCressonTech',
      description: 'Especialistas em IA & Python para automatizar seus processos.',
      images: [`${siteUrl}/images/Logo_webcressontech.webp`],
    },
  },
}
