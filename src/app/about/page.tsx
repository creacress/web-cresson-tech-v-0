"use client";

import React from 'react';
import Head from "next/head";
import Link from "next/link";
import ServiceSchema from '@/components/ServiceSchema';
import { FaLightbulb, FaHandshake, FaAward, FaUsers, FaLeaf } from "react-icons/fa";

import styles from "@/styles/about.module.css";

const pageMeta = {
  title: "À propos de WebCressonTech - Expert en IA",
  description: "Découvrez WebCressonTech, entreprise dédiée à l'innovation technologique avec des solutions d'intelligence artificielle sur mesure.",
  keywords: "WebCressonTech, intelligence artificielle, machine learning, deep learning, solutions technologiques",
  image: "https://www.webcresson.com/Logo_webcressontech.webp",
  url: "https://www.webcresson.com/about",
};

export default function About() {
  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta name="keywords" content={pageMeta.keywords} />
        <meta name="author" content="WebCressonTech" />
        <link rel="canonical" href={pageMeta.url} />
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:image" content={pageMeta.image} />
        <meta property="og:url" content={pageMeta.url} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>

      <ServiceSchema
        serviceName="À propos de WebCressonTech"
        serviceDescription={pageMeta.description}
        serviceTypes={["Innovation technologique", "Intelligence Artificielle", "Solutions sur mesure"]}
        faq={[
          {
            question: "Quelle est la mission de WebCressonTech ?",
            answer: "Notre mission est d'aider nos clients à tirer parti de l'intelligence artificielle et des technologies avancées pour transformer leurs entreprises."
          },
          {
            question: "Quelles sont les valeurs de WebCressonTech ?",
            answer: "Nous valorisons l'innovation, l'engagement, l'excellence, la collaboration et la durabilité dans toutes nos démarches."
          },
          {
            question: "Comment puis-je contacter WebCressonTech ?",
            answer: "Vous pouvez nous contacter via notre page dédiée ou par téléphone pour discuter de vos projets."
          }
        ]}
      />

      <main className={styles.mainContent}>
        {/* Section Hero */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>À propos de WebCressonTech</h1>
          <p className={styles.heroText}>
            Chez WebCressonTech, nous sommes passionnés par l'innovation technologique.
            Notre mission est d'aider nos clients à tirer parti de l'intelligence artificielle
            et des technologies avancées pour transformer leurs entreprises.
          </p>
        </section>

        {/* Section Valeurs */}
        <section className={styles.values} aria-labelledby="values-title">
          <h2 id="values-title" className={styles.sectionTitle}>Nos Valeurs</h2>
          <div className={styles.valuesGrid}>
            {[
              { icon: <FaLightbulb />, title: "Innovation", text: "Proposer des solutions uniques et créatives." },
              { icon: <FaHandshake />, title: "Engagement", text: "Vos défis sont notre priorité." },
              { icon: <FaAward />, title: "Excellence", text: "Maîtrise des dernières technologies." },
              { icon: <FaUsers />, title: "Collaboration", text: "Atteindre des objectifs ambitieux ensemble." },
              { icon: <FaLeaf />, title: "Durabilité", text: "Des solutions respectueuses de l'environnement." },
            ].map((value, index) => (
              <div key={index} className={styles.valueCard}>
                <div className={styles.icon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section Call-to-Action */}
        <section className={styles.ctas}>
          <Link href="/contact" className={styles.primaryCta} aria-label="Contactez-nous pour discuter de vos projets">
            Contactez-nous
          </Link>
          <Link href="/services" className={styles.secondaryCta} aria-label="Découvrez nos services en IA">
            Nos services
          </Link>
        </section>
      </main>
    </>
  );
}
