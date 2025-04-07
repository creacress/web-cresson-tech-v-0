// components/seo/PageSeo.tsx
'use client'

import { NextSeo } from 'next-seo'

type PageSeoProps = {
  title: string
  description: string
  path?: string
  image?: string
}

export default function PageSeo({
  title,
  description,
  path = '',
  image = 'https://webcresson.com/og-image.png',
}: PageSeoProps) {
  const baseUrl = 'https://webcresson.com'
  const url = `${baseUrl}${path}`

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        url,
        title,
        description,
        site_name: 'WebCressonTech',
        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }}
      twitter={{
        cardType: 'summary_large_image',
      }}
    />
  )
}
