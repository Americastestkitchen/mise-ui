


import StandardPeekCard from '../PeekCard/StandardPeekCard/StandardPeekCard';
import StandardButton from '../../partials/Buttons/StandardButton/StandardButton';

import styles from "./ContentFeed.module.scss";

export interface ContentFeedProps {
  className?: string;
  headline?: string;
  feed: any[];
  user: { [key: string]: any } | boolean | null;
  emailCard?: React.ReactNode;
  toggleFavorite(): void;
  loadMore?(): void;
}

const ContentFeed: React.FC<ContentFeedProps> = ({
  className,
  headline,
  feed,
  user = null,
  emailCard,
  toggleFavorite,
  loadMore,
}) => {
  return (
    <section className={`${styles["section"]} ${className}`}>
      { !!headline &&
        <header className={styles["header"]}>
          <h2 className={styles["header__headline"]}>{headline}</h2>
        </header>
      }
      <ul className={styles["feed-list"]}>
        {feed.map((content, i, arr) => {
          return (
            <>
              <li
                key={`${content.id}-${i}`}
                className={styles["feed-list__item"]}
              >
                <StandardPeekCard card={content} toggleFavorite={toggleFavorite} favorite={false} />
              </li>
              { !!emailCard && !user && (i === 4 || i === arr.length -1) &&
                <li
                  key={`${content.id}-${i}`}
                  className={styles["feed-list__item"]}
                >
                  {emailCard}
                </li>
              }
            </>
          )
        })
      }
      </ul>
      { !!loadMore &&
        <footer className={styles["footer"]}>
          <StandardButton
            className={styles["footer__load-more"]}
            label="Load More"
            onClick={loadMore}
          />
        </footer>
      }
    </section>
  )
}

export default ContentFeed