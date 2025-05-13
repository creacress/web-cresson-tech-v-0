import React from "react"

export const revalidate = 86400

export default function TermsOfSale() {
  return (
    <main className="px-6 pt-24 pb-16 max-w-4xl mx-auto text-white">
      <article>
        <h1 className="text-4xl font-bold mb-10 text-neon text-center">
          Conditions Générales de Vente (CGV)
        </h1>

        {/* SECTION */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-2">ARTICLE 1 – PRÉAMBULE</h2>
          <p className="text-gray-400 mb-3">
            Les présentes Conditions Générales de Ventes ci-après « CGV » s’appliquent à toutes commandes de Gestion publicitaire et/ou de développement informatique faite auprès du Prestataire et mise en ligne par celui-ci, sur le territoire français, à l’exclusion de toutes autres conditions générales de vente ou d’achat.
          </p>
          <p className="text-gray-400 mb-3">
            Cependant, les dispositions des présentes CGV peuvent être aménagées et/ou complétées et/ou modifiées par des conditions particulières de vente conclues par les parties dans le cadre d’un contrat cadre et/ou aménagées par des conditions spéciales prévues dans un devis.
          </p>
          <p className="text-gray-400">
            A défaut de dispositions particulières stipulées par écrit, le fait de passer commande implique l’acceptation pleine et entière des présentes conditions générales de vente. Le Prestataire se réserve la faculté de modifier ses conditions générales de vente à tout moment.
          </p>
        </section>

        {[
          {
            title: "ARTICLE 2 – PRESTATIONS",
            content: [
              "Les prestations réalisées par le Prestataire consistent, selon les termes précisés dans le devis, dans les études, les conseils de campagnes publicitaires, les services de marketing de conseil et opérationnels, ainsi que dans la création, la gestion, l’optimisation et la restructuration des campagnes ou de développement informatique sur existant (ou non).",
              "Le Prestataire, dans le cadre de son obligation de moyens, s’engage à mettre en œuvre toute son expertise pour suivre et optimiser la campagne du Client Annonceur dans le but de garantir un service maximum et d’aider le Client Annonceur à obtenir le meilleur retour possible sur investissement.",
            ],
          },
          {
            title: "ARTICLE 3 – PRIX",
            content: [
              "Les prix applicables sont ceux en vigueur à la date de signature du devis. Ils sont mentionnés en HT et TTC et sont à la disposition des Clients Annonceurs sur demande.",
            ],
          },
          {
            title: "ARTICLE 4 – BON DE COMMANDE",
            content: [
              "Le Client Annonceur doit retourner le bon de commande signé dans les 15 jours ouvrables suivant sa réception. En l’absence de retour dans les délais mentionnés, le Prestataire se réserve le droit de considérer le bon de commande comme une offre non acceptée.",
            ],
          },
          {
            title: "ARTICLE 5 – MODIFICATIONS ET ANNULATIONS",
            content: [
              "Hors cas de force majeure, toute annulation de commande par le Client Annonceur donne lieu au paiement d’une pénalité non libératoire égale au montant net du bon de commande.",
            ],
          },
          {
            title: "ARTICLE 6 – DÉVELOPPEMENT INFORMATIQUE",
            content: [
              "Le Client est responsable des informations fournies pour permettre le bon déroulement de la mission de développement informatique. Il garantit également être titulaire des droits de propriété intellectuelle sur les outils et codes informatiques transmis à WebCressonTech.",
            ],
          },
          {
            title: "ARTICLE 7 – PROPRIÉTÉ INTELLECTUELLE",
            content: [
              "Les composants, développements spécifiques et outils restent la propriété exclusive de WebCressonTech. Les codes sources ne seront communiqués qu’en cas de dispositions spécifiques prévues contractuellement ou dans des cas exceptionnels, tels qu’une liquidation judiciaire.",
            ],
          },
          {
            title: "ARTICLE 8 – CALENDRIER",
            content: [
              "Les délais mentionnés sont indicatifs. Aucun dommage ou rétention de paiement ne pourra être réclamé en cas de retard imputable au Client.",
            ],
          },
          {
            title: "ARTICLE 13 – RGPD",
            content: [
              <>
                Le Prestataire s’engage à respecter les obligations du RGPD, notamment en matière de collecte, traitement et sécurisation des données personnelles.
                Pour plus d’informations, contactez{" "}
                <a href="mailto:contact@webcresson.com" className="text-[#00e0ff] underline">
                  contact@webcresson.com
                </a>.
              </>,
            ],
          },
        ].map((article, i) => (
          <section key={i} className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-2">{article.title}</h2>
            {article.content.map((p, j) => (
              <p key={j} className="text-gray-400 mb-3">
                {p}
              </p>
            ))}
          </section>
        ))}
      </article>
    </main>
  )
}
