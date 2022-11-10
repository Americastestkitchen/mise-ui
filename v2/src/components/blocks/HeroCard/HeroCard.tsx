import React from "react";
import BylineList, { Author } from "../../partials/Byline/Byline";

import styles from "./styles/HeroCard.module.scss";

export type HeroCardProps = {
  image?: { altText?: string, cloudinaryUrl: string };
  author: Author;
  headlineText: string;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  image,
  author,
  headlineText,
}: HeroCardProps) => {
  return (
    <div className={styles.container}>
      {image && (
        <img
          className={styles.heroImage}
          alt={image.altText}
          src={image.cloudinaryUrl}
        />
      )}
      <div className={styles.text}>
        <h1 className={styles.headline}>{headlineText}</h1>
        <div className={styles.attribution}>
          <BylineList authors={[author]} />
          <svg width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.483 18.809L3 24V3H18V24L10.483 18.809Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
          {/* TODO: get actual bookmark imported */}
        </div>
      </div>
    </div>
  );
};

export default HeroCard;