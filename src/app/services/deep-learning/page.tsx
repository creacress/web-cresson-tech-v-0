// src/app/services/deep-learning/page.tsx
import React from "react";
import ServiceSchema from "@/components/ServiceSchema";
import Link from "next/link";
import { Metadata } from "next";
import Head from "next/head"; // Importation pour manipuler le head

import styles from "@/styles/services.module.css";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

// Définition des métadonnées via l'API Metadata de Next.js 15
export const metadata: Metadata = {
  title: "Deep Learning | Web Cresson Tech",
  description:
    "Découvrez le Deep Learning avec Web Cresson Tech : utilisations concrètes et solutions sur mesure.",
  openGraph: {
    title: "Deep Learning | Web Cresson Tech",
    description:
      "Web Cresson Tech propose des solutions sur mesure en Deep Learning pour automatiser des tâches complexes et améliorer la précision des prédictions.",
    url: "https://webcresson.com/services/deep-learning",
    images: [
      {
        url: "https://webcresson.com/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Deep Learning | Web Cresson Tech",
    description:
      "Solutions en Deep Learning pour automatiser des tâches complexes et optimiser vos processus métiers.",
    images: ["https://webcresson.com/Logo_webcressontech.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/deep-learning",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DeepLearningPage() {
  return (
    <>
      <Head>
        {/* Balise canonique ajoutée manuellement dans le Head */}
        <link rel="canonical" href="https://webcresson.com/services/deep-learning" />
      </Head>

      <ServiceSchema
        serviceName="Services Deep Learning"
        serviceDescription="Web Cresson Tech offre des solutions en Deep Learning pour l'analyse des données massives et la reconnaissance d'images."
        serviceTypes={[
          "Deep Learning",
          "Réseaux de neurones",
          "Reconnaissance d'images",
        ]}
        faq={[
          {
            question: "Qu'est-ce que le Deep Learning ?",
            answer: `Le Deep Learning utilise des réseaux de neurones profonds pour traiter des données complexes telles que les images, les vidéos et le langage naturel. Pour plus de détails, visitez notre page des services Deep Learning : https://www.webcresson.com/services/deep-learning`,
          },
          {
            question: "Quels sont les cas d'usage du Deep Learning ?",
            answer: `Le Deep Learning est utilisé pour la reconnaissance faciale, l'analyse d'images médicales et l'automatisation de tâches complexes. Découvrez plus sur notre page des services : https://www.webcresson.com/services/deep-learning`,
          },
        ]}
      />


      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Deep Learning</h1>
          <p>
            Exploitez la puissance des réseaux neuronaux profonds pour automatiser des tâches complexes et optimiser vos processus métiers.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Qu'est-ce que le Deep Learning ?</h2>
          <p>
            Le Deep Learning utilise des <strong>réseaux de neurones profonds</strong> pour analyser des données volumineuses.
            Les <strong>Réseaux de Neurones Convolutifs (CNN)</strong> sont particulièrement efficaces pour le traitement d'images et de vidéos.
          </p>
        </section>

        <section className={styles.section}>
          <h2>Avantages du Deep Learning</h2>
          <ul>
            <li>Précision accrue dans les modèles prédictifs.</li>
            <li>Automatisation des tâches complexes avec apprentissage autonome.</li>
            <li>Capacité à analyser des données non structurées (images, vidéos, sons).</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Exemples concrets d'utilisation</h2>
          <ul>
            <li>Analyse d'imagerie médicale pour la détection de maladies.</li>
            <li>Reconnaissance faciale pour la sécurité et l'authentification.</li>
            <li>Automatisation industrielle via l'analyse vidéo.</li>
          </ul>
        </section>

        <Link href="/services/intelligence-artificielle">
          <span className={styles.cardButton}>Retour aux solutions IA</span>
        </Link>
      </main>
    </>
  );
}
