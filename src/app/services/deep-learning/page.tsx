"use client";

import React from 'react';
import Head from "next/head";
import Link from "next/link";
import ServiceSchema from '@/components/ServiceSchema';

import styles from "@/styles/services.module.css";

export default function DeepLearningPage() {
  return (
    <>
      <Head>
        <title>Deep Learning | Web Cresson Tech</title>
        <meta
          name="description"
          content="Découvrez le Deep Learning avec Web Cresson Tech : utilisations concrètes et solutions sur mesure."
        />
        <link rel="canonical" href="https://webcresson.com/services/deep-learning" />
      </Head>

      <ServiceSchema
        serviceName="Service Deep Learning"
        serviceDescription="Web Cresson Tech propose des solutions sur mesure en Deep Learning pour automatiser des tâches complexes et améliorer la précision des prédictions."
        serviceTypes={["Deep Learning", "Réseaux de Neurones Convolutifs (CNN)", "Automatisation des Tâches Complexes"]}
        faq={[
          {
            question: "Qu'est-ce que le Deep Learning ?",
            answer: "Le Deep Learning utilise des réseaux de neurones profonds pour analyser des données volumineuses, notamment grâce aux Réseaux de Neurones Convolutifs (CNN)."
          },
          {
            question: "Quels sont les avantages du Deep Learning pour mon entreprise ?",
            answer: "Le Deep Learning permet d'automatiser des tâches complexes, d'améliorer la précision des modèles prédictifs et d'analyser des données non structurées comme des images et des vidéos."
          },
          {
            question: "Quels sont les exemples concrets d'utilisation du Deep Learning ?",
            answer: "Le Deep Learning est utilisé dans l'analyse d'imagerie médicale, la reconnaissance faciale et l'automatisation industrielle via l'analyse vidéo."
          }
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
            Le Deep Learning utilise des <strong>réseaux de neurones profonds</strong> pour analyser des données volumineuses. Les <strong>Réseaux de Neurones Convolutifs (CNN)</strong> sont particulièrement efficaces pour le traitement d'images et de vidéos.
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
