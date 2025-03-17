"use client";

import React, { useState } from "react";
import styles from "@/styles/ServicePage.module.css";

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  sector: string;
  solutions: string[];
  needs: string;
  consent: boolean;
};

const AuditForm = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    sector: "",
    solutions: [],
    needs: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      if (name === "consent") {
        setFormData((prev) => ({ ...prev, consent: (e.target as HTMLInputElement).checked }));
      } else {
        setFormData((prev) => ({
          ...prev,
          solutions: (e.target as HTMLInputElement).checked
            ? [...prev.solutions, value]
            : prev.solutions.filter((s) => s !== value),
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage("✅ Votre demande a bien été envoyée !");
        setFormData({
          name: "",
          email: "",
          phone: "",
          sector: "",
          solutions: [],
          needs: "",
          consent: false,
        });
      } else {
        setMessage(`❌ Erreur : ${data.error}`);
      }
    } catch (error) {
      setMessage("❌ Une erreur s'est produite, veuillez réessayer.");
    }

    setLoading(false);
  };

  return (
    <section className={styles.auditSection}>
      <h2>Demandez votre audit gratuit</h2>
      <form onSubmit={handleSubmit} className={styles.auditForm}>
        <label>Nom et Prénom *<input type="text" name="name" value={formData.name} onChange={handleChange} required /></label>
        <label>Email *<input type="email" name="email" value={formData.email} onChange={handleChange} required /></label>
        <label>Numéro de téléphone<input type="tel" name="phone" value={formData.phone} onChange={handleChange} /></label>
        <label>Secteur d’Activité *
          <select name="sector" value={formData.sector} onChange={handleChange} required>
            <option value="">Sélectionnez votre secteur</option>
            <option value="ecommerce">E-commerce</option>
            <option value="industrie">Industrie</option>
            <option value="santé">Santé</option>
            <option value="finance">Finance</option>
            <option value="marketing">Marketing</option>
            <option value="autre">Autre</option>
          </select>
        </label>

        <label>Quelle(s) solution(s) IA vous intéressent ? *
          <div className={styles.checkboxGroup}>
            <label><input type="checkbox" name="solutions" value="automatisation" checked={formData.solutions.includes("automatisation")} onChange={handleChange} /> Automatisation (RPA)</label>
            <label><input type="checkbox" name="solutions" value="ia-generative" checked={formData.solutions.includes("ia-generative")} onChange={handleChange} /> IA Générative</label>
            <label><input type="checkbox" name="solutions" value="machine-learning" checked={formData.solutions.includes("machine-learning")} onChange={handleChange} /> Machine Learning</label>
            <label><input type="checkbox" name="solutions" value="deep-learning" checked={formData.solutions.includes("deep-learning")} onChange={handleChange} /> Deep Learning</label>
            <label><input type="checkbox" name="solutions" value="audit" checked={formData.solutions.includes("audit")} onChange={handleChange} /> Je ne sais pas, j’ai besoin d’un audit</label>
          </div>
        </label>

        <label>Décrivez votre besoin *<textarea name="needs" value={formData.needs} onChange={handleChange} required></textarea></label>
        <label className={styles.terms}><input type="checkbox" name="consent" checked={formData.consent} onChange={handleChange} required /> J'accepte les conditions.</label>

        <button type="submit" className={styles.auditButton} disabled={loading}>
          {loading ? "Envoi en cours..." : "Envoyer ma demande"}
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </section>
  );
};

export default AuditForm;
