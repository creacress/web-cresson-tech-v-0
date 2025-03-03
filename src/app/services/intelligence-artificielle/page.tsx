import React from 'react';
import Head from "next/head";
import Link from "next/link";
import ServiceSchema from '@/components/ServiceSchema';

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

import styles from "@/styles/services.module.css";

export default function IntelligenceArtificiellePage() {
  return (
    <>
      <Head>
        <title>
          Intelligence Artificielle - Deep Learning & Machine Learning | Web Cresson Tech
        </title>
        <meta
          name="description"
          content="Découvrez comment l'intelligence artificielle, le Deep Learning et le Machine Learning peuvent transformer vos processus métiers avec Web Cresson Tech."
        />
        <meta
          name="keywords"
          content="intelligence artificielle, deep learning, machine learning, solutions IA, réseaux de neurones, automatisation, IA générative, traitement d'images"
        />
        <link
          rel="canonical"
          href="https://webcresson.com/services/intelligence-artificielle"
        />
        <meta
          property="og:title"
          content="Intelligence Artificielle - Solutions IA sur mesure"
        />
        <meta
          property="og:description"
          content="Web Cresson Tech propose des solutions sur mesure en intelligence artificielle : Deep Learning, Machine Learning, IA générative et traitement d'images."
        />
        <meta
          property="og:image"
          content="/images/intelligence-artificielle.webp"
        />
        <meta
          property="og:url"
          content="https://webcresson.com/services/intelligence-artificielle"
        />
      </Head>

      <ServiceSchema
        serviceName="Solutions en Intelligence Artificielle"
        serviceDescription="Solutions IA sur mesure en Deep Learning, Machine Learning, IA générative et traitement d'images avec Web Cresson Tech."
        serviceTypes={["Intelligence Artificielle", "Deep Learning", "Machine Learning"]}
        faq={[
          {
            question: "Quelle est la différence entre le Deep Learning et le Machine Learning ?",
            answer: "Le Deep Learning est un sous-ensemble du Machine Learning utilisant des réseaux de neurones profonds pour analyser des données complexes, tandis que le Machine Learning applique des algorithmes plus classiques pour automatiser des tâches basées sur des données structurées."
          },
          {
            question: "Quels sont les avantages de l'intelligence artificielle pour mon entreprise ?",
            answer: "L'IA optimise les processus métiers, améliore la prise de décision, personnalise l'expérience utilisateur et automatise les tâches répétitives, offrant un gain de temps et une meilleure efficacité."
          },
          {
            question: "Comment Web Cresson Tech développe-t-il des solutions IA sur mesure ?",
            answer: "Nous analysons vos besoins spécifiques pour créer des modèles de Deep Learning, Machine Learning ou d'IA générative adaptés à vos objectifs métiers. Nos solutions sont personnalisées pour offrir un retour sur investissement rapide."
          }
        ]}
      />

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Intelligence Artificielle : Solutions sur mesure</h1>
          <p>
            Optimisez vos processus métiers avec des solutions en Intelligence Artificielle personnalisées : Deep Learning, Machine Learning, IA générative et traitement d'images.
          </p>
        </section>

        <section className={styles.section} id="definition">
          <h2>Qu'est-ce que l'intelligence artificielle ?</h2>
          <p>
            L'intelligence artificielle (IA) permet aux machines de simuler l'intelligence humaine pour accomplir des tâches complexes telles
            que la reconnaissance d'images, l'analyse prédictive et l'automatisation des processus métiers. Grâce à des technologies
            avancées comme le <strong>Deep Learning</strong> et le <strong>Machine Learning</strong>, l'IA peut apprendre, s'adapter et
            offrir des solutions innovantes dans divers secteurs d'activité.
          </p>
        </section>

        {/* Section Deep Learning */}
        <section className={styles.section} id="deep-learning">
          <h2>Le Deep Learning : Apprentissage profond pour des solutions avancées</h2>
          <p>
            Le <strong>Deep Learning</strong> utilise des réseaux de neurones profonds pour traiter des données complexes telles que les images, les vidéos et le langage naturel. Il est idéal pour des tâches telles que la reconnaissance faciale, la détection d'anomalies et la génération de contenu.
          </p>
          <Link href="/services/deep-learning">
            <span className={styles.linkButton}>En savoir plus sur le Deep Learning</span>
          </Link>
        </section>

        {/* Section Machine Learning */}
        <section className={styles.section} id="machine-learning">
          <h2>Le Machine Learning : Automatisation intelligente des processus</h2>
          <p>
            Le <strong>Machine Learning</strong> permet aux systèmes d'apprendre à partir de données structurées et semi-structurées pour automatiser des tâches telles que la prédiction des ventes, l'analyse des comportements utilisateurs et l'optimisation des processus métiers.
          </p>
          <Link href="/services/machine-learning">
            <span className={styles.linkButton}>Découvrir le Machine Learning</span>
          </Link>
        </section>

        <section className={styles.ctaSection}>
          <h2>Prêt à optimiser vos processus métiers avec l'IA ?</h2>
          <p>
            Contactez Web Cresson Tech dès maintenant pour une consultation gratuite et découvrez comment l'intelligence artificielle peut transformer votre entreprise !
          </p>
          <Link href="/contact">
            <span className={styles.ctaButton}>Demander une consultation gratuite</span>
          </Link>
        </section>
      </main>
    </>
  );
}
