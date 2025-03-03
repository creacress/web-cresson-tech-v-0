"use client";

import Link from "next/link";
import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (label: string, href: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "header_link_click", {
        event_category: "Navigation",
        event_label: label,
        event_action: href,
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className={styles.header} aria-label="En-tête du site WebCressonTech">
      <nav className={styles.headerNav}>
        <div className={styles.logoContainer}>
          <Link href="/" aria-label="Retour à l'accueil">
            <Image
              src="/Logo_webcressontech.webp"
              alt="Logo WebCressonTech représentant l'intelligence artificielle et la technologie"
              width={150}
              height={50}
              priority
              loading="lazy"
              className={styles.logo}
              sizes="(max-width: 600px) 150px, (max-width: 1024px) 300px, 384px"
            />
          </Link>
        </div>

        <button
          className={styles.hamburger}
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="navigationMenu"
        >
          <span className={`${styles.line} ${menuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.line} ${menuOpen ? styles.open : ""}`}></span>
          <span className={`${styles.line} ${menuOpen ? styles.open : ""}`}></span>
        </button>

        <div
          id="navigationMenu"
          className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}
          aria-hidden={!menuOpen}
        >
          {[
            { label: "Accueil", href: "/" },
            { label: "Services", href: "/services" },
            { label: "À propos", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.label, link.href)}
              className={styles.menuLink}
              aria-label={`Lien vers la page ${link.label}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className={styles.ctaContainer}>
          <a
            href="https://www.linkedin.com/in/alexis-cresson/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers LinkedIn"
            className={styles.socialIcon}
          >
            <FaLinkedin size={30} />
          </a>

          <Link
            href="/contact"
            className={styles.primaryCta}
            onClick={() => handleLinkClick("Contacter un expert", "/contact")}
            aria-label="Contacter un expert IA"
          >
            Contacter un expert
          </Link>
        </div>
      </nav>
    </header>
  );
}
