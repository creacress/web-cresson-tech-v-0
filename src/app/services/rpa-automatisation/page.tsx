import { Metadata } from "next"
import Link from "next/link"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import LivreBlancComponent from "@/components/LivreBlanc/LivreBlanc"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import NeonTitle from "@/components/ui/NeonTitle"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "RPA Automatisation | Web Cresson Tech",
  description:
    "Découvrez les avantages de la RPA Automatisation avec Web Cresson Tech : définition, automatisation des processus métiers et exemples concrets.",
  openGraph: {
    title: "RPA Automatisation : Optimisation des processus métiers | Web Cresson Tech",
    description:
      "Web Cresson Tech propose des solutions sur mesure en RPA Automatisation pour automatiser les processus métiers répétitifs et améliorer l'efficacité opérationnelle.",
    url: "https://webcresson.com/services/rpa-automatisation",
    images: [
      {
        url: "https://webcresson.com/images/rpa-automatisation.webp",
        width: 1200,
        height: 630,
        alt: "RPA Automatisation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RPA Automatisation : Définition, Avantages, Utilisations | Web Cresson Tech",
    description:
      "Découvrez comment la RPA Automatisation peut transformer vos processus métiers avec Web Cresson Tech.",
    images: ["https://webcresson.com/images/rpa-automatisation.webp"],
  },
  alternates: {
    canonical: "https://webcresson.com/services/rpa-automatisation",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RPAAutomatisationPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
      <BreadcrumbJsonLd
        overrides={{
          services: "Services",
          "rpa-automatisation": "RPA Automatisation",
        }}
      />

      <ServiceSchema
        serviceName="Services RPA Automatisation"
        serviceDescription="Optimisez vos processus métiers avec la RPA (Robotic Process Automation) pour améliorer l'efficacité et réduire les coûts."
        serviceTypes={[
          "RPA Automatisation",
          "Optimisation des processus",
          "Automatisation des tâches répétitives",
        ]}
        faq={[
          {
            question: "Qu'est-ce que la RPA Automatisation ?",
            answer:
              "La RPA utilise des robots logiciels pour automatiser les tâches répétitives et améliorer l'efficacité des processus métiers.",
          },
          {
            question: "Quels sont les avantages de la RPA ?",
            answer:
              "Réduction des coûts, amélioration de la précision, rapidité d'exécution et gain de temps pour les équipes.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-16">
        {/* 🧭 Breadcrumb UX */}
        <BreadcrumbNav />
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">

          Libérez-vous des tâches répétitives avec la RPA
        </NeonTitle>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Automatisez vos processus métiers avec des robots logiciels. Gagnez en efficacité, réduisez vos erreurs et vos coûts.
        </p>
        <Link href="/contact" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
          Discutons de votre automatisation
        </Link>
      </section>

      {/* Pourquoi la RPA */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Pourquoi adopter la RPA ?</h2>
        <p className="text-gray-400 mb-4">
          Fini les copier-coller et les exports manuels ! Nos bots RPA imitent les actions humaines pour exécuter automatiquement des tâches répétitives.
        </p>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>💼 <strong>Libérez vos équipes :</strong> plus de tâches ingrates</li>
          <li>🎯 <strong>Zéro erreur :</strong> fiabilité et cohérence</li>
          <li>⚡ <strong>Gain de temps :</strong> opérations accélérées</li>
          <li>🔗 <strong>Compatibilité :</strong> fonctionne avec vos outils existants</li>
          <li>💰 <strong>ROI rapide :</strong> réduction immédiate des coûts</li>
        </ul>
      </section>

      {/* Cas d’usage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Cas d’usage concrets</h2>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>📊 Saisie de données dans ERP / CRM</li>
          <li>🧾 Traitement de factures et commandes</li>
          <li>🔄 Automatisation des emails & notifications</li>
          <li>👥 Onboarding RH automatisé</li>
          <li>📦 Suivi de stock intelligent</li>
        </ul>
      </section>

      {/* RPA vs automatisation classique */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Pourquoi choisir la RPA plutôt qu’une automatisation classique ?</h2>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>⚙️ <strong>No-code :</strong> facile à déployer</li>
          <li>📈 <strong>Flexible :</strong> s’adapte à vos process</li>
          <li>🚀 <strong>Déploiement rapide :</strong> résultats dès les premières semaines</li>
        </ul>
        <Link href="/contact" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
          Lancer mon projet RPA
        </Link>
      </section>

      {/* Livre blanc */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-4">Livre blanc : la RPA appliquée</h2>
        <LivreBlancComponent
          title="Automatisation RPA"
          description="Gagnez du temps et réduisez les erreurs grâce à la Robotic Process Automation."
          downloadLink="/downloads/WebCressonTech - RPA.pdf"
          imageUrl="/images/rpa.webp"
        />
      </section>


      {/* CTA transversal */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Explorez nos autres expertises IA</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/services/intelligence-artificielle" className="bg-[#00e0ff22] border border-[#00e0ff44] rounded px-6 py-3 hover:bg-[#00e0ff33] transition">
            Intelligence Artificielle
          </Link>
          <Link href="/services/deep-learning" className="bg-[#00e0ff22] border border-[#00e0ff44] rounded px-6 py-3 hover:bg-[#00e0ff33] transition">
            Deep Learning
          </Link>
          <Link href="/services/machine-learning" className="bg-[#00e0ff22] border border-[#00e0ff44] rounded px-6 py-3 hover:bg-[#00e0ff33] transition">
            Machine Learning
          </Link>
        </div>
      </section>

      {/* Section Tarifs */}
      <PricingSection />
    </main>
  )
}
