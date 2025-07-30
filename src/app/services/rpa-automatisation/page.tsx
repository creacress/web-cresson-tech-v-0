import { Metadata } from "next"
import Link from "next/link"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import LivreBlancComponent from "@/components/LivreBlanc/LivreBlanc"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import PricingSection from "@/components/Pricing/PricingSection"
import BreadcrumbNav from "@/components/BreadcrumbNav/BreadcrumbNav"
import NeonTitle from "@/components/ui/NeonTitle"
import FinalCTA from "@/components/Pricing/FinalCTA"


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
        url: "https://webcresson.com/images/rpa.webp",
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
    images: ["https://webcresson.com/images/rpa.webp"],
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
      <section className="text-center py-20 px-6 sm:px-12 md:px-24 bg-gradient-to-br from-zinc-900 to-black text-white">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Automatisez vos tâches avec la RPA</h1>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto">
          Libérez vos équipes des tâches répétitives grâce à nos bots RPA sur mesure.
        </p>
      </section>

      {/* Problèmes résolus */}
      <section className="my-24 text-center animate-fade-in">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Quels problèmes résolvons-nous ?
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Tâches répétitives</h3>
            <p className="text-gray-400 text-sm">Vous perdez du temps sur des actions manuelles ? L’IA les automatise.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Manque de fiabilité</h3>
            <p className="text-gray-400 text-sm">Vos processus manuels génèrent des erreurs ? Nos bots garantissent la précision.</p>
          </div>
          <div className="bg-gradient-to-br from-zinc-900/60 to-zinc-800/50 p-6 rounded-xl border border-zinc-700 hover:shadow-[0_0_12px_#00e0ff] transition-all">
            <h3 className="text-lg font-semibold mb-3 text-white flex items-center gap-2">Perte de productivité</h3>
            <p className="text-gray-400 text-sm">Vos équipes passent trop de temps sur des tâches sans valeur ? Automatisez-les.</p>
          </div>
        </div>
      </section>

      {/* Pourquoi la RPA */}
      <section className="my-20 animate-fade-in text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Pourquoi adopter la RPA ?
        </h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff]">
            <p className="text-gray-400 text-sm mb-4 text-justify">
              Fini les copier-coller et les exports manuels ! Nos bots RPA imitent les actions humaines pour exécuter automatiquement des tâches répétitives.
            </p>
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2 text-left">
              <li>💼 <strong>Libérez vos équipes :</strong> plus de tâches ingrates</li>
              <li>🎯 <strong>Zéro erreur :</strong> fiabilité et cohérence</li>
              <li>⚡ <strong>Gain de temps :</strong> opérations accélérées</li>
              <li>🔗 <strong>Compatibilité :</strong> fonctionne avec vos outils existants</li>
              <li>💰 <strong>ROI rapide :</strong> réduction immédiate des coûts</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cas d’usage */}
      <section className="my-20 animate-fade-in text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Cas d’usage concrets
        </h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff]">
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2 text-left">
              <li>📊 Saisie de données dans ERP / CRM</li>
              <li>🧾 Traitement de factures et commandes</li>
              <li>🔄 Automatisation des emails & notifications</li>
              <li>👥 Onboarding RH automatisé</li>
              <li>📦 Suivi de stock intelligent</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RPA vs automatisation classique */}
      <section className="my-20 animate-fade-in text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Pourquoi choisir la RPA plutôt qu’une automatisation classique ?
        </h2>
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-8 rounded-2xl border border-zinc-700 max-w-xl w-full shadow-xl transition-all hover:shadow-[0_0_30px_#00e0ff]">
            <ul className="list-disc pl-5 text-gray-300 text-sm space-y-2 text-left">
              <li>⚙️ <strong>No-code :</strong> facile à déployer</li>
              <li>📈 <strong>Flexible :</strong> s’adapte à vos process</li>
              <li>🚀 <strong>Déploiement rapide :</strong> résultats dès les premières semaines</li>
            </ul>
            <Link href="/contact" className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
              Lancer mon projet RPA
            </Link>
          </div>
        </div>
      </section>

      {/* Livre blanc */}
      <section className="my-20 animate-fade-in text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          📘 Livre blanc : la RPA appliquée
        </h2>
        <div className="flex justify-center">
          <LivreBlancComponent
            title="Automatisation RPA"
            description="Gagnez du temps et réduisez les erreurs grâce à la Robotic Process Automation."
            downloadLink="/downloads/WebCressonTech - RPA.pdf"
            imageUrl="/images/rpa.webp"
          />
        </div>
      </section>

      {/* CTA transversal */}
      <FinalCTA />

      {/* Section Tarifs */}
      <PricingSection />
    </main>
  )
}
