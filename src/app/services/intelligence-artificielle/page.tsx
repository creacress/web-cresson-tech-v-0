"use client";

import React from 'react';
import Head from "next/head";
import Link from "next/link";
import ServiceSchema from '@/components/ServiceSchema';

import styles from "@/styles/services.module.css";

export default function IntelligenceArtificiellePage() {
  return (
    <>
      <Head>
        <title>
          Intelligence Artificielle - Deep Learning & Machine Learning | Web
          Cresson Tech
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
        {/* Section Hero */}
        <section className={styles.hero}>
          <h1>Intelligence Artificielle : Solutions sur mesure</h1>
          <p>
            Optimisez vos processus métiers avec des solutions en Intelligence
            Artificielle personnalisées : Deep Learning, Machine Learning, IA
            générative et traitement d'images.
          </p>
        </section>

        {/* Définition de l'IA */}
        <section className={styles.section} id="definition">
          <h2>Qu'est-ce que l'intelligence artificielle ?</h2>
          <p>
            L'intelligence artificielle (IA) permet aux machines de simuler
            l'intelligence humaine pour accomplir des tâches complexes telles
            que la reconnaissance d'images, l'analyse prédictive et
            l'automatisation des processus métiers. Grâce à des technologies
            avancées comme le <strong>Deep Learning</strong> et le{' '}
            <strong>Machine Learning</strong>, l'IA peut apprendre, s'adapter et
            offrir des solutions innovantes dans divers secteurs d'activité.
          </p>
        </section>

        {/* Comparaison : Deep Learning vs Machine Learning */}
        <section className={styles.section} id="comparison-table">
          <h2>Comparaison : Deep Learning vs Machine Learning</h2>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Critère</th>
                <th>Deep Learning</th>
                <th>Machine Learning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Types de données</td>
                <td>Images, vidéos, données non structurées</td>
                <td>Données structurées et semi-structurées</td>
              </tr>
              <tr>
                <td>Complexité des modèles</td>
                <td>Élevée (réseaux de neurones profonds)</td>
                <td>Modérée (algorithmes traditionnels)</td>
              </tr>
              <tr>
                <td>Exemples d'utilisation</td>
                <td>Reconnaissance faciale, analyse d'images</td>
                <td>Prédiction des ventes, classification de données</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className={styles.ctaSection}>
          <h2>Prêt à optimiser vos processus métiers avec l'IA ?</h2>
          <p>
            Contactez Web Cresson Tech dès maintenant pour une consultation
            gratuite et découvrez comment l'intelligence artificielle peut
            transformer votre entreprise !
          </p>
          <Link href="/contact">
            <span className={styles.ctaButton}>
              Demander une consultation gratuite
            </span>
          </Link>
        </section>
      </main>
    </>
  );
}
