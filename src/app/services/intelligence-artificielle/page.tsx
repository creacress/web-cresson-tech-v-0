import { Metadata } from "next"
import Link from "next/link"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import FinalCTA from "@/components/Pricing/FinalCTA"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "IA Générative | Texte, Image & Automation | Web Cresson Tech",
  description: "Exploitez le potentiel de l’IA générative pour créer du contenu, automatiser la production et booster votre productivité.",
  openGraph: {
    title: "IA Générative - Texte, Image, Audio | Web Cresson Tech",
    description: "Solutions IA générative clé-en-main : génération de contenu, chatbots, prompts intelligents, automatisation, personnalisation, etc.",
    url: "https://webcresson.com/services/ia-generative",
    images: [
      {
        url: "https://webcresson.com/images/ia-generative.webp",
        width: 1200,
        height: 630,
        alt: "IA Générative Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Générative pour entreprises",
    description: "Exploitez la puissance des LLM et IA génératives dans votre workflow.",
    images: ["https://webcresson.com/images/ia-generative.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/ia-generative",
  },
}

export default function IaGenerativePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 text-white">
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "ia-generative": "IA Générative",
        }}
      />
      <ServiceSchema
        serviceName="IA Générative"
        serviceDescription="Déployez la génération automatique de texte, d’image ou de son au service de vos processus métier. Automatisation, création de contenu, assistants intelligents..."
        serviceTypes={[
          "IA générative texte",
          "Chatbot intelligent",
          "Génération d’image IA",
          "Contenu marketing",
          "Automatisation par prompt",
        ]}
        faq={[
          {
            question: "Que permet l’IA générative ?",
            answer: "Elle permet de générer du contenu (texte, image, audio), automatiser des tâches, créer des assistants intelligents ou enrichir vos produits numériques.",
          },
          {
            question: "Quels cas d’usage concrets ?",
            answer: "Rédaction automatique, génération de posts LinkedIn, création d’images marketing, FAQ intelligentes, résumés automatiques, etc.",
          },
          {
            question: "Peut-on personnaliser le style ?",
            answer: "Oui, nous entraînons ou configurons des modèles qui respectent votre ton et votre charte.",
          },
        ]}
      />

      {/* HERO */}
      <section className="text-center py-20 px-6 sm:px-12 md:px-24 bg-gradient-to-br from-zinc-900 to-black text-white">
        <BreadcrumbNav />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Créez à l’échelle avec l’IA Générative</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Du texte aux images, automatisez et personnalisez vos contenus grâce aux modèles génératifs les plus récents.
        </p>
        <Link href="/contact" className="inline-block mt-6 bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
          Parlez-nous de votre projet
        </Link>
      </section>

      {/* Problèmes */}
      <section className="my-24 text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Quels problèmes résolvons-nous ?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white">Production de contenu trop lente</h3>
            <p className="text-gray-400 text-sm">Notre IA génère des textes optimisés en quelques secondes.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white">Créativité limitée</h3>
            <p className="text-gray-400 text-sm">Libérez vos équipes grâce à des suggestions et créations inédites.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white">Pas de cohérence de style</h3>
            <p className="text-gray-400 text-sm">Nos modèles s’adaptent à votre identité visuelle et éditoriale.</p>
          </div>
        </div>
      </section>

      {/* Section présentation IA générative */}
      <section className="my-20 animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Nos cas d’usage en IA générative</h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff] space-y-4 text-gray-300 text-sm text-justify">
            <p>Nous intégrons les modèles GPT, Claude, Mistral et DALL-E dans vos workflows pour :</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Créer des contenus marketing ou juridiques automatiquement</li>
              <li>Générer des images cohérentes avec vos valeurs</li>
              <li>Mettre en place un résumé de documents ou rapports PDF</li>
              <li>Construire un assistant IA qui comprend votre documentation</li>
              <li>Booster la conversion en ligne via des messages personnalisés</li>
            </ul>
          </div>
        </div>
      </section>

      <FinalCTA />
      <PricingSection />
    </main>
  )
}
