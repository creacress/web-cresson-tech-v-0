import React from "react"
import { Metadata } from "next"
import Head from "next/head"
import Link from "next/link"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import {
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaUsers,
  FaLeaf,
} from "react-icons/fa"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "À propos de WebCressonTech - Expert en IA",
  description:
    "Découvrez WebCressonTech, entreprise dédiée à l'innovation technologique avec des solutions d'intelligence artificielle sur mesure.",
  openGraph: {
    title: "À propos de WebCressonTech - Expert en IA",
    description:
      "WebCressonTech aide les entreprises à innover avec des solutions sur mesure en intelligence artificielle et technologies avancées.",
    url: "https://www.webcresson.com/about",
    images: [
      {
        url: "https://www.webcresson.com/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "Web Cresson Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de WebCressonTech - Expert en IA",
    description:
      "Entreprise spécialisée dans l'IA et les solutions technologiques avancées.",
    images: ["https://www.webcresson.com/Logo_webcressontech.webp"],
  },
  alternates: {
    canonical: "https://www.webcresson.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function About() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://webcresson.com/about" />
      </Head>

      <ServiceSchema
        serviceName="À propos de WebCressonTech"
        serviceDescription={metadata.description || ""}
        serviceTypes={[
          "Innovation technologique",
          "Intelligence Artificielle",
          "Solutions sur mesure",
        ]}
        faq={[
          {
            question: "Quelle est la mission de WebCressonTech ?",
            answer:
              "Accompagner les entreprises avec des solutions d'IA et de tech avancées, sur mesure et performantes.",
          },
          {
            question: "Quelles sont les valeurs fondamentales ?",
            answer:
              "Innovation, excellence, collaboration, engagement humain et responsabilité environnementale.",
          },
          {
            question: "Comment contacter WebCressonTech ?",
            answer:
              "Via notre page contact ou par email. Nous serons ravis d’échanger sur vos besoins.",
          },
          {
            question: "Quels projets accompagnez-vous ?",
            answer:
              "Du POC IA au déploiement SaaS complet, pour PME ou grands groupes dans tous les secteurs.",
          },
          {
            question: "Pourquoi vous choisir ?",
            answer:
              "Approche sur mesure, techno maîtrisée, proximité client et accompagnement durable.",
          },
        ]}
      />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-neon mb-4">À propos de WebCressonTech</h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Nous aidons les entreprises à se transformer grâce à l’intelligence artificielle
            et à des solutions technologiques sur mesure.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center" id="values">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLightbulb className="text-3xl text-[#00e0ff]" />,
                title: "Innovation",
                text: "Des solutions créatives qui répondent aux défis d’aujourd’hui et de demain.",
              },
              {
                icon: <FaHandshake className="text-3xl text-[#00e0ff]" />,
                title: "Engagement",
                text: "Un accompagnement humain, transparent, et réactif à chaque étape.",
              },
              {
                icon: <FaAward className="text-3xl text-[#00e0ff]" />,
                title: "Excellence",
                text: "Un haut niveau de qualité, de tests, de rigueur et d'expérience utilisateur.",
              },
              {
                icon: <FaUsers className="text-3xl text-[#00e0ff]" />,
                title: "Collaboration",
                text: "Vos besoins sont nos priorités. On construit ensemble.",
              },
              {
                icon: <FaLeaf className="text-3xl text-[#00e0ff]" />,
                title: "Durabilité",
                text: "Des solutions éco-conçues, pensées pour durer et s’intégrer efficacement.",
              },
            ].map(({ icon, title, text }, index) => (
              <div key={index} className="bg-[#111] p-6 rounded border border-[#00e0ff33]">
                <div className="mb-2">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col md:flex-row justify-center gap-4 text-center mt-16">
          <Link
            href="/contact"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Contactez-nous
          </Link>
          <Link
            href="/services/page-services"
            className="border border-[#00e0ff] text-[#00e0ff] px-6 py-3 rounded hover:bg-[#00e0ff22] transition"
          >
            Nos services
          </Link>
        </section>
      </main>
    </>
  )
}
