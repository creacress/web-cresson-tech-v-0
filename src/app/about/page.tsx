import React from 'react';
import type { Metadata } from 'next';
import NeonTitle from '@/components/ui/NeonTitle';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import Link from 'next/link';
import {
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaUsers,
  FaLeaf,
} from 'react-icons/fa';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "À propos de WebCressonTech | Experts IA & Automatisation",
  description: "Découvrez WebCressonTech : notre mission, notre équipe et notre expertise en intelligence artificielle, RPA et automatisation Python.",
  keywords: ["à propos", "WebCressonTech", "équipe IA", "RPA", "automatisation", "data", "Python", "intelligence artificielle"],
  alternates: {
    canonical: "https://webcresson.com/about",
  },
  openGraph: {
    title: "WebCressonTech – Notre histoire & notre mission",
    description: "Une équipe d'experts passionnés par l'IA, la RPA et l'automatisation au service de votre croissance.",
    url: "https://webcresson.com/about",
    siteName: "WebCresson Tech",
    images: [
      {
        url: "https://webcresson.com/images/og-about.webp",
        width: 1200,
        height: 630,
        alt: "Équipe WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "À propos de WebCressonTech",
    description: "Une équipe experte en IA et automatisation, à votre écoute.",
    images: ["https://webcresson.com/images/og-about.webp"],
    creator: "@WebCresson",
  },
  robots: {
    index: true,
    follow: true,
  },
}


export default function About() {
  return (
    <>
      <BreadcrumbSchema />

      <ServiceSchema
        serviceName="À propos de WebCressonTech"
        serviceDescription={metadata.description || ''}
        serviceTypes={[
          'Innovation technologique',
          'Intelligence Artificielle',
          'Solutions sur mesure',
        ]}
        faq={[
          {
            question: 'Quelle est la mission de WebCressonTech ?',
            answer:
              'Accompagner les entreprises avec des solutions d\'IA et de tech avancées, sur mesure et performantes.',
          },
          {
            question: 'Quelles sont les valeurs fondamentales ?',
            answer:
              'Innovation, excellence, collaboration, engagement humain et responsabilité environnementale.',
          },
          {
            question: 'Comment contacter WebCressonTech ?',
            answer: (
              <>
                Via notre <Link href="/contact" className="underline text-[#00e0ff] hover:text-white">page contact</Link> ou par e-mail à{' '}
                <a href="mailto:contact@webcresson.com" className="underline text-[#00e0ff] hover:text-white">contact@webcresson.com</a>.
              </>
            ),
          },
          {
            question: 'Quels projets accompagnez-vous ?',
            answer:
              'Du POC IA au déploiement SaaS complet, pour PME ou grands groupes dans tous les secteurs.',
          },
          {
            question: 'Pourquoi vous choisir ?',
            answer:
              'Approche sur mesure, techno maîtrisée, proximité client et accompagnement durable.',
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 pt-20 pb-16 text-white">
        {/* 🧭 Fil d'Ariane visible */}
        <BreadcrumbNav />

        {/* Header */}
        <section className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">L'humain derrière WebCressonTech</h1>

          <div className="flex flex-col md:flex-row items-center gap-8 justify-center max-w-4xl mx-auto text-left animate-slide-up delay-200">
            <img
              src="/images/portrait-cresson-alexis.jpeg"
              alt="Portrait Alexis Cresson – Fondateur de WebCressonTech"
              className="w-40 h-40 rounded-full object-cover border-2 border-cyan-400"
            />
            <div>
              <h2 className="text-2xl font-semibold text-white mb-2">👋 Moi c’est Alexis Cresson</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Ingénieur de données passionné, j’ai fondé WebCressonTech en 2024 avec une idée simple :
                rendre l’IA et l’automatisation accessibles à toutes les entreprises, même les plus petites.
                Mon parcours m’a amené à travailler sur des projets variés, mêlant data, IA, OSINT et productivité.
              </p>
            </div>
          </div>
        </section>

        {/* Valeurs */}
        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center" id="values">
            Mes Valeurs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <FaLightbulb className="text-2xl text-[#00e0ff]" />,
                title: 'Innovation',
                text: 'Des solutions créatives qui répondent aux défis d’aujourd’hui et de demain.',
              },
              {
                icon: <FaHandshake className="text-2xl text-[#00e0ff]" />,
                title: 'Engagement',
                text: 'Un accompagnement humain, transparent, et réactif à chaque étape.',
              },
              {
                icon: <FaAward className="text-2xl text-[#00e0ff]" />,
                title: 'Excellence',
                text: 'Un haut niveau de qualité, de tests, de rigueur et d\'expérience utilisateur.',
              },
              {
                icon: <FaUsers className="text-2xl text-[#00e0ff]" />,
                title: 'Collaboration',
                text: 'Vos besoins sont nos priorités. On construit ensemble.',
              },
              {
                icon: <FaLeaf className="text-2xl text-[#00e0ff]" />,
                title: 'Durabilité',
                text: 'Des solutions éco-conçues, pensées pour durer et s’intégrer efficacement.',
              },
            ].map(({ icon, title, text }, index) => (
              <div key={index} className={`bg-[#111] p-5 rounded border border-[#00e0ff33] animate-fade-in-up delay-[${index * 100}]`}>
                <div className="mb-2">{icon}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p className="text-gray-400 text-sm">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">📖 Mon parcours</h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed text-center animate-fade-in delay-300">
            Après plusieurs années à manipuler des données et à développer des projets IA pour d'autres,
            j’ai ressenti le besoin de créer une structure à mon image. WebCressonTech est née pour répondre à un double besoin :
            démocratiser l’intelligence artificielle et accompagner les entreprises avec des outils vraiment utiles, bien conçus et humains.
          </p>
        </section>

        {/* CTA */}
        <section className="flex flex-col sm:flex-row justify-center items-center gap-4 text-center mt-12 animate-fade-in-up delay-500">
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
  );
}
