'use client'

import { JsonLd } from 'react-schemaorg'
import { WithContext, Organization } from 'schema-dts'
import React from 'react'

const OrganizationSchema = () => {
  const schema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://webcresson.com/#organization',
    name: 'WebCressonTech',
    alternateName: 'WebCresson',
    url: 'https://webcresson.com',
    logo: 'https://webcresson.com/images/Logo_webcressontech.webp',
    sameAs: [
      'https://www.linkedin.com/company/webcressontech',
      'https://twitter.com/webcressontech',
      'https://www.instagram.com/webcressontech',
      'https://www.facebook.com/webcressontech'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33 7 66 02 96 32',
      contactType: 'customer support',
      areaServed: 'FR',
      availableLanguage: ['Français', 'Anglais', 'Portugais'],
      url: 'https://webcresson.com/contact'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR'
    },
    description:
      'WebCressonTech accompagne les entreprises avec des solutions IA, RPA, data et Python sur mesure.',
  }

  return <JsonLd item={schema} />
}

export default OrganizationSchema
