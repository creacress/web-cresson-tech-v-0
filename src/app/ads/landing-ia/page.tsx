import type { Metadata } from 'next'
import LandingIAPageClient from './LandingClient'

export const metadata: Metadata = {
  title: "Boostez votre entreprise avec l'IA | WebCressonTech",
  description: "Automatisez vos tâches chronophages, réduisez les erreurs et gagnez du temps grâce à nos solutions IA sur mesure pour PME et indépendants.",
  alternates: {
    canonical: 'https://webcresson.com/ads/landing-ia',
  },
  openGraph: {
    title: "Automatisation IA pour TPE & PME | WebCressonTech",
    description: "IA, automatisation et gain de productivité : boostez votre entreprise avec WebCressonTech.",
    url: 'https://webcresson.com/ads/landing-ia',
    images: ['https://webcresson.com/images/Logo_webcressontech.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Automatisation IA PME",
    description: "Automatisez vos processus métiers dès aujourd’hui.",
  },
  robots: {
    index: false,
    follow: false,
  },
}

export default function LandingIAPage() {
  return <LandingIAPageClient />
}
