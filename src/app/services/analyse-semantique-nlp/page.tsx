import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"


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
      <section className="text-center py-20 px-6 sm:px-12 md:px-24 bg-gradient-to-br from-zinc-900 to-black text-white">
      <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">NLP, BI augmentée & MLOps sur mesure</h1>
        {/* 🧭 Breadcrumb UX */}
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Libérez le potentiel de vos données textuelles et analytiques grâce à nos solutions de NLP, BI augmentée et MLOps industrialisé.
        </p>
      </section>

      {/* Problèmes résolus */}
      <section className="my-24 text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Quels problèmes résolvons-nous ?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Tâches répétitives</h3>
            <p className="text-gray-400 text-sm">Vous perdez du temps sur des actions manuelles ? L’IA les automatise.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Manque de données</h3>
            <p className="text-gray-400 text-sm">Difficile de prendre des décisions sans info ? On structure vos données.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Temps perdu</h3>
            <p className="text-gray-400 text-sm">Vos équipes perdent en productivité ? On crée des agents IA dédiés.</p>
          </div>
        </div>
      </section>
      {/* NLP */}
      <section aria-labelledby="nlp" className="my-20 animate-fade-in">
        <h2 id="nlp" className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 scroll-mt-24">Traitement du langage naturel (NLP)</h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff]">
            <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">Applications NLP</h3>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Analyse de sentiment & ton des messages</li>
              <li>Classification d’emails, tickets, documents</li>
              <li>Résumé automatique de texte</li>
              <li>Extraction d’informations clés (NER, RE)</li>
              <li>Chatbot sur base documentaire interne</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Data Mining */}
      <section aria-labelledby="datamining" className="my-20 animate-fade-in">
        <h2 id="datamining" className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 scroll-mt-24">Segmentation & Data Mining</h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff]">
            <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">Segmentation & Analyse</h3>
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Nous exploitons vos données historiques pour identifier des clusters clients, des anomalies ou comportements d’achat.
            </p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Segmentation comportementale</li>
              <li>Détection de churn ou d’opportunités</li>
              <li>Association rules (recommandation produits)</li>
              <li>Clustering non supervisé</li>
            </ul>
          </div>
        </div>
      </section>

      {/* BI */}
      <section aria-labelledby="bi" className="my-20 animate-fade-in">
        <h2 id="bi" className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 scroll-mt-24">Business Intelligence augmentée</h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff]">
            <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">Dashboards & Prédictions</h3>
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Nous créons des dashboards intelligents avec des prédictions intégrées pour une prise de décision immédiate.
            </p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>Visualisation de tendances IA</li>
              <li>KPIs prédictifs & automatiques</li>
              <li>Exploration guidée des données</li>
            </ul>
          </div>
        </div>
      </section>

      {/* MLOps */}
      <section aria-labelledby="mlops" className="my-20 animate-fade-in">
        <h2 id="mlops" className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 scroll-mt-24">Industrialisation IA & MLOps</h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff]">
            <h3 className="text-xl font-bold mb-4 text-cyan-400 flex items-center gap-2">Déploiement & Monitoring</h3>
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Déployez vos modèles IA en production avec nos pipelines robustes et automatisés :
            </p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2">
              <li>CI/CD IA avec GitHub Actions</li>
              <li>Monitoring & alerting des modèles</li>
              <li>Retraining automatique</li>
              <li>Dockerisation & déploiement cloud</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section aria-labelledby="temoignage" className="text-center my-20 max-w-3xl mx-auto animate-fade-in">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Avec le NLP mis en place par WebCressonTech, nous avons automatisé la lecture de nos tickets clients avec 93% de précision.”
        </blockquote>
        <p id="temoignage" className="text-sm text-gray-500 mb-6 scroll-mt-24">— Responsable Support, Éditeur SaaS</p>
      </section>

      {/* CTA final unifié */}
      <FinalCTA />

      {/* Section Tarifs */}
      <PricingSection />
    </main>
  )
}
