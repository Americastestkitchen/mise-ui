import EmbedMedia from '../../../partials/EmbedMedia/EmbedMedia';
import PeekCardContainer from '../partials/PeekCardContainer/PeekCardContainer';
import PeekCardDetail from '../partials/PeekCardDetail/PeekCardDetail';
import PeekCardFooter from '../partials/PeekCardFooter/PeekCardFooter';
import PeekCardLinks from '../partials/PeekCardLinks/PeekCardLinks';
import { VideoCard } from '../PeekCard';

export interface MediaPeekCardProps {
  card: VideoCard;
};

/* For local dev add zype token to test */
const token = {
  zype: '',
};

export const MediaPeekCard: React.FC<MediaPeekCardProps> = ({
  card,
}: MediaPeekCardProps) => {
  const { author, body, links, title, video: source } = card;
  return (
    <PeekCardContainer>
      <EmbedMedia
        source={source}
        tokens={token}
      />
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
