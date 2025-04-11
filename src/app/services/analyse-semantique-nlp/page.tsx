import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import NeonTitle from "@/components/ui/NeonTitle"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "NLP, Analyse Sémantique & MLOps | Web Cresson Tech",
  description:
    "Solutions sur mesure en NLP, Data Mining, Business Intelligence IA et MLOps. Exploitez vos données textuelles, segmentez vos clients et automatisez la chaîne IA.",
  openGraph: {
    title: "Analyse Sémantique, NLP, MLOps & BI | Web Cresson Tech",
    description:
      "Automatisez l'analyse de texte, la segmentation client et le monitoring de vos modèles IA grâce à nos solutions NLP et MLOps.",
    url: "https://webcresson.com/services/analyse-semantique-nlp",
    images: [
      {
        url: "https://webcresson.com/images/nlp.webp",
        width: 1200,
        height: 630,
        alt: "NLP et Data Mining par WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NLP & Analyse Sémantique | Web Cresson Tech",
    description:
      "Exploitez la puissance de l'IA pour comprendre vos textes, segmenter vos clients et superviser vos modèles.",
    images: ["https://webcresson.com/images/nlp.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/analyse-semantique-nlp",
  },
}

export default function NlpPage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">

      {/* Breadcrumb SEO */}
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "analyse-semantique-nlp": "Analyse Sémantique & NLP",
        }}
      />

      {/* Données structurées + FAQ */}
      <ServiceSchema
        serviceName="Analyse Sémantique, NLP & MLOps"
        serviceDescription="Solutions IA sur mesure pour l'analyse de texte (NLP), la segmentation via data mining, la BI augmentée et l’industrialisation IA via MLOps."
        serviceTypes={[
          "NLP",
          "Analyse de texte",
          "Data Mining",
          "Business Intelligence IA",
          "MLOps",
        ]}
        faq={[
          {
            question: "Qu’est-ce que le NLP ?",
            answer:
              "Le NLP (traitement du langage naturel) permet à une IA de comprendre, analyser et générer du texte comme un humain.",
          },
          {
            question: "À quoi sert la fouille de données ?",
            answer:
              "Elle permet de découvrir automatiquement des patterns ou des segments clients dans vos données.",
          },
          {
            question: "Pourquoi le MLOps est-il important ?",
            answer:
              "Le MLOps garantit que vos modèles IA sont robustes, monitorés, et faciles à mettre à jour automatiquement.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-12">
        {/* 🧭 Breadcrumb UX */}
        <BreadcrumbNav />
          <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          Comprenez, segmentez, prédisez.
        </NeonTitle>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Grâce à nos solutions NLP, BI augmentée et MLOps, exploitez tout le potentiel caché de vos données textuelles et analytiques.
        </p>
      </section>

      {/* NLP */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-6">Traitement du langage naturel (NLP)</h2>
        <ul className="grid sm:grid-cols-2 gap-6 text-gray-400 list-disc pl-5">
          <li>Analyse de sentiment & ton des messages</li>
          <li>Classification d’emails, tickets, documents</li>
          <li>Résumé automatique de texte</li>
          <li>Extraction d’informations clés (NER, RE)</li>
          <li>Chatbot sur base documentaire interne</li>
        </ul>
      </section>

      {/* Data Mining */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Segmentation & Data Mining</h2>
        <p className="text-gray-400 mb-4">
          Nous exploitons vos données historiques pour identifier des clusters clients, des anomalies ou comportements d’achat.
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Segmentation comportementale</li>
          <li>Détection de churn ou d’opportunités</li>
          <li>Association rules (recommandation produits)</li>
          <li>Clustering non supervisé</li>
        </ul>
      </section>

      {/* BI */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Business Intelligence augmentée</h2>
        <p className="text-gray-400 mb-4">
          Nous créons des dashboards intelligents avec des prédictions intégrées pour une prise de décision immédiate.
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Visualisation de tendances IA</li>
          <li>KPIs prédictifs & automatiques</li>
          <li>Exploration guidée des données</li>
        </ul>
      </section>

      {/* MLOps */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Industrialisation IA & MLOps</h2>
        <p className="text-gray-400 mb-4">
          Déployez vos modèles IA en production avec nos pipelines robustes et automatisés :
        </p>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>CI/CD IA avec GitHub Actions</li>
          <li>Monitoring & alerting des modèles</li>
          <li>Retraining automatique</li>
          <li>Dockerisation & déploiement cloud</li>
        </ul>
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Avec le NLP mis en place par WebCressonTech, nous avons automatisé la lecture de nos tickets clients avec 93% de précision.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Responsable Support, Éditeur SaaS</p>
      </section>

      {/* CTA final */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Prêt à tirer le maximum de vos données ?</h2>
        <p className="text-gray-400 mb-6">Parlons de vos cas d’usage textuels, analytiques ou IA !</p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Discuter de mon projet IA
        </Link>
      </section>

      {/* Section Tarifs */}
      <PricingSection />
    </main>
  )
}
