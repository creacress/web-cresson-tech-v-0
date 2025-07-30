'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const AnalyticsProvider = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && pathname !== '/') {
      window.gtag('config', 'G-H206EG4TH7', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};
