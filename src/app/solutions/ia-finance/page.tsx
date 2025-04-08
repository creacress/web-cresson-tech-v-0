import { Metadata } from "next"
import Link from "next/link"
import NeonTitle from "@/components/ui/NeonTitle"
import ServiceSchema from "@/components/ServiceShema/ServiceSchema"
import BreadcrumbJsonLd from "@/components/seo/BreadcrumbJsonLd"
import PricingSection from "@/components/Pricing/PricingSection"

export const metadata: Metadata = {
  title: "IA pour la Finance & Assurance | WebCressonTech",
  description: "Automatisez vos processus financiers avec l’IA : détection de fraude, prévision de trésorerie, OCR comptable et conformité intelligente.",
  alternates: {
    canonical: "https://webcresson.com/solutions/ia-finance",
  },
  openGraph: {
    title: "Solutions IA pour la Finance | WebCressonTech",
    description: "Boostez votre pilotage financier grâce à l’IA : automatisation, prédiction, détection d’anomalies et conformité réglementaire.",
    url: "https://webcresson.com/solutions/ia-finance",
    images: [
      {
        url: "https://webcresson.com/images/Logo_webcressontech.webp",
        width: 1200,
        height: 630,
        alt: "IA Finance par WebCressonTech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IA & Finance | WebCressonTech",
    description: "Détection de fraude, conformité automatisée, prédiction comptable : passez à la finance augmentée avec l’IA.",
    images: ["https://webcresson.com/images/ia-finance.webp"],
  },
}

export default function FinanceIA() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
      <BreadcrumbJsonLd overrides={{ solutions: "Solutions", "ia-finance": "IA pour la finance" }} />

      <ServiceSchema
        serviceName="Solutions IA pour la Finance"
        serviceDescription="L’IA appliquée à la finance permet de prédire les flux, automatiser la comptabilité, détecter la fraude et assurer la conformité réglementaire."
        serviceTypes={[
          "IA pour la finance",
          "Prédiction financière",
          "Conformité réglementaire automatisée",
          "Détection d'anomalies comptables",
          "Extraction OCR de factures",
        ]}
        faq={[
          {
            question: "Quels bénéfices l’IA apporte-t-elle en finance ?",
            answer: "Réduction du temps de clôture, fiabilisation des données, automatisation des tâches et détection proactive d’anomalies.",
          },
          {
            question: "Quels formats de documents sont pris en charge ?",
            answer: "PDF, scans, Excel, emails : nous traitons tous les formats via OCR + NLP.",
          },
          {
            question: "L’IA est-elle RGPD et compatible avec mes outils actuels ?",
            answer: "Oui, nos solutions sont hébergées en Europe, chiffrées, et s’intègrent à votre ERP, CRM, SIRH ou outil BI.",
          },
        ]}
      />

      {/* Hero */}
      <section className="text-center mb-16">
        <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
          Passez à la finance augmentée avec l’intelligence artificielle
        </NeonTitle>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Automatisation comptable, conformité réglementaire, détection de fraude : découvrez le potentiel de l’IA appliquée à vos données financières.
        </p>
        <Link
          href="/services/audit-gratuit"
          className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Lancer un audit IA financier
        </Link>
      </section>

      {/* Enjeux métiers */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">Vos enjeux financiers au quotidien</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Saisies comptables manuelles chronophages</li>
          <li>Volumes croissants de documents à traiter</li>
          <li>Risque de non-conformité (KYC, LCB-FT, audit)</li>
          <li>Détection tardive d’erreurs ou de fraudes</li>
        </ul>
      </section>

      {/* Cas d’usages IA */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Cas concrets d’IA en finance</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            {
              title: "📄 Lecture automatique de factures",
              desc: "OCR + NLP pour extraire et rapprocher automatiquement les données comptables des documents fournisseurs.",
            },
            {
              title: "📉 Prédiction de trésorerie",
              desc: "Modèles ML pour anticiper les entrées/sorties de trésorerie et prévenir les tensions.",
            },
            {
              title: "🚨 Détection d’anomalies",
              desc: "Analyse automatique de vos écritures et flux pour détecter les fraudes ou doublons.",
            },
            {
              title: "🛡️ Contrôle de conformité réglementaire",
              desc: "Automatisation KYC, vérifications LCB-FT, export pistes d’audit conforme RGPD.",
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
        <h2 className="text-2xl font-bold text-white mb-4">Stack IA pour la finance</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>OCR : Tesseract, AWS Textract, Google Vision</li>
          <li>Prédiction : Scikit-learn, LightGBM, Prophet</li>
          <li>NLP : spaCy, Transformers (BERTopic, summarizer)</li>
          <li>API : FastAPI sécurisée, intégration ERP</li>
          <li>Déploiement : Docker, PostgreSQL, CI/CD GitHub</li>
        </ul>
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “WebCressonTech a automatisé nos rapprochements comptables avec un taux de succès de 96% et une fiabilité réglementaire sans faille.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Directeur Financier, Cabinet Fiduciaire</p>
      </section>

      {/* CTA final */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Et si vos finances passaient à l’ère de l’IA ?</h2>
        <p className="text-gray-400 mb-6">Nous vous aidons à automatiser, prédire et fiabiliser vos données financières.</p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Lancer mon projet IA Finance
        </Link>
      </section>

      {/* Tarifs + cross-links */}
      <PricingSection />

      <section className="mt-20">
        <h2 className="text-xl font-bold mb-4">À découvrir également</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/solutions/logistique-ia" className="underline text-[#00e0ff] hover:text-white">
            IA pour la Logistique
          </Link>
          <Link href="/services/analyse-semantique-nlp" className="underline text-[#00e0ff] hover:text-white">
            NLP & Analyse sémantique
          </Link>
          <Link href="/services/machine-learning-deep-learning" className="underline text-[#00e0ff] hover:text-white">
            Machine Learning prédictif
          </Link>
        </div>
      </section>
    </main>
  )
}
