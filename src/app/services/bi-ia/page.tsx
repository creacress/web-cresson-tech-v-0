import { Metadata } from "next"
import Link from "next/link"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Business Intelligence augmentée | Web Cresson Tech",
  description:
    "Des dashboards intelligents avec prédiction intégrée, automatisation des insights et aide à la décision temps réel.",
  openGraph: {
    title: "BI augmentée - Dashboards prédictifs | Web Cresson Tech",
    description:
      "Optimisez vos décisions grâce à la Business Intelligence augmentée par l’IA : dashboards, visualisations et alertes intelligentes.",
    url: "https://webcresson.com/services/bi-ia",
    images: [
      {
        url: "https://webcresson.com/images/bi-augmentee.webp",
        width: 1200,
        height: 630,
        alt: "Dashboard intelligent BI IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BI augmentée - Dashboards IA | Web Cresson Tech",
    description:
      "Des KPIs intelligents et des prévisions directement dans vos outils de visualisation avec WebCressonTech.",
    images: ["https://webcresson.com/images/bi-augmentee.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/bi-ia",
  },
}

export default function BIAugmenteePage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      {/* JSON-LD */}
      <ServiceSchema
        serviceName="Business Intelligence augmentée"
        serviceDescription="Des dashboards IA avec prédictions intégrées, alertes automatiques et visualisation augmentée."
        serviceTypes={["BI augmentée", "Visualisation IA", "Dashboard intelligent", "Prédiction KPI", "Automatisation analytique"]}
        faq={[
          {
            question: "Qu’est-ce que la BI augmentée ?",
            answer:
              "C’est la Business Intelligence enrichie d’IA : prévisions, analyses prédictives, alertes automatiques et aide à la décision proactive.",
          },
          {
            question: "Quels outils utilisez-vous ?",
            answer:
              "Nous intégrons des solutions comme Superset, Metabase, Streamlit, Plotly, Python, FastAPI…",
          },
          {
            question: "Est-ce compatible avec mes données actuelles ?",
            answer:
              "Oui, nous nous adaptons à vos bases de données (SQL, NoSQL, CSV, API) et à votre stack BI existante.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-neon mb-4">
          Business Intelligence augmentée par l'IA
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Des dashboards intelligents avec prédictions intégrées, alertes automatiques et visualisations adaptatives pour mieux décider, plus vite.
        </p>
      </section>

      {/* Problèmes courants */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-6">Les limites des dashboards classiques</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Des données figées, sans projection ni alerte</li>
          <li>Des indicateurs à lire manuellement sans recommandation</li>
          <li>Pas d'automatisation dans l’analyse ou le reporting</li>
        </ul>
      </section>

      {/* Valeur de la BI augmentée */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-6">Ce que change la BI augmentée</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            {
              title: "📈 KPI prédictifs",
              desc: "Anticipez vos indicateurs clés grâce au Machine Learning intégré à vos dashboards.",
            },
            {
              title: "🚨 Alertes intelligentes",
              desc: "Soyez notifié automatiquement en cas d’anomalie ou de variation anormale.",
            },
            {
              title: "📊 Visualisations dynamiques",
              desc: "Des dashboards qui s’adaptent selon vos contextes métier et vos utilisateurs.",
            },
            {
              title: "⚙️ Intégration automatisée",
              desc: "Connexion directe à vos sources de données avec ETL et traitement automatisé.",
            },
          ].map(({ title, desc }, i) => (
            <div key={i} className="bg-[#111] p-6 rounded border border-[#00e0ff33]">
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Grâce aux dashboards prédictifs mis en place par WebCressonTech, nos décisions commerciales sont basées sur des insights en temps réel.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Direction Data, groupe retail</p>
      </section>

      {/* CTA final */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-bold text-white mb-4">
          Vous voulez prendre de meilleures décisions, plus vite ?
        </h2>
        <p className="text-gray-400 mb-6">
          Parlons dashboards intelligents, prédiction et automatisation de vos KPIs.
        </p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Discuter de mon projet BI
        </Link>
      </section>
    </main>
  )
}
