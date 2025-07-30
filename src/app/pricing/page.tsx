import { Metadata } from 'next';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';
import PricingSection from '@/components/Pricing/PricingSection';
import Link from 'next/link';
import HeroSection from '@/components/Pricing/HeroSection';
import PlanDetails from '@/components/Pricing/PlanDetails';
import FinalCTA from '@/components/Pricing/FinalCTA';

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
};

export default function PricingPage() {
  return (
    <>
      {/* Données structurées SEO */}
      <BreadcrumbSchema />

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
            answer:
              'Oui, vous pouvez passer à un plan supérieur à tout moment en nous contactant.',
          },
          {
            question: 'Proposez-vous des essais gratuits ?',
            answer: (
              <>
                Nous offrons des{' '}
                <Link href="/contact" className="underline text-[#00e0ff] hover:text-white">
                  démonstrations personnalisées
                </Link>{' '}
                sur demande.
              </>
            ),
          },
          {
            question: 'Le plan Entreprise est-il adapté à mon secteur ?',
            answer:
              'Oui, il est entièrement personnalisable selon votre domaine (santé, finance, retail, etc).',
          },
          {
            question: "Avez-vous des offres adaptées au secteur médical ou bancaire ?",
            answer: "Oui, nos plans Pro et Entreprise sont entièrement personnalisés selon les contraintes du secteur (ex : RGPD, sécurité, confidentialité…)."
          },
          {
            question: "Puis-je voir des cas clients concrets ?",
            answer: "Bien sûr, nous partageons sur demande des études de cas ou résultats obtenus sur des projets similaires."
          }
        ]}
      />

      <main className="max-w-6xl mx-auto px-6 pt-24 pb-16 text-white">
        {/* 🧭 Breadcrumb UX */}
        <BreadcrumbNav />

        <HeroSection />

        <PricingSection />

        <PlanDetails />

        <FinalCTA />
      </main>
    </>
  );
}
