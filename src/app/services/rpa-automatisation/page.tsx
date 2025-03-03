// src/app/services/rpa-automatisation/page.tsx
import React from "react";
import Link from "next/link";
import ServiceSchema from "@/components/ServiceSchema";
import { Metadata } from "next";
import Head from "next/head"; // Importation pour manipuler le head

import styles from "@/styles/services.module.css";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

// Définition des métadonnées via l'API Metadata de Next.js 15
export const metadata: Metadata = {
  title: "RPA Automatisation | Web Cresson Tech",
  description:
    "Découvrez les avantages de la RPA Automatisation avec Web Cresson Tech : définition, automatisation des processus métiers et exemples concrets.",
  openGraph: {
    title: "RPA Automatisation : Optimisation des processus métiers | Web Cresson Tech",
    description:
      "Web Cresson Tech propose des solutions sur mesure en RPA Automatisation pour automatiser les processus métiers répétitifs et améliorer l'efficacité opérationnelle.",
    url: "https://webcresson.com/services/rpa-automatisation",
    images: [
      {
        url: "https://webcresson.com/images/rpa-automatisation.webp",
        width: 1200,
        height: 630,
        alt: "RPA Automatisation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPA Automatisation : Définition, Avantages, Utilisations | Web Cresson Tech",
    description:
      "Découvrez comment la RPA Automatisation peut transformer vos processus métiers avec Web Cresson Tech.",
    images: ["https://webcresson.com/images/rpa-automatisation.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/rpa-automatisation",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RPAAutomatisationPage() {
  return (
    <>
      <Head>
        {/* Balise canonique ajoutée manuellement dans le Head */}
        <link rel="canonical" href="https://webcresson.com/services/rpa-automatisation" />
      </Head>
      
      <ServiceSchema
        serviceName="Service RPA Automatisation"
        serviceDescription="Web Cresson Tech propose des solutions sur mesure en RPA Automatisation pour optimiser les processus métiers et automatiser les tâches répétitives."
        serviceTypes={["RPA Automatisation", "Automatisation des processus métiers", "Optimisation opérationnelle"]}
        faq={[
          {
            question: "Qu'est-ce que la RPA Automatisation ?",
            answer: (
              <>
                La RPA Automatisation utilise des robots logiciels pour automatiser les tâches répétitives et améliorer l'efficacité des processus métiers. Pour en savoir plus, consultez notre{' '}
                <a href="https://www.webcresson.com/services/rpa-automatisation" target="_blank" rel="noopener noreferrer">
                  page des services RPA Automatisation
                </a>.
              </>
            ),
          },
          {
            question: "Quels sont les avantages de la RPA pour mon entreprise ?",
            answer: (
              <>
                La RPA permet de réduire les coûts, d'améliorer la précision des tâches et de libérer du temps pour des activités à plus forte valeur ajoutée. Découvrez les avantages de la RPA sur notre{' '}
                <a href="https://www.webcresson.com/services/rpa-automatisation" target="_blank" rel="noopener noreferrer">
                  page des services RPA
                </a>.
              </>
            ),
          },
          {
            question: "Quels sont les exemples concrets d'utilisation de la RPA ?",
            answer: (
              <>
                La RPA est utilisée pour automatiser la saisie de données, traiter les factures automatiquement et optimiser les flux de travail. Découvrez ces exemples concrets dans notre{' '}
                <a href="https://www.webcresson.com/services/rpa-automatisation" target="_blank" rel="noopener noreferrer">
                  page des exemples d'utilisation de la RPA
                </a>.
              </>
            ),
          },
          {
            question: "Comment la RPA se compare-t-elle à d'autres solutions d'automatisation ?",
            answer: (
              <>
                Contrairement aux scripts manuels ou à l'automatisation traditionnelle, la RPA est plus flexible, nécessite moins de maintenance et s'intègre facilement avec des systèmes existants. Pour plus de détails, consultez notre{' '}
                <a href="https://www.webcresson.com/services/rpa-automatisation" target="_blank" rel="noopener noreferrer">
                  page des comparaisons RPA
                </a>.
              </>
            ),
          },
        ]}
      />

      <main className={styles.mainContent}>
        {/* Section Hero */}
        <section className={styles.hero}>
          <h1>RPA Automatisation : Définition, Avantages, Utilisations</h1>
          <p>
            Automatisez vos processus métiers grâce à la RPA (Robotic Process Automation) pour améliorer l'efficacité opérationnelle et réduire les coûts.
          </p>
        </section>

        {/* Section de contenu */}
        <section className={styles.section}>
          <h2>Qu'est-ce que la RPA Automatisation ?</h2>
          <p>
            La RPA Automatisation utilise des robots logiciels pour automatiser les tâches répétitives et basées sur des règles. Ces robots imitent les actions humaines sur des interfaces numériques pour exécuter des processus métiers de manière autonome.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Avantages de la RPA Automatisation</h2>
          <ul>
            <li>Automatisation des tâches répétitives pour libérer du temps pour des activités à forte valeur ajoutée.</li>
            <li>Amélioration de la précision et réduction des erreurs humaines.</li>
            <li>Gain de temps significatif dans les processus métiers courants.</li>
            <li>Intégration facile avec les systèmes existants tels que ERP, CRM, et outils de gestion documentaire.</li>
            <li>Réduction des coûts opérationnels jusqu'à 30 % en automatisant les processus manuels.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Exemples concrets d'utilisation de la RPA</h2>
          <ul>
            <li>Automatisation de la saisie de données dans les systèmes ERP ou CRM.</li>
            <li>Traitement automatisé des factures ou des commandes clients.</li>
            <li>Intégration avec des outils existants pour optimiser les flux de travail.</li>
            <li>Automatisation des processus RH, comme l'intégration des nouveaux employés.</li>
            <li>Suivi automatisé des stocks et gestion des commandes en temps réel.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Comparaison : RPA vs Automatisation Traditionnelle</h2>
          <p>La RPA se distingue des méthodes traditionnelles en offrant :</p>
          <ul>
            <li>Une configuration sans code ou low-code, idéale pour les équipes non techniques.</li>
            <li>Une meilleure flexibilité pour s'adapter aux changements des interfaces utilisateurs.</li>
            <li>Un retour sur investissement rapide grâce à une mise en œuvre rapide.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Découvrez nos autres services en intelligence artificielle</h2>
          <Link href="/services/intelligence-artificielle">
            <span className={styles.cardButton}>Solutions en Intelligence Artificielle</span>
          </Link>
          <Link href="/services/deep-learning">
            <span className={styles.cardButton}>En savoir plus sur le Deep Learning</span>
          </Link>
          <Link href="/services/machine-learning">
            <span className={styles.cardButton}>Découvrir le Machine Learning</span>
          </Link>
        </section>
      </main>
    </>
  );
}
