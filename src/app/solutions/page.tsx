// app/solutions/page.tsx

import { Metadata } from 'next';
import NeonTitle from '@/components/ui/NeonTitle';
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import SolutionsIA from '@/components/SolutionsIAPage/SolutionsIAPage';
import CTA from '@/components/CTAButton/CTAButton';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Nos Solutions en Intelligence Artificielle | Web Cresson Tech',
  description:
    'Solutions IA Web Cresson Tech : des services personnalisés en intelligence artificielle pour PME, grandes entreprises et ETI. Audit gratuit, automatisation, IA générative, agents intelligents, NLP et plus.',
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
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          Passez à la vitesse supérieure avec l’IA sur mesure
        </NeonTitle>
        <p className="text-gray-400 max-w-2xl mx-auto mt-4 mb-20 text-lg">
          Pour les PME, ETI et grandes entreprises : passez à l’IA sur mesure pour automatiser, prédire et innover.
        </p>
      </section>

      {/* Composants Client */}
      <SolutionsIA />

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6 text-center">Solutions adaptées par typologie d'entreprise</h2>
        <ul className="grid md:grid-cols-3 gap-6 text-lg text-gray-300">
          <li>
            <h3 className="text-xl font-semibold mb-2">👩‍💼 Micro-entreprises & TPE</h3>
            <p>Outils simples : automatisation des tâches, génération de contenu, CRM intelligent.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold mb-2">🏢 PME & ETI</h3>
            <p>Optimisation des process, maintenance prédictive, marketing IA et prédiction des ventes.</p>
          </li>
          <li>
            <h3 className="text-xl font-semibold mb-2">🏛️ Grandes entreprises</h3>
            <p>Stratégie IA, agents autonomes, intégration systèmes, gouvernance et conformité IA.</p>
          </li>
        </ul>
      </section>

      {/* Cas d’usage concrets */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Cas d’usage concrets</h2>
        <ul className="grid md:grid-cols-2 gap-6 text-lg text-gray-300">
          <li>🔧 Maintenance prédictive avec IA pour anticiper les défaillances</li>
          <li>📊 Analyse automatique de documents via NLP pour le juridique et le RH</li>
          <li>🤖 Chatbot & agent IA pour support client autonome</li>
          <li>✍️ Génération de contenu personnalisé pour newsletters et réseaux sociaux</li>
        </ul>
      </section>

      {/* Témoignages clients */}
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-6">Témoignages clients</h2>
        <div className="space-y-4 text-gray-300">
          <blockquote className="border-l-4 border-green-500 pl-4 italic">
            “En tant que PME, nous avons pu accéder à l’IA sans expertise technique. Résultat : 2h économisées par jour sur nos mails.”
          </blockquote>
          <p className="text-right text-sm text-gray-400">— Karim B., Gérant TPE</p>

          <blockquote className="border-l-4 border-blue-500 pl-4 italic">
            “L’IA générative intégrée par l’équipe a boosté notre production de contenus de 3x.”
          </blockquote>
          <p className="text-right text-sm text-gray-400">— Damien L., Directeur Marketing</p>
        </div>
      </section>

      {/* CTA */}
      <CTA />
    </main>
  );
}
