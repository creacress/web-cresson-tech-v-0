// src/app/terms-of-sale/page.tsx
import React from 'react';
import styles from '@/styles/TermsOfSale.module.css';  // Assure-toi que ton fichier CSS est au bon emplacement
 // Assure-toi que ton Footer est correctement importé

const TermsOfSale = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Conditions Générales de Vente (CGV)</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 1 – PRÉAMBULE</h2>
        <p className={styles.paragraph}>
          Les présentes Conditions Générales de Ventes ci-après « CGV » s’appliquent à toutes commandes de Gestion publicitaire et/ou de développement informatique faite auprès du Prestataire et mise en ligne par celui-ci, sur le territoire français, à l’exclusion de toutes autres conditions générales de vente ou d’achat.
        </p>
        <p className={styles.paragraph}>
          Cependant, les dispositions des présentes CGV peuvent être aménagées et/ou complétées et/ou modifiées par des conditions particulières de vente conclues par les parties dans le cadre d’un contrat cadre et/ou aménagées par des conditions spéciales prévues dans un devis.
        </p>
        <p className={styles.paragraph}>
          A défaut de dispositions particulières stipulées par écrit, le fait de passer commande implique l’acceptation pleine et entière des présentes conditions générales de vente. Le Prestataire se réserve la faculté de modifier ses conditions générales de vente à tout moment.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 2 – PRESTATIONS</h2>
        <p className={styles.paragraph}>
          Les prestations réalisées par le Prestataire consistent, selon les termes précisés dans le devis, dans les études, les conseils de campagnes publicitaires, les services de marketing de conseil et opérationnels, ainsi que dans la création, la gestion, l’optimisation et la restructuration des campagnes ou de développement informatique sur existant (ou non).
        </p>
        <p className={styles.paragraph}>
          Le Prestataire, dans le cadre de son obligation de moyens, s’engage à mettre en œuvre toute son expertise pour suivre et optimiser la campagne du Client Annonceur dans le but de garantir un service maximum et d’aider le Client Annonceur à obtenir le meilleur retour possible sur investissement.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 3 – PRIX</h2>
        <p className={styles.paragraph}>
          Les prix applicables sont ceux en vigueur à la date de signature du devis. Ils sont mentionnés en HT et TTC et sont à la disposition des Clients Annonceurs sur demande.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 4 – BON DE COMMANDE</h2>
        <p className={styles.paragraph}>
          Le Client Annonceur doit retourner le bon de commande signé dans les 15 jours ouvrables suivant sa réception. En l’absence de retour dans les délais mentionnés, le Prestataire se réserve le droit de considérer le bon de commande comme une offre non acceptée.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 5 – MODIFICATIONS ET ANNULATIONS</h2>
        <p className={styles.paragraph}>
          Hors cas de force majeure, toute annulation de commande par le Client Annonceur donne lieu au paiement d’une pénalité non libératoire égale au montant net du bon de commande.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 6 – DÉVELOPPEMENT INFORMATIQUE</h2>
        <p className={styles.paragraph}>
          Le Client est responsable des informations fournies pour permettre le bon déroulement de la mission de développement informatique. Il garantit également être titulaire des droits de propriété intellectuelle sur les outils et codes informatiques transmis à WebCressonTech.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 7 – PROPRIÉTÉ INTELLECTUELLE</h2>
        <p className={styles.paragraph}>
          Les composants, développements spécifiques et outils restent la propriété exclusive de WebCressonTech. Les codes sources ne seront communiqués qu’en cas de dispositions spécifiques prévues contractuellement ou dans des cas exceptionnels, tels qu’une liquidation judiciaire.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 8 – CALENDRIER</h2>
        <p className={styles.paragraph}>
          Les délais mentionnés sont indicatifs. Aucun dommage ou rétention de paiement ne pourra être réclamé en cas de retard imputable au Client.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>ARTICLE 13 – RGPD</h2>
        <p className={styles.paragraph}>
          Le Prestataire s’engage à respecter les obligations du RGPD, notamment en matière de collecte, traitement et sécurisation des données personnelles. Pour plus d’informations, contactez <a href="mailto:contact@webcresson.com">contact@webcresson.com</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfSale;
