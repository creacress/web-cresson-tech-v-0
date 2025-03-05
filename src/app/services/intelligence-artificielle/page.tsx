// src/app/services/intelligence-artificielle/page.tsx
import React from "react";
import Link from "next/link";
import ServiceSchema from "@/components/ServiceShema/ServiceSchema";
import { Metadata } from "next";
import Head from "next/head"; // Importation pour manipuler le head

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
        url: "https://webcresson.com/images/intelligence-artificielle.webp",
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
        {/* Balise canonique ajoutée manuellement dans le Head */}
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
          <h1>Intelligence Artificielle : Solutions sur mesure</h1>
          <p>
            Optimisez vos processus métiers avec des solutions en Intelligence
            Artificielle personnalisées : Deep Learning, Machine Learning, IA
            générative et traitement d'images.
          </p>
        </section>

        <section className={styles.section} id="definition">
          <h2>Qu'est-ce que l'intelligence artificielle ?</h2>
          <p>
            L'intelligence artificielle (IA) permet aux machines de simuler
            l'intelligence humaine pour accomplir des tâches complexes telles
            que la reconnaissance d'images, l'analyse prédictive et
            l'automatisation des processus métiers. Grâce à des technologies
            avancées comme le <strong>Deep Learning</strong> et le{" "}
            <strong>Machine Learning</strong>, l'IA peut apprendre, s'adapter et
            offrir des solutions innovantes dans divers secteurs d'activité.
          </p>
        </section>

        <section className={styles.section} id="deep-learning">
          <h2>Le Deep Learning : Apprentissage profond pour des solutions avancées</h2>
          <p>
            Le <strong>Deep Learning</strong> utilise des réseaux de neurones
            profonds pour traiter des données complexes telles que les images,
            les vidéos et le langage naturel. Il est idéal pour des tâches telles
            que la reconnaissance faciale, la détection d'anomalies et la
            génération de contenu.
          </p>
          <Link href="/services/deep-learning" className={styles.linkButton}>
            En savoir plus sur le Deep Learning
          </Link>
        </section>

        <section className={styles.section} id="machine-learning">
          <h2>Le Machine Learning : Automatisation intelligente des processus</h2>
          <p>
            Le <strong>Machine Learning</strong> permet aux systèmes d'apprendre
            à partir de données structurées et semi-structurées pour automatiser
            des tâches telles que la prédiction des ventes, l'analyse des
            comportements utilisateurs et l'optimisation des processus métiers.
          </p>
          <Link href="/services/machine-learning" className={styles.linkButton}>
            Découvrir le Machine Learning
          </Link>
        </section>

        <section className={styles.ctaSection}>
          <h2>Prêt à optimiser vos processus métiers avec l'IA ?</h2>
          <p>
            Contactez Web Cresson Tech dès maintenant pour une consultation
            gratuite et découvrez comment l'intelligence artificielle peut
            transformer votre entreprise !
          </p>
          <Link href="/contact" className={styles.ctaButton}>
            Demander une consultation gratuite
          </Link>
        </section>
      </main>
    </>
  );
}
