import './globals.css'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'
import { Inter } from 'next/font/google'
import Script from 'next/script'

import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget/ChatWidget'
import { AnalyticsProvider } from '@/components/AnalyticsProvider/AnalyticsProvider'

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
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-H206EG4TH7"
          strategy="afterInteractive"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-H206EG4TH7', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`bg-black text-white min-h-screen antialiased ${inter.className}`}>
        <Toaster position="top-center" theme="dark" richColors />
        <Header />
        <AnalyticsProvider />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
