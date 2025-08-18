import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Toaster } from 'sonner'
import { Play } from 'next/font/google'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next'
import { GTMNoScript } from '../components/GoogleTagManager/GoogleTagManager'
import Script from 'next/script'
import { headers } from 'next/headers'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CookieConsent from "@/components/CookieModal/CookieModal";
import AnalyticsScripts from '@/components/AnalyticsProvider/AnalyticsScripts';
import PageTransition from '@/components/ui/PageTransition'
export const dynamic = 'force-dynamic';
const play = Play({ subsets: ['latin'], display: 'swap', weight: ['400', '700'] })

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0b0b0b",
  colorScheme: "dark",
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://webcresson.com"),
  title: {
    default: "Agence IA & Automatisation | WebCressonTech – Solutions Python & RPA sur mesure",
    template: "%s | WebCressonTech",
  },
  description:
    "Découvrez comment WebCressonTech transforme vos process grâce à l'IA, la RPA et Python. Audit gratuit & solutions personnalisées.",
  keywords: [
    "Agence IA",
    "Automatisation RPA",
    "WebCressonTech",
    "Expert IA",
    "Python",
    "Agents IA",
    "Intégration IA PME",
    "Audit IA gratuit",
    "Agence IA PME",
    "Automatisation Python",
    "Déploiement RPA France",
    "Consultant IA Paris",
    "Intégration IA entreprise",
    "Audit IA PME",
    "Agent IA personnalisé"
  ],
  referrer: "origin-when-cross-origin",
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "Agence IA & RPA | WebCressonTech",
    description: "WebCressonTech, votre partenaire pour l'IA et l'automatisation.",
    url: "/",
    siteName: "WebCressonTech",
    images: [
      {
        url: "/images/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCressonTech, votre partenaire pour l'IA et l'automatisation",
    description: "Discutons de vos projets IA & automatisation.",
    images: ["/images/Logo_webcressontech.webp"],
    site: "@WebCresson",
    creator: "@WebCresson",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  other: {
    "geo.region": "FR",
    "geo.country": "FR",
    "geo.placename": "Paris",
    "ICBM": "48.8566,2.3522",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  let nonce: string | undefined;
  try {
    nonce = (await headers()).get('x-nonce') || undefined;
  } catch {
    nonce = undefined;
  }
  return (
    <html lang="fr-FR" data-scroll-behavior="smooth" className="scroll-smooth">
      <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Web Cresson Tech" />
        <link rel="icon" href="/images/Logo_webcressontech.ico" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://region1.analytics.google.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://region1.analytics.google.com" />
        <link rel="preload" as="image" href="/images/hero-ia.webp" fetchPriority="high" />

        {/* Google Tag Manager */}
        <Script id="facade-consent" strategy="afterInteractive" nonce={nonce}>
          {`
            (function(){
              window.dataLayer = window.dataLayer || [];
              window.gtag = function(){ dataLayer.push(arguments); };
              // Minimal consent defaults (adjust if you use a CMP)
              gtag('consent', 'default', { ad_user_data: 'denied', ad_personalization: 'denied', ad_storage: 'denied', analytics_storage: 'granted', wait_for_update: 0 });

              function loadGTM(){
                if (window.__gtmLoaded) return; window.__gtmLoaded = true;
                var s = document.createElement('script');
                s.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-5SG8GNR8'; s.async = true;
                document.head.appendChild(s);
              }
              function loadGA(){
                if (window.__gaLoaded) return; window.__gaLoaded = true;
                var s = document.createElement('script');
                s.src = 'https://www.googletagmanager.com/gtag/js?id=G-H206EG4TH7'; s.async = true;
                document.head.appendChild(s);
                gtag('js', new Date()); gtag('config', 'G-H206EG4TH7', { send_page_view: true });
              }
              var fired = false;
              function trigger(){ if (fired) return; fired = true; loadGA(); loadGTM(); }
              // Load on idle or first interaction
              if ('requestIdleCallback' in window) requestIdleCallback(trigger, { timeout: 3000 }); else setTimeout(trigger, 3000);
              ['scroll','pointerdown','keydown','touchstart'].forEach(function(evt){ window.addEventListener(evt, trigger, { once: true, passive: true }); });
            })();
          `}
        </Script>

        <Script id="ld-org" nonce={nonce} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WebCressonTech",
            "url": "https://webcresson.com",
            "logo": "https://webcresson.com/images/Logo_webcressontech.webp",
            "sameAs": [
              "https://www.facebook.com/profile.php?id=61579372888241",
              "https://twitter.com/WebCresson",
              "https://www.linkedin.com/in/alexis-cresson/",
              "https://wa.me/33766029632"
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33-7-66-02-96-32",
              "contactType": "customer service",
              "areaServed": "FR",
              "availableLanguage": ["French", "English"]
            }
          })}
        </Script>

        <Script id="ld-website" nonce={nonce} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://webcresson.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://webcresson.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </Script>

        <Script id="ld-service" nonce={nonce} type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "WebCressonTech",
            "url": "https://webcresson.com",
            "areaServed": { "@type": "Country", "name": "France" },
            "serviceType": [
              "Audit IA",
              "Automatisation RPA",
              "Développement Python",
              "Agents IA sur mesure",
              "Intégration IA PME"
            ]
          })}
        </Script>
      </head>

      <body className={`bg-black text-white min-h-screen antialiased ${play.className}`}>
        <GTMNoScript />
        <Toaster position="top-center" theme="dark" richColors />

        <Header />
        <PageTransition>
          <main>{children}</main>
        </PageTransition>
        <Analytics />
        <SpeedInsights />
        <Footer />
        <CookieConsent />
        <AnalyticsScripts />
      </body>
    </html>
  )
}
