// src/app/legal-mentions/page.tsx
import React from 'react';
import styles from '@styles/LegalMentions.module.css';  // Chemin correct vers ton fichier CSS
 // Assure-toi que ton Footer est correctement importé

const LegalMentions = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Mentions Légales</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>Qui sommes-nous ?</h2>
        <p className={styles.paragraph}>
          Notre adresse web : <a href="https://webcresson.com/">https://webcresson.com/</a>
        </p>
        <p className={styles.paragraph}>
          Le présent site web, accessible à l’adresse <a href="https://webcresson.com/">https://webcresson.com/</a>, est édité par CRESSON Alexis, AUTO ENTREPRENEUR  au numéro SIREN 910 637 966, au capital de 5 000 euros, dont le siège social est situé au 14 rue Roger Salengro.
        </p>
        <p className={styles.paragraph}>
          Tél : 07 66 02 96 32 – Adresse électronique : alexis@webcresson.com
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Directeur de la publication</h2>
        <p className={styles.paragraph}>
          Le directeur de la publication du Site Web est Monsieur CRESSON Alexis, agissant en qualité de Gérant de la société WebCressonTech.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Media</h2>
        <p className={styles.paragraph}>
          Le contenu du site, les textes, les images, et les vidéos dont le Site est composé sont la propriété exclusive de la WebCressonTech. Toute représentation totale ou partielle de ce site et de son contenu, par quelques procédés que ce soient, sans l’autorisation préalable expresse de  WebCressonTech est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la Propriété intellectuelle.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Hébergement</h2>
        <p className={styles.paragraph}>
          Le site est hébergé par la société HOSTINGER, accessible à <a href="https://www.hostinger.fr/">https://www.hostinger.fr/</a>
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Cookies & loi informatique, fichiers et libertés</h2>
        <p className={styles.paragraph}>
          En accédant au site, l’utilisateur reconnaît accepter une licence d’usage du contenu du site selon les conditions suivantes : cette licence est non exclusive, personnelle, et strictement limitée à un usage privé. Toute reproduction ou communication du contenu sans autorisation préalable est interdite. 
        </p>
        <p className={styles.paragraph}>
          WebCressonTech est responsable du traitement des données collectées sur le site de webcresson. Conformément à la loi « Informatique et Libertés », l’utilisateur dispose d’un droit d’accès, de rectification, et de suppression de ses données personnelles en s’adressant à <a href="mailto:contact@webcresson.com">contact@webcresson.com</a> ou par courrier au 14 R ROGER SALENGRO 94240 L HAY LES ROSES.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Respect de la vie privée</h2>
        <p className={styles.paragraph}>
          WebCressonTech respecte votre vie privée et s’engage à protéger vos données. Les informations collectées sont régies par le droit français, et tout litige sera soumis aux tribunaux français.
        </p>
      </section>
    </div>
  );
};

export default LegalMentions;
