import type { Metadata } from "next";
import "../styles/globals.css";
import ClientLayout from "./ClientLayout";
import ServiceSchema from '@/components/ServiceSchema';

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
  },
  twitter: {
    card: "summary_large_image",
    site: "@WebCressonTech",
    title: "Web Cresson Tech - IA et Automatisation",
    description:
      "Solutions en intelligence artificielle, machine learning, deep learning et RPA.",
    images: ["https://webcresson.com/images/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-background text-text antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
