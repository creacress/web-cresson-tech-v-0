import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ServiceSchema from '@/components/ServiceShema/ServiceSchema';
import styles from '@/styles/home.module.css';
import ClientWrapper from '@/components/ClientWrapper/ClientWrapper';
import Head from 'next/head';
import ProblemSolutionCard from '@/components/ProblemSolutionCard/ProblemSolutionCard';

export const revalidate = 86400;

export const metadata = {
  title: 'Entreprise Experte en IA | WebCressonTech',
  description:
    "Développez votre entreprise avec des solutions d'intelligence artificielle sur mesure. Automatisation de processus, machine learning, deep learning avec WebCressonTech.",

  keywords: [
    'intelligence artificielle',
    'solutions IA sur mesure',
    'automatisation de processus',
    'machine learning entreprise',
    'deep learning professionnel',
    'WebCressonTech',
  ],
  authors: [{ name: 'WebCressonTech', url: 'https://www.webcresson.com' }],

};

export default function Home() {
  return (
    <>
      <Head>
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
              'Contactez-nous via notre page de contact ou par téléphone pour discuter de vos projets IA.',
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
              Vous avez des besoins spécifiques en intelligence artificielle ? Découvrez comment nous pouvons y répondre.
            </p>
            <Link href="/services/page-services">
              <button className={styles.ctaButton}>Découvrir nos solutions IA</button>
            </Link>
          </section>

          <section className={styles.hero} id="decouvrir-ia">
            <h2 className={styles.heroTitle}>Découvrir qu'est-ce que l'intelligence artificielle</h2>
            <p className={styles.heroText}>
              L'intelligence artificielle (IA) est une technologie qui permet aux machines d'apprendre, de s'adapter et de
              prendre des décisions intelligentes. Grâce à des algorithmes avancés et à l'analyse de grandes quantités de
              données, l'IA peut automatiser des tâches complexes, optimiser les processus métiers et offrir des solutions
              sur mesure dans de nombreux secteurs d'activité.
            </p>
            <Link href="/services/intelligence-artificielle" className={styles.ctaButton}>
              En savoir plus sur l'Intelligence Artificielle
            </Link>
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
                <div key={index} className={`${styles.featureCard} animate-fadeIn`}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.problemSolution}>
            <h2 className={styles.sectionTitle}>Pourquoi adopter l'IA ?</h2>
            <div className={styles.problemSolutionGrid}>
              {[
                {
                  problem: 'Des tâches répétitives ralentissent vos équipes ?',
                  solution: "Notre IA automatise vos processus pour libérer du temps et booster l'innovation.",
                },
                {
                  problem: "Difficile d'exploiter vos données ?",
                  solution: 'Transformez vos données en informations clés avec nos solutions IA.',
                },
                {
                  problem: 'Besoin de prédictions fiables pour vos décisions ?',
                  solution: 'Utilisez le machine learning pour anticiper vos résultats et optimiser vos stratégies.',
                },
              ].map((item, index) => (
                <ProblemSolutionCard key={index} problem={item.problem} solution={item.solution} />
              ))}
            </div>
          </section>

          <section className={styles.testimonials}>
            <h2 className={styles.sectionTitle}>Ils nous font confiance</h2>
            <div className={styles.testimonialsGrid}>
              {[
                {
                  name: 'La Poste',
                  feedback:
                    "Grâce à WebCressonTech, nous avons mis en place un RPA et une IA d’email permettant de réduire de 30% notre temps de traitement et de réussir notre migration.",
                  logo: '/logo_la_poste.webp',
                },
              ].map((testimonial, index) => (
                <div key={index} className={`${styles.testimonialCard} animate-fadeIn`}>
                  <p>"{testimonial.feedback}"</p>
                  <div className={styles.testimonialFooter}>
                    <h4>- {testimonial.name}</h4>
                    <Image
                      src={testimonial.logo}
                      alt={`Logo ${testimonial.name}`}
                      width={40}
                      height={40}
                      className={styles.testimonialLogo}
                    />
                  </div>
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
