import { ReactNode } from 'react';
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema';

export default function ServiceLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BreadcrumbSchema />
      {children}
    </>
  );
}
