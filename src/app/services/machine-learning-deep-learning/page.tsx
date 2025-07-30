import { Metadata } from "next"
import Link from "next/link"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"


export const revalidate = 86400

export const metadata: Metadata = {
  title: "Machine Learning & Deep Learning | Web Cresson Tech",
  description:
    "Optimisez vos performances avec des modèles IA sur mesure en Machine Learning & Deep Learning. Web Cresson Tech vous accompagne de l’audit au déploiement.",
  openGraph: {
    title: "Machine Learning & Deep Learning | Web Cresson Tech",
    description:
      "Solutions sur mesure pour l’analyse prédictive, la reconnaissance d’image, la classification, l’optimisation de processus et bien plus.",
    url: "https://webcresson.com/services/machine-learning",
    images: [
      {
        url: "https://webcresson.com/images/machine-learning.webp",
        width: 1200,
        height: 630,
        alt: "Machine Learning et Deep Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machine Learning & Deep Learning | Web Cresson Tech",
    description:
      "Boostez votre croissance avec l’intelligence artificielle appliquée à vos données métiers.",
    images: ["https://webcresson.com/images/machine-learning.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/machine-learning",
  },
}

export default function MachineLearningPage() {
  return (
    <main className="text-white max-w-6xl mx-auto">
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "machine-learning": "Machine Learning & Deep Learning",
        }}
      />

      <ServiceSchema
        serviceName="Machine Learning & Deep Learning"
        serviceDescription="Modèles IA sur mesure pour l’analyse prédictive, la classification, la détection d’anomalies, la reconnaissance visuelle et plus encore."
        serviceTypes={[
          "Machine Learning",
          "Deep Learning",
          "Analyse prédictive",
          "Classification",
          "Reconnaissance visuelle",
        ]}
        faq={[
          {
            question: "Quelle est la différence entre Machine Learning et Deep Learning ?",
            answer:
              "Le Machine Learning est idéal pour des données structurées et la prédiction, tandis que le Deep Learning excelle dans le traitement de données complexes comme les images, vidéos ou sons.",
          },
          {
            question: "Dans quels cas utiliser ces technologies ?",
            answer:
              "Prévision des ventes, détection de fraude, maintenance prédictive, tri automatique d’e-mails, classification d’images, etc.",
          },
          {
            question: "Proposez-vous des audits IA gratuits ?",
            answer:
              "Oui, nous réalisons un audit technique & métier de vos données et cas d’usage pour définir les bons modèles.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center py-20 px-6 sm:px-12 md:px-24 bg-gradient-to-br from-zinc-900 to-black text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Boostez vos performances avec le Machine Learning & Deep Learning
        </h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Analyse prédictive, détection d’anomalies, vision par ordinateur… Donnez vie à vos données avec des modèles IA puissants.
        </p>
      </section>

      {/* Problèmes résolus */}
      <section className="my-24 text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Quels problèmes résolvons-nous ?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Données inexploitées</h3>
            <p className="text-gray-400 text-sm">Vos données dorment ? Transformez-les en valeur avec le ML & DL.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Décisions peu fiables</h3>
            <p className="text-gray-400 text-sm">Prédisez l’avenir plutôt que de le subir, grâce à l’IA.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Tâches manuelles lourdes</h3>
            <p className="text-gray-400 text-sm">Laissez vos modèles IA automatiser l’analyse et la décision.</p>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <div className="flex justify-center">
        <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff]">
          <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2 text-left">
            <li>📊 Analyse prédictive</li>
            <li>🧠 Apprentissage automatique sur vos données</li>
            <li>📷 Vision par ordinateur</li>
            <li>🔎 Détection d’anomalies en temps réel</li>
          </ul>
        </div>
      </div>

      {/* Cas d’usages */}
      <section className="my-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Cas d’usage concrets du Deep Learning
        </h2>
        <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 shadow-xl">
          <ul className="list-disc pl-6 text-gray-400 space-y-3 text-left text-sm">
            <li>Prédiction des ventes ou des flux logistiques</li>
            <li>Classification automatique d’e-mails, documents ou produits</li>
            <li>Vision par ordinateur pour le contrôle qualité</li>
            <li>Optimisation de la chaîne de production industrielle</li>
            <li>Détection de fraude en temps réel</li>
          </ul>
        </div>
      </section>

      {/* Expertises techniques */}
      <section className="my-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Nos expertises techniques en IA
        </h2>
        <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 shadow-xl">
          <ul className="list-disc pl-6 text-gray-400 space-y-3 text-left text-sm grid sm:grid-cols-2 gap-4">
            <li>Python, Scikit-learn, TensorFlow, PyTorch</li>
            <li>API REST/GraphQL pour déploiement IA</li>
            <li>Intégration MLOps avec CI/CD</li>
            <li>Monitoring & retraining automatique</li>
            <li>Infrastructure scalable (Docker, Cloud, GPU)</li>
          </ul>
        </div>
      </section>

      {/* Livres blancs */}
      <section className="bg-[#0a0a0a] border border-[#00e0ff33] rounded p-8 my-20 text-center scroll-mt-24 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">📘 Livres blancs à télécharger</h2>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
          Découvrez nos retours d’expérience sur l’application de l’intelligence artificielle dans l’industrie, la finance ou encore le e-commerce.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/downloads/WebCressonTech - Machine Learning.pdf"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
            target="_blank"
          >
            📥 Livre blanc – Machine Learning
          </a>
          <a
            href="/downloads/WebCressonTech - Deep Learning.pdf"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
            target="_blank"
          >
            📥 Livre blanc – Deep Learning
          </a>
        </div>
      </section>

      {/* CTA final */}
      <FinalCTA />

      {/* Section Tarifs */}
      <PricingSection />
    </main>
  )
}
