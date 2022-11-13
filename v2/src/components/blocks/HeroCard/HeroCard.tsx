import { UrlObject } from "url";

import Link from "../../partials/Links/Link/Link";
import FavoriteToggle from "../../partials/FavoriteToggle/FavoriteToggle";
import Byline, { Author } from "../../partials/Byline/Byline";

import styles from "./HeroCard.module.scss";

export type HeroCardProps = {
  documentPath: string | (UrlObject & string),
  image: { 
    altText: string,
    url: string | (UrlObject & string),
  };
  authors: Author[],
  headline: string | (UrlObject & string),
  favorite?: boolean,
}

export const HeroCard: React.FC<HeroCardProps> = ({
  documentPath = "#",
  image,
  authors,
  headline,
  favorite = false,
}) => {
  return (
    <article className={styles.container}>
      {/* TODO: Add Link component */}
      <Link
        className={styles["image-link"]}
        path={documentPath}
      >
        <img
          className={styles["image"]}
          alt={image.altText}
          src={image.url}
        />
      </Link>
      <div className={styles.details}>
        <h1 className={styles.headline}>
          <Link path={documentPath}>{headline}</Link>
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