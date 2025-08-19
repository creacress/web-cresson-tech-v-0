import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"

export const revalidate = 86400

export const viewport = {
  themeColor: '#0b0f1a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Data Engineering – Dashboards, ETL, Pipelines IA | WebCressonTech",
  description:
    "Automatisez vos pipelines de données, nettoyez et structurez vos flux pour des dashboards IA-ready. Airflow, DBT, Metabase, BigQuery, Superset et +.",
  openGraph: {
    type: "website",
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
    site: "@webcressontech",
  },
  alternates: {
    canonical: "https://webcresson.com/services/data-engineering",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': "large",
      'max-video-preview': -1,
    },
  },
}

function Section({ id, title, desc, children }: { id?: string; title?: string; desc?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="mx-auto my-16 max-w-6xl rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_20px_80px_-20px_rgba(0,0,0,0.4)] animate-slide-up">
      {title && (
        <h2 id={id ? `${id}-title` : undefined} className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          {title}
        </h2>
      )}
      {desc && <p className="mt-2 text-white/80 max-w-2xl">{desc}</p>}
      <div className="mt-6">{children}</div>
    </section>
  )
}

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <div className={`animated-card rounded-xl border border-white/15 bg-white/[0.06] p-5 ring-1 ring-white/5 hover:border-cyan-400/40 hover:bg-white/[0.08] transition ${className}`}>
      {children}
    </div>
  )
}

export default function DataEngineeringPage() {
  return (
    <>
      <a href="#content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-black/80 focus:px-4 focus:py-2 focus:text-white">Aller au contenu</a>
      <main id="content" className="px-6 pt-24 pb-20 text-white max-w-6xl mx-auto">

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
        <section className="text-center mb-12 animate-fade-in-up">
          {/* 🧭 Breadcrumb UX */}
          <BreadcrumbNav />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight">
            <span className="relative header-glow">
              <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(56,189,248,0.45)]">
                Donnez du sens à vos données
              </span>
            </span>
          </h1>
          <p className="text-white/85 text-lg max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '120ms' }}>
            Automatisez vos pipelines, nettoyez vos données et créez des dashboards intelligents pour piloter votre activité.
          </p>
        </section>

        <Section id="techniques" title="Nos techniques avancées de Data Engineering">
          <div className="grid sm:grid-cols-2 gap-6 text-white/85">
            <div className="tilt-wrap">
              <Card>
                <ul className="space-y-3 list-disc pl-5">
                  <li><strong>Nettoyage & normalisation :</strong> gestion des doublons, valeurs manquantes, formats incohérents</li>
                  <li><strong>Orchestration ETL/ELT :</strong> Airflow, DBT, ingestion automatisée, planning horaire/journalier</li>
                  <li><strong>Connexion multi-sources :</strong> SQL, API REST, NoSQL, Google Sheets, SFTP, CRM, ERP</li>
                  <li><strong>Feature Engineering :</strong> création de variables explicatives pour l’IA ou la BI</li>
                </ul>
              </Card>
            </div>
            <div className="tilt-wrap">
              <Card>
                <ul className="space-y-3 list-disc pl-5">
                  <li><strong>Data Mining :</strong> détection de patterns, corrélations, clusterisation (K-means, DBSCAN)</li>
                  <li><strong>Flux temps réel :</strong> traitement streaming avec Kafka ou Webhooks</li>
                  <li><strong>Visualisation :</strong> Looker Studio, Metabase, Superset, Dash, Streamlit</li>
                  <li><strong>Préparation IA :</strong> données nettoyées pour NLP, prédictions, scoring ou visualisation augmentée</li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        <Section id="data-mining" title="Exploration & Data Mining" desc="Nos ingénieurs explorent vos données pour identifier des patterns cachés, des corrélations inattendues, ou des clusters comportementaux. Ces insights guident vos décisions stratégiques ou alimentent des modèles prédictifs.">
          <div className="grid sm:grid-cols-2 gap-6 text-white/85">
            <div className="tilt-wrap">
              <Card>
                <h3 className="text-lg font-semibold text-white mb-2">Techniques utilisées :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Analyse exploratoire (EDA) avec Python, pandas, seaborn, plotly</li>
                  <li>Corrélations, PCA, analyse de variance</li>
                  <li>Segmentation clients (K-means, DBSCAN, clustering hiérarchique)</li>
                  <li>Détection d’anomalies (Isolation Forest, Local Outlier Factor)</li>
                </ul>
              </Card>
            </div>
            <div className="tilt-wrap">
              <Card>
                <h3 className="text-lg font-semibold text-white mb-2">Exemples concrets :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Identification de profils clients rentables ou à risque</li>
                  <li>Détection de saisonnalité ou corrélations cachées</li>
                  <li>Analyse de churn et fidélisation</li>
                  <li>Préparation de scoring pour modèles IA</li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        <Section id="dashboards" title="Visualisation & Dashboards augmentés" desc="Vos données prennent vie à travers des dashboards dynamiques, interactifs et compréhensibles. Nos solutions transforment vos KPIs en leviers décisionnels concrets.">
          <div className="grid sm:grid-cols-2 gap-6 text-white/85">
            <div className="tilt-wrap">
              <Card>
                <h3 className="text-lg font-semibold text-white mb-2">Outils que nous maîtrisons :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Looker Studio (ex Data Studio)</li>
                  <li>Metabase (open-source, SQL-first)</li>
                  <li>Apache Superset (BI cloud native)</li>
                  <li>Dash / Streamlit pour dashboards Python customisés</li>
                </ul>
              </Card>
            </div>
            <div className="tilt-wrap">
              <Card>
                <h3 className="text-lg font-semibold text-white mb-2">Fonctionnalités proposées :</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Filtres dynamiques, drill-downs & partages sécurisés</li>
                  <li>Tableaux de bord temps réel ou mis à jour automatiquement</li>
                  <li>Alertes personnalisées selon seuils & conditions</li>
                  <li>Intégration dans vos apps ou extranets clients</li>
                </ul>
              </Card>
            </div>
          </div>
        </Section>

        <Section id="temoignage">
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="italic text-white/90 border-l-4 border-cyan-400/60 pl-4 mb-4">
              “Nos reporting hebdos sont maintenant 100% automatisés. Zéro intervention humaine. Un game changer pour les équipes sales.”
            </blockquote>
            <figcaption className="text-sm text-white/60">— Responsable Data, Groupe Retail</figcaption>
          </figure>
        </Section>

        <Section id="contact" title="Un pipeline à automatiser ?" desc="Discutons ensemble de vos sources de données et de comment les transformer en levier business.">
          <div className="mt-6 flex justify-center">
            <Link href="/contact" aria-label="Aller au formulaire de contact pour automatiser mes données" className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition will-change-transform">
              Automatiser mes données
            </Link>
          </div>
        </Section>
      </main>
    </>
  )
}
