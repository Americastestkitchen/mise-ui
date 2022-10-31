import React from "react";

import styles from "./src/styles/HeroCard.module.scss";

export interface HeroCardProps {
  className?: string
}

export const HeroCard: React.FC<HeroCardProps> = ({ className }: HeroCardProps) => {
  return (
    <div className={`${styles["herocard"]} ${className}`}>
      <div className="container">
        <img src="/" alt="Tomato Sandwich" />
        <h1>Your Summer Needs These Three Tomato Sandwiches</h1>
      </div>
    </div>
  );
};

export default HeroCard;