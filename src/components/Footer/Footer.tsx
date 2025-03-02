"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  // Fonction pour suivre les clics sur les liens
  const handleLinkClick = (label: string, path: string, external: boolean = false) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "footer_link_click", {
        event_category: "Navigation",
        event_label: label,
      });
    }
    if (!external) {
      router.push(path);
    }
  };

  return (
    <footer className={styles.footer} aria-label="Pied de page WebCressonTech">
      <div className={styles.footerContent}>
        
        {/* Section supérieure */}
        <div className={styles.footerTop}>
          {/* Description de l'entreprise */}
          <div className={styles.footerSection}>
            <h3>WebCressonTech</h3>
            <p>Expert en IA</p>
            <p>
              Nous sommes concepteurs et développeurs d’intelligences artificielles sur mesure.
            </p>
          </div>

          {/* Message d'encouragement */}
          <div className={styles.footerSection}>
            <h3>La seule limite est celle que vous ne franchissez pas !</h3>
            <p>Nous vous accompagnons dans vos projets.</p>
            <div className={styles.ctaLinks}>
              <Link
                href="/contact"
                className={styles.primaryCta}
                onClick={() => handleLinkClick("Contacter un expert", "/contact")}
                aria-label="Contacter un expert IA"
              >
                Contacter un expert
              </Link>
              <a
                href="https://www.malt.fr/profile/alexiscresson"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.maltButton}
                onClick={() => handleLinkClick("Profil Malt", "https://www.malt.fr/profile/alexiscresson", true)}
                aria-label="Voir le profil Malt d'Alexis Cresson"
              >
                Malt
              </a>
            </div>
          </div>

          {/* Coordonnées */}
          <address className={styles.footerSection}>
            <p>
              <a
                href="mailto:alexis@webcresson.com"
                className={styles.enhancedLink}
                onClick={() => handleLinkClick("Email - Alexis Cresson", "mailto:alexis@webcresson.com", true)}
                aria-label="Envoyer un email à alexis@webcresson.com"
              >
                <FaEnvelope className="inline-block mr-2" />
                alexis@webcresson.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/alexis-cresson/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.enhancedLink}
                onClick={() => handleLinkClick("Profil LinkedIn - Alexis Cresson", "https://www.linkedin.com/in/alexis-cresson/", true)}
                aria-label="Voir le profil LinkedIn d'Alexis Cresson"
              >
                <FaLinkedin className="inline-block mr-2" />
                LinkedIn
              </a>
            </p>
          </address>
        </div>

        {/* Section inférieure */}
        <div className={styles.footerBottom}>
          <nav className={styles.footerLinks} aria-label="Liens de navigation du pied de page">
            <Link href="/about" onClick={() => handleLinkClick("Accueil", "/about")}>
              Accueil
            </Link>
            <Link href="/services" onClick={() => handleLinkClick("L’agence IA", "/services")}>
              L’agence IA
            </Link>
            <Link href="/contact" onClick={() => handleLinkClick("Contact", "/contact")}>
              Contact
            </Link>
            <Link href="/TermsOfSale" onClick={() => handleLinkClick("Conditions de ventes", "/TermsOfSale")}>
              Conditions de ventes
            </Link>
            <Link href="/LegalMentions" onClick={() => handleLinkClick("Mentions légales", "/LegalMentions")}>
              Mentions légales
            </Link>
          </nav>
          <p>© {currentYear} WebCressonTech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
