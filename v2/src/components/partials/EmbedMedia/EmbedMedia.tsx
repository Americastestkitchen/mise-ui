import ZypeEmbed from "./partials/ZypeEmbed/ZypeEmbed";
import { Video } from '../../blocks/PeekCard/PeekCard';

type MediaTokens = {
  zype?: string;
}

export interface EmbedMediaProps {
  source: Video;
  tokens: MediaTokens;
}

/* 
TODO: Will probably want EmbedMedia to be able to handle more platforms than
just zype. All the logic was built out already for current Homepages. See 
MediaEmbed.tsx which currently supports: youtube, tiktok, instagram, other
*/

const EmbedMedia = ({ source, tokens }: EmbedMediaProps) => {
  const { zype: zypeToken } = tokens;
  console.log(zypeToken, 'zypeToken')
  const { zypeId, image } = source;
  return zypeToken ? (
    <ZypeEmbed
      cloudinaryId={image?.cloudinaryUrl}
      source={zypeId}
      token={zypeToken}
    />
  ) : (
    <>{console.warn('Zype client token is missing!')}</>
  );
};

export default EmbedMedia;
