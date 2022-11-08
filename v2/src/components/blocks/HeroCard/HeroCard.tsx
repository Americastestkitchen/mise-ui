import React from "react";
import BylineList, { Author } from "../../partials/Byline/Byline";

import styles from "./styles/HeroCard.module.scss";

export type HeroCardProps = {
  image?: { altText?: string, cloudinaryUrl: string };
  author: Author;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  image,
  author,
}: HeroCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {image && (
          <img
            className={styles.heroImage}
            alt={image?.altText}
            src={image?.cloudinaryUrl}
          />
        )}
      </div>
    </div>
  );
};

export default HeroCard;