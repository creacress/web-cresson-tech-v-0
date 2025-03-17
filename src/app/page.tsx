import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceSchema from "@/components/ServiceShema/ServiceSchema";
import styles from "@/styles/home.module.css";
import ClientWrapper from "@/components/ClientWrapper/ClientWrapper";
import Head from "next/head";
import ProblemSolutionCard from "@/components/ProblemSolutionCard/ProblemSolutionCard";

export const revalidate = 86400;

export default function Home() {
  return (
    <>
      <Head>
        {/* Métadonnées SEO optimisées */}
        <title>Entreprise Experte en IA | WebCressonTech</title>
        <meta
          name="description"
          content="Développez votre entreprise avec des solutions d'intelligence artificielle sur mesure : automatisation, machine learning et deep learning avec WebCressonTech."
        />
        <link rel="canonical" href="https://webcresson.com/" />

        {/* OpenGraph pour Facebook, LinkedIn, etc. */}
        <meta property="og:title" content="Entreprise Experte en IA | WebCressonTech" />
        <meta
          property="og:description"
          content="Découvrez nos solutions IA sur mesure : machine learning, deep learning et automatisation."
        />
        <meta property="og:url" content="https://webcresson.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://webcresson.com/images/og-image.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Entreprise Experte en IA | WebCressonTech" />
        <meta
          name="twitter:description"
          content="Boostez votre entreprise avec nos solutions IA sur mesure."
        />
        <meta name="twitter:image" content="https://webcresson.com/images/og-image.jpg" />
      </Head>

      {/* JSON-LD pour le SEO structuré */}
      <ServiceSchema
        serviceName="Entreprise Experte en IA | WebCressonTech"
        serviceDescription="Développez votre entreprise avec des solutions d'intelligence artificielle sur mesure : automatisation, machine learning et deep learning."
        serviceTypes={[
          "Intelligence Artificielle",
          "Machine Learning",
          "Deep Learning",
          "Solutions Technologiques",
          "Développement Python",
          "Automatisation Python",
        ]}
        faq={[
          {
            question: "Quels services propose WebCressonTech ?",
            answer:
              "Solutions sur mesure en intelligence artificielle, machine learning, deep learning et automatisation des processus.",
          },
          {
            question: "Pourquoi choisir WebCressonTech pour vos projets IA et Python ?",
            answer:
              "Nous offrons une expertise certifiée, un accompagnement complet et des solutions adaptées à vos besoins.",
          },
          {
            question: "Comment contacter WebCressonTech ?",
            answer:
              "Contactez-nous via notre page de contact ou par téléphone pour discuter de vos projets IA et développement Python.",
          },
        ]}
      />

      <main className={styles.page}>
        <div className={styles.mainContent}>
          {/* Section Héro */}
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
              WebCressonTech : <span className={styles.highlight}>Votre partenaire IA & Python</span>
            </h1>
            <p className={styles.heroText}>
              Besoin d'intelligence artificielle et de développement Python sur mesure ? Découvrez nos solutions.
            </p>
            <Link href="/services/page-services">
              <button className={styles.ctaButton}>Découvrir nos solutions</button>
            </Link>
          </section>

          {/* Section Intelligence Artificielle */}
          <section className={styles.hero} id="decouvrir-ia">
            <h2 className={styles.heroTitle}>Qu'est-ce que l'intelligence artificielle ?</h2>
            <p className={styles.heroText}>
              L'IA permet aux machines d'apprendre et d'automatiser des tâches complexes. Grâce à des algorithmes
              avancés, elle optimise les processus et améliore les performances des entreprises.
            </p>
            <Link href="/services/intelligence-artificielle" className={styles.ctaButton}>
              En savoir plus
            </Link>
          </section>

          {/* Section Développement Python */}
          <section className={styles.hero} id="developpeur-python">
            <h2 className={styles.heroTitle}>Développement Python et Automatisation</h2>
            <p className={styles.heroText}>
              Python est un langage incontournable pour l’IA, l’automatisation et le data engineering. WebCressonTech
              vous accompagne dans l’optimisation de vos processus avec Python.
            </p>

            <div className={styles.featuresGrid}>
              {[
                { title: "Automatisation & RPA", text: "Scripts avec Selenium, Scrapy, PyAutoGUI." },
                { title: "Développement Web", text: "Django, FastAPI et Flask." },
                { title: "Data Engineering", text: "Manipulation de données avec Pandas, Polars, Spark." },
                { title: "Développement IA", text: "Modélisation avec TensorFlow, PyTorch, Scikit-learn." },
              ].map((feature, index) => (
                <div key={index} className={`${styles.featureCard} animate-fadeIn`}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>

            <Link href="/services/developpement-python" className={styles.ctaButton}>
              En savoir plus
            </Link>
          </section>

          {/* Section Pourquoi nous choisir */}
          <section className={styles.whyChooseUs}>
            <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
            <div className={styles.featuresGrid}>
              {[
                { title: "Expertise certifiée", text: "En IA, Python et technologies avancées." },
                { title: "Accompagnement complet", text: "De l'idée au déploiement." },
                { title: "Solutions sur mesure", text: "Adaptées à vos besoins." },
              ].map((feature, index) => (
                <div key={index} className={`${styles.featureCard} animate-fadeIn`}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Témoignages Clients */}
          <section className={styles.testimonials}>
            <h2 className={styles.sectionTitle}>Ils nous font confiance</h2>
            <div className={styles.testimonialsGrid}>
              {[
                {
                  name: "La Poste",
                  feedback:
                    "Grâce à WebCressonTech, nous avons mis en place un RPA et une IA d’email permettant de réduire de 30% notre temps de traitement et de réussir notre migration.",
                  logo: "/logo_la_poste.webp",
                },
              ].map((testimonial, index) => (
                <div key={index} className={`${styles.testimonialCard} animate-fadeIn`}>
                  <p>"{testimonial.feedback}"</p>
                  <div className={styles.testimonialFooter}>
                    <h4>- {testimonial.name}</h4>
                    <Image src={testimonial.logo} alt={`Logo ${testimonial.name}`} width={40} height={40} />
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
