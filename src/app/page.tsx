// pages/index.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import ServiceSchema from '@/components/ServiceSchema';
import styles from '@/styles/home.module.css';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import ClientWrapper from "@/components/ClientWrapper/ClientWrapper"; // Import du composant client

const defaultMeta = {
  title: 'WebCressonTech - Expert en IA et solutions technologiques',
  description:
    'WebCressonTech accompagne les entreprises dans leurs projets IA avec des solutions sur mesure : gestion des données, machine learning, deep learning.',
  keywords:
    'intelligence artificielle, machine learning, deep learning, solutions IA, WebCressonTech',
  author: 'WebCressonTech',
  image: 'https://www.webcresson.com/Logo_webcressontech.webp',
  url: 'https://www.webcresson.com',
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords} />
        <meta name="author" content={defaultMeta.author} />
        <link rel="icon" href="Logo_webcressontech.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href={defaultMeta.url} />
        <meta property="og:title" content={defaultMeta.title} />
        <meta property="og:description" content={defaultMeta.description} />
        <meta property="og:url" content={defaultMeta.url} />
        <meta property="og:image" content={defaultMeta.image} />
      </Head>

      <ServiceSchema
        serviceName={defaultMeta.title}
        serviceDescription={defaultMeta.description}
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
        <section className={styles.hero}>
          <h1>
            WebCressonTech : <span className={styles.highlight}>Votre partenaire IA</span>
          </h1>
          <p>Des solutions innovantes en intelligence artificielle pour votre entreprise.</p>
          <Link href="/services" passHref>
            <button className={styles.ctaButton}>Découvrir nos services</button>
          </Link>
        </section>

        <section className={styles.services}>
          <h2>Nos services IA</h2>
          <ul>
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
              <li key={index}>
                <Link href={service.link} passHref>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={300}
                  />
                  <h3>{service.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.whyChooseUs}>
          <h2>Pourquoi nous choisir ?</h2>
          <div>
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
              <div key={index}>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </section>

        <ClientWrapper />

      </main>
    </>
  );
}

export const revalidate = 86400;