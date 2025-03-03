// src/app/services/machine-learning/page.tsx
import React from "react";
import Link from "next/link";
import ServiceSchema from "@/components/ServiceSchema";
import { Metadata } from "next";

import styles from "@/styles/services.module.css";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

// Définition des métadonnées via l'API Metadata de Next.js 15
export const metadata: Metadata = {
  title: "Machine Learning | Web Cresson Tech",
  description:
    "Découvrez le Machine Learning avec Web Cresson Tech : utilisations concrètes et solutions sur mesure.",
  openGraph: {
    title: "Service Machine Learning | Web Cresson Tech",
    description:
      "Web Cresson Tech propose des solutions sur mesure en Machine Learning pour automatiser les processus métiers et améliorer les performances de votre entreprise.",
    url: "https://webcresson.com/services/machine-learning",
    images: [
      {
        url: "https://webcresson.com/images/machine-learning.webp",
        width: 1200,
        height: 630,
        alt: "Machine Learning | Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning | Web Cresson Tech",
    description:
      "Solutions en Machine Learning : automatisation des processus, optimisation des performances et analyse prédictive avec Web Cresson Tech.",
    images: [
      "https://webcresson.com/images/machine-learning.webp",
    ],
  },
  alternates: {
    canonical: "https://webcresson.com/services/machine-learning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MachineLearningPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Service Machine Learning"
        serviceDescription="Web Cresson Tech propose des solutions sur mesure en Machine Learning pour automatiser les processus métiers et améliorer les performances de votre entreprise."
        serviceTypes={[
          "Machine Learning",
          "Automatisation",
          "Optimisation des processus",
        ]}
        faq={[
          {
            question: "Qu'est-ce que le Machine Learning ?",
            answer:
              "Le Machine Learning permet aux systèmes d'apprendre automatiquement à partir de données historiques pour améliorer leurs performances sans programmation explicite.",
          },
          {
            question:
              "Quels sont les avantages du Machine Learning pour mon entreprise ?",
            answer:
              "Le Machine Learning aide à automatiser les tâches répétitives, à optimiser les processus métiers et à personnaliser les expériences utilisateurs.",
          },
          {
            question:
              "Quels sont les exemples concrets d'utilisation du Machine Learning ?",
            answer:
              "Il est utilisé pour la prédiction des ventes, la détection de fraude en temps réel et la personnalisation des recommandations sur les plateformes digitales.",
          },
        ]}
      />

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Machine Learning</h1>
          <p>
            Utilisez le Machine Learning pour analyser vos données, optimiser
            vos processus et anticiper les comportements clients.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Qu'est-ce que le Machine Learning ?</h2>
          <p>
            Le Machine Learning permet à vos systèmes d'apprendre
            automatiquement à partir de données historiques pour améliorer leurs
            performances sans programmation explicite.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Avantages du Machine Learning</h2>
          <ul>
            <li>Automatisation des tâches répétitives.</li>
            <li>
              Optimisation des processus métiers grâce à l'analyse prédictive.
            </li>
            <li>Personnalisation des expériences utilisateurs.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Exemples concrets d'utilisation</h2>
          <ul>
            <li>
              Prédiction des ventes pour optimiser la gestion des stocks.
            </li>
            <li>
              Détection de fraude en temps réel dans les transactions
              financières.
            </li>
            <li>
              Personnalisation des recommandations sur les plateformes
              digitales.
            </li>
          </ul>
        </section>

        <Link href="/services/intelligence-artificielle" className={styles.cardButton}>
          Retour aux solutions IA
        </Link>
      </main>
    </>
  );
}
