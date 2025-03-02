"use client";

import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import styles from "@/styles/contact.module.css";
import Head from "next/head";
import ServiceSchema from '@/components/ServiceSchema';

type FormStatus = "success" | "error" | null;

const pageMeta = {
  title: "Contactez-nous | Cresson Tech",
  description:
    "Contactez Cresson Tech pour toute demande d'information sur nos solutions d'intelligence artificielle et nos services technologiques.",
  keywords:
    "contact, intelligence artificielle, solutions IA, services technologiques, formulaire, Cresson Tech",
  url: "https://webcresson.com/contact",
  image: "https://webcresson.com/Logo_webcressontech.webp",
};

export default function ContactForm() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean | null>(null);
  const [status, setStatus] = useState<FormStatus>(null);

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "G-H206EG4TH7");
  }, []);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(value) || value === "");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = { email, name, phone, company, comments };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setName("");
        setPhone("");
        setCompany("");
        setComments("");
        setIsValidEmail(null);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>{pageMeta.title}</title>
        <meta name="description" content={pageMeta.description} />
        <meta name="keywords" content={pageMeta.keywords} />
        <meta property="og:title" content={pageMeta.title} />
        <meta property="og:description" content={pageMeta.description} />
        <meta property="og:url" content={pageMeta.url} />
        <meta property="og:image" content={pageMeta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={pageMeta.url} />
        <meta name="robots" content="index, follow" />
      </Head>

      <ServiceSchema
        serviceName="Contactez-nous | Cresson Tech"
        serviceDescription={pageMeta.description}
        serviceTypes={["Contact", "Support Client", "Services Technologiques"]}
        faq={[
          {
            question: "Comment puis-je contacter Cresson Tech ?",
            answer: "Vous pouvez nous contacter via ce formulaire ou par téléphone au +33-7-66-02-96-32."
          },
          {
            question: "Quels services propose Cresson Tech ?",
            answer: "Nous offrons des solutions en intelligence artificielle, en automatisation des processus (RPA) et en services technologiques sur mesure."
          },
          {
            question: "Comment se déroule une demande de contact ?",
            answer: "Après avoir rempli ce formulaire, notre équipe vous contactera sous 24 à 48 heures pour répondre à vos questions ou planifier une consultation gratuite."
          }
        ]}
      />

      <div className={styles.contactFormSection}>
        <h1 className={styles.pageTitle}>Contactez-nous</h1>
        <p className={styles.contactText}>
          Vous avez des questions ou souhaitez en savoir plus sur nos solutions d'intelligence artificielle et nos services ? Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
        </p>
        <p className={styles.contactText}>
          Sachez qu'une demande de contact ne vous engage en rien. Vous disposez d'un audit gratuit et sans engagement.
        </p>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Votre email"
              value={email}
              onChange={handleEmailChange}
              required
              className={`${styles.inputField} ${isValidEmail === false ? styles.error : ""
                }`}
            />
            {isValidEmail === false && (
              <small className={styles.errorText}>Email invalide</small>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name">Nom Prénom*</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Votre nom et prénom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="company">Entreprise</label>
            <input
              type="text"
              id="company"
              name="company"
              placeholder="Votre entreprise"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className={styles.inputField}
            />
          </div>


          <div className={styles.formGroup}>
            <label htmlFor="phone">Téléphone*</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Votre numéro de téléphone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="comments">Commentaires / Sujet</label>
            <textarea
              id="comments"
              name="comments"
              placeholder="Votre message ou sujet ici..."
              rows={5}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className={styles.textAreaField}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            ENVOYER LA DEMANDE
          </button>
        </form>

        {status === "success" && (
          <div className={styles.successMessage}>
            Merci ! Votre message a été envoyé avec succès.
          </div>
        )}
        {status === "error" && (
          <div className={styles.errorMessage}>
            Une erreur s'est produite. Veuillez réessayer plus tard.
          </div>
        )}
      </div>
    </>
  );
}
