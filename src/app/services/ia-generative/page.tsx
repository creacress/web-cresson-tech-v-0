import { Metadata } from "next"
import Link from "next/link"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "IA Générative - Créativité augmentée | Web Cresson Tech",
  description:
    "Découvrez comment l'IA Générative révolutionne la création de contenu, la génération d'images et la créativité assistée avec Web Cresson Tech.",
  openGraph: {
    title: "IA Générative - Créativité augmentée | Web Cresson Tech",
    description:
      "Boostez votre créativité avec l'IA Générative : génération d'images, création de contenu, ChatGPT, DALL-E et innovation.",
    url: "https://webcresson.com/services/ia-generative",
    images: [
      {
        url: "https://webcresson.com/images/ia-generative.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Générative | Web Cresson Tech",
    description:
      "Découvrez comment l'IA Générative améliore la créativité avec des outils comme ChatGPT, DALL-E pour la génération de contenu et d'images.",
    images: ["https://webcresson.com/images/ia-generative.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/ia-generative",
  },
}

export default function IAGenerativePage() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
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
            answer: `L'IA Générative utilise des algorithmes avancés pour créer de nouveaux contenus originaux, tels que des images, du texte ou même des musiques, à partir de données existantes.`,
          },
          {
            question: "Quand utiliser l'IA Générative dans mon entreprise ?",
            answer: `Pour créer du contenu marketing, générer des visuels de qualité, ou automatiser la production de contenu SEO.`,
          },
          {
            question: "Quelle est la différence avec le Machine Learning ?",
            answer: `Le Machine Learning prédit et classe, l'IA Générative crée du contenu inédit.`,
          },
        ]}
      />

      {/* Héro */}
      <section className="text-center mb-12">
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          Créez l’avenir avec l’IA Générative
        </NeonTitle>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Génération de contenu, d’images ou de voix. Automatisez votre créativité avec les dernières avancées IA.
        </p>
        <Link href="/contact" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
          Demander une démo gratuite
        </Link>
      </section>

      {/* Définition */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4 text-white">Qu’est-ce que l’IA Générative ?</h2>
        <p className="text-gray-400">
          L’IA Générative est un domaine de l’intelligence artificielle capable de produire du contenu original : texte, image,
          son ou vidéo. Basée sur des modèles comme <strong>GPT</strong> ou <strong>DALL-E</strong>, elle ouvre un monde de possibilités.
        </p>
      </section>

      {/* Tableau comparatif */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Comparatif IA</h2>
        <table className="table-auto w-full text-sm text-gray-400 border border-gray-700">
          <thead className="bg-[#111] text-gray-200">
            <tr>
              <th className="p-2">Critère</th>
              <th className="p-2">IA Générative</th>
              <th className="p-2">Deep Learning</th>
              <th className="p-2">Machine Learning</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">Objectif</td>
              <td className="p-2">Créer du contenu</td>
              <td className="p-2">Analyser données complexes</td>
              <td className="p-2">Prédire, classifier</td>
            </tr>
            <tr>
              <td className="p-2">Utilisation</td>
              <td className="p-2">Marketing, design, SEO</td>
              <td className="p-2">Santé, industrie, vision</td>
              <td className="p-2">Commerce, finance, automatisation</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Cas concrets */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4">Exemples concrets</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Génération automatique de visuels produits ou mockups</li>
          <li>Contenus SEO pour articles ou landing pages</li>
          <li>Scripts vidéo pour campagnes YouTube ou réseaux sociaux</li>
          <li>Chatbots intelligents à base de LLM (Large Language Models)</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Besoin d’un accompagnement ?</h2>
        <p className="text-gray-400 mb-6">Nos experts IA vous aident à intégrer la Génération de contenu dans vos process.</p>
        <Link
          href="/services/audit-gratuit"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Lancer mon audit gratuit
        </Link>
      </section>
    </main>
  )
}
