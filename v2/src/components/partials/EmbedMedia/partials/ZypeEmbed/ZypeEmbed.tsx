import { useEffect, useRef } from 'react';
import { useScript } from '../../utilities';
import AspectRatio from '../AspectRatio/AspectRatio';
import Caption from '../Caption/Caption';
import { MediaEmbed } from '../../utilities';

interface ZypeEmbedProps extends MediaEmbed {
  autoplay?: boolean;
  cloudinaryId?: string;
  token: string;
}

const ZypeEmbed = ({
  autoplay = false,
  caption,
  cloudinaryId,
  source,
  token,
}: ZypeEmbedProps) => {
  useScript(`https://player.zype.com/embed/${source}.js?api_key=${token}&autoplay=${autoplay}&controls=true&da=true`);
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.id = `zype_${source}`;
    }
    // We don't want to update refs since this component gets
    //  replaced with a player embed by the zype script.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* TODO: Figure out thumbnail logic */ 

  return (
    <div>
      <AspectRatio>
        <div ref={ref}/>
      </AspectRatio>
      <Caption caption={caption} />
    </div>
  );
};

export default ZypeEmbed;
