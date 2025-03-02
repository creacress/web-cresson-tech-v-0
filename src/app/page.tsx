"use client";

import React, { useEffect } from 'react';
import { useRouter } from "next/navigation";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";
import ServiceSchema from '@/components/ServiceSchema';

import styles from "@/styles/home.module.css";

const CookieModal = dynamic(() => import("@/components/CookieModal"), { ssr: false });

const defaultMeta = {
  title: "WebCressonTech - Expert en IA et solutions technologiques",
  description:
    "WebCressonTech accompagne les entreprises dans leurs projets IA avec des solutions sur mesure : gestion des données, machine learning, deep learning.",
  keywords:
    "intelligence artificielle, machine learning, deep learning, solutions IA, WebCressonTech",
  author: "WebCressonTech",
  image: "https://www.webcresson.com/Logo_webcressontech.webp",
  url: "https://www.webcresson.com",
};

type MetaProps = Partial<typeof defaultMeta>;

export default function Home(meta: MetaProps = {}) {
  const pageMeta = { ...defaultMeta, ...meta };
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-H206EG4TH7");
    }
  }, []);

  const handleClickEvent = (label: string, path: string) => {
    window?.gtag?.("event", "button_click", {
      event_category: "User Interaction",
      event_label: label,
    });
    router.push(path);
  };

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta name="keywords" content={pageMeta.keywords} />
        <meta name="author" content={pageMeta.author} />
        <link rel="icon" href="Logo_webcressontech.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href={pageMeta.url} />
      </Head>

      <ServiceSchema
        serviceName="WebCressonTech - Expert en IA et solutions technologiques"
        serviceDescription={pageMeta.description}
        serviceTypes={["Intelligence Artificielle", "Machine Learning", "Deep Learning", "Solutions Technologiques"]}
        faq={[
          {
            question: "Quels services propose WebCressonTech ?",
            answer: "WebCressonTech propose des solutions sur mesure en intelligence artificielle, machine learning, deep learning et automatisation des processus."
          },
          {
            question: "Pourquoi choisir WebCressonTech pour vos projets IA ?",
            answer: "Nous offrons une expertise certifiée, un accompagnement complet de l'idée à la production, et des solutions sur mesure adaptées à vos besoins."
          },
          {
            question: "Comment contacter WebCressonTech ?",
            answer: "Vous pouvez nous contacter via notre page dédiée ou par téléphone pour discuter de vos projets IA."
          }
        ]}
      />

      <main className={styles.page}>
        <div className={styles.mainContent}>
          <section className={styles.hero}>
            <h1 className={styles.heroTitle}>
              WebCressonTech : <span className={styles.highlight}>Votre partenaire IA</span>
            </h1>
            <p className={styles.heroText}>
              Offrez à votre entreprise un avantage compétitif grâce à des solutions innovantes en intelligence artificielle.
            </p>
            <button
              className={styles.ctaButton}
              onClick={() => handleClickEvent("CTA Button - Services", "/services")}
            >
              Découvrir nos services
            </button>
          </section>

          <section className={styles.services}>
            <h2 className={styles.sectionTitle}>Nos services IA</h2>
            <ul className={styles.servicesList}>
              {[
                { title: "Intelligence Artificielle", image: "/Développement_IA.webp", link: "/services/intelligence-artificielle" },
                { title: "Machine Learning", image: "/Machine_Learning.webp", link: "/services/machine-learning" },
                { title: "Deep Learning", image: "/deep-learning.webp", link: "/services/deep-learning" },
                { title: "RPA Automatisation", image: "/rpa.webp", link: "/services/rpa-automatisation" },
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
          {/* Pourquoi nous choisir */}
          <section className={styles.whyChooseUs}>
            <h2 className={styles.sectionTitle}>Pourquoi nous choisir ?</h2>
            <div className={styles.featuresGrid}>
              {[
                { title: "Expertise certifiée", text: "Une équipe expérimentée en IA et technologies avancées." },
                { title: "Accompagnement complet", text: "De l'idée à la mise en production, nous sommes à vos côtés." },
                { title: "Solutions sur mesure", text: "Des offres adaptées à chaque besoin spécifique." },
              ].map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          <CookieModal />
        </div>
      </main>
    </>
  );
}
