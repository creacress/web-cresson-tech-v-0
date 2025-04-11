'use client';

import React from 'react';
import { Service, WithContext, FAQPage, ContactPoint } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceTypes: string[];
  faq: {
    question: string;
    answer: React.ReactNode | null | undefined;
  }[];
}

const ServiceSchema: React.FC<ServiceSchemaProps> = ({
  serviceName,
  serviceDescription,
  serviceTypes,
  faq,
}) => {
  const serviceSchema: WithContext<Service> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Organization',
      name: 'Web Cresson Tech',
      url: 'https://webcresson.com',
      logo: 'https://webcresson.com/images/Logo_webcressontech.webp',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+33 7 66 02 96 32',
        contactType: 'Service Client',
        areaServed: 'FR',
        availableLanguage: ['Français', 'Anglais', 'Portugais'],
        url: 'https://webcresson.com/contact',
      } as ContactPoint,
    },
    serviceType: serviceTypes,
    areaServed: 'France',
  };

  const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          typeof answer === 'string'
            ? answer
            : answer?.toString().replace(/<[^>]*>/g, '') || 'Réponse non disponible',
      },
    })),
  };

  return (
    <>
      <JsonLd item={serviceSchema} />
      <JsonLd item={faqSchema} />
    </>
  );
};

export default ServiceSchema;
