// src/app/ads/landing-ia/page.tsx
import { Suspense } from 'react'
import type { Metadata } from 'next'
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema'
import ServiceSchema from '@/components/ServiceShema/ServiceSchema'
import LandingClient from '@/components/LandingClient/LandingClient'

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
    images: ['https://webcresson.com/images/og-home.webp'],
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

export default function LandingPage() {
    
  return (
    <>
      <BreadcrumbSchema />
      <ServiceSchema
        serviceName="Solutions IA pour PME & Indépendants"
        serviceDescription="Automatisez vos processus métiers, réduisez les erreurs et gagnez du temps grâce à nos solutions IA sur mesure."
        serviceTypes={['Automatisation IA', 'Services IA pour PME', 'Productivité augmentée']}
        faq={[
          {
            question: 'Combien de temps pour une automatisation ?',
            answer: '1 à 2 semaines en moyenne pour automatiser un processus (data, mails, factures, etc.)',
          },
          {
            question: 'Est-ce compatible avec mes outils ?',
            answer: 'Oui : Google Sheets, Notion, ERP, Zapier, CRM, etc.',
          },
          {
            question: 'Quel budget faut-il prévoir ?',
            answer: 'À partir de 890€, avec ROI en moins d’un mois dans 70% des cas.',
          },
        ]}
      />
      <Suspense fallback={<p className="text-center text-gray-400 mt-12">Chargement du formulaire IA…</p>}>
        <LandingClient />
      </Suspense>
    </>
  )
}
