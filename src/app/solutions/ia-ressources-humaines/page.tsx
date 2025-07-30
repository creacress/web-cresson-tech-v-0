import { Metadata } from 'next';
import Link from 'next/link';
import NeonTitle from '@/components/ui/NeonTitle';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import PricingSection from '@/components/Pricing/PricingSection';

export const metadata: Metadata = {
  title: 'IA pour les Ressources Humaines | WebCressonTech',
  description:
    "Automatisez le recrutement, la gestion des talents et la formation avec l’intelligence artificielle. IA RH sur mesure pour gagner en efficacité et anticiper les besoins.",
  alternates: {
    canonical: 'https://webcresson.com/solutions/ia-ressources-humaines',
  },
  openGraph: {
    title: 'Solutions IA pour les RH | WebCressonTech',
    description:
      "Découvrez comment l'IA transforme les Ressources Humaines : tri de CV, prédiction de turnover, chatbots candidats et formation personnalisée.",
    url: 'https://webcresson.com/solutions/ia-ressources-humaines',
    images: [
      {
        url: 'https://webcresson.com/images/ia-rh.webp',
        width: 1200,
        height: 630,
        alt: 'IA RH WebCressonTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA & RH : Automatiser et prédire | WebCressonTech',
    description:
      "Boostez votre service RH avec l’IA : automatisation, matching de talents, analyse prédictive et coaching personnalisé.",
    images: ['https://webcresson.com/images/ia-rh.webp'],
  },
};

export default function IARHPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
      <BreadcrumbSchema />

      <ServiceSchema
        serviceName="Solutions IA pour les Ressources Humaines"
        serviceDescription="Boostez votre service RH avec l’intelligence artificielle : matching de CV, automatisation des entretiens, prédiction de départ, formation sur mesure."
        serviceTypes={[
          'IA RH',
          'Matching de CV',
          'Prédiction de turnover',
          'Formation intelligente',
          'Chatbots candidats',
        ]}
        faq={[
          {
            question: 'L’IA peut-elle améliorer le recrutement ?',
            answer:
              'Oui, avec un tri de CV intelligent, du matching sur-mesure et l’analyse automatisée des candidatures, vos recruteurs gagnent en efficacité.',
          },
          {
            question: 'Comment l’IA prévient-elle le turnover ?',
            answer:
              'Grâce à l’analyse de données internes (entretiens, performances, absences), elle identifie les signaux faibles et propose des plans d’action.',
          },
          {
            question: 'L’IA est-elle compatible avec nos outils SIRH ?',
            answer: (
              <>
                Oui. Nos solutions s’intègrent via API ou scripts dans des outils comme{' '}
                SAP SuccessFactors, Workday, Lucca, ou Talensoft.
              </>
            ),
          },
        ]}
      />

      <BreadcrumbNav />

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Des RH augmentées par l’IA
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Recrutement automatisé, prédiction des départs, formation ciblée. Vos ressources humaines méritent mieux que des tâches répétitives.
        </p>
        <Link
          href="/services/audit-gratuit"
          className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Demander un audit IA RH
        </Link>
      </section>

      {/* Enjeux */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">Les défis RH à résoudre</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Des centaines de candidatures à trier à la main</li>
          <li>Difficulté à détecter les talents internes</li>
          <li>Turnover difficilement prévisible</li>
          <li>Formations génériques, peu engageantes</li>
        </ul>
      </section>

      {/* Cas concrets */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Cas d’usage concrets</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            {
              title: '📄 Tri de CV automatisé',
              desc: 'Matching intelligent selon soft skills, expérience, compatibilité culturelle.',
            },
            {
              title: '🗣️ Chatbots pour candidats',
              desc: 'Disponibles 24/7 pour répondre aux questions, collecter des infos et planifier des entretiens.',
            },
            {
              title: '📉 Prédiction de départ',
              desc: 'Analyse du turnover avec signaux faibles pour rétention proactive.',
            },
            {
              title: '🎯 Formation personnalisée',
              desc: 'Recommandation de modules e-learning IA en fonction des objectifs métiers et lacunes identifiées.',
            },
          ].map(({ title, desc }, i) => (
            <div key={i} className="bg-[#111] border border-[#00e0ff33] p-6 rounded">
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack IA RH */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">Stack IA RH</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Python + FastAPI + PostgreSQL</li>
          <li>Algorithmes NLP pour CV et lettres de motivation</li>
          <li>Clustering + régressions pour le turnover</li>
          <li>Recommandation de contenu avec LightFM / FAISS</li>
          <li>Connexion SIRH via API (REST/GraphQL)</li>
        </ul>
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Nous avons réduit notre temps de recrutement de 38% grâce à l’IA mise en place par WebCressonTech.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— DRH, Groupe Tech RH</p>
      </section>

      {/* CTA */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-bold text-white mb-4">En route vers des RH intelligentes ?</h2>
        <p className="text-gray-400 mb-6">
          Discutons de vos besoins en automatisation RH, matching de talents ou IA formation.
        </p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Lancer mon projet IA RH
        </Link>
      </section>

      {/* Tarification + liens */}
      <PricingSection />

      <section className="mt-20">
        <h2 className="text-xl font-bold mb-4">Autres solutions IA sectorielles</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/solutions/ia-finance" className="underline text-[#00e0ff] hover:text-white">
            IA pour la Finance
          </Link>
          <Link href="/solutions/ia-sante" className="underline text-[#00e0ff] hover:text-white">
            IA pour la Santé
          </Link>
          <Link href="/services/nlp-et-analytique-avancee" className="underline text-[#00e0ff] hover:text-white">
            NLP et Analyse de texte
          </Link>
        </div>
      </section>
    </main>
  );
}
