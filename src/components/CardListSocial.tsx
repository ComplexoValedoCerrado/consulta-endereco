import React from 'react';
import SocialMediaCard from './SocialMediaCard';
import styles from '../pages/styles/SocialMediaCard.module.css';

interface CardData {
    id: number;
    image: string;
    title: string;
    subtitle: string;
}

const cardData: CardData[] = [
    {
        id: 1,
        image: 'https://webvales3.s3.amazonaws.com/Informativo.jpg',
        title: 'Programação',
        subtitle: 'Programação'
    },
    {
        id: 2,
        image: 'https://www.valedocerrado.com.br/assets/images/instagram/02.png',
        title: 'Simplifique seu gerenciamento',
        subtitle: 'com o aplicativo Vale do Cerrado.'
    },
    {
        id: 3,
        image: 'https://www.valedocerrado.com.br/assets/images/instagram/03.png',
        title: 'Permita-se sentir',
        subtitle: ''
    },
    {
        id: 4,
        image: 'https://www.valedocerrado.com.br/assets/images/instagram/04.png',
        title: 'A importância das boas lembranças',
        subtitle: 'que permanecem com o tempo.'
    },
];

const CardListSocial: React.FC = () => {
    return (
        <div className={styles.container_geral}>
            <div className={styles.cardContainer}>
                {cardData.map(card => (
                    <SocialMediaCard
                        key={card.id}
                        image={card.image}
                        title={card.title}
                        subtitle={card.subtitle}
                    />
                ))}
            </div>
        </div>
    );
}

export default CardListSocial;
