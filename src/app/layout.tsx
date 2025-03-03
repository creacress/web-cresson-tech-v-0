import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";
import Script from "next/script";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Web Cresson Tech - Intelligence Artificielle et RPA",
  description:
    "Découvrez les solutions innovantes de Web Cresson Tech en intelligence artificielle, RPA, machine learning et deep learning.",
  applicationName: "Web Cresson Tech",
  icons: {
    icon: "Logo_webcressontech.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://webcresson.com",
    title: "Web Cresson Tech - Solutions IA et RPA",
    description:
      "Web Cresson Tech propose des solutions sur mesure en intelligence artificielle et automatisation des processus.",
    images: [
      {
        url: "https://webcresson.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
    locale: "fr_FR",
    siteName: "Web Cresson Tech",
  },
  twitter: {
    card: "summary_large_image",
    site: "@WebCressonTech",
    title: "Web Cresson Tech - IA et Automatisation",
    description:
      "Solutions en intelligence artificielle, machine learning, deep learning et RPA.",
    images: ["https://webcresson.com/Logo_webcressontech.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://webcresson.com",
  },
  other: {
    "theme-color": "#00e0ff",
  },
  metadataBase: new URL("https://webcresson.com"), // Ajoute cette ligne pour définir la base des URLs
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Précharger l'image LCP */}
        <link
          rel="preload"
          href="/robot_humain_main.webp"
          as="image"
          type="image/webp"
          sizes="(max-width: 600px) 150px, (max-width: 1024px) 300px, 384px"
        />
        <link rel="canonical" href="https://webcresson.com/" />


        {/* Charger Google Tag Manager de manière asynchrone */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H206EG4TH7"
          strategy="beforeInteractive" // avant l'interactivité
        />
        <Script id="google-analytics" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-H206EG4TH7', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="bg-background text-text antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
