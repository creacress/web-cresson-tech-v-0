import React from "react"
import Image from "next/image"
import Link from "next/link"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper"

export const revalidate = 86400

export default function Home() {
  return (
    <>
      <ServiceSchema
        serviceName="Entreprise Experte en IA | WebCressonTech"
        serviceDescription="Développez votre entreprise avec des solutions d'intelligence artificielle sur mesure : automatisation, machine learning et deep learning."
        serviceTypes={[
          "Intelligence Artificielle",
          "Machine Learning",
          "Deep Learning",
          "Solutions Technologiques",
          "Développement Python",
          "Automatisation Python",
        ]}
        faq={[
          {
            question: "Quels services propose WebCressonTech ?",
            answer:
              "Solutions sur mesure en intelligence artificielle, machine learning, deep learning et automatisation des processus.",
          },
          {
            question: "Pourquoi choisir WebCressonTech pour vos projets IA et Python ?",
            answer:
              "Nous offrons une expertise certifiée, un accompagnement complet et des solutions adaptées à vos besoins.",
          },
          {
            question: "Comment contacter WebCressonTech ?",
            answer:
              "Contactez-nous via notre page de contact ou par téléphone pour discuter de vos projets IA et développement Python.",
          },
        ]}
      />

      <main className="bg-black text-white px-4 md:px-12">
        {/* Hero */}
        <section className="text-center py-24">
          <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
            WebCressonTech :{" "} Votre partenaire IA & Python
          </NeonTitle>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            WebCressonTech conçoit des solutions sur mesure pour les entreprises qui veulent passer à l’échelle.
          </p>
          <Link
            href="/services/audit-gratuit"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Obtenir un audit IA gratuit
          </Link>
        </section>

        {/* Problèmes fréquents */}
        <section className="max-w-5xl mx-auto py-16">
          <h2 className="text-3xl font-bold text-neon mb-6 text-center">
            Est-ce que vous vous reconnaissez ?
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-400 list-disc pl-5">
            <li>Vous perdez du temps sur des tâches manuelles répétitives</li>
            <li>Vous avez des données… mais pas d’insights exploitables</li>
            <li>Vos équipes sont surchargées de traitements à faible valeur</li>
            <li>Vos outils ne communiquent pas entre eux</li>
          </ul>
        </section>

        {/* Étapes d'accompagnement */}
        <section className="py-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-neon mb-8 text-center">
            Notre méthode en 3 étapes
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center text-gray-300">
            {[
              {
                step: "1. Audit gratuit",
                desc: "On identifie les opportunités IA & automatisation dans vos process actuels.",
              },
              {
                step: "2. Prototype rapide",
                desc: "On conçoit une preuve de concept efficace et mesurable.",
              },
              {
                step: "3. Déploiement & accompagnement",
                desc: "On intègre la solution dans votre environnement de production.",
              },
            ].map(({ step, desc }, i) => (
              <div
                key={i}
                className="bg-[#111] border border-[#00e0ff33] p-6 rounded"
              >
                <h3 className="text-xl font-bold text-white mb-2">{step}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Nos expertises */}
        <section className="py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-neon text-center mb-10">
            Ce que nous faisons avec Python & l’IA
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Automatisation RPA",
                text: "Déclenchement de tâches, saisies auto, scrapers web, mails intelligents.",
              },
              {
                title: "Modèles IA personnalisés",
                text: "Machine Learning, Deep Learning pour classer, prédire ou détecter.",
              },
              {
                title: "Data Engineering",
                text: "Nettoyage, transformation, dashboards, pipelines automatisés.",
              },
              {
                title: "Développement API",
                text: "Backends performants avec FastAPI & Django REST.",
              },
            ].map(({ title, text }, i) => (
              <div
                key={i}
                className="bg-[#111] border border-[#00e0ff33] p-6 rounded hover:bg-[#1a1a1a] transition"
              >
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Expertises IA */}
        <section className="py-20 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-neon text-center mb-10">
            Des expertises IA complètes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Traitement du langage (NLP)",
                text: "Analyse de sentiments, résumé automatique, extraction d’information, classification d’emails…",
              },
              {
                title: "Data Mining",
                text: "Fouille de données, détection de patterns, segmentation intelligente et recommandations.",
              },
              {
                title: "Business Intelligence IA",
                text: "Dashboards augmentés, visualisations intelligentes et prédiction d’indicateurs métier.",
              },
              {
                title: "MLOps & Industrialisation",
                text: "CI/CD pour modèles IA, monitoring, retraining automatique, cloud & Docker ready.",
              },
            ].map(({ title, text }, i) => (
              <div key={i} className="bg-[#111] border border-[#00e0ff33] p-6 rounded hover:bg-[#1a1a1a] transition">
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Témoignage */}
        <section className="py-20 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neon mb-8">Ils nous font confiance</h2>
          <div className="border border-[#00e0ff33] bg-[#111] p-6 rounded">
            <p className="italic text-gray-300 mb-4">
              “Grâce à WebCressonTech, nous avons automatisé 40% de nos tâches manuelles et gagné 12h par semaine sur la gestion des emails.”
            </p>
            <div className="flex justify-center items-center gap-4">
              <span className="text-white font-semibold">— Responsable IT, Groupe Transport</span>
              <Image
                src="/logo_la_poste.webp"
                alt="Logo La Poste"
                width={96}
                height={54}
              />
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="text-center py-20">
          <h2 className="text-3xl font-bold text-neon mb-6">Prêt à transformer vos process ?</h2>
          <p className="text-gray-400 mb-6">
            Profitez d’un audit IA gratuit pour faire le premier pas vers l’automatisation intelligente.
          </p>
          <Link
            href="/contact"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Discuter de mon projet IA
          </Link>
        </section>

        <ClientWrapper />
      </main>
    </>
  )
}
