// src/app/services/page.tsx
import React from "react";
import ServiceSchema from "@/components/ServiceSchema";
import ServiceLink from "@/components/ServiceLink/ServiceLink";
import { Metadata } from "next";
import Head from "next/head";

import styles from "@/styles/ServicePage.module.css";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

// Utilisation de l'API Metadata pour Next.js 15
export const metadata: Metadata = {
  title: "Nos Services en Intelligence Artificielle | Web Cresson Tech",
  description:
    "Découvrez les solutions innovantes de Web Cresson Tech en intelligence artificielle : maintenance prédictive, RPA, IA générative, audit IA et bien plus.",
  openGraph: {
    title: "Nos Services - Expertise en IA",
    description:
      "Solutions et expertises avancées en intelligence artificielle par Web Cresson Tech.",
    url: "https://webcresson.com/services",
    images: [
      {
        url: "/images/services.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nos Services en Intelligence Artificielle",
    description:
      "Web Cresson Tech propose des solutions sur mesure en intelligence artificielle et automatisation des processus.",
    images: ["/images/services.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Service() {
  return (
    <>
      <Head>
        {/* Balise canonique ajoutée manuellement dans le Head */}
        <link rel="canonical" href="https://webcresson.com/services/" />
      </Head>

      <ServiceSchema
        serviceName="Services en Intelligence Artificielle"
        serviceDescription="Découvrez une large gamme de services en IA par Web Cresson Tech : automatisation, maintenance prédictive, IA générative, deep learning, machine learning et bien plus."
        serviceTypes={[
          "Automatisation",
          "IA Générative",
          "Deep Learning",
          "Machine Learning",
          "RPA",
        ]}
        faq={[
          {
            question: "Quels services propose Web Cresson Tech ?",
            answer: `Nous proposons des solutions sur mesure en intelligence artificielle, y compris l'automatisation (RPA), l'IA générative, le deep learning et le machine learning. Pour plus de détails, consultez notre page des services IA : https://www.webcresson.com/services`,
          },
          {
            question: "Comment l'IA peut-elle aider mon entreprise ?",
            answer: `L'IA permet d'automatiser des tâches répétitives, d'améliorer la prise de décision grâce aux données et d'innover avec des solutions personnalisées. Découvrez comment nous pouvons vous aider sur notre page des services : https://www.webcresson.com/services`,
          },
          {
            question: "Proposez-vous des audits IA gratuits ?",
            answer: `Oui, nous offrons un audit gratuit pour évaluer vos besoins et déterminer comment l'IA peut optimiser vos processus métiers. Pour plus d'informations, visitez notre page d'audit IA : https://www.webcresson.com/services/contact`,
          },
        ]}
      />


      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1 className={styles.pageTitle}>
            Nos solutions et expertises en intelligence artificielle (IA)
          </h1>
          <p className={styles.pageDescription}>
            Découvrez comment Web Cresson Tech peut transformer vos processus
            métiers grâce à des solutions d'IA sur mesure et adaptées à vos
            besoins.
          </p>
        </section>

        <section className={styles.servicesList}>
          {servicesData.map((service) => (
            <ServiceLink
              key={service.title}
              href={service.link}
              title={service.title}
              icon={service.icon}
              text={service.text}
            />
          ))}
        </section>
      </main>
    </>
  );
}

const servicesData = [
  {
    icon: "fa-robot",
    title: "RPA Automatisation",
    text: "Automatisez vos processus métiers avec la RPA couplée à l'intelligence artificielle.",
    link: "/services/rpa-automatisation",
  },
  {
    icon: "fa-magic",
    title: "IA Générative",
    text: "Exploitez l'IA générative pour créer automatiquement des contenus visuels et textuels.",
    link: "/services/ia-generative",
  },
  {
    icon: "fa-compass",
    title: "IA pour l'Archéologie",
    text: "Utilisez l'IA pour analyser des données géospatiales et découvrir des sites archéologiques.",
    link: "/services/ia-archeologie",
  },
  {
    icon: "fa-brain",
    title: "Deep Learning",
    text: "Utilisez le Deep Learning pour analyser des données massives avec précision.",
    link: "/services/deep-learning",
  },
  {
    icon: "fa-chart-line",
    title: "Machine Learning",
    text: "Déployez des modèles de Machine Learning pour optimiser vos processus métiers.",
    link: "/services/machine-learning",
  },
];
