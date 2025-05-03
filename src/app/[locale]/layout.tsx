import '../../globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import type { Viewport } from 'next'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import { GoogleTagManager, GTMNoScript } from '@/components/GoogleTagManager/GoogleTagManager'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import ChatWidget from '@/components/ChatWidget/ChatWidget'
import { AnalyticsProvider } from '@/components/AnalyticsProvider/AnalyticsProvider'
import { Toaster } from 'sonner'
import { isValidLocale } from '@/lib/i18n-config'

const inter = Inter({ subsets: ['latin'], display: 'swap' })

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const validLocale = isValidLocale(locale) ? locale : 'fr'
  const baseUrl = 'https://webcresson.com'

  return (
    <html lang={validLocale} className="scroll-smooth">
      <head>
        <OrganizationSchema />

        <link rel="alternate" hrefLang="fr" href={`${baseUrl}/fr`} />
        <link rel="alternate" hrefLang="pt" href={`${baseUrl}/pt`} />
        <link rel="alternate" hrefLang="x-default" href={`${baseUrl}/fr`} />

        <GoogleTagManager />

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
              gtag('config', 'G-H206EG4TH7', { page_path: window.location.pathname });
            `,
          }}
        />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11024728642"
          strategy="afterInteractive"
        />
        <Script
          id="google-ads-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('config', 'AW-11024728642');
            `,
          }}
        />
      </head>
      <body className={`bg-black text-white min-h-screen antialiased ${inter.className}`}>
        <GTMNoScript />
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
