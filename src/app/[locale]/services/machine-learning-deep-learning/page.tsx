import { Metadata } from "next"
import Link from "next/link"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"

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
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
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
      <section className="text-center mb-12">
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          {/* 🧭 Breadcrumb UX */}
        <BreadcrumbNav />
          Boostez vos performances avec le Machine Learning & Deep Learning
        </NeonTitle>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Analyse prédictive, détection d’anomalies, vision par ordinateur… Donnez vie à vos données avec des modèles IA puissants.
        </p>
        <Link
          href="/services/audit-gratuit"
          className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Obtenir un audit IA gratuit
        </Link>
      </section>

      {/* Avantages */}
      <section className="grid md:grid-cols-2 gap-6 my-16">
        {[
          {
            emoji: "📊",
            title: "Analyse Prédictive",
            text: "Anticipez les ventes, comportements clients, pannes ou ruptures de stock grâce à vos données historiques.",
          },
          {
            emoji: "🧠",
            title: "Apprentissage Automatique",
            text: "Nos modèles apprennent à partir de vos données métiers pour automatiser des tâches à forte valeur ajoutée.",
          },
          {
            emoji: "📷",
            title: "Reconnaissance Visuelle",
            text: "Détection d’objets, OCR, analyse d’images médicales ou industrielles avec le Deep Learning.",
          },
          {
            emoji: "🔎",
            title: "Détection d’Anomalies",
            text: "Surveillez vos systèmes et détectez des comportements inhabituels en temps réel.",
          },
        ].map(({ emoji, title, text }, i) => (
          <div key={i} className="bg-[#111] p-6 rounded border border-[#00e0ff33]">
            <div className="text-4xl mb-2">{emoji}</div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400">{text}</p>
          </div>
        ))}
      </section>

      {/* Cas d’usages */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Cas d’usage concrets du Deep Learning</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Prédiction des ventes ou des flux logistiques</li>
          <li>Classification automatique d’e-mails, documents ou produits</li>
          <li>Vision par ordinateur pour le contrôle qualité</li>
          <li>Optimisation de la chaîne de production industrielle</li>
          <li>Détection de fraude en temps réel</li>
        </ul>
      </section>

      {/* Expertises techniques */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Nos expertises techniques en IA</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-gray-400 list-disc pl-5">
          <li>Python, Scikit-learn, TensorFlow, PyTorch</li>
          <li>API REST/GraphQL pour déploiement IA</li>
          <li>Intégration MLOps avec CI/CD</li>
          <li>Monitoring & retraining automatique</li>
          <li>Infrastructure scalable (Docker, Cloud, GPU)</li>
        </ul>
      </section>

      {/* Livres blancs */}
      <section className="bg-[#0a0a0a] border border-[#00e0ff33] rounded p-8 my-20 text-center">
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
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Grâce aux modèles ML déployés par WebCressonTech, nous avons augmenté la précision de nos prédictions de 89%.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Direction Data, Groupe Industriel</p>
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
