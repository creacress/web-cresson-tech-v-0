import { Metadata } from 'next';
import Link from 'next/link';
import NeonTitle from '@/components/ui/NeonTitle';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import PricingSection from '@/components/Pricing/PricingSection';

export const metadata: Metadata = {
  title: 'IA pour la Santé & Médical | WebCressonTech',
  description:
    "Exploitez l’IA dans le secteur de la santé : automatisation, diagnostic assisté, OCR de dossiers médicaux et analyse prédictive de pathologies.",
  alternates: {
    canonical: 'https://webcresson.com/solutions/ia-sante',
  },
  openGraph: {
    title: 'Intelligence Artificielle pour la Santé | WebCressonTech',
    description:
      "Découvrez comment l’IA optimise la santé : automatisation, prédiction de consultations, traitement d’imagerie, détection d’anomalies médicales.",
    url: 'https://webcresson.com/solutions/ia-sante',
    images: [
      {
        url: 'https://webcresson.com/images/IA-sante.webp',
        width: 1200,
        height: 630,
        alt: 'IA Santé - WebCressonTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA en Santé & Médical | WebCressonTech',
    description:
      "Automatisation des tâches médicales, analyse d’images, NLP sur comptes rendus : passez à la santé augmentée avec l’IA.",
    images: ['https://webcresson.com/images/IA-sante.webp'],
  },
};

export default function IASantePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
      <BreadcrumbSchema />

      <ServiceSchema
        serviceName="Solutions IA pour la Santé"
        serviceDescription="L'intelligence artificielle appliquée à la santé permet d'automatiser les tâches administratives, d’analyser les images médicales, de traiter les comptes rendus et de prédire les besoins patients."
        serviceTypes={[
          'IA santé',
          'OCR médical',
          'Détection d’anomalies',
          'Prédiction rendez-vous',
          'Analyse NLP comptes rendus',
        ]}
        faq={[
          {
            question: 'Quels sont les bénéfices de l’IA en santé ?',
            answer:
              'Réduction de la charge administrative, diagnostic assisté, analyse automatique d’images et meilleure anticipation des besoins médicaux.',
          },
          {
            question: 'Respecte-t-elle le RGPD et le secret médical ?',
            answer:
              'Oui, nos traitements sont hébergés en France/UE, chiffrés de bout en bout, et pensés pour la confidentialité des données de santé.',
          },
          {
            question: 'Peut-on intégrer l’IA à mon logiciel médical existant ?',
            answer: (
              <>
                Oui, via API REST sécurisée ou modules compatibles avec Hopital Manager, Axigate, etc.
              </>
            ),
          },
        ]}
      />

      <BreadcrumbNav />

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          L’IA au service des professionnels de santé
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Optimisez votre temps, vos diagnostics et vos processus médicaux avec des solutions d’intelligence artificielle sur mesure.
        </p>
        <Link
          href="/services/audit-gratuit"
          className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Demander un audit IA santé
        </Link>
      </section>

      {/* Enjeux */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">Les défis du secteur médical</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Surcharge administrative et temps médical perdu</li>
          <li>Explosion des données à analyser (DMP, imagerie, comptes rendus)</li>
          <li>Manque d’outils prédictifs pour l’organisation de soins</li>
          <li>Risque d’erreurs humaines ou d’oubli de pathologies</li>
        </ul>
      </section>

      {/* Cas IA santé */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Cas concrets d’IA en santé</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            {
              title: '📄 OCR sur dossiers patients',
              desc: 'Lecture automatique de documents médicaux scannés, extraction structurée des infos (nom, antécédents, traitements).',
            },
            {
              title: '🧠 Analyse d’imagerie médicale',
              desc: 'Détection de tumeurs, fractures ou pathologies à partir de radios, scanners ou IRM avec deep learning.',
            },
            {
              title: '🗣️ NLP sur comptes rendus',
              desc: 'Classification, résumé, extraction automatique des diagnostics ou codes CIM10 à partir de texte libre.',
            },
            {
              title: '📅 Prédiction d’affluence & organisation',
              desc: 'Machine learning pour anticiper le volume de RDV, urgences ou hospitalisations à venir.',
            },
          ].map(({ title, desc }, i) => (
            <div key={i} className="bg-[#111] border border-[#00e0ff33] p-6 rounded">
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack technique */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">Stack technique dédiée santé</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>OCR : Tesseract, Azure Form Recognizer</li>
          <li>Vision IA : PyTorch + CNN, segmentation UNet</li>
          <li>NLP médical : spaCy, MedCAT, BioBERT</li>
          <li>Backend : FastAPI + PostgreSQL + Docker + RGPD</li>
          <li>Interopérabilité HL7, FHIR (SI hospitalier)</li>
        </ul>
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Nous avons automatisé l’extraction d’infos médicales de 10 000 dossiers en 3 semaines. Temps médical préservé = +18h/semaine.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— DSI, Centre Hospitalier Régional</p>
      </section>

      {/* CTA final */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-bold text-white mb-4">
          Envie de passer à la santé augmentée par l’IA ?
        </h2>
        <p className="text-gray-400 mb-6">
          Nous construisons des solutions IA médicales respectueuses, performantes et personnalisées.
        </p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Lancer mon projet IA Santé
        </Link>
      </section>

      {/* Tarifs + crosslinks */}
      <PricingSection />

      <section className="mt-20">
        <h2 className="text-xl font-bold mb-4">Autres solutions IA sectorielles</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/solutions/ia-finance" className="underline text-[#00e0ff] hover:text-white">
            IA pour la Finance
          </Link>
          <Link href="/solutions/logistique-ia" className="underline text-[#00e0ff] hover:text-white">
            IA pour la Logistique
          </Link>
          <Link href="/services/analyse-semantique-nlp" className="underline text-[#00e0ff] hover:text-white">
            NLP Médical & Sémantique
          </Link>
        </div>
      </section>
    </main>
  );
}
