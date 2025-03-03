import React from "react";
import Head from "next/head";
import Link from "next/link";
import ServiceSchema from "@/components/ServiceSchema";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

import styles from "@/styles/services.module.css";

export default function IAGenerativePage() {
  return (
    <>
      <Head>
        <title>IA Générative - Créativité augmentée | Web Cresson Tech</title>
        <meta
          name="description"
          content="Découvrez comment l'IA Générative révolutionne la création de contenu, la génération d'images et la créativité assistée avec Web Cresson Tech."
        />
        <meta
          name="keywords"
          content="IA générative, génération d'images, génération de contenu, Web Cresson Tech, intelligence artificielle créative, GPT, DALL-E, ChatGPT"
        />
        <link
          rel="canonical"
          href="https://webcresson.com/services/ia-generative"
        />
        <meta
          property="og:title"
          content="IA Générative - Créativité augmentée | Web Cresson Tech"
        />
        <meta
          property="og:description"
          content="Boostez votre créativité avec l'IA Générative : génération d'images, création de contenu, ChatGPT, DALL-E et innovation."
        />
        <meta
          property="og:image"
          content="/images/ia-generative.webp"
        />
        <meta
          property="og:url"
          content="https://webcresson.com/services/ia-generative"
        />
      </Head>

      <ServiceSchema
        serviceName="IA Générative - Web Cresson Tech"
        serviceDescription="Libérez votre créativité avec l'IA Générative : génération de contenu, d'images et automatisation créative."
        serviceTypes={[
          "IA Générative",
          "Génération de contenu",
          "Génération d'images",
          "Automatisation créative",
        ]}
        faq={[
          {
            question: "Qu'est-ce que l'IA Générative ?",
            answer:
              "L'IA Générative utilise des algorithmes avancés pour créer de nouveaux contenus originaux, tels que des images, du texte ou même des musiques, à partir de données existantes.",
          },
          {
            question: "Quand utiliser l'IA Générative dans mon entreprise ?",
            answer:
              "L'IA Générative est idéale pour la création automatique de contenus marketing, la génération d'images ou la production rapide de prototypes visuels.",
          },
          {
            question:
              "Quelle est la différence entre IA Générative, Deep Learning et Machine Learning ?",
            answer:
              "L'IA Générative produit du contenu original, le Deep Learning excelle dans l'analyse complexe des données visuelles et audio, tandis que le Machine Learning se concentre sur les prédictions et l'automatisation des processus basés sur des données structurées.",
          },
        ]}
      />

      <main className={styles.mainContent}>
        {/* Section Hero */}
        <section className={styles.hero}>
          <h1>IA Générative : Créez l'avenir avec Web Cresson Tech</h1>
          <p>
            Libérez votre créativité grâce à des solutions en IA Générative. De
            la génération d'images à la création de contenu automatisée, notre
            expertise vous accompagne vers l'innovation.
          </p>
        </section>

        {/* Qu'est-ce que l'IA Générative ? */}
        <section className={styles.section} id="definition">
          <h2>Qu'est-ce que l'IA Générative ?</h2>
          <p>
            L'<strong>IA Générative</strong> utilise des modèles d'intelligence
            artificielle pour créer de nouveaux contenus originaux. Que ce soit
            pour la génération d'images, la création de textes ou même la
            production de musique, elle offre un potentiel infini pour
            innover dans de nombreux secteurs d'activité.
          </p>
          <p>
            Les technologies comme <strong>ChatGPT</strong> pour le texte ou
            <strong>DALL-E</strong> pour les images en sont des exemples concrets.
          </p>
        </section>

        {/* Comparaison avec d'autres technologies IA */}
        <section className={styles.section} id="comparison-table">
          <h2>Comparaison : IA Générative vs Deep Learning vs Machine Learning</h2>
          <table className={styles.comparisonTable}>
            <thead>
              <tr>
                <th>Critère</th>
                <th>IA Générative</th>
                <th>Deep Learning</th>
                <th>Machine Learning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Objectif principal</td>
                <td>Créer du contenu original</td>
                <td>Analyser et comprendre des données complexes</td>
                <td>Prédire des résultats à partir de données structurées</td>
              </tr>
              <tr>
                <td>Exemples d'utilisation</td>
                <td>Génération d'images, ChatGPT</td>
                <td>Reconnaissance faciale, analyse audio</td>
                <td>Prédiction des ventes, automatisation des processus</td>
              </tr>
              <tr>
                <td>Complexité des données</td>
                <td>Données textuelles et visuelles</td>
                <td>Données non structurées (images, vidéos)</td>
                <td>Données structurées (tableaux, bases de données)</td>
              </tr>
              <tr>
                <td>Utilisation courante</td>
                <td>Créativité, marketing, design</td>
                <td>Sécurité, santé, industrie</td>
                <td>Finance, logistique, automatisation</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* Cas pratiques de l'IA Générative */}
        <section className={styles.section} id="case-studies">
          <h2>Exemples concrets d'utilisation de l'IA Générative</h2>
          <ul>
            <li>Génération automatique de textes pour des campagnes marketing</li>
            <li>Création d'images réalistes pour des prototypes de design</li>
            <li>Automatisation de la rédaction de contenus SEO pour sites web</li>
            <li>Développement de chatbots intelligents pour le service client</li>
          </ul>
        </section>

        {/* Section CTA */}
        <section className={styles.ctaSection}>
          <h2>Besoin d'une solution en IA Générative ?</h2>
          <p>
            Contactez-nous pour en savoir plus sur nos offres sur mesure en IA
            Générative. Ensemble, donnons vie à vos projets créatifs grâce à
            l'intelligence artificielle.
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
