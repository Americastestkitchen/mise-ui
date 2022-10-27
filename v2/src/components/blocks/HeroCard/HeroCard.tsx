import React from "react";

import styles from "./src/styles/HeroCard.module.scss";

export interface HeroCardProps {
  className?: string 
}

export const HeroCard: React.FC<HeroCardProps> = ({ className }: HeroCardProps) => {
  return <div className={`${styles["component"]} ${className}`}>HeroCard</div>;
};

export default HeroCard;