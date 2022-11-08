import classNames from 'classnames/bind';
import PeekCardContainer from '../partials/PeekCardContainer/PeekCardContainer';
import PeekCardDetail from '../partials/PeekCardDetail/PeekCardDetail';
import PeekCardLinks from '../partials/PeekCardLinks/PeekCardLinks';
import PeekCardFooter from '../partials/PeekCardFooter/PeekCardFooter';
import { StandardCard } from '../PeekCard';
import styles from "./StandardPeekCard.module.scss";

export interface StandardPeekCardProps {
  className?: string;
  card: StandardCard;
}

/*
  Question: For images will we be expecting multiple url assets? 
  i.e. turning the img into a picture w/ sources at each breakpoint
*/

export const StandardPeekCard: React.FC<StandardPeekCardProps> = ({ className, card }: StandardPeekCardProps) => {
  const { author, body, image, isFavorited, links, title } = card;
  const { altText, cloudinaryUrl } = image;
  return (
    <PeekCardContainer>
      <img alt={altText} src={cloudinaryUrl} />
      <PeekCardDetail 
        body={body}
        title={title}
      />
      <PeekCardLinks
        links={links}
      />
      <PeekCardFooter
        authors={author}
      />
    </PeekCardContainer>
  );
};

export default StandardPeekCard;
