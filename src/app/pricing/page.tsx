import { Metadata } from 'next'
import Head from 'next/head'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import ServiceSchema from '@/components/ServiceShema/ServiceSchema'
import PricingSection from '@/components/Pricing/PricingSection'
import NeonTitle from '@/components/ui/NeonTitle'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tarifs WebCressonTech - Solutions IA',
  description:
    "Découvrez nos offres flexibles en intelligence artificielle, adaptées aux startups comme aux grandes entreprises.",
  alternates: {
    canonical: 'https://webcresson.com/pricing',
  },
  openGraph: {
    title: 'Tarifs WebCressonTech - Solutions IA',
    description: 'Nos plans IA : Starter, Pro ou Entreprise sur mesure.',
    url: 'https://webcresson.com/pricing',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarifs WebCressonTech',
    description: 'Des solutions IA adaptées à vos besoins.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PricingPage() {
  return (
    <>
      {/* SEO + JSON-LD */}
      <BreadcrumbJsonLd overrides={{ pricing: 'Tarification' }} />
      <ServiceSchema
        serviceName="Tarification des solutions IA - WebCressonTech"
        serviceDescription="Découvrez nos offres IA flexibles : Starter, Pro ou sur-mesure. Accompagnement de qualité pour chaque niveau de projet."
        serviceTypes={[
          'Tarification IA',
          'Solutions technologiques sur mesure',
          'Services IA pour entreprises',
        ]}
        faq={[
          {
            question: 'Puis-je modifier mon plan plus tard ?',
            answer: 'Oui, vous pouvez passer à un plan supérieur à tout moment en nous contactant.',
          },
          {
            question: 'Proposez-vous des essais gratuits ?',
            answer: 'Nous offrons des démonstrations personnalisées sur demande.',
          },
          {
            question: 'Le plan Entreprise est-il adapté à mon secteur ?',
            answer:
              'Oui, il est entièrement personnalisable selon votre domaine (santé, finance, retail, etc).',
          },
        ]}
      />

      {/* Canonical fallback */}
      <Head>
        <link rel="canonical" href="https://webcresson.com/pricing" />
      </Head>

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
        {/* Héro */}
        <section className="text-center mb-12">
          <NeonTitle as="h1" className="text-4xl sm:text-5xl font-extrabold mb-4">
            Tarifs des solutions IA sur mesure
          </NeonTitle>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            De l’audit rapide à l’accompagnement complet, nos formules s’adaptent à votre projet et votre maturité IA.
          </p>
        </section>

        {/* Grille de plans */}
        <PricingSection />

        {/* Explication des plans */}
        <section className="my-20">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Ce que comprend chaque plan
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-gray-300">
            {[
              {
                title: 'Starter',
                desc: 'Lancez un projet pilote ou un audit avec un minimum d’engagement. Idéal pour les TPE, PME ou première expérimentation IA.',
              },
              {
                title: 'Pro',
                desc: 'Approche modulaire avec plus de projets et de services IA. Idéal pour entreprises en croissance ou DSI innovantes.',
              },
              {
                title: 'Entreprise',
                desc: 'Approche sur-mesure, pilotage projet, CI/CD, stack privée, expert IA dédié, ateliers personnalisés…',
              },
            ].map(({ title, desc }, i) => (
              <div key={i} className="bg-[#111] p-6 rounded border border-[#00e0ff33]">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA final */}
        <section className="text-center my-20">
          <h2 className="text-2xl font-bold text-white mb-4">Vous hésitez sur le bon plan ?</h2>
          <p className="text-gray-400 mb-6">Discutons de vos enjeux IA, on vous oriente rapidement.</p>
          <Link
            href="/contact"
            className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
          >
            Discuter avec un expert IA
          </Link>
        </section>
      </main>
    </>
  )
}
