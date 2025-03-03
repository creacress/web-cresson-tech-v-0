"use client";

import React, { useState, FormEvent } from "react";
import styles from "@/styles/contact.module.css";

export default function ContactForm() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [comments, setComments] = useState<string>("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);

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
        // Réinitialiser les champs du formulaire après envoi
        setEmail("");
        setName("");
        setPhone("");
        setCompany("");
        setComments("");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi :", error);
      setStatus("error");
    }
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="email">Mail*</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={styles.inputField}
        />
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
        <label htmlFor="company">Entreprise</label>
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Nom de votre entreprise (facultatif)"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={styles.inputField}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="comments">Commentaires</label>
        <textarea
          id="comments"
          name="comments"
          placeholder="Votre message ou question"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          className={styles.inputField}
        />
      </div>

      <button type="submit" className={styles.submitButton}>
        ENVOYER LA DEMANDE
      </button>

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
    </form>
  );
}
