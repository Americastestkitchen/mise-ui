


import StandardPeekCard from '../PeekCard/StandardPeekCard/StandardPeekCard';
import { StandardCard, VideoCard } from '../PeekCard/PeekCard';
import StandardButton from '../../partials/Buttons/StandardButton/StandardButton';

import styles from "./ContentFeed.module.scss";

type FeedContent = StandardCard | VideoCard

export interface ContentFeedProps {
  className?: string;
  headline?: string;
  feed: FeedContent[];
  onClick?(): void;
}

const ContentFeed: React.FC<ContentFeedProps> = ({
  className,
  headline,
  onClick,
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
              {content.cardType === 'standard' && (
                <StandardPeekCard card={content} />
              )}
            </li>
          )
        })
      }
      </ul>
      { !!onClick &&
        <footer className={styles["footer"]}>
          <StandardButton
            className={styles["footer__load-more"]}
            label="Load More"
            onClick={onClick}
          />
        </footer>
      }
    </section>
  )
}

export default ContentFeed