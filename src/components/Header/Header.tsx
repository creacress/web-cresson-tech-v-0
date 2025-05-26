"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"
import NavLink from "@/components/NavLink/NavLink"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const handleLinkClick = (label: string, href: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "header_link_click", {
        event_category: "Navigation",
        event_label: label,
        event_action: href,
      })
    }
    setMenuOpen(false)
  }

  const links = [
    { label: "Accueil", href: "/" },
    { label: "Audit Gratuit", href: "/services/audit-gratuit" },
    { label: "Solutions IA", href: "/solutions" },
    { label: "Tarification", href: "/pricing" },
    { label: "Services", href: "/services/page-services" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Réflexion IA", href: "/blog" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 text-white transition-colors duration-300 relative header-glow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <Link href="/" aria-label="Retour à l'accueil">
            <Image
              src="/images/Logo_webcressontech.webp"
              alt="Logo WebCressonTech"
              width={48}
              height={48}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen ? "true" : "false"}
          aria-controls="navigationMenu"
          className="md:hidden flex flex-col gap-1"
        >
          <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-white transition ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-6 items-center">
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.label, link.href)}
              exact={link.href === "/"}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href="https://www.linkedin.com/in/alexis-cresson/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers LinkedIn"
            className="text-[#00e0ff] hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
          <Link
            href="/contact"
            onClick={() => handleLinkClick("Contacter un expert", "/contact")}
            className="bg-[#00e0ff] text-black px-4 py-2 rounded font-semibold"
            aria-label="Contacter un expert IA"
          >
            Contacter un expert
          </Link>
        </div>
      </nav>

      {/* Menu mobile */}
      {menuOpen && (
        <div
          id="navigationMenu"
          className="md:hidden bg-[#111] border-t border-[#00e0ff33] px-6 py-4 space-y-4"
          aria-hidden={!menuOpen}
        >
          {links.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              onClick={() => handleLinkClick(link.label, link.href)}
              exact={link.href === "/"}
              className="block"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
