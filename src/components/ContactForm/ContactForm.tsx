"use client";

import React, { useState, FormEvent } from "react";
import styles from "@/styles/contact.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    company: "",
    comments: "",
  });

  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ email: "", name: "", phone: "", company: "", comments: "" });
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
      {[
        { id: "email", label: "Email*", type: "email", required: true },
        { id: "name", label: "Nom Prénom*", type: "text", required: true },
        { id: "phone", label: "Téléphone*", type: "tel", required: true },
        { id: "company", label: "Entreprise", type: "text", required: false },
      ].map(({ id, label, type, required }) => (
        <div key={id} className={styles.formGroup}>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            name={id}
            placeholder={label}
            value={formData[id as keyof typeof formData]}
            onChange={handleChange}
            required={required}
            className={styles.inputField}
          />
        </div>
      ))}

      <div className={styles.formGroup}>
        <label htmlFor="comments">Commentaires</label>
        <textarea
          id="comments"
          name="comments"
          placeholder="Votre message ou question"
          value={formData.comments}
          onChange={handleChange}
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
