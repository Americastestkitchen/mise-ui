import { UrlObject } from "url";

import Link from "../../partials/Links/Link/Link";
import FavoriteToggle from "../../partials/FavoriteToggle/FavoriteToggle";
import Byline, { Author } from "../../partials/Byline/Byline";

import styles from "./HeroCard.module.scss";

export type HeroCardProps = {
  path: string | (UrlObject & string);
  image: { 
    altText: string;
    url: string | (UrlObject & string);
  };
  headline: string | (UrlObject & string);
  authors: Author[];
  favorite?: boolean;
}

export const HeroCard: React.FC<HeroCardProps> = ({
  path = "#",
  image,
  headline,
  authors,
  favorite = false,
}) => {
  return (
    <article className={styles.container}>
      {/* TODO: Add Link component */}
      <Link
        className={styles["image-link"]}
        path={path}
      >
        <img
          className={styles["image"]}
          alt={image.altText}
          src={image.url}
        />
      </Link>
      <div className={styles.details}>
        <h1 className={styles.headline}>
          <Link className={styles["headline__link"]} path={path}>{headline}</Link>
        </h1>
        <footer className={styles.footer}>
          <Byline
            authors={authors}
          />
          <FavoriteToggle
            onClick={() => alert("Toggle Favorite")}
            favorite={false}
            theme="light"
          />
        </footer>
      </div>
    </article>
  );
};

export default HeroCard;