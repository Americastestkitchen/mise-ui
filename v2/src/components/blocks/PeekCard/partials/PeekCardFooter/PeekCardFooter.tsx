import BylineList, { Author } from '../../../../partials/Byline/Byline';
import FavoriteToggle from '../../../../partials/FavoriteToggle/FavoriteToggle';

import styles from "./PeekCardFooter.module.scss";

// logic for favoriting will be handled elsewhere
// always comes with ribbon that accepts onClick

export interface PeekCardFooterProps {
  className?: string;
  authors: Author[];
  favorite: boolean;
  onClick(): void;
}

/* TODO: Add favorites Icon for onClick, temp icon in place */

export const PeekCardFooter: React.FC<PeekCardFooterProps> = ({
  authors,
  className,
  favorite,
  onClick
}: PeekCardFooterProps) => {
  return (
    <footer className={`${styles["footer"]} ${className}`}>
      <BylineList authors={authors}/>
      <FavoriteToggle favorite={favorite} onClick={onClick} />
    </footer>
  );
};

export default PeekCardFooter;
