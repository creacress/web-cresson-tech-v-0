import React from "react";
import Head from "next/head";
import { Metadata } from "next";
import styles from "@/styles/ServicePage.module.css";
import AuditForm from "@/components/AuditForm/AuditForm";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Audit Gratuit en Intelligence Artificielle | Web Cresson Tech",
  description:
    "Profitez d’un audit IA gratuit avec Web Cresson Tech pour évaluer vos besoins et découvrir comment l'intelligence artificielle peut optimiser votre activité.",
  alternates: { canonical: "https://webcresson.com/services/audit-gratuit" },
};

export default function AuditGratuit() {
  return (
    <>
      <Head><link rel="canonical" href="https://webcresson.com/services/audit-gratuit/" /></Head>
      <main className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Audit Gratuit en Intelligence Artificielle</h1>
          <p>Obtenez une analyse personnalisée en remplissant ce formulaire.</p>
        </section>

        {/* ✅ On utilise maintenant le composant client */}
        <AuditForm />
      </main>
    </>
  );
}
