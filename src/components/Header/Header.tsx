"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaLinkedin } from "react-icons/fa"
import NavLink from "@/components/NavLink/NavLink"
import { FiChevronDown } from "react-icons/fi"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [openDropdown, setOpenDropdown] = useState<null | "services">(null)

  const openServices = () => setOpenDropdown("services")
  const closeServices = () => setOpenDropdown(null)

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
    { label: "Solutions IA", href: "/solutions" },
    { label: "Audit Gratuit", href: "/services/audit-gratuit" },
    { label: "Tarification", href: "/pricing" },
    { label: "Services", href: "/services" },
    { label: "Espace Dev IA", href: "/IA/Dev" },
    { label: "À propos", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Réflexion IA", href: "/blog" },
  ]

  const serviceLinks = [
    { label: "Tous les services", href: "/services", desc: "Aperçu global de nos offres" },
    { label: "Audit gratuit", href: "/services/audit-gratuit", desc: "Analyse rapide de votre site" },
    { label: "Générateur IA", href: "/services/generateur-ia", desc: "Vidéos & images IA, 9:16, 4K" },
    { label: "Analyse sémantique & NLP", href: "/services/analyse-semantique-nlp", desc: "Moteurs de recherche, RAG, clustering" },
    { label: "BI & IA", href: "/services/bi-ia", desc: "Dashboards décisionnels augmentés" },
    { label: "Data Engineering", href: "/services/data-engineering", desc: "Pipelines, quality, gouvernance" },
    { label: "Développement API", href: "/services/developpement-api", desc: "API robustes & scalables" },
    { label: "IA & Archéologie", href: "/services/ia-archeologie", desc: "SIG, 3D, photogrammétrie, dataviz" },
    { label: "IA générative", href: "/services/ia-generative", desc: "Agents, chatbots, copilotes" },
    { label: "Intelligence artificielle", href: "/services/intelligence-artificielle", desc: "ML classique & MLOps" },
    { label: "Machine & Deep Learning", href: "/services/machine-deep-learning", desc: "Entraînement, fine-tuning, eval" },
    { label: "RPA & automatisation", href: "/services/rpa-automatisation", desc: "Playwright, n8n, workflows" },
    { label: "Scraping intelligent", href: "/services/scraping-intelligent", desc: "OSINT, collecte web à grande échelle" },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/70 text-white transition-colors duration-300 header-glow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <Link href="/" aria-label="Retour à l'accueil">
            <Image
              src="/images/Logo_webcressontech.webp"
              alt="Logo WebCressonTech"
              width={160}
              height={48}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
          {links.map((link) => {
            if (link.label === "Services") {
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={openServices}
                  onMouseLeave={closeServices}
                >
                  <button
                    onClick={() =>
                      setOpenDropdown((prev) => (prev === "services" ? null : "services"))
                    }
                    aria-haspopup="true"
                    aria-expanded={openDropdown === "services"}
                    className="inline-flex items-center gap-1 px-2 py-1 text-white/90 hover:text-white focus:outline-none"
                  >
                    <span>Services</span>
                    <FiChevronDown className={`transition-transform ${openDropdown === "services" ? "rotate-180" : "rotate-0"}`} />
                  </button>

                  {openDropdown === "services" && (
                    <div
                      className="absolute left-1/2 -translate-x-1/2 top-full w-[900px]"
                      onMouseEnter={openServices}
                      onMouseLeave={closeServices}
                    >
                      {/* Hover bridge to avoid mouseleave gap */}
                      <div
                        role="menu"
                        className="pt-4 rounded-2xl border border-cyan-400/25 bg-[#0b0f12]/95 backdrop-blur-xl shadow-2xl ring-1 ring-cyan-300/10 overflow-hidden relative"
                      >
                        <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden>
                          <div className="absolute -top-24 left-1/2 h-48 w-[60%] -translate-x-1/2 rounded-full blur-3xl" style={{background:"radial-gradient(ellipse at center, rgba(0,224,255,0.35), transparent 60%)"}} />
                        </div>

                        {/* Header zone */}
                        <div className="px-5 pt-2 pb-4 border-b border-white/10 flex items-center justify-between">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.16em] text-white/50">Catalogue</p>
                            <h4 className="text-lg font-semibold leading-tight">Services WebCressonTech</h4>
                          </div>
                          <Link
                            href="/services"
                            onClick={() => handleLinkClick("Tous les services", "/services")}
                            className="text-sm font-medium px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition"
                          >
                            Voir tout
                          </Link>
                        </div>

                        {/* Grid of links */}
                        <div className="grid grid-cols-3 gap-3 p-4">
                          {serviceLinks.slice(2).map((s) => {
                            const isNew = ["/services/ia-generative", "/services/generateur-ia"].includes(s.href)
                            return (
                              <Link
                                key={s.href}
                                href={s.href}
                                onClick={() => handleLinkClick(s.label, s.href)}
                                className="group relative rounded-xl px-4 py-3 transition 
                                           bg-white/[0.02] hover:bg-white/[0.06] focus:bg-white/[0.08]
                                           ring-1 ring-white/5 hover:ring-cyan-400/30 focus:ring-cyan-400/40
                                           shadow-sm hover:shadow-cyan-400/10"
                              >
                                <span className="pointer-events-none absolute inset-y-2 left-0 w-[3px] rounded-full bg-transparent group-hover:bg-cyan-400/70" />
                                <div className="flex items-center gap-2">
                                  <div className="text-sm font-semibold text-white leading-5 group-hover:text-[#00e0ff]">
                                    {s.label}
                                  </div>
                                  {isNew && (
                                    <span className="text-[10px] leading-4 px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">Nouveau</span>
                                  )}
                                </div>
                                <div className="mt-1.5 text-xs text-white/65 leading-5">{s.desc}</div>
                              </Link>
                            )
                          })}
                        </div>

                        {/* Footer CTA */}
                        <div className="border-t border-white/10 px-4 py-3 flex items-center justify-between">
                          <Link
                            href="/pricing"
                            onClick={() => handleLinkClick("Tarification", "/pricing")}
                            className="text-sm text-white/80 hover:text-white"
                          >
                            Tarification
                          </Link>
                          <Link
                            href="/contact"
                            onClick={() => handleLinkClick("Contacter un expert", "/contact")}
                            className="bg-[#00e0ff] text-black text-sm font-semibold px-3.5 py-2 rounded-lg"
                          >
                            Parler à un expert
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            }

            return (
              <NavLink
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.label, link.href)}
                exact={link.href === "/"}
              >
                {link.label}
              </NavLink>
            )
          })}
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
