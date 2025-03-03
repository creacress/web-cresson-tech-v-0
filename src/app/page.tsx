// src/app/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSchema from '@/components/ServiceSchema';
import styles from '@/styles/home.module.css';
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import Head from 'next/head';

export const revalidate = 86400; // Revalidation toutes les 24 heures

export const metadata = {
  title: 'WebCressonTech - Expert en IA et solutions technologiques',
  description:
    'WebCressonTech accompagne les entreprises dans leurs projets IA avec des solutions sur mesure : gestion des données, machine learning, deep learning.',
  keywords: [
    'intelligence artificielle',
    'machine learning',
    'deep learning',
    'solutions IA',
    'WebCressonTech',
  ],
  authors: [{ name: 'WebCressonTech', url: 'https://www.webcresson.com' }],
  openGraph: {
    title: 'WebCressonTech - Expert en IA et solutions technologiques',
    description:
      'WebCressonTech accompagne les entreprises dans leurs projets IA avec des solutions sur mesure : gestion des données, machine learning, deep learning.',
    url: 'https://www.webcresson.com',
    siteName: 'WebCressonTech',
    images: [
      {
        url: 'https://www.webcresson.com/Logo_webcressontech.webp',
        width: 800,
        height: 600,
        alt: 'WebCressonTech Logo',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@WebCressonTech',
    title: 'WebCressonTech - IA et Automatisation',
    description:
      'Solutions en intelligence artificielle, machine learning, deep learning et RPA.',
    images: ['https://webcresson.com/Logo_webcressontech.webp'],
  },
};

export default function Home() {
  return (
    <>
      <Head>
        {/* Balise canonique ajoutée manuellement dans le Head */}
        <link rel="canonical" href="https://webcresson.com/" />
      </Head>
      <ServiceSchema
        serviceName={metadata.title}
        serviceDescription={metadata.description}
        serviceTypes={[
          'Intelligence Artificielle',
          'Machine Learning',
          'Deep Learning',
          'Solutions Technologiques',
        ]}
        faq={[
          {
            question: 'Quels services propose WebCressonTech ?',
            answer: `Solutions sur mesure en intelligence artificielle, machine learning, deep learning et automatisation des processus. Pour plus de détails, consultez notre page sur nos services IA : https://www.webcresson.com/services`,
          },
          {
            question: 'Pourquoi choisir WebCressonTech pour vos projets IA ?',
            answer: `Nous offrons une expertise certifiée, un accompagnement complet et des solutions adaptées à vos besoins. Découvrez notre approche sur notre page d'expertise : https://www.webcresson.com/services`,
          },
          {
            question: 'Comment contacter WebCressonTech ?',
            answer: `Contactez-nous via notre page de contact : https://www.webcresson.com/contact ou par téléphone pour discuter de vos projets IA.`,
          },
        ]}
      />


      <main className={styles.page}>
        <div className={styles.mainContent}>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
              WebCressonTech : <span className={styles.highlight}>Votre partenaire IA</span>
            </h1>
            <p className={styles.heroText}>
              Des solutions innovantes en intelligence artificielle pour votre entreprise.
            </p>
            <Link href="/services">
              <button className={styles.ctaButton}>Découvrir nos services</button>
            </Link>
          </section>

          <section className={styles.services}>
            <h2 className={styles.sectionTitle}>Nos services IA</h2>
            <ul className={styles.servicesList}>
              {[
                {
                  title: 'Intelligence Artificielle',
                  image: '/Développement_IA.webp',
                  link: '/services/intelligence-artificielle',
                },
                {
                  title: 'Machine Learning',
                  image: '/Machine_Learning.webp',
                  link: '/services/machine-learning',
                },
                {
                  title: 'Deep Learning',
                  image: '/deep-learning.webp',
                  link: '/services/deep-learning',
                },
                {
                  title: 'RPA Automatisation',
                  image: '/rpa.webp',
                  link: '/services/rpa-automatisation',
                },
              ].map((service, index) => (
                <li key={index} className={styles.serviceItem}>
                  <Link href={service.link}>
                    <Image
                      src={service.image}
                      alt={`Illustration de ${service.title} avec des éléments représentatifs de la technologie`}
                      width={300}
                      height={300}
                      className={styles.serviceImage}
                    />
                    <div className={styles.serviceContent}>
                      <h3>{service.title}</h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.whyChooseUs}>
            <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
            <div className={styles.featuresGrid}>
              {[
                {
                  title: 'Expertise certifiée',
                  text: 'Expérience en IA et technologies avancées.',
                },
                {
                  title: 'Accompagnement complet',
                  text: 'Du concept à la production, à vos côtés.',
                },
                {
                  title: 'Solutions sur mesure',
                  text: 'Adaptées à chaque besoin spécifique.',
                },
              ].map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          <ClientWrapper />
        </div>
      </main>
    </>
  );
}
