// src/app/page.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSchema from '@/components/ServiceSchema';
import styles from '@/styles/home.module.css';
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";

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
    images: ['https://www.webcresson.com/images/twitter-image.png'],
  },
};

export default function Home() {
  return (
    <>
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
            answer:
              'Solutions sur mesure en intelligence artificielle, machine learning, deep learning et automatisation des processus.',
          },
          {
            question: 'Pourquoi choisir WebCressonTech pour vos projets IA ?',
            answer:
              'Nous offrons une expertise certifiée, un accompagnement complet et des solutions adaptées à vos besoins.',
          },
          {
            question: 'Comment contacter WebCressonTech ?',
            answer:
              'Contactez-nous via notre page dédiée ou par téléphone pour discuter de vos projets IA.',
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
                      alt={service.title}
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
