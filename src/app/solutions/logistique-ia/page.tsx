import { Metadata } from 'next';
import Link from 'next/link';
import NeonTitle from '@/components/ui/NeonTitle';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import PricingSection from '@/components/Pricing/PricingSection';

export const metadata: Metadata = {
  title: 'IA pour la Logistique & Supply Chain | WebCressonTech',
  description:
    "Optimisez vos flux logistiques avec l'intelligence artificielle : prévision de demande, automatisation, réduction des erreurs, et pilotage intelligent des stocks.",
  alternates: {
    canonical: 'https://webcresson.com/solutions/logistique-ia',
  },
  openGraph: {
    title: 'IA pour la Logistique | WebCressonTech',
    description:
      "Boostez la performance de votre chaîne logistique avec l’IA : RPA, machine learning, prédiction de flux, automatisation des tâches répétitives.",
    url: 'https://webcresson.com/solutions/logistique-ia',
    images: [
      {
        url: 'https://webcresson.com/images/ia-logistique.webp',
        width: 1200,
        height: 630,
        alt: 'IA logistique par WebCressonTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA logistique | WebCressonTech',
    description: 'Prévision, automatisation, OCR, KPI : l’IA pour la supply chain.',
    images: ['https://webcresson.com/images/ia-logistique.webp'],
  },
};

export default function LogistiqueIA() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
      <BreadcrumbSchema />

      <ServiceSchema
        serviceName="Solutions IA pour la Logistique"
        serviceDescription="Optimisez votre chaîne logistique avec la RPA, le Machine Learning et la prédiction IA. Automatisation, saisie intelligente, OCR et KPI en temps réel."
        serviceTypes={['IA logistique', 'RPA', 'Machine Learning', 'OCR', 'Prévision de flux', 'Supply Chain']}
        faq={[
          {
            question: "Quels sont les bénéfices de l’IA dans la logistique ?",
            answer:
              "Réduction des délais, automatisation des tâches, anticipation des flux, réduction des erreurs humaines et meilleure planification.",
          },
          {
            question: "Quels outils sont utilisés ?",
            answer:
              "Python, FastAPI, Scikit-learn, Tesseract OCR, Airflow, RPA no-code, bases SQL et API ERP.",
          },
          {
            question: "Est-ce compatible avec mon ERP existant ?",
            answer:
              "Oui, nos solutions s’intègrent via API ou scripts RPA pour SAP, Odoo, Salesforce, etc.",
          },
        ]}
      />

      <BreadcrumbNav />

      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Optimisez votre logistique grâce à l’IA
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Gagnez en efficacité avec des flux automatisés, des prévisions fiables et des process intelligents pilotés par vos données.
        </p>
        <Link
          href="/services/audit-gratuit"
          className="mt-6 inline-block bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Obtenir mon audit IA logistique
        </Link>
      </section>

      {/* Enjeux */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">Les enjeux logistiques d’aujourd’hui</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>Données dispersées entre ERP, Excel, mails</li>
          <li>Saisies manuelles chronophages et sources d’erreurs</li>
          <li>Manque de prévisions fiables pour l’approvisionnement</li>
          <li>Ressources sous ou sur-utilisées faute d’anticipation</li>
        </ul>
      </section>

      {/* Cas concrets */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">Cas d’usage IA pour la supply chain</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-300">
          {[
            {
              title: '📦 Saisie automatique de commandes',
              desc: 'Grâce à la RPA, les bons de commande sont extraits et intégrés à l’ERP sans saisie manuelle.',
            },
            {
              title: '📈 Prédiction de flux logistique',
              desc: 'Nos modèles ML anticipent les volumes par jour et par site pour mieux planifier.',
            },
            {
              title: '🧾 Lecture automatique de bons de livraison',
              desc: 'L’OCR + NLP permet d’extraire et valider automatiquement les infos critiques (quantité, SKU, date).',
            },
            {
              title: '🚚 Planification dynamique des tournées',
              desc: 'Optimisation des itinéraires avec prise en compte des volumes, clients, horaires et zones géographiques.',
            },
          ].map(({ title, desc }, i) => (
            <div key={i} className="bg-[#111] border border-[#00e0ff33] p-6 rounded">
              <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack IA */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-4">Notre stack IA pour la logistique</h2>
        <ul className="list-disc pl-6 text-gray-400 space-y-2">
          <li>FastAPI + Python (backend scalable et sécurisé)</li>
          <li>Scikit-learn / LightGBM / XGBoost (modèles ML)</li>
          <li>OCR avec Tesseract ou AWS Textract</li>
          <li>ETL orchestré avec Airflow ou Dagster</li>
          <li>Déploiement Docker + CI/CD GitHub Actions</li>
        </ul>
      </section>

      {/* Témoignage */}
      <section className="text-center my-20 max-w-3xl mx-auto">
        <blockquote className="italic text-gray-300 border-l-4 border-[#00e0ff] pl-4 mb-4">
          “Avec l’automatisation mise en place par WebCressonTech, on a réduit de 30% le temps de traitement des commandes.”
        </blockquote>
        <p className="text-sm text-gray-500 mb-6">— Responsable Supply Chain, Groupe Transport</p>
      </section>

      {/* CTA final */}
      <section className="text-center my-20">
        <h2 className="text-2xl font-bold text-white mb-4">Et si vous boostiez votre logistique ?</h2>
        <p className="text-gray-400 mb-6">Discutons ensemble de vos cas d’usage logistiques IA & RPA.</p>
        <Link
          href="/contact"
          className="bg-[#00e0ff] text-black px-6 py-3 rounded font-semibold hover:scale-105 transition"
        >
          Lancer mon projet IA logistique
        </Link>
      </section>

      {/* Tarifs + cross-selling */}
      <PricingSection />

      <section className="mt-20">
        <h2 className="text-xl font-bold mb-4">Explorez d'autres solutions IA</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <Link href="/solutions/ia-finance" className="underline text-[#00e0ff] hover:text-white">
            IA pour la Finance
          </Link>
          <Link href="/services/rpa-automatisation" className="underline text-[#00e0ff] hover:text-white">
            RPA & Automatisation
          </Link>
          <Link href="/services/machine-learning-deep-learning" className="underline text-[#00e0ff] hover:text-white">
            Machine Learning
          </Link>
        </div>
      </section>
    </main>
  );
}
