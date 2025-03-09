// src/app/services/intelligence-artificielle/page.tsx
import React from "react";
import Link from "next/link";
import ServiceSchema from "@/components/ServiceShema/ServiceSchema";
import { Metadata } from "next";
import Head from "next/head";

import styles from "@/styles/services.module.css";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

// Définition des métadonnées via l'API Metadata de Next.js 15
export const metadata: Metadata = {
  title:
    "Intelligence Artificielle - Deep Learning & Machine Learning | Web Cresson Tech",
  description:
    "Découvrez comment l'intelligence artificielle, le Deep Learning et le Machine Learning peuvent transformer vos processus métiers avec Web Cresson Tech.",
  openGraph: {
    title: "Intelligence Artificielle - Solutions IA sur mesure",
    description:
      "Web Cresson Tech propose des solutions sur mesure en intelligence artificielle : Deep Learning, Machine Learning, IA générative et traitement d'images.",
    url: "https://webcresson.com/services/intelligence-artificielle",
    images: [
      {
        url: "https://webcresson.com/IA-sante.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligence Artificielle | Web Cresson Tech",
    description:
      "Solutions IA sur mesure en Deep Learning, Machine Learning, IA générative et traitement d'images avec Web Cresson Tech.",
    images: [
      "https://webcresson.com/images/intelligence-artificielle.webp",
    ],
  },
  alternates: {
    canonical:
      "https://webcresson.com/services/intelligence-artificielle",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IntelligenceArtificiellePage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://webcresson.com/services/intelligence-artificielle" />
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
          <h1>Transformez votre entreprise avec l'Intelligence Artificielle !</h1>
          <p>
            Maximisez l'efficacité de vos processus métiers avec des solutions personnalisées en Intelligence
            Artificielle : Deep Learning, Machine Learning, IA générative et traitement d'images.
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Obtenez une consultation gratuite dès maintenant
          </Link>
        </section>

        <section className={styles.section} id="definition">
          <h2>Qu'est-ce que l'intelligence artificielle ?</h2>
          <p>
            L'Intelligence Artificielle (IA) simule l'intelligence humaine pour automatiser des tâches complexes
            comme la reconnaissance d'images, l'analyse prédictive et l'amélioration des processus métiers. Avec des
            technologies avancées telles que le <strong>Deep Learning</strong> et le <strong>Machine Learning</strong>,
            l'IA apprend et s'adapte pour offrir des solutions innovantes à tous les secteurs.
          </p>
        </section>

        <section className={styles.section} id="deep-learning">
          <h2>Le Deep Learning : Apprentissage profond pour des performances optimales</h2>
          <p>
            Le <strong>Deep Learning</strong> utilise des réseaux de neurones profonds pour traiter de vastes quantités
            de données complexes. Idéal pour la reconnaissance faciale, la détection d'anomalies et la génération de contenu.
          </p>
          <Link href="/services/deep-learning" className={styles.linkButton}>
            Découvrez nos solutions en Deep Learning
          </Link>
        </section>

        <section className={styles.section} id="machine-learning">
          <h2>Le Machine Learning : Automatisation intelligente pour votre entreprise</h2>
          <p>
            Le <strong>Machine Learning</strong> permet à vos systèmes d'apprendre automatiquement à partir de données
            structurées et semi-structurées pour automatiser des tâches comme la prédiction des ventes, l'analyse des
            comportements utilisateurs et l'optimisation des processus métiers.
          </p>
          <Link href="/services/machine-learning" className={styles.linkButton}>
            En savoir plus sur le Machine Learning
          </Link>
        </section>
      </main>
    </>
  );
}
