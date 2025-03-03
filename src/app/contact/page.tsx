// src/app/contact/page.tsx
import React from "react";
import Head from "next/head";
import ServiceSchema from "@/components/ServiceSchema";
import ContactForm from "@/components/ContactForm/ContactForm"; // Composant client
import styles from "@/styles/contact.module.css";

const pageMeta = {
  title: "Contactez-nous | Cresson Tech",
  description:
    "Contactez Cresson Tech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
  url: "https://webcresson.com/contact",
  image: "https://webcresson.com/Logo_webcressontech.webp",
};

export const revalidate = 86400; // Active le SSG avec revalidation toutes les 24 heures

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:url" content={pageMeta.url} />
        <meta property="og:image" content={pageMeta.image} />
        <link rel="canonical" href={pageMeta.url} />
      </Head>

      <ServiceSchema
        serviceName="Contactez-nous | Cresson Tech"
        serviceDescription={pageMeta.description}
        serviceTypes={["Contact", "Support Client", "Services Technologiques"]}
        faq={[
          {
            question: "Comment puis-je contacter Cresson Tech ?",
            answer:
              "Vous pouvez nous contacter via ce formulaire ou par téléphone au +33-7-66-02-96-32.",
          },
          {
            question: "Quels services propose Cresson Tech ?",
            answer:
              "Des solutions en IA, en automatisation des processus (RPA) et en services technologiques sur mesure.",
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
