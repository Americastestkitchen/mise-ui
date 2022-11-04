import React from "react";

import styles from "./styles/HeroCard.module.scss";

export interface HeroCardProps {
  image?: { altText?: string, cloudinaryUrl: string };
}

export const HeroCard: React.FC<HeroCardProps> = ({ image }: HeroCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img
          className={styles.headShot}
          crossOrigin="anonymous"
          decoding="async"
          alt={image?.altText}
          src={image?.cloudinaryUrl}
          // onError={() => { setImageError(true); }}
        />
        <img src="/" alt="Tomato Sandwich" />
        <h1>Your Summer Needs These Three Tomato Sandwiches</h1>
      </div>
    </div>
  );
};

export default HeroCard;