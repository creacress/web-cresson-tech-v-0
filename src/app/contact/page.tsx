// src/app/contact/page.tsx
import React from "react";
import ServiceSchema from "@/components/ServiceSchema";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "@/styles/contact.module.css";
import { Metadata } from "next";
import Head from "next/head"; // Importation pour manipuler le head

export const revalidate = 86400; // Active le SSG avec revalidation toutes les 24 heures

// Utilisation de l'API Metadata pour le SEO
export const metadata: Metadata = {
  title: "Contactez-nous | Cresson Tech",
  description:
    "Contactez Cresson Tech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
  openGraph: {
    title: "Contactez-nous | Cresson Tech",
    description:
      "Contactez Cresson Tech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
    url: "https://webcresson.com/contact",
    images: [
      {
        url: "https://webcresson.com/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez-nous | Cresson Tech",
    description:
      "Contactez Cresson Tech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
    images: ["https://webcresson.com/Logo_webcressontech.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <Head>
        {/* Balise canonique ajoutée manuellement dans le Head */}
        <link rel="canonical" href="https://webcresson.com/contact" />
      </Head>

      <ServiceSchema
        serviceName="Contactez-nous | Cresson Tech"
        serviceDescription={metadata.description as string}
        serviceTypes={["Contact", "Support Client", "Services Technologiques"]}
        faq={[
          {
            question: "Comment puis-je contacter Cresson Tech ?",
            answer: (
              <>
                Vous pouvez nous contacter via ce formulaire ou par téléphone au{' '}
                <a href="tel:+33766029632" target="_blank" rel="noopener noreferrer">
                  +33-7-66-02-96-32
                </a>.
              </>
            ),
          },
          {
            question: "Quels services propose Cresson Tech ?",
            answer: (
              <>
                Nous proposons des solutions en{' '}
                <a href="https://www.webcresson.com/services" target="_blank" rel="noopener noreferrer">
                  IA
                </a>, en{' '}
                <a href="https://www.webcresson.com/services/rpa-automatisation" target="_blank" rel="noopener noreferrer">
                  automatisation des processus (RPA)
                </a> et des{' '}
                <a href="https://www.webcresson.com/services" target="_blank" rel="noopener noreferrer">
                  services technologiques sur mesure
                </a>.
              </>
            ),
          },
        ]}
      />

      <main className={styles.contactFormSection}>
        <h1 className={styles.pageTitle}>Contactez-nous</h1>
        <p className={styles.contactText}>
          Vous avez des questions ? Remplissez le formulaire ci-dessous.
        </p>
        <ContactForm />
      </main>
    </>
  );
}
