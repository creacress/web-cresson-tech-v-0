import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import PricingSection from "@/components/Pricing/PricingSection"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Data Engineering – Dashboards, ETL, Pipelines IA | WebCressonTech",
  description:
    "Automatisez vos pipelines de données, nettoyez et structurez vos flux pour des dashboards IA-ready. Airflow, DBT, Metabase, BigQuery, Superset et +.",
  openGraph: {
    title: "Data Engineering – Pipelines & Dashboards IA",
    description:
      "Traitement de données à grande échelle, transformation automatisée et visualisation métier pour prise de décision rapide.",
    url: "https://webcresson.com/services/data-engineering",
    images: [
      {
        url: "https://webcresson.com/images/data-engineering.webp",
        width: 1200,
        height: 630,
        alt: "Data Engineering avec WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Engineering – Pipelines automatisés & BI",
    description:
      "Libérez la puissance de vos données avec nos pipelines ETL & dashboards intelligents.",
    images: ["https://webcresson.com/images/data-engineering.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/data-engineering",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function DataEngineeringPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">

      {/* JSON-LD SEO */}
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "data-engineering": "Data Engineering",
        }}
      />
      <ServiceSchema
        serviceName="Data Engineering – WebCressonTech"
        serviceDescription="Automatisez vos pipelines, nettoyez vos données et créez des dashboards augmentés. Nos experts transforment vos flux en valeur métier."
        serviceTypes={["Data Engineering", "ETL", "Pipelines", "Dashboards", "Data Mining"]}
        faq={[
          {
            question: "Qu’est-ce que le Data Engineering ?",
            answer:
              "C’est la discipline qui permet de structurer, nettoyer et orchestrer les flux de données pour les rendre exploitables en temps réel ou différé.",
          },
          {
            question: "Quels outils utilisez-vous ?",
            answer:
              "Python (pandas, Airflow), DBT, BigQuery, PostgreSQL, API REST, FastAPI, Looker Studio, Metabase, Superset, etc.",
          },
          {
            question: "Peut-on automatiser entièrement les traitements ?",
            answer:
              "Oui ! Nos solutions s’intègrent à vos systèmes pour exécuter des pipelines ETL automatiques et maintenir vos dashboards toujours à jour.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-neon drop-shadow mb-4">
          Donnez du sens à vos données
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Automatisez vos pipelines, nettoyez vos données et créez des dashboards intelligents pour piloter votre activité.
        </p>
      </section>

      {/* Techniques */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-6">Nos techniques avancées de Data Engineering</h2>
        <div className="grid sm:grid-cols-2 gap-6 text-gray-400 list-disc pl-5">
          <ul className="space-y-3">
            <li><strong>Nettoyage & normalisation :</strong> gestion des doublons, valeurs manquantes, formats incohérents</li>
            <li><strong>Orchestration ETL/ELT :</strong> Airflow, DBT, ingestion automatisée, planning horaire/journalier</li>
            <li><strong>Connexion multi-sources :</strong> SQL, API REST, NoSQL, Google Sheets, SFTP, CRM, ERP</li>
            <li><strong>Feature Engineering :</strong> création de variables explicatives pour l’IA ou la BI</li>
          </ul>
          <ul className="space-y-3">
            <li><strong>Data Mining :</strong> détection de patterns, corrélations, clusterisation (K-means, DBSCAN)</li>
            <li><strong>Flux temps réel :</strong> traitement streaming avec Kafka ou Webhooks</li>
            <li><strong>Visualisation :</strong> Looker Studio, Metabase, Superset, Dash, Streamlit</li>
            <li><strong>Préparation IA :</strong> données nettoyées pour NLP, prédictions, scoring ou visualisation augmentée</li>
          </ul>
        </div>
      </section>

      {/* Data Mining */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Exploration & Data Mining</h2>
        <p className="text-gray-400 mb-6 max-w-3xl">
          Nos ingénieurs explorent vos données pour identifier des patterns cachés, des corrélations inattendues, ou des clusters comportementaux. Ces insights guident vos décisions stratégiques ou alimentent des modèles prédictifs.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-gray-400">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Techniques utilisées :</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Analyse exploratoire (EDA) avec Python, pandas, seaborn, plotly</li>
              <li>Corrélations, PCA, analyse de variance</li>
              <li>Segmentation clients (K-means, DBSCAN, clustering hiérarchique)</li>
              <li>Détection d’anomalies (Isolation Forest, Local Outlier Factor)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Exemples concrets :</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Identification de profils clients rentables ou à risque</li>
              <li>Détection de saisonnalité ou corrélations cachées</li>
              <li>Analyse de churn et fidélisation</li>
              <li>Préparation de scoring pour modèles IA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visualisation */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Visualisation & Dashboards augmentés</h2>
        <p className="text-gray-400 mb-6 max-w-3xl">
          Vos données prennent vie à travers des dashboards dynamiques, interactifs et compréhensibles. Nos solutions transforment vos KPIs en leviers décisionnels concrets.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-gray-400">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Outils que nous maîtrisons :</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Looker Studio (ex Data Studio)</li>
              <li>Metabase (open-source, SQL-first)</li>
              <li>Apache Superset (BI cloud native)</li>
              <li>Dash / Streamlit pour dashboards Python customisés</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">Fonctionnalités proposées :</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Filtres dynamiques, drill-downs & partages sécurisés</li>
              <li>Tableaux de bord temps réel ou mis à jour automatiquement</li>
              <li>Alertes personnalisées selon seuils & conditions</li>
              <li>Intégration dans vos apps ou extranets clients</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Nos reporting hebdos sont maintenant 100% automatisés. Zéro intervention humaine. Un game changer pour les équipes sales.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Responsable Data, Groupe Retail</p>
      </section>

      {/* CTA */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Un pipeline à automatiser ?</h2>
        <p className="text-gray-400 mb-6">
          Discutons ensemble de vos sources de données et de comment les transformer en levier business.
        </p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Automatiser mes données
        </Link>
      </section>

      {/* Tarifs */}
      <PricingSection />
    </main>
  )
}
