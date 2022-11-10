import classNames from 'classnames/bind';
import PeekCardContainer from '../_partials/PeekCardContainer/PeekCardContainer';
import PeekCardDetail from '../_partials/PeekCardDetail/PeekCardDetail';
import PeekCardFooter from '../_partials/PeekCardFooter/PeekCardFooter';
import PeekCardLinks from '../_partials/PeekCardLinks/PeekCardLinks';
import { VideoCard } from '../PeekCard';

import styles from "./MediaPeekCard.module.scss";

export interface MediaPeekCardProps {
  card: VideoCard;
  className?: string;
  children: JSX.Element;
};

/* 
Question: Will we have a zype player/gif integration
in espresso moving forward?
*/

export const MediaPeekCard: React.FC<MediaPeekCardProps> = ({
  card,
  className,
  children
}: MediaPeekCardProps) => {
  const { author, body, links, title } = card;
  // TODO: add video component?
  return (
    <PeekCardContainer>
      {children}
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

export default MediaPeekCard;
