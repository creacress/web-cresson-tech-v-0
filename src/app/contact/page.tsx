import React, { Suspense } from 'react';
import NeonTitle from '@/components/ui/NeonTitle';
import BreadcrumbSchema from '@/components/BreadcrumbSchema/BreadcrumbSchema';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import GoogleCalendar from '@/components/GoogleCalendar/GoogleCalendar';
import type { Metadata } from 'next';
import BreadcrumbNav from '@/components/BreadcrumbNav/BreadcrumbNav';

import ContactForm from '@/components/ContactForm/ContactForm';

export const revalidate = 86400;

export const metadata: Metadata = {
  title: 'Contactez-nous | WebCressonTech',
  description:
    "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
  alternates: {
    canonical: 'https://webcresson.com/contact',
  },
  openGraph: {
    title: 'Contactez-nous | WebCressonTech',
    description:
      "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
    url: 'https://webcresson.com/contact',
    images: [
      {
        url: 'https://webcresson.com/images/Logo_webcressontech.webp',
        width: 1200,
        height: 630,
        alt: 'WebCressonTech',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contactez-nous | WebCressonTech',
    description:
      "Contactez WebCressonTech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
    images: ['https://webcresson.com/images/Logo_webcressontech.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema />

      <ServiceSchema
        serviceName="Contactez-nous | WebCressonTech"
        serviceDescription={metadata.description!}
        serviceTypes={['Contact', 'Support Client', 'Services Technologiques']}
        faq={[
          {
            question: 'Comment puis-je contacter WebCressonTech ?',
            answer: (
              <>
                Vous pouvez nous contacter via ce formulaire ou par téléphone au{' '}
                <a
                  href="tel:+33766029632"
                  className="text-[#00e0ff] underline hover:text-white"
                >
                  +33 7 66 02 96 32
                </a>
                .
              </>
            ),
          },
          {
            question: 'Quels services propose WebCressonTech ?',
            answer: (
              <>
                Nous proposons des solutions en IA, RPA, automatisation et technologies sur mesure. 
                Découvrez nos services sur{' '}
                <a
                  href="https://www.webcresson.com/services"
                  className="text-[#00e0ff] underline hover:text-white"
                >
                  cette page.
                </a>
              </>
            ),
          },
        ]}
      />

      <main className="max-w-4xl mx-auto px-6 py-24 text-white">
      <BreadcrumbNav />
        <section className="text-center mb-12">
          <NeonTitle as="h1" className="text-5xl font-extrabold mb-4">
            Prenez Rendez-vous
          </NeonTitle>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Réservez un appel avec notre équipe via notre agenda en ligne ci-dessous.
          </p>
        </section>

        <section className="mb-16">
          <GoogleCalendar />
        </section>

        <section className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contactez-nous</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Une question ? Un besoin ? Laissez-nous un message et nous vous répondrons rapidement.
          </p>
        </section>

        <section>
          <Suspense fallback={<p className="text-gray-400 text-center">Chargement du formulaire...</p>}>
            <ContactForm />
          </Suspense>
        </section>

        <section className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            Ou écrivez-nous à{' '}
            <a
              href="mailto:contact@webcresson.com"
              className="text-[#00e0ff] underline hover:text-white"
            >
              contact@webcresson.com
            </a>{' '}
            – Nous répondons sous 24h.
          </p>
        </section>
      </main>
    </>
  );
}
