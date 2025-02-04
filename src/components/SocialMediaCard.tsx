import React from 'react';
import styles from '@/pages/styles/SocialMediaCard.module.css';

interface CardProps {
    image: string;
    title: string;
    subtitle: string;
}

const SocialMediaCard: React.FC<CardProps> = ({ image, title }) => (
    <div className={styles.card}>
        <img src={image} alt={title} className={styles.cardImage} />
    </div>
);

export default SocialMediaCard;