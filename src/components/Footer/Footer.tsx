"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { FaEnvelope, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const router = useRouter()

  const handleLinkClick = (label: string, path: string, external = false) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "footer_link_click", {
        event_category: "Navigation",
        event_label: label,
      })
    }
    if (!external) {
      router.push(path)
    }
  }

  return (
    <footer className="bg-black border-t border-[#00e0ff33] text-white pt-12 pb-6 px-6 md:px-12 text-sm relative">
      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "WebCressonTech",
            "url": "https://webcresson.com",
            "logo": "https://webcresson.com/images/logo.png",
            "sameAs": [
              "https://www.linkedin.com/in/alexis-cresson/",
              "https://www.malt.fr/profile/alexiscresson",
            ],
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "alexis@webcresson.com",
              "contactType": "customer support",
              "availableLanguage": ["French", "English"],
            },
          }),
        }}
      />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Bloc 1 */}
        <div>
          <h3 className="text-lg font-bold text-neon mb-2">WebCressonTech</h3>
          <p className="text-gray-400 mb-2">Expert en IA</p>
          <p className="text-gray-500">
            Nous concevons et développons des intelligences artificielles sur mesure.
          </p>
        </div>

        {/* Bloc 2 */}
        <div>
          <h3 className="text-lg font-bold text-neon mb-2">
            La seule limite est celle que vous ne franchissez pas !
          </h3>
          <p className="text-gray-400 mb-4">Nous vous accompagnons dans vos projets.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              onClick={() => handleLinkClick("Contacter un expert", "/contact")}
              className="bg-[#00e0ff] text-black px-4 py-2 rounded font-semibold text-center"
              aria-label="Contacter un expert IA"
            >
              Contacter un expert
            </Link>
            <a
              href="https://www.malt.fr/profile/alexiscresson"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleLinkClick("Profil Malt", "https://www.malt.fr/profile/alexiscresson", true)
              }
              className="border border-[#00e0ff] text-[#00e0ff] px-4 py-2 rounded text-center hover:bg-[#00e0ff22] transition"
              aria-label="Voir le profil Malt d'Alexis Cresson"
            >
              Malt
            </a>
          </div>
        </div>

        {/* Bloc 3 */}
        <address className="not-italic space-y-2">
          <p>
            <a
              href="mailto:alexis@webcresson.com"
              onClick={() =>
                handleLinkClick("Email - Alexis Cresson", "mailto:alexis@webcresson.com", true)
              }
              className="text-gray-400 hover:text-[#00e0ff] transition"
              aria-label="Envoyer un email à alexis@webcresson.com"
            >
              <FaEnvelope className="inline mr-2" />
              alexis@webcresson.com
            </a>
          </p>
          <p>
            <a
              href="https://www.linkedin.com/in/alexis-cresson/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                handleLinkClick("Profil LinkedIn - Alexis Cresson", "https://www.linkedin.com/in/alexis-cresson/", true)
              }
              className="text-gray-400 hover:text-[#00e0ff] transition"
              aria-label="Voir le profil LinkedIn d'Alexis Cresson"
            >
              <FaLinkedin className="inline mr-2" />
              LinkedIn
            </a>
          </p>
        </address>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 pt-6 border-t border-[#00e0ff22] text-center text-gray-500">
        <nav className="flex flex-wrap justify-center gap-4 mb-4">
          <Link href="/about" onClick={() => handleLinkClick("Accueil", "/about")}>
            Accueil
          </Link>
          <Link href="/services/page-services" onClick={() => handleLinkClick("L’agence IA", "/services/page-services")}>
            L’agence IA
          </Link>
          <Link href="/contact" onClick={() => handleLinkClick("Contact", "/contact")}>
            Contact
          </Link>
          <Link href="/terms-of-sale" onClick={() => handleLinkClick("Conditions de ventes", "/terms-of-sale")}>
            Conditions de ventes
          </Link>
          <Link href="/legal-mentions" onClick={() => handleLinkClick("Mentions légales", "/legal-mentions")}>
            Mentions légales
          </Link>
        </nav>
        <p>© {currentYear} WebCressonTech. Tous droits réservés.</p>
      </div>
    </footer>
  )
}
