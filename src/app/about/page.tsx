// src/app/about/page.tsx
import React from "react";
import ServiceSchema from "@/components/ServiceSchema";
import Link from "next/link";
import { Metadata } from "next";
import { FaLightbulb, FaHandshake, FaAward, FaUsers, FaLeaf } from "react-icons/fa";
import Head from "next/head"; // Importation pour manipuler le head
import styles from "@/styles/about.module.css";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

// Utilisation de l'API Metadata pour Next.js 15
export const metadata: Metadata = {
  title: "À propos de WebCressonTech - Expert en IA",
  description:
    "Découvrez WebCressonTech, entreprise dédiée à l'innovation technologique avec des solutions d'intelligence artificielle sur mesure.",
  openGraph: {
    title: "À propos de WebCressonTech - Expert en IA",
    description:
      "WebCressonTech aide les entreprises à innover avec des solutions sur mesure en intelligence artificielle et technologies avancées.",
    url: "https://www.webcresson.com/about",
    images: [
      {
        url: "https://www.webcresson.com/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de WebCressonTech - Expert en IA",
    description:
      "Entreprise spécialisée dans l'IA et les solutions technologiques avancées.",
    images: ["https://www.webcresson.com/Logo_webcressontech.webp"],
  },
  alternates: {
    canonical: "https://www.webcresson.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <>
      <Head>
        {/* Balise canonique ajoutée manuellement dans le Head */}
        <link rel="canonical" href="https://webcresson.com/about" />
      </Head>

      <ServiceSchema
        serviceName="À propos de WebCressonTech"
        serviceDescription={metadata.description || ""}
        serviceTypes={[
          "Innovation technologique",
          "Intelligence Artificielle",
          "Solutions sur mesure",
        ]}
        faq={[
          {
            question: "Quelle est la mission de WebCressonTech ?",
            answer: (
              <>
                Notre mission est d'accompagner les entreprises dans leur transformation numérique grâce à des solutions innovantes en intelligence artificielle et en technologies avancées. Nous créons des outils sur mesure qui permettent à nos clients de rester compétitifs et d'innover dans leur domaine. Pour en savoir plus, consultez notre{' '}
                <a href="https://www.webcresson.com/services" target="_blank" rel="noopener noreferrer">
                  page sur nos services IA
                </a>.
              </>
            ),
          },
          {
            question: "Quelles sont les valeurs fondamentales de WebCressonTech ?",
            answer: (
              <>
                Les valeurs qui guident notre entreprise sont l'innovation continue, la collaboration avec nos clients, l'engagement envers l'excellence, et un profond respect pour l'environnement à travers des solutions durables. Ces principes nous permettent de bâtir des relations solides et de garantir des résultats de qualité. Découvrez nos{' '}
                <a href="https://www.webcresson.com/about#values" target="_blank" rel="noopener noreferrer">
                  valeurs ici
                </a>.
              </>
            ),
          },
          {
            question: "Comment puis-je contacter WebCressonTech ?",
            answer: (
              <>
                Pour toute question ou demande de projet, vous pouvez nous contacter directement via notre{' '}
                <a href="https://www.webcresson.com/contact" target="_blank" rel="noopener noreferrer">
                  page de contact
                </a> en ligne ou par téléphone. Nous serons ravis de discuter de vos besoins et de vous proposer des solutions adaptées à vos enjeux technologiques.
              </>
            ),
          },
          {
            question: "Quels types de projets WebCressonTech accompagne-t-il ?",
            answer: (
              <>
                Nous accompagnons des entreprises de toutes tailles dans la mise en place de solutions en intelligence artificielle, machine learning, deep learning, et automatisation des processus. Que vous soyez dans le secteur industriel, le commerce, ou la santé, nous vous aidons à intégrer des solutions sur mesure pour optimiser vos performances. Découvrez nos{' '}
                <a href="https://www.webcresson.com/services" target="_blank" rel="noopener noreferrer">
                  services en IA
                </a>.
              </>
            ),
          },
          {
            question: "Qu'est-ce qui distingue WebCressonTech des autres entreprises ?",
            answer: (
              <>
                Ce qui nous distingue est notre approche sur mesure et notre capacité à allier innovation, expertise technique et respect des besoins spécifiques de chaque client. Nous mettons un point d'honneur à offrir des solutions personnalisées et à travailler en étroite collaboration avec nos clients pour garantir leur succès. Découvrez pourquoi nous{' '}
                <a href="https://www.webcresson.com/about#values" target="_blank" rel="noopener noreferrer">
                  choisir
                </a>.
              </>
            ),
          },
        ]}
      />

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>À propos de WebCressonTech</h1>
          <p className={styles.heroText}>
            Chez WebCressonTech, nous sommes passionnés par l'innovation technologique.
            Notre mission est d'aider nos clients à tirer parti de l'intelligence artificielle
            et des technologies avancées pour transformer leurs entreprises.
          </p>
        </section>

        <section className={styles.values} aria-labelledby="values-title">
          <h2 id="values-title" className={styles.sectionTitle}>Nos Valeurs</h2>
          <div className={styles.valuesGrid}>
            {[ 
              {
                icon: <FaLightbulb />,
                title: "Innovation",
                text: "Proposer des solutions uniques et créatives qui répondent aux défis technologiques actuels.",
              },
              {
                icon: <FaHandshake />,
                title: "Engagement",
                text: "Mettre l'humain au cœur de nos actions, en nous engageant à fournir les meilleures solutions pour chaque client.",
              },
              {
                icon: <FaAward />,
                title: "Excellence",
                text: "S'appuyer sur les meilleures pratiques et technologies pour livrer des projets de qualité exceptionnelle.",
              },
              {
                icon: <FaUsers />,
                title: "Collaboration",
                text: "Travailler ensemble pour réaliser des objectifs ambitieux et atteindre des résultats communs.",
              },
              {
                icon: <FaLeaf />,
                title: "Durabilité",
                text: "Créer des solutions respectueuses de l'environnement, garantissant une performance durable pour les générations futures.",
              },
            ].map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.icon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctas}>
          <Link
            href="/contact"
            className={styles.primaryCta}
            aria-label="Contactez-nous pour discuter de vos projets"
          >
            Contactez-nous
          </Link>
          <Link
            href="/services"
            className={styles.secondaryCta}
            aria-label="Découvrez nos services en IA"
          >
            Nos services
          </Link>
        </section>
      </main>
    </>
  );
}
