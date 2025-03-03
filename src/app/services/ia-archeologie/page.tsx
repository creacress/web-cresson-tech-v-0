// src/app/services/ia-archeologie/page.tsx
import React from "react";
import ServiceSchema from "@/components/ServiceSchema";
import Link from "next/link";
import { Metadata } from "next";
import Head from "next/head"; // Importation pour manipuler le head


import styles from "@/styles/services.module.css";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

// Définition des métadonnées via l'API Metadata de Next.js 15
export const metadata: Metadata = {
  title: "Intelligence Artificielle pour l'Archéologie | Web Cresson Tech",
  description:
    "Découvrez comment l'intelligence artificielle pourrait transformer l'archéologie en facilitant la découverte, l'analyse et la préservation des sites historiques.",
  openGraph: {
    title: "IA pour l'Archéologie - Solutions innovantes | Web Cresson Tech",
    description:
      "Utilisez l'IA pour révolutionner l'archéologie : détection de sites archéologiques, reconstitution 3D, analyse prédictive et automatisation des processus.",
    url: "https://webcresson.com/services/ia-archeologie",
    images: [
      {
        url: "https://webcresson.com/images/ia-archeologie.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA pour l'Archéologie | Web Cresson Tech",
    description:
      "Solutions en IA pour détecter des sites archéologiques, automatiser l'analyse des données historiques et créer des reconstitutions 3D.",
    images: ["https://webcresson.com/images/ia-archeologie.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/ia-archeologie",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ArcheologieIA() {
  return (
    <>
    <Head>
        {/* Balise canonique ajoutée manuellement dans le Head */}
        <link rel="canonical" href="https://webcresson.com/services/ia-archeologie" />
      </Head>

      <ServiceSchema
        serviceName="Intelligence Artificielle pour l'Archéologie"
        serviceDescription="Découvrez comment l'IA pourrait transformer l'archéologie avec des outils avancés pour la détection, l'analyse et la préservation des sites historiques."
        serviceTypes={["Archéologie", "Intelligence Artificielle", "Reconstitution 3D"]}
        faq={[
          {
            question: "Quels sont les avantages potentiels de l'IA en archéologie ?",
            answer:
              "L'IA pourrait faciliter la détection de sites archéologiques, automatiser l'analyse des données historiques et améliorer la préservation des artefacts grâce à des modèles prédictifs.",
          },
          {
            question: "Existe-t-il déjà des solutions IA concrètes pour l'archéologie ?",
            answer:
              "Actuellement, il n'existe pas de solution complète et fonctionnelle dédiée spécifiquement à l'archéologie. Web Cresson Tech explore ce domaine pour développer des outils sur mesure.",
          },
          {
            question: "Comment l'IA pourrait-elle aider dans la reconstitution historique ?",
            answer:
              "Grâce au Deep Learning et à l'analyse d'images, l'IA peut aider à reconstruire virtuellement des artefacts ou des sites historiques en 3D avec une précision remarquable.",
          },
        ]}
      />

      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Révolutionner l'archéologie avec l'intelligence artificielle</h1>
          <p>
            Imaginez une intelligence artificielle capable de détecter des sites archéologiques enfouis, d'analyser des données historiques complexes ou de créer des reconstitutions 3D fidèles de sites anciens.
            Bien que cela reste un concept, Web Cresson Tech se positionne pour développer des solutions sur mesure pour répondre aux besoins uniques des archéologues.
          </p>
        </section>

        <section className={styles.section} id="situation-actuelle">
          <h2>Les défis actuels de l'archéologie</h2>
          <p>
            L'archéologie repose encore largement sur des méthodes traditionnelles, souvent coûteuses et chronophages. 
            La détection de sites nécessite des fouilles manuelles intensives, l'analyse des artefacts est complexe et 
            la préservation des données historiques n'est pas toujours optimisée. 
            Face à ces défis, l'intelligence artificielle pourrait offrir des solutions innovantes.
          </p>
        </section>

        <section className={styles.section} id="potentiel-ia">
          <h2>Le potentiel de l'IA pour l'archéologie</h2>
          <ul>
            <li>🔍 Détecter automatiquement des sites archéologiques grâce à l'analyse d'images satellites.</li>
            <li>🏺 Automatiser l'identification et la classification des artefacts historiques.</li>
            <li>🕰️ Prédire l'emplacement de découvertes potentielles grâce à l'analyse prédictive des données historiques.</li>
            <li>🎨 Créer des reconstitutions 3D interactives de sites anciens, offrant ainsi de nouvelles perspectives pour la recherche et l'éducation.</li>
          </ul>
        </section>

        <section className={styles.section} id="creer-besoin">
          <h2>Pourquoi investir dans l'IA pour l'archéologie ?</h2>
          <p>
            Les professionnels de l'archéologie pourraient bénéficier d'un gain de temps considérable, d'une précision accrue dans l'analyse des données et d'une capacité d'automatisation inédite.
            L'IA pourrait réduire les coûts liés aux fouilles manuelles, améliorer la précision des découvertes et ouvrir de nouvelles opportunités pour la recherche scientifique.
          </p>
        </section>

        <section className={styles.section} id="alternatives">
          <h2>Découvrez nos autres solutions d'IA</h2>
          <div className={styles.buttonContainer}>
            <Link href="/services/deep-learning" className={styles.linkButton}>
              En savoir plus sur le Deep Learning
            </Link>
            <Link href="/services/machine-learning" className={styles.linkButton}>
              Découvrir le Machine Learning
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
