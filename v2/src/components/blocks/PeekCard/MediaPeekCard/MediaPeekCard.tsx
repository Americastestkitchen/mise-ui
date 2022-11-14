import EmbedMedia from '../../../partials/EmbedMedia/EmbedMedia';
import PeekCardContainer from '../partials/PeekCardContainer/PeekCardContainer';
import PeekCardDetail from '../partials/PeekCardDetail/PeekCardDetail';
import PeekCardFooter from '../partials/PeekCardFooter/PeekCardFooter';

import { Author } from '../../../partials/Byline/Byline';
import { Video } from '../../../partials/EmbedMedia/EmbedMedia';

export interface MediaPeekCardProps {
  className?: string;
  card: {
    id: number;
    video: Video;
    title: string;
    description: string;
    author: Author[];
    links: {
      url: string;
      label: string;
      target: string;
    }[];
  };
  favorite: boolean;
  toggleFavorite(): void;
};

/* For local dev add zype token to test */
const token = {
  zype: '',
};

export const MediaPeekCard: React.FC<MediaPeekCardProps> = ({
  className,
  card,
  favorite = false,
  toggleFavorite
}: MediaPeekCardProps) => {
  const { author, description, links, title, video: source } = card;
  return (
    <PeekCardContainer className={className}>
      <EmbedMedia
        source={source}
        tokens={token}
      />
      <PeekCardDetail
        description={description}
        links={links}
        title={title}
      />
      <PeekCardFooter
        authors={author}
        favorite={favorite}
        onClick={toggleFavorite}
      />
    </PeekCardContainer>
  );
};

export default MediaPeekCard;
