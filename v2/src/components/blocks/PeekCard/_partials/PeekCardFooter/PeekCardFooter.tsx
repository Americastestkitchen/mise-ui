import classNames from 'classnames/bind';
import BylineList, { Author } from '../../../../partials/Byline/Byline';
import { tempFavIcon } from './favoriteIcon';
import styles from "./PeekCardFooter.module.scss";

// logic for favoriting will be handled elsewhere
// always comes with ribbon that accepts onClick

export interface PeekCardFooterProps {
  authors?: Author[];
  className?: string;
  onClick?: () => void;
}

/* TODO: Add favorites Icon for onClick, temp icon in place */

export const PeekCardFooter: React.FC<PeekCardFooterProps> = ({
  authors,
  className,
  onClick
}: PeekCardFooterProps) => {
  return (
    <div className={styles.peekCardFooterWrapper}>
      {authors && (
        <BylineList authors={authors}/>
      )}
      {tempFavIcon}
    </div>
  );
};

export default PeekCardFooter;
