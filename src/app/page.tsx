import React from "react"
import Image from "next/image"
import Link from "next/link"
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
        <section className="text-center py-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-[0_0_10px_#00e0ff]">
            WebCressonTech :{" "}
            <span className="text-neon">Votre partenaire IA & Python</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Besoin d'intelligence artificielle et de développement Python sur
            mesure ? Découvrez nos solutions.
          </p>
          <Link href="/services/page-services">
            <button className="bg-[#00e0ff] text-black font-semibold px-6 py-3 rounded-md hover:scale-105 transition">
              Découvrir nos solutions
            </button>
          </Link>
        </section>

        {/* IA */}
        <section className="text-center py-16 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-neon mb-4">
            Qu'est-ce que l'intelligence artificielle ?
          </h2>
          <p className="text-gray-300 mb-6">
            L'IA permet aux machines d'apprendre et d'automatiser des tâches
            complexes. Grâce à des algorithmes avancés, elle optimise les
            processus et améliore les performances des entreprises.
          </p>
          <Link href="/services/intelligence-artificielle">
            <button className="bg-[#00e0ff] text-black font-semibold px-6 py-3 rounded-md hover:scale-105 transition">
              En savoir plus
            </button>
          </Link>
        </section>

        {/* Développement Python */}
        <section className="py-16 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-neon mb-8 text-center">
            Développement Python et Automatisation
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Python est un langage incontournable pour l’IA, l’automatisation et
            le data engineering. WebCressonTech vous accompagne dans
            l’optimisation de vos processus avec Python.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Automatisation & RPA",
                text: "Scripts avec Selenium, Scrapy, PyAutoGUI.",
              },
              {
                title: "Développement Web",
                text: "Django, FastAPI et Flask.",
              },
              {
                title: "Data Engineering",
                text: "Manipulation de données avec Pandas, Polars, Spark.",
              },
              {
                title: "Développement IA",
                text: "Modélisation avec TensorFlow, PyTorch, Scikit-learn.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="border border-[#00e0ff33] p-6 rounded-md bg-[#111] hover:bg-[#1a1a1a] transition"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/developpement-python">
              <button className="bg-[#00e0ff] text-black font-semibold px-6 py-3 rounded-md hover:scale-105 transition">
                En savoir plus
              </button>
            </Link>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neon mb-8">
            Pourquoi nous choisir ?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Expertise certifiée",
                text: "En IA, Python et technologies avancées.",
              },
              {
                title: "Accompagnement complet",
                text: "De l'idée au déploiement.",
              },
              {
                title: "Solutions sur mesure",
                text: "Adaptées à vos besoins.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="border border-[#00e0ff33] p-6 rounded-md bg-[#111] hover:bg-[#1a1a1a] transition"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Témoignages */}
        <section className="py-16 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-neon mb-8">
            Ils nous font confiance
          </h2>
          <div className="flex flex-col items-center gap-8">
            <div className="border border-[#00e0ff33] p-6 rounded-md bg-[#111] max-w-2xl">
              <p className="italic text-gray-300 mb-4">
                "Grâce à WebCressonTech, nous avons mis en place un RPA et une
                IA d’email permettant de réduire de 30% notre temps de
                traitement et de réussir notre migration."
              </p>
              <div className="flex items-center justify-center gap-4">
                <h4 className="text-white font-semibold">- La Poste</h4>
                <Image
                  src="/logo_la_poste.webp"
                  alt="Logo La Poste"
                  width={96}
                  height={54}
                />
              </div>
            </div>
          </div>
        </section>

        <ClientWrapper />
      </main>
    </>
  )
}
