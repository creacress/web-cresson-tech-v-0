// app/solutions/page.tsx

import { Metadata } from 'next';
import Link from 'next/link';
import NeonTitle from '@/components/ui/NeonTitle';
import NeonDivider from '@/components/ui/NeonDivider';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import SolutionsIA from '@/components/SolutionsIAPage/SolutionsIAPage';
import CTA from '@/components/CTAButton/CTAButton';
import Image from 'next/image';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Nos Solutions en Intelligence Artificielle | Web Cresson Tech',
  description:
    'Solutions IA personnalisées pour PME, ETI et grands comptes : audit offert, automatisation, agents IA, NLP, contenu génératif...',
  openGraph: {
    title: 'Nos Services - Expertise en IA',
    description:
      'Solutions et expertises avancées en intelligence artificielle par Web Cresson Tech.',
    url: 'https://webcresson.com/solutions',
    images: [
      {
        url: '/images/Logo_webcressontech.webp',
        width: 1200,
        height: 630,
        alt: 'Web Cresson Tech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nos Solutions en Intelligence Artificielle',
    description:
      'Web Cresson Tech propose des solutions sur mesure en intelligence artificielle et automatisation des processus.',
    images: ['/images/Logo_webcressontech.webp'],
  },
  alternates: {
    canonical: 'https://webcresson.com/solutions',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesSolutions() {
  return (
    <main className="px-6 pt-24 pb-16 text-white max-w-6xl mx-auto">
      <BreadcrumbJsonLd
        overrides={{
          services: 'Services',
        }}
      />

      {/* Données structurées */}
      <ServiceSchema
        serviceName="Services en Intelligence Artificielle"
        serviceDescription="Solutions IA sur mesure pour PME, TPE, ETI et grands groupes : automatisation, maintenance prédictive, IA générative, stratégie IA et plus encore."
        serviceTypes={[
          'Automatisation intelligente',
          'IA Générative',
          'Agent IA autonome',
          'Machine Learning',
          'RPA / NLP',
        ]}
        faq={[
          {
            question: 'Quels services propose Web Cresson Tech ?',
            answer:
              "Nous proposons des solutions sur mesure en intelligence artificielle, y compris l'automatisation (RPA), l'IA générative, le deep learning et le machine learning.",
          },
          {
            question: "Comment l'IA peut-elle aider mon entreprise ?",
            answer:
              "L'IA permet d'automatiser des tâches répétitives, d'améliorer la prise de décision et d'innover avec des solutions adaptées.",
          },
          {
            question: 'Proposez-vous des audits IA gratuits ?',
            answer:
              "Oui, nous offrons un audit gratuit pour évaluer vos besoins et déterminer comment l'IA peut optimiser vos processus métiers.",
          },
        ]}
      />

      {/* Section Hero */}
      <section className="text-center mb-12">
        <BreadcrumbNav />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Solutions IA sur mesure pour booster votre performance
        </h1>
        <NeonDivider />
        <p className="text-sm text-gray-300 mb-8 max-w-xl mx-auto">
          Découvrez nos solutions d'intelligence artificielle conçues pour différents types d'entreprises. Nos services couvrent l'automatisation intelligente, la génération de contenu, les agents autonomes, et bien plus.
        </p>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 mb-20 text-lg">
          Pour les PME, TPE et Startup : passez à l’IA sur mesure pour automatiser, prédire et innover.
        </p>
      </section>
      <NeonDivider />
      {/* Solutions par profil */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-neon text-center mb-6">Pourquoi faire appel à WebCressonTech ?</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-300 text-center">
          <div className="bg-[#111] border border-[#00e0ff33] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Accompagnement 100% personnalisé</h3>
            <p>On s’adapte à vos enjeux : MVP, automatisation, IA sur-mesure.</p>
          </div>
          <div className="bg-[#111] border border-[#00e0ff33] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Pas besoin d’être expert en IA</h3>
            <p>On vulgarise et on vous guide. Vous restez concentré sur votre métier.</p>
          </div>
          <div className="bg-[#111] border border-[#00e0ff33] p-6 rounded-lg">
            <h3 className="text-xl font-bold text-white mb-2">Audit gratuit et rapide</h3>
            <p>On identifie rapidement les leviers IA dans votre entreprise.</p>
          </div>
        </div>
      </section>
       {/* Solutions par profil */}
       <section className="py-20 max-w-4xl mx-auto bg-[#0c0c0c] rounded-xl px-6 border border-[#00e0ff11]">
        <h2 className="text-3xl sm:text-4xl font-bold text-neon text-center mb-6">Nos solutions selon votre profil</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-6">
          Que vous soyez indépendant, dirigeant d’une PME ou fondateur d’une startup, l’IA peut booster votre activité.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-gray-300 text-center items-stretch">
          {[{
            img: "/avatars/julie.png",
            nom: "Julie",
            role: "TPE – Atelier de maroquinerie",
            bio: "Julie dirige seule sa micro-entreprise. Elle veut automatiser la facturation et les suivis clients pour se libérer du temps sans embaucher.",
            soluce: "👩‍💼 Outils simples : automatisation des tâches, génération de contenu, CRM intelligent."
          }, {
            img: "/avatars/marc.png",
            nom: "Marc",
            role: "PME – CTO d'une entreprise industrielle",
            bio: "Marc cherche à connecter ses outils internes avec des solutions IA fiables, et améliorer l'efficacité des équipes techniques.",
            soluce: "🏢 Optimisation des process, maintenance prédictive, marketing IA et prédiction des ventes."
          }, {
            img: "/avatars/lisa.png",
            nom: "Lisa",
            role: "Startup – CEO d'une startup IA",
            bio: "Lisa a levé des fonds et veut lancer un MVP IA rapide et innovant. Elle cherche un partenaire agile pour l'accompagner.",
            soluce: "🏛️ Stratégie IA, agents autonomes, intégration systèmes, gouvernance et conformité IA."
          }].map((p, i) => (
            <div key={i} className="flex flex-col justify-between bg-[#111] border border-[#00e0ff33] rounded-lg p-6 transition duration-300 hover:shadow-xl hover:scale-105 hover:border-[#00e0ff88]">
              <Image src={p.img} alt={p.nom} width={80} height={80} className="rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-1">{p.nom}</h3>
              <p className="text-sm italic text-gray-400 mb-2">{p.role}</p>
              <p className="text-sm mb-4">{p.bio}</p>
              <p className="text-sm text-gray-400">{p.soluce}</p>
              {p.nom === "Julie" && (
                <Link href="/solutions/julie" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
              {p.nom === "Marc" && (
                <Link href="/solutions/marc" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
              {p.nom === "Lisa" && (
                <Link href="/solutions/lisa" className="mt-4 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm rounded transition text-center">
                  Voir une démo adaptée
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>
      {/* Composants Client */}
      <SolutionsIA />

      {/* Composants CTA*/}
      <section className="py-16 px-4 bg-[#0f0f0f] rounded-xl text-center max-w-4xl mx-auto mb-16 border border-[#00e0ff22]">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Prêt à automatiser votre business ?</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          Parlons de votre projet et construisons une solution IA, RPA ou scraping adaptée à vos besoins.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="/contact" className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md text-sm font-semibold">
            Contacter un expert
          </a>
          <CTA label="Obtenez un audit IA gratuit" />
        </div>
      </section>
      <NeonDivider />
     

      {/* Témoignages clients */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold text-neon text-center mb-10">Ils nous font confiance</h2>
        <div className="space-y-4 text-gray-300">
          <blockquote className="border-l-4 border-green-500 pl-4 italic">
            “En tant que PME, nous avons pu accéder à l’IA sans expertise technique. Résultat : 2h économisées par jour sur nos mails.”
          </blockquote>
          <p className="text-right text-sm text-gray-400">— Julien B., Gérant TPE</p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            “L’IA générative intégrée par l’équipe a boosté notre production de contenus de 3x.”
          </blockquote>
          <p className="text-right text-sm text-gray-400">— Damien L., Directeur Marketing</p>
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400">
            🔁 Besoin de découvrir plus ?
            <a href="/" className="text-white underline hover:text-cyan-400 mx-1">Accueil</a> |
            <a href="/blog" className="text-white underline hover:text-cyan-400 mx-1">Blog IA</a>
          </p>
        </div>
      </section>

      {/* CTA */}
      <CTA label="Obtenez un audit IA gratuit" />
    </main>
  );
}
