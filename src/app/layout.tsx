import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { Play } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'
import { GoogleTagManager, GTMNoScript } from '../components/GoogleTagManager/GoogleTagManager'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from "@/components/CookieModal/CookieModal";
import AnalyticsScripts from '@/components/AnalyticsProvider/AnalyticsScripts';

const play = Play({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Agence IA & Automatisation | WebCressonTech – Solutions Python & RPA sur mesure',
  description:
    "Découvrez comment WebCressonTech transforme vos process grâce à l'IA, la RPA et Python. Audit gratuit & solutions personnalisées.",
  keywords: ['Agence IA', 'support automatisation', 'WebCressonTech', 'expert IA', 'Python'],
  alternates: {
    canonical: 'https://webcresson.com',
  },
  openGraph: {
    title: 'Agence IA & RPA | WebCressonTech',
    description: "WebCressonTech, votre partenaire pour l'IA et l'automatisation.",
    url: 'https://webcresson.com',
    siteName: 'WebCresson Tech',
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
    title: "WebCressonTech, votre partenaire pour l'IA et l'automatisation",
    description: "Discutons de vos projets IA & automatisation.",
    images: ['https://webcresson.com/images/Logo_webcressontech.webp'],
    creator: '@WebCresson',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Web Cresson Tech" />
        <meta name="description" content="Découvrez comment WebCressonTech transforme vos process grâce à l'IA, la RPA et Python. Audit gratuit & solutions personnalisées." />
        <link rel="icon" href="/images/Logo_webcressontech.ico" />
        <link rel="canonical" href="https://webcresson.com/" />

        {/* Google Tag Manager */}
        <GoogleTagManager />
      </head>

      <body className={`bg-black text-white min-h-screen antialiased ${play.className}`}>
        <GTMNoScript />
        <Toaster position="top-center" theme="dark" richColors />
        <Header />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />
        <CookieConsent />
        <AnalyticsScripts />
      </body>
    </html>
  )
}
