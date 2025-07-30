import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous | WebCressonTech',
  description:
    "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
  alternates: {
    canonical: 'https://webcresson.com/contact',
  },
  openGraph: {
    title: 'Contactez-nous | WebCressonTech',
    description:
      "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
    url: 'https://webcresson.com/contact',
    images: [
      {
        url: 'https://webcresson.com/images/Logo_webcressontech.webp',
        width: 1200,
        height: 630,
        alt: 'WebCressonTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contactez-nous | WebCressonTech',
    description:
      "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
    images: ['https://webcresson.com/images/Logo_webcressontech.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}