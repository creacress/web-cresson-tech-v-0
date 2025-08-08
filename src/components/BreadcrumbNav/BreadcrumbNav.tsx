'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideChevronRight } from 'lucide-react';
import { useMemo } from 'react';

export default function BreadcrumbNav() {
  const pathname = usePathname() || '/';

  // Prettify a single URL segment -> label
  const humanize = (s: string) =>
    decodeURIComponent(s)
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

  const segments = useMemo(() => {
    const parts = pathname.split('/').filter(Boolean);
    return parts.map((segment, index) => {
      const href = '/' + parts.slice(0, index + 1).join('/');
      const label = humanize(segment);
      return { href, label };
    });
  }, [pathname]);

  return (
    <nav
      aria-label="Fil d’Ariane"
      className="mb-6 text-sm text-gray-400"
    >
      {/* Schema.org BreadcrumbList via microdata */}
      <ol
        className="flex flex-wrap items-center gap-1"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        <li
          className="flex items-center"
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <Link
            href="/"
            className="text-white hover:text-[#00e0ff] transition-colors"
            itemProp="item"
          >
            <span itemProp="name">Accueil</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>

        {segments.map((seg, i) => {
          const isLast = i === segments.length - 1;
          return (
            <li
              key={seg.href}
              className="flex items-center gap-1"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              <LucideChevronRight className="w-4 h-4 text-gray-500" aria-hidden="true" />

              {isLast ? (
                <span
                  className="text-gray-300"
                  aria-current="page"
                  itemProp="name"
                >
                  {seg.label}
                </span>
              ) : (
                <Link
                  href={seg.href}
                  className="text-white hover:text-[#00e0ff] transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{seg.label}</span>
                </Link>
              )}

              {/* Schema position: home is 1, so offset by 2 here */}
              <meta itemProp="position" content={(i + 2).toString()} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
