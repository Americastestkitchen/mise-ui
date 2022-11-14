import PeekCardContainer from '../partials/PeekCardContainer/PeekCardContainer';
import PeekCardDetail from '../partials/PeekCardDetail/PeekCardDetail';
import PeekCardFooter from '../partials/PeekCardFooter/PeekCardFooter';

import { Author } from '../../../partials/Byline/Byline';

import Link from '../../../partials/Links/Link/Link';

import styles from "./StandardPeekCard.module.scss";

export interface StandardPeekCardProps {
  className?: string;
  card: {
    image: {
      url: string;
      altText: string;
    };
    title: string;
    description: string;
    links: {
      url: string,
      label: string,
      target: string,
    }[];
    authors: Author[];
  };
  favorite: boolean;
  toggleFavorite(): void;
}

/*
  Question: For images will we be expecting multiple url assets? 
  i.e. turning the img into a picture w/ sources at each breakpoint
*/

export const StandardPeekCard: React.FC<StandardPeekCardProps> = ({
  className,
  card,
  favorite = false,
  toggleFavorite,
}) => {
  const { image, title, description, links, authors } = card;
  const { altText, url } = image;

  return (
    <PeekCardContainer className={className}>
      <Link className={`${styles["image-link"]}`} path={"#"}>
        <img className={`${styles["image"]}`} alt={altText} src={url} />
      </Link>
      <PeekCardDetail 
        title={title}
        description={description}
        links={links}
      />
      <PeekCardFooter
        authors={authors}
        favorite={favorite}
        onClick={toggleFavorite}
      />
    </PeekCardContainer>
  );
};

export default StandardPeekCard;
