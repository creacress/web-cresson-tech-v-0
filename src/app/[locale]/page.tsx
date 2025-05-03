import { Metadata } from 'next'
import { gtagEvent } from '@/lib/gtag'
import { seoByLocale } from '@/lib/next-seo.config'
import { isValidLocale } from '@/lib/i18n-config'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { AlertCircle, BarChart, Timer, Link2 } from 'lucide-react'
import NeonDivider from '@/components/ui/NeonDivider'
import NeonTitle from '@/components/ui/NeonTitle'
import CTAButton from '@/components/CTAButton/CTAButton'
import ServiceSchema from '@/components/ServiceShema/ServiceSchema'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ClientWrapper from '@/components/ClientWrapper/ClientWrapper'

export const revalidate = 86400

type Props = {
  params: { locale: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await Promise.resolve(params) // ✅ simule await sans casser le typage

  const validLocale = isValidLocale(locale) ? locale : 'fr'
  const seo = seoByLocale[validLocale]

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: seo.canonical,
      languages: {
        'fr-FR': 'https://webcresson.com/fr',
        'pt-PT': 'https://webcresson.com/pt',
      },
    },
    openGraph: seo.openGraph,
    twitter: seo.twitter,
    robots: {
      index: true,
      follow: true,
    },
  }
}




export default function Home({ params }: Props) {
  const handleClick = () => {
    gtagEvent({
      action: 'cta_click',
      category: 'CTA',
      label: 'Hero Section',
    })
  }

  const problèmes = [
    {
      icon: <Timer className="w-5 h-5 text-neon" />,
      texte: "Vous perdez du temps sur des tâches manuelles répétitives",
    },
    {
      icon: <BarChart className="w-5 h-5 text-neon" />,
      texte: "Vous avez des données… mais pas d’insights exploitables",
    },
    {
      icon: <AlertCircle className="w-5 h-5 text-neon" />,
      texte: "Vos équipes sont surchargées de traitements à faible valeur",
    },
    {
      icon: <Link2 className="w-5 h-5 text-neon" />,
      texte: "Vos outils ne communiquent pas entre eux",
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd overrides={{ home: "Accueil" }} />

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
            answer: "Solutions sur mesure en intelligence artificielle, machine learning, deep learning et automatisation des processus.",
          },
          {
            question: "Pourquoi choisir WebCressonTech pour vos projets IA et Python ?",
            answer: "Nous offrons une expertise certifiée, un accompagnement complet et des solutions adaptées à vos besoins.",
          },
          {
            question: "Comment contacter WebCressonTech ?",
            answer: "Contactez-nous via notre page de contact ou par téléphone pour discuter de vos projets IA et développement Python.",
          },
        ]}
      />

      <main className="bg-black text-white px-4 sm:px-6 lg:px-12">
        <section className="text-center py-20 sm:py-24">
          <NeonTitle as="h1" className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            WebCressonTech : Votre partenaire IA & Python
          </NeonTitle>
          <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto mb-6 sm:mb-8">
            WebCressonTech conçoit des solutions sur mesure pour les entreprises qui veulent passer à l’échelle.
          </p>
          <CTAButton />
        </section>

        <NeonDivider />

        <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10">
            Vous reconnaissez-vous ?
          </h2>
          <ul className="grid sm:grid-cols-2 gap-6 text-gray-300">
            {problèmes.map((item, index) => (
              <li key={index} className="flex items-start gap-3 p-4 rounded-lg hover:bg-neutral-800 transition">
                <div className="mt-1">{item.icon}</div>
                <p className="leading-relaxed">{item.texte}</p>
              </li>
            ))}
          </ul>
        </section>

        <NeonDivider />

        <section className="py-14 sm:py-16 max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-neon text-center mb-8">
            Notre méthode en 3 étapes
          </h2>
          <div className="grid gap-6 sm:grid-cols-3 text-center text-gray-300">
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
              <div key={i} className="bg-[#111] border border-[#00e0ff33] p-6 rounded">
                <h3 className="text-lg font-bold text-white mb-2">{step}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <NeonDivider />

        <section className="py-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-neon text-center mb-10">
            Ce que nous faisons avec Python & l’IA
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
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
              <div key={i} className="bg-[#111] border border-[#00e0ff33] p-6 rounded hover:bg-[#1a1a1a] transition">
                <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services/page-services">
              <button className="inline-flex items-center gap-2 bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition">
                Découvrir les services
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </section>

        <NeonDivider />

        <section className="py-16 max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-neon text-center mb-10">
            Des expertises IA complètes
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
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
                <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <NeonDivider />

        <section className="py-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-neon mb-8">Ils nous font confiance</h2>
          <div className="bg-[#111] border border-[#00e0ff33] p-6 rounded">
            <p className="italic text-gray-300 mb-4">
              “Grâce à WebCressonTech, nous avons automatisé 40% de nos tâches manuelles et gagné 12h par semaine sur la gestion des emails.”
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <span className="text-white font-semibold">— Responsable IT, Groupe Transport</span>
              <Image src="/images/logo_la_poste.webp" alt="Logo La Poste" width={96} height={54} />
            </div>
          </div>
        </section>

        <NeonDivider />

        <section className="text-center py-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-neon mb-6">Prêt à transformer vos process ?</h2>
          <p className="text-gray-400 mb-6">
            Profitez d’un audit IA gratuit pour faire le premier pas vers l’automatisation intelligente.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Discuter de mon projet IA
          </Link>
        </section>
        <ClientWrapper />
      </main>
    </>
  )
}
