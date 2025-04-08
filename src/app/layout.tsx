// src/app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Solutions IA & RPA sur-mesure | Votre booster d’automatisation',
  description:
    'Automatisez les tâches, collectez vos données et prédisez l’avenir avec nos solutions sur-mesure en IA, RPA et scraping web.',
  metadataBase: new URL('https://webcresson.com'),
  openGraph: {
    title: 'Solutions IA & RPA sur-mesure',
    description: 'Boostez votre croissance avec l’automatisation et l’IA prédictive.',
    type: 'website',
    url: 'https://webcresson.com',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions IA & RPA sur-mesure',
    description: 'Automatisation, IA prédictive et scraping web intelligent.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`bg-black text-white min-h-screen antialiased ${inter.className}`}>
      <Toaster position="top-center" theme="dark" richColors />
        <Header />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />
      </body>
    </html>
  )
}
