import React from "react"
import Link from "next/link"

export const metadata = {
  title: "Programme de Bug Bounty | WebCressonTech",
  description:
    "Découvrez notre politique de divulgation responsable. Signalez une faille de sécurité de façon éthique et sécurisée.",
  alternates: {
    canonical: "https://webcresson.com/bug-bounty",
  },
}

export default function BugBountyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white">
      <h1 className="text-4xl font-extrabold text-neon mb-6">
        🛡️ Responsible Disclosure & Bug Bounty
      </h1>

      <p className="text-gray-300 mb-6">
        Chez WebCressonTech, la sécurité de nos systèmes est une priorité. Nous
        encourageons la divulgation responsable des failles de sécurité. Si vous
        pensez avoir trouvé une vulnérabilité, merci de nous en informer de manière
        responsable.
      </p>

      <section className="bg-[#111] p-6 rounded border border-[#00e0ff33] mb-10">
        <h2 className="text-xl font-bold text-white mb-2">🔒 Méthodes de contact</h2>
        <ul className="text-gray-300 list-disc pl-6 space-y-2">
          <li>
            Email dédié :{" "}
            <a
              href="mailto:security@webcresson.com"
              className="text-neon underline"
            >
              security@webcresson.com
            </a>
          </li>
          <li>
            Clé PGP :{" "}
            <a
              href="/pgp-key.txt"
              className="text-neon underline"
              download
            >
              Télécharger la clé publique
            </a>
          </li>
          <li>
            Fichier security.txt :{" "}
            <a
              href="/.well-known/security.txt"
              className="text-neon underline"
            >
              /.well-known/security.txt
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-2">
          ✅ Bonnes pratiques attendues
        </h2>
        <ul className="text-gray-300 list-disc pl-6 space-y-1">
          <li>Ne pas exploiter activement une faille trouvée</li>
          <li>Ne pas tenter d’accéder aux données d’autres utilisateurs</li>
          <li>Ne pas effectuer de tests de charge (DDoS, brute-force, etc.)</li>
          <li>
            Ne pas interrompre volontairement un service (DoS / altération)
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-bold text-white mb-2">🎖️ Hall of Fame</h2>
        <p className="text-gray-300 mb-2">
          Vous serez crédité publiquement si vous êtes le premier à signaler
          une vulnérabilité valide et éligible.
        </p>
        <Link
          href="/hall-of-fame"
          className="text-neon underline"
        >
          Voir le Hall of Fame →
        </Link>
      </section>

      <section>
        <h2 className="text-xl font-bold text-white mb-2">
          🤝 Merci pour votre contribution
        </h2>
        <p className="text-gray-400">
          Vous nous aidez à renforcer la sécurité de nos services. Toute
          contribution est appréciée.
        </p>
      </section>
    </main>
  )
}
