import React from 'react';
import { Service, WithContext, FAQPage } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceTypes: string[];
  faq: {
    question: string;
    answer: string;
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
      logo: 'https://webcresson.com/Logo_webcressontech.webp',
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
        text: answer,
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
