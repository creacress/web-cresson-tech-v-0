"use client";

import React from 'react';
import Head from "next/head";
import Link from "next/link";
import ServiceSchema from '@/components/ServiceSchema';

import styles from "@/styles/ServicePage.module.css";

export default function Service() {
  // Fonction de suivi des clics sur les liens des services
  const handleLinkClick = (serviceTitle: string) => {
    window?.gtag?.("event", "service_link_click", {
      event_category: "Navigation",
      event_label: serviceTitle,
    });
  };

  return (
    <>
      <Head>
        <title>Nos Services en Intelligence Artificielle | Web Cresson Tech</title>
        <meta
          name="description"
          content="Découvrez les solutions innovantes de Web Cresson Tech en intelligence artificielle : maintenance prédictive, RPA, IA générative, audit IA et bien plus."
        />
        <link rel="canonical" href="https://webcresson.com/services" />
        <meta property="og:title" content="Nos Services - Expertise en IA" />
        <meta
          property="og:description"
          content="Solutions et expertises avancées en intelligence artificielle par Web Cresson Tech."
        />
        <meta property="og:url" content="https://webcresson.com/services" />
        <meta property="og:image" content="/images/services.webp" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <ServiceSchema
        serviceName="Services en Intelligence Artificielle"
        serviceDescription="Découvrez une large gamme de services en IA par Web Cresson Tech : automatisation, maintenance prédictive, IA générative, deep learning, machine learning et bien plus."
        serviceTypes={["Automatisation", "IA Générative", "Deep Learning", "Machine Learning", "RPA"]}
        faq={[
          {
            question: "Quels services propose Web Cresson Tech ?",
            answer: "Nous proposons des solutions sur mesure en intelligence artificielle, y compris l'automatisation (RPA), l'IA générative, le deep learning et le machine learning."
          },
          {
            question: "Comment l'IA peut-elle aider mon entreprise ?",
            answer: "L'IA permet d'automatiser des tâches répétitives, d'améliorer la prise de décision grâce aux données et d'innover avec des solutions personnalisées."
          },
          {
            question: "Proposez-vous des audits IA gratuits ?",
            answer: "Oui, nous offrons un audit gratuit pour évaluer vos besoins et déterminer comment l'IA peut optimiser vos processus métiers."
          }
        ]}
      />

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1 className={styles.pageTitle}>
            Nos solutions et expertises en intelligence artificielle (IA)
          </h1>
          <p className={styles.pageDescription}>
            Découvrez comment Web Cresson Tech peut transformer vos processus métiers grâce à des solutions d'IA sur mesure et adaptées à vos besoins.
          </p>
        </section>

        <section className={styles.servicesList}>
          {servicesData.map((service) => (
            <Link
              href={service.link}
              key={service.title}
              className={`${styles.serviceCard} ${styles.magicpattern}`}
              onClick={() => handleLinkClick(service.title)}
            >
              <div className={styles.serviceHeader}>
                <i
                  className={`fas ${service.icon} ${styles.serviceIcon}`}
                  aria-hidden="true"
                ></i>
                <h2 className={styles.serviceTitle}>{service.title}</h2>
              </div>
              <p className={styles.serviceText}>{service.text}</p>
              <span className={styles.cardButton}>En savoir plus</span>
            </Link>
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
  }
];
