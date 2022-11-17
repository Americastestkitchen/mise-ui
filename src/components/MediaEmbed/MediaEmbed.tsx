import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import useResizeObserver from 'use-resize-observer/polyfilled';
import Caption from './Caption';
import instagramTemplate from './instagramTemplate';
import TikTokEmbed from './TikTokEmbed';
import { EmbedProps, useScript } from './utilities';

const EmbedWrapperInner = styled.div`
  width: min-content;
`;

/** Aspect ratio component for iframe child components */
const AspectRatio = styled.div<{ children?: JSX.IntrinsicElements['iframe'] }>`
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

function getYoutubeId(source: string): string | null {
  try {
    const { searchParams, hostname, pathname } = new URL(source);
    if (hostname.endsWith('youtu.be')) {
      return pathname.replace('/', '');
    }
    if (hostname.endsWith('youtube.com')) {
      return searchParams.get('v');
    }
    return null;
  } catch {
    return null;
  }
}

// https://youtu.be/pgHCA1MUAxE and https://www.youtube.com/watch?v=pgHCA1MUAxE
export function YoutubeEmbed({ source, caption }: EmbedProps) {
  const videoId = getYoutubeId(source);
  return videoId ? (
    <div>
      <AspectRatio>
        <iframe
          title="ytplayer"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          width="640"
          height="360"
          allow="fullscreen;"
        />
      </AspectRatio>
      <Caption caption={caption} />
    </div>
  ) : null;
}

const InstagramEmbedWrapper = styled.div<{lessThan542: boolean}>`
  width: ${({ lessThan542 }) => (lessThan542 ? '323px' : '542px')} !important;
`;

export function InstagramEmbed({ source, caption }: EmbedProps) {
  const { width = 0, ref } = useResizeObserver();
  useScript('//www.instagram.com/embed.js', () => window.instgrm?.Embeds.process());
  const postId = source.slice(source.lastIndexOf('p/') + 1).replace(/\//g, '');
  return (
    <div ref={ref}>
      <EmbedWrapperInner>
        <InstagramEmbedWrapper
          lessThan542={width < 542}
          dangerouslySetInnerHTML={{ __html: postId && instagramTemplate(postId) }}
        />
        <Caption caption={caption} />
      </EmbedWrapperInner>
    </div>
  );
}

export function ZypeEmbed({
  source, caption, autoplay = false, token,
}: EmbedProps & { autoplay?: boolean; token: string; }) {
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
  return (
    <div>
      <AspectRatio>
        <div ref={ref} />
      </AspectRatio>
      <Caption caption={caption} />
    </div>
  );
}

export function OtherEmbed({ source, caption }: EmbedProps) {
  return (
    <div>
      <iframe src={source} title={caption} width="100%" height="100%" style={{ border: 'none' }} />
      <Caption caption={caption} />
    </div>
  );
}

export type MediaEmbedType = 'TikTok' | 'YouTube' | 'Instagram' | 'Other' | unknown;

export type MediaEmbedProps = {
  /**
   * Not yet in line with barista expectations, right now truthiness gets the instagram
   *  post with caption option when included.
   */
  caption?: string;
  /**
   * One of the supported dynamic media types, selects proper element.
   * Other or unknown return iframes.
   */
  site: MediaEmbedType;
  /**
   * The url of the embedded content.
   * If type is Other or unknown, the url should be an iframe embeddable url.
   */
  source: string;
}

type MediaTokens = {
  /** Player token required for client */
  zype?: string;
}

/**
 * Embedded content component for render maps.
 */
export default function MediaEmbed({
  caption, site, source, tokens = {},
}: MediaEmbedProps & { tokens?: MediaTokens }) {
  switch (site) {
    case 'TikTok': return <TikTokEmbed source={source} caption={caption} />;
    case 'YouTube': return <YoutubeEmbed source={source} caption={caption} />;
    case 'Instagram': return <InstagramEmbed source={source} caption={caption} />;
    case 'Zype': return tokens?.zype ? (
      <ZypeEmbed source={source} token={tokens.zype} caption={caption} />
    ) : (
      // eslint-disable-next-line no-console
      <>{console.warn('Zype client token is missing!')}</>
    );
    case 'Other': return <OtherEmbed source={source} caption={caption} />;
    default: return <iframe src={source} title={caption} width="100%" height="100%" style={{ border: 'none' }} />;
  }
}
