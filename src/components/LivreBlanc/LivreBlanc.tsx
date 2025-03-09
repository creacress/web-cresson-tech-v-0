import React from 'react';
import Link from 'next/link';
import styles from '@styles/LivreBlancComponent.module.css';

type LivreBlancProps = {
    title: string;
    description: string;
    downloadLink: string;
    imageUrl?: string;
};

const LivreBlancComponent: React.FC<LivreBlancProps> = ({
    title,
    description,
    downloadLink,
    imageUrl,
}) => {
    return (
        
            <div className={styles.card}>
                {imageUrl && (
                    <img src={imageUrl} alt={title} className={styles.image} />
                )}
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.description}>{description}</p>
                    <Link href={downloadLink} className={styles.ctaButton} download>
                        Télécharger le Livre Blanc
                    </Link>
                </div>
            </div>
    );
};

export default LivreBlancComponent;