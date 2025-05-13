import React from "react"

export const revalidate = 86400

export default function LegalMentions() {
  return (
    <main className="px-6 pt-24 pb-16 max-w-4xl mx-auto text-white">
      <article>
        <h1 className="text-4xl font-bold mb-10 text-neon text-center">Mentions Légales</h1>

        {/* Section Identité */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Qui sommes-nous ?</h2>
          <p className="text-gray-400 mb-3">
            Notre adresse web :{" "}
            <a href="https://webcresson.com/" className="text-[#00e0ff] underline">
              https://webcresson.com/
            </a>
          </p>
          <p className="text-gray-400 mb-3">
            Ce site est édité par CRESSON Alexis, AUTO ENTREPRENEUR (SIREN 910 637 966),
            capital de 5 000 euros, siège social situé au 14 rue Roger Salengro.
          </p>
          <p className="text-gray-400">
            Tél : 07 66 02 96 32 – Email :{" "}
            <a href="mailto:contact@webcresson.com" className="text-[#00e0ff] underline">
              contact@webcresson.com
            </a>
          </p>
        </section>

        {/* Directeur publication */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Directeur de la publication</h2>
          <p className="text-gray-400">
            Monsieur CRESSON Alexis, en qualité de Gérant de WebCressonTech.
          </p>
        </section>

        {/* Propriété */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Médias & propriété</h2>
          <p className="text-gray-400">
            Le contenu du site (textes, images, vidéos) est la propriété exclusive de WebCressonTech.
            Toute reproduction sans autorisation est interdite (articles L.335-2 et suivants du Code de la Propriété intellectuelle).
          </p>
        </section>

        {/* Hébergeur */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Hébergement</h2>
          <p className="text-gray-400">
            Hébergé par HOSTINGER –{" "}
            <a href="https://www.hostinger.fr/" className="text-[#00e0ff] underline">
              https://www.hostinger.fr/
            </a>
          </p>
        </section>

        {/* Cookies & données */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Cookies & données personnelles
          </h2>
          <p className="text-gray-400 mb-3">
            En accédant au site, l’utilisateur accepte une licence d’usage limitée à un usage privé. Toute reproduction ou diffusion est interdite sans accord.
          </p>
          <p className="text-gray-400">
            WebCressonTech est responsable du traitement des données. Conformément à la loi « Informatique et Libertés », vous pouvez exercer vos droits en écrivant à :{" "}
            <a href="mailto:contact@webcresson.com" className="text-[#00e0ff] underline">
              contact@webcresson.com
            </a>{" "}
            ou par courrier : 14 rue Roger Salengro, 94240 L’HAY LES ROSES.
          </p>
        </section>

        {/* Vie privée */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">Respect de la vie privée</h2>
          <p className="text-gray-400">
            WebCressonTech respecte votre vie privée. Vos données sont protégées conformément au droit français. Tout litige sera soumis aux tribunaux compétents en France.
          </p>
        </section>
      </article>
    </main>
  )
}
