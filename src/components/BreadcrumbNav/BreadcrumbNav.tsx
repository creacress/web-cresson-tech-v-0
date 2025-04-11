'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideChevronRight } from 'lucide-react';

export default function BreadcrumbNav() {
  const pathname = usePathname();

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, index, array) => {
      const href = '/' + array.slice(0, index + 1).join('/');
      const label = segment
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (l) => l.toUpperCase());
      return { href, label };
    });

  return (
    <nav aria-label="Fil d’Ariane" className="mb-6 text-sm text-gray-400">
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:underline text-white">
            Accueil
          </Link>
        </li>

        {segments.map((seg, i) => (
          <li key={i} className="flex items-center gap-1">
            <LucideChevronRight className="w-4 h-4 text-gray-500" />
            {i === segments.length - 1 ? (
              <span className="text-gray-300">{seg.label}</span>
            ) : (
              <Link href={seg.href} className="hover:underline text-white">
                {seg.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
