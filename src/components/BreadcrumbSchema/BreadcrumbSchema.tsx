'use client';

import { usePathname } from 'next/navigation';
import { BreadcrumbList, WithContext, ListItem } from 'schema-dts';
import { JsonLd } from 'react-schemaorg';

const BreadcrumbSchema = () => {
  const pathname = usePathname();

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array): ListItem => {
      const name = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());

      const item = `https://webcresson.com/${array.slice(0, index + 1).join('/')}`;

      return {
        '@type': 'ListItem',
        position: index + 2, // position 1 = Accueil
        name,
        item,
      };
    });

  const breadcrumb: WithContext<BreadcrumbList> = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://webcresson.com',
      },
      ...segments,
    ],
  };

  return <JsonLd<BreadcrumbList> item={breadcrumb} />;
};

export default BreadcrumbSchema;
