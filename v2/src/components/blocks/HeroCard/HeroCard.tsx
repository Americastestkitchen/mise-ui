import React from "react";
import Byline, { Author } from "../../partials/Byline/Byline";

import styles from "./HeroCard.module.scss";

export type HeroCardProps = {
  image: { 
    altText: string,
    url: string
  };
  author: Author,
  headline: string,
  favorite?: boolean,
}

export const HeroCard: React.FC<HeroCardProps> = ({
  image,
  author,
  headline,
  favorite = false,
}) => {
  return (
    <article className={styles.container}>
      {/* TODO: Add Link component */}
      <a
        className={styles["image-link"]}
        href="#"
      >
        <img
          className={styles["image"]}
          alt={image.altText}
          src={image.url}
        />
      </a>
      <div className={styles.details}>
        <h1 className={styles.headline}>
          {/* TODO: Add Link component */}
          <a href="#">{headline}</a>
        </h1>
        <footer className={styles.footer}>
          <Byline
            authors={[author]}
          />
          {/* TODO: Add Favorite Toggle */}
        </footer>
      </div>
    </article>
  );
};

export default HeroCard;