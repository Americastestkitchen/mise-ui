import React from "react";

import styles from "./styles/HeroCard.module.scss";

export interface HeroCardProps {
}

export const HeroCard: React.FC<HeroCardProps> = ({ }: HeroCardProps) => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/" alt="Tomato Sandwich" />
        <h1>Your Summer Needs These Three Tomato Sandwiches</h1>
      </div>
    </div>
  );
};

export default HeroCard;