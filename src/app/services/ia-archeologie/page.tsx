import { Metadata } from "next"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import PricingSection from "@/components/Pricing/PricingSection"
import Link from "next/link"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Intelligence Artificielle pour l'Archéologie | Web Cresson Tech",
  description:
    "Découvrez comment l'intelligence artificielle pourrait transformer l'archéologie en facilitant la découverte, l'analyse et la préservation des sites historiques.",
  openGraph: {
    title: "IA pour l'Archéologie - Solutions innovantes | Web Cresson Tech",
    description:
      "Utilisez l'IA pour révolutionner l'archéologie : détection de sites archéologiques, reconstitution 3D, analyse prédictive et automatisation des processus.",
    url: "https://webcresson.com/services/ia-archeologie",
    images: [
      {
        url: "https://webcresson.com/images/ia-archeologie.webp",
        width: 1200,
        height: 630,
        alt: "IA pour l'Archéologie - Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA pour l'Archéologie | Web Cresson Tech",
    description:
      "Solutions en IA pour détecter des sites archéologiques, automatiser l'analyse des données historiques et créer des reconstitutions 3D.",
    images: ["https://webcresson.com/images/ia-archeologie.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/ia-archeologie",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ArcheologieIA() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">

      {/* JSON-LD SEO */}
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "ia-archeologie": "IA & Archéologie",
        }}
      />

      <ServiceSchema
        serviceName="Intelligence Artificielle pour l'Archéologie"
        serviceDescription="Découvrez comment l'IA pourrait transformer l'archéologie avec des outils avancés pour la détection, l'analyse et la préservation des sites historiques."
        serviceTypes={["Archéologie", "Intelligence Artificielle", "Reconstitution 3D"]}
        faq={[
          {
            question: "Quels sont les avantages potentiels de l'IA en archéologie ?",
            answer:
              "L'IA pourrait faciliter la détection de sites archéologiques, automatiser l'analyse des données historiques et améliorer la préservation des artefacts grâce à des modèles prédictifs.",
          },
          {
            question: "Existe-t-il déjà des solutions IA concrètes pour l'archéologie ?",
            answer:
              "Actuellement, il n'existe pas de solution complète dédiée spécifiquement à l'archéologie. Web Cresson Tech explore ce domaine pour développer des outils sur mesure.",
          },
          {
            question: "Comment l'IA pourrait-elle aider dans la reconstitution historique ?",
            answer:
              "Grâce au Deep Learning et à l'analyse d'images, l'IA peut aider à reconstruire virtuellement des artefacts ou des sites historiques en 3D avec une précision remarquable.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-12">
        {/* 🧭 Breadcrumb UX */}
        <BreadcrumbNav />
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          Révolutionner l'archéologie grâce à l’intelligence artificielle
        </NeonTitle>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Détection de sites, reconstitution 3D, analyse d’artefacts… Web Cresson Tech explore l’usage de l’IA pour moderniser l’archéologie.
        </p>
      </section>

      {/* Pourquoi l’archéologie a besoin de l’IA ? */}
      <section className="my-16">
        <h2 className="text-2xl font-bold text-white mb-4">Les défis actuels de l’archéologie</h2>
        <p className="text-gray-400">
          L'archéologie s’appuie encore majoritairement sur des fouilles physiques, des interprétations manuelles, et une conservation de données peu digitalisée.
          L’IA pourrait moderniser ces pratiques : réduction des coûts, gain de temps, meilleure préservation du patrimoine.
        </p>
      </section>

      {/* Cas d’usages projetés */}
      <section className="my-20">
        <h2 className="text-2xl font-bold text-white mb-6">Ce que l’IA pourrait faire pour l’archéologie</h2>
        <ul className="grid sm:grid-cols-2 gap-6 text-gray-400 list-disc pl-5">
          <li>🔍 Détection de sites via l’analyse d’images satellite</li>
          <li>🏺 Classification automatique des artefacts numérisés</li>
          <li>🧠 Analyse prédictive des emplacements de fouilles</li>
          <li>🎨 Reconstitutions 3D immersives de sites anciens</li>
          <li>🧾 Numérisation & conservation intelligente des archives</li>
        </ul>
      </section>

      {/* Vision de WebCressonTech */}
      <section className="my-20 bg-[#0a0a0a] border border-[#00e0ff33] p-8 rounded">
        <h2 className="text-2xl font-bold text-white mb-4">Notre vision IA pour l’archéologie</h2>
        <p className="text-gray-400 mb-4">
          Chez Web Cresson Tech, nous croyons que l’intelligence artificielle peut devenir un levier majeur pour préserver et explorer notre patrimoine historique.
          Nous co-construisons des prototypes avec les acteurs du domaine pour tester et valider ces innovations.
        </p>
        <Link
          href="/contact"
          className="inline-block mt-4 bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Discuter d’un projet IA archéologie
        </Link>
      </section>

      {/* Témoignage fictif */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Les propositions de Web Cresson Tech sur l’IA appliquée à nos fouilles nous ouvrent des perspectives de recherche inédites.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Responsable scientifique, Institut Archéo-France</p>
        <Link
          href="/services"
          className="underline text-[#00e0ff] hover:text-white transition"
        >
          ← Revenir à tous les services
        </Link>
      </section>

      {/* Section Tarifs */}
      <PricingSection />
    </main>
  )
}
