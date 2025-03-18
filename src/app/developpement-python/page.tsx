import { Metadata } from "next";
import Head from "next/head";
import styles from "@/styles/services.module.css";

export const revalidate = 86400; // Revalidation toutes les 24 heures

export const metadata: Metadata = {
  title: "Développement Python - IA, Analyse, Automatisation | Web Cresson Tech",
  description:
    "Développement Python sur mesure : Intelligence Artificielle, Data Science, Automatisation (RPA) et développement d'APIs.",
  openGraph: {
    title: "Développement Python - Solutions sur mesure | Web Cresson Tech",
    description:
      "Boostez vos projets avec Python : IA, Machine Learning, Automatisation, RPA, Data Science et API.",
    url: "https://webcresson.com/services/developpement-python",
    images: [
      {
        url: "https://webcresson.com/images/python-developpement.webp",
        width: 1200,
        height: 630,
        alt: "Développement Python",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Développement Python - Solutions IA, RPA et Analyse | Web Cresson Tech",
    description:
      "Développement Python pour l'IA, la data science, l'automatisation et les APIs sur mesure.",
    images: ["https://webcresson.com/images/python-developpement.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/developpement-python",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DeveloppementPythonPage() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://webcresson.com/services/developpement-python" />
      </Head>

      {/* Données structurées JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Développement Python",
            "description":
              "Solutions Python avancées pour l'automatisation, l'intelligence artificielle, l'analyse de données et le développement d'APIs.",
            "provider": {
              "@type": "Organization",
              "name": "Web Cresson Tech",
              "url": "https://webcresson.com",
            },
            "offers": {
              "@type": "Offer",
              "url": "https://webcresson.com/services/developpement-python",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
            },
          }),
        }}
      />

      <main className={styles.mainContent}>
        {/* Hero */}
        <section className={styles.hero}>
          <h1>Développement Python</h1>
          <p>
            Besoin d'une expertise Python ? Nous concevons des solutions performantes pour l'intelligence artificielle, l'analyse de données et l'automatisation.
          </p>
        </section>

        {/* Python & Intelligence Artificielle */}
        <section className={styles.section}>
          <h2>Python et l'Intelligence Artificielle</h2>
          <p>
            Python est le langage phare pour l'Intelligence Artificielle et le Machine Learning. Grâce à des bibliothèques comme <strong>TensorFlow</strong>, <strong>PyTorch</strong> et <strong>Scikit-Learn</strong>, nous développons des solutions avancées en :
          </p>
          <ul>
            <li>Deep Learning et réseaux de neurones</li>
            <li>Traitement d'images et de vidéos</li>
            <li>Analyse prédictive et recommandations</li>
            <li>Automatisation de la prise de décision</li>
          </ul>
        </section>

        {/* Python & Analyse de Données */}
        <section className={styles.section}>
          <h2>Python et l'Analyse de Données</h2>
          <p>
            Python est incontournable pour la data science et l'analyse de données. Nous exploitons <strong>Pandas</strong>, <strong>Polars</strong>, <strong>NumPy</strong> et <strong>Matplotlib</strong> pour :
          </p>
          <ul>
            <li>Extraction, nettoyage et transformation de données</li>
            <li>Analyse statistique et exploration des données</li>
            <li>Visualisation avancée des tendances et insights</li>
            <li>Développement de dashboards interactifs</li>
          </ul>
        </section>

        {/* Python & Automatisation (RPA) */}
        <section className={styles.section}>
          <h2>Python et l'Automatisation (RPA)</h2>
          <p>
            Grâce aux frameworks <strong>Selenium</strong>, <strong>PyAutoGUI</strong> et <strong>Robocorp</strong>, nous développons des solutions RPA qui :
          </p>
          <ul>
            <li>Automatisent des tâches répétitives</li>
            <li>Gèrent des workflows et processus métier</li>
            <li>Scrapent et extraient des données du web</li>
            <li>Intègrent l'automatisation avec l'IA</li>
          </ul>
        </section>

        {/* Python & Développement d'APIs */}
        <section className={styles.section}>
          <h2>Python et le Développement d'APIs</h2>
          <p>
            Nous créons des APIs performantes et scalables avec <strong>FastAPI</strong> et <strong>Django REST Framework</strong> :
          </p>
          <ul>
            <li>Développement d'APIs REST et GraphQL</li>
            <li>Connexion entre applications et bases de données</li>
            <li>Optimisation des performances et sécurité</li>
          </ul>
        </section>
        {/* Section CTA */}
        <section className={styles.ctaSection}>
          <h2>Besoin d'une solution Python sur mesure ?</h2>
          <p>Contactez-nous dès aujourd'hui et bénéficiez d'un audit gratuit.</p>
          <a href="/contact" className={styles.ctaButton}>
            Nous contacter
          </a>
        </section>
      </main>
    </>
  );
}
