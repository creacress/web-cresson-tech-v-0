// src/app/cas-usages/page.tsx
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Head from "next/head";

import styles from "@/styles/services.module.css";
import LivreBlancComponent from "@/components/LivreBlanc/LivreBlanc";

export const revalidate = 86400; // SSG avec revalidation toutes les 24 heures

export const metadata: Metadata = {
    title: "Cas d'Usages | Solutions IA | Web Cresson Tech",
    description:
        "Découvrez des cas d'usages concrets de nos solutions IA : RPA, Machine Learning, Deep Learning, IA pour la santé et l'archéologie.",
    openGraph: {
        title: "Cas d'Usages & Solutions IA | Web Cresson Tech",
        description:
            "Des exemples concrets de cas d'usages pour chaque domaine d'expertise IA : automatisation RPA, prédiction avec le Machine Learning, analyse avec le Deep Learning et innovations en archéologie.",
        url: "https://webcresson.com/cas-usages",
        images: [
            {
                url: "https://webcresson.com/images/cas-usages.webp",
                width: 1200,
                height: 630,
                alt: "Web Cresson Tech - Cas d'Usages",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cas d'Usages & Solutions IA | Web Cresson Tech",
        description:
            "Découvrez comment nos solutions IA apportent de la valeur ajoutée dans divers secteurs avec des exemples concrets et mesurables.",
        images: ["https://webcresson.com/images/cas-usages.webp"],
    },
    alternates: {
        canonical: "https://webcresson.com/cas-usages",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function UseCasesPage() {
    return (
        <>
            <Head>
                <link rel="canonical" href="https://webcresson.com/cas-usages" />
            </Head>

            <main className={styles.mainContent}>
                <section className={styles.hero}>
                    <h1>Cas d'Usages : Découvrez l'Impact de Nos Solutions IA</h1>
                    <p>
                        Nos solutions en intelligence artificielle répondent à des besoins concrets : automatisation des processus, optimisation des performances, innovation technologique et gains de productivité.
                    </p>
                </section>

                <div className={styles.cardContainer}>
                    <LivreBlancComponent
                        title="Automatisation RPA"
                        description="Gagnez du temps et réduisez les erreurs grâce à la Robotic Process Automation."
                        downloadLink="/downloads/WebCressonTech - RPA.pdf"
                        imageUrl="/rpa.webp"
                    />

                    <LivreBlancComponent
                        title="Guide du Machine Learning"
                        description="Anticipez les tendances et optimisez vos décisions grâce au Machine Learning."
                        downloadLink="/downloads/WebCressonTech - Machine Learning.pdf"
                        imageUrl="/Machine_Learning.webp"
                    />

                    <LivreBlancComponent
                        title="Deep Learning pour la Santé"
                        description="Améliorez la précision des diagnostics avec le Deep Learning."
                        downloadLink="/downloads/WebCressonTech - IA & Santé.pdf"
                        imageUrl="/IA-sante.webp"
                    />

                    <LivreBlancComponent
                        title="Deep Learning"
                        description="Améliorez vos prédictions avec le Deep Learning."
                        downloadLink="/downloads/WebCressonTech - Deep Learning.pdf"
                        imageUrl="/deep-learning.webp"
                    />

                    <LivreBlancComponent
                        title="IA pour l'Archéologie"
                        description="Découvrez comment l'IA aide à reconstituer l'histoire avec précision."
                        downloadLink="/downloads/livre-blanc-ia-archeologie.pdf"
                        imageUrl="/Ia-archeologie.webp"
                    />
                </div>

                <section className={styles.ctaSection}>
                    <h2>Vous souhaitez découvrir l'IA en action ?</h2>
                    <p>
                        Discutons ensemble de vos besoins spécifiques en intelligence artificielle. Web Cresson Tech propose des solutions sur mesure pour répondre à vos défis métiers.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link href="/contact" className={styles.ctaButton}>
                            Contactez-nous dès maintenant
                        </Link>
                        <Link href="/services/page-services" className={styles.linkButton}>
                            ← Retour aux services
                        </Link>
                    </div>
                </section>
            </main>
        </>
    );
}