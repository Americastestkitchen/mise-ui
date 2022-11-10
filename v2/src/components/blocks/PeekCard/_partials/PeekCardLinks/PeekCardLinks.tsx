import classNames from 'classnames/bind';

import styles from "./PeekCardLinks.module.scss";
import type { CardLinks } from '../../PeekCard';

const cx = classNames.bind(styles);

export interface PeekCardLinksProps {
  links: CardLinks[],
};

export const PeekCardLinks: React.FC<PeekCardLinksProps> = ({
  links,
}: PeekCardLinksProps) => {
  return (
    <div className={styles.peekLinkContainer}>
      {links.map((link, idx) => {
        const { url, title } = link;
        return (
          <>
            {idx === 1 && <p className={styles.peekCardSeparator}>·</p>}
            <a className={styles.peekCardLink} href={url}>
              {title}
            </a>
          </>
        )
      })}
    </div>
  )
};

export default PeekCardLinks;
