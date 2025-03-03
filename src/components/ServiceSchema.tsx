import React from 'react';
import { Service, WithContext, FAQPage } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';
import ReactDOMServer from 'react-dom/server';  // Importer ReactDOMServer pour convertir JSX en HTML

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceTypes: string[];
  faq: {
    question: string;
    answer: React.ReactNode | null | undefined;  // Permet à `answer` d'être null ou undefined
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
        text: answer ? ReactDOMServer.renderToStaticMarkup(answer) : '',  // Conversion de JSX en texte HTML
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
