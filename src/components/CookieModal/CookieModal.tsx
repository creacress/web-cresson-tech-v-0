"use client"; // Activer l'interactivité côté client

import { useState, useEffect } from "react";
import styles from "./CookieModal.module.css";

export default function CookieModal() {
  const [isVisible, setIsVisible] = useState(false);

  // Afficher la modal uniquement après le rendu côté client (éviter les problèmes SSR)
  useEffect(() => {
    const consent = localStorage.getItem("cookies_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    localStorage.setItem("cookies_consent", "true");

    // Envoi d'un événement personnalisé à Google Analytics si nécessaire
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "cookies_accept", {
        event_category: "User Consent",
        event_label: "Cookies strictement analytiques",
      });
    }
  };

  return (
    isVisible && (
      <div
        className={styles.cookieModal}
        role="dialog"
        aria-labelledby="cookieModalTitle"
        aria-describedby="cookieModalDescription"
        aria-modal="true"
      >
        <div className={styles.modalContent}>
          <h2 id="cookieModalTitle" className={styles.modalTitle}>
            Utilisation de cookies
          </h2>
          <p id="cookieModalDescription" className={styles.modalDescription}>
            Ce site utilise des cookies strictement analytiques pour améliorer
            l'expérience utilisateur. Aucune donnée personnelle n'est collectée
            ou partagée.
          </p>
          <button
            className={styles.acceptButton}
            onClick={handleAccept}
            autoFocus
          >
            J'accepte
          </button>
        </div>
      </div>
    )
  );
}
