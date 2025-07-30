'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

type OverrideMap = Record<string, string>

type Props = {
  baseUrl?: string
  overrides?: OverrideMap
}

const fallbackMap: OverrideMap = {
  ia: 'Intelligence Artificielle',
  rpa: 'Automatisation (RPA)',
  python: 'Développement Python',
  services: 'Nos Services',
  contact: 'Contact',
  blog: 'Blog',
}
export default function BreadcrumbJsonLd({
  baseUrl = 'https://www.webcresson.com',
  overrides = {},
}: Props) {
  const pathname = usePathname()

  const segments = pathname
    .split('/')
    .filter(Boolean)
    .map((segment, i, arr) => {
      const cleanSegment = segment.replace(/[-_]/g, ' ')
const name = overrides[segment] || fallbackMap[segment] || decodeURIComponent(cleanSegment)
      const url = `${baseUrl}/${arr.slice(0, i + 1).join('/')}`
      return { name, url }
    })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: baseUrl },
      ...segments.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: item.name,
        item: item.url,
      })),
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
