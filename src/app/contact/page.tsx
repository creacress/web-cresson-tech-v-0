import React from "react";
import ServiceSchema from "@/components/ServiceSchema";
import ContactForm from "@/components/ContactForm/ContactForm";
import GoogleCalendar from "@/components/GoogleCalendar/GoogleCalendar";
import styles from "@/styles/contact.module.css";
import { Metadata } from "next";
import Head from "next/head"; 

export const revalidate = 86400; // Active le SSG avec revalidation toutes les 24 heures

// Utilisation de l'API Metadata pour le SEO
export const metadata: Metadata = {
  title: "Contactez-nous | WebCressonTech",
  description:
    "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
  openGraph: {
    title: "Contactez-nous | WebCressonTech",
    description:
      "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
    url: "https://webcresson.com/contact",
    images: [
      {
        url: "https://webcresson.com/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contactez-nous | WebCressonTech",
    description:
      "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
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
        <link rel="canonical" href="https://webcresson.com/contact" />
      </Head>

      <ServiceSchema
        serviceName="Contactez-nous | WebCressonTech"
        serviceDescription={metadata.description as string}
        serviceTypes={["Contact", "Support Client", "Services Technologiques"]}
        faq={[
          {
            question: "Comment puis-je contacter WebCressonTech ?",
            answer: `Vous pouvez nous contacter via ce formulaire ou par téléphone au +33-7-66-02-96-32. Cliquez sur le numéro pour passer un appel direct : tel:+33766029632`,
          },
          {
            question: "Quels services propose WebCressonTech ?",
            answer: `Nous proposons des solutions en IA, en automatisation des processus (RPA), et des services technologiques sur mesure. Découvrez nos services sur les pages suivantes : IA : https://www.webcresson.com/services, RPA : https://www.webcresson.com/services/rpa-automatisation, Services technologiques : https://www.webcresson.com/services.`,
          },
        ]}
      />

      <main className={styles.contactFormSection}>
        <h1 className={styles.pageTitle}>Prenez Rendez-vous</h1>
        <p className={styles.contactText}>
          Vous pouvez réserver un rendez-vous directement via notre agenda Google ci-dessous :
        </p>
        <GoogleCalendar />
        <h2 className={styles.pageTitle}>Contactez-nous</h2>
        <p className={styles.contactText}>
          Vous avez des questions ? Remplissez le formulaire ci-dessous.
        </p>
        <ContactForm />

      </main>
    </>
  );
}
