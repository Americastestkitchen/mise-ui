


import StandardPeekCard from '../PeekCard/StandardPeekCard/StandardPeekCard';
import { StandardCard, VideoCard } from '../PeekCard/PeekCard';
import StandardButton from '../../partials/Buttons/StandardButton/StandardButton';

import styles from "./ContentFeed.module.scss";

type FeedContent = StandardCard | VideoCard

export interface ContentFeedProps {
  className?: string;
  headline?: string;
  feed: FeedContent[];
  toggleFavorite(): void;
  loadMore?(): void;
}

const ContentFeed: React.FC<ContentFeedProps> = ({
  className,
  headline,
  toggleFavorite,
  loadMore,
  feed
}) => {
  return (
    <section className={`${styles["section"]} ${className}`}>
      { !!headline &&
        <header className={styles["header"]}>
          <h2 className={styles["header__headline"]}>{headline}</h2>
        </header>
      }
      <ul className={styles["feed-list"]}>
        {feed.map((content, i) => {
          return ( 
            <li
              key={`${content.id}-${i}`}
              className={styles["feed-list__item"]}
            >
              <StandardPeekCard card={content} toggleFavorite={toggleFavorite} favorite={false} />
            </li>
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