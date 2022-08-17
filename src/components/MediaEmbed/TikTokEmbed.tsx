import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import Caption from './Caption';
import { EmbedProps, useOEmbed } from './utilities';

function useTikTokOEmbed(source: string): string {
  return useOEmbed({
    baseUrl: 'https://www.tiktok.com/oembed?url=',
    script: 'https://www.tiktok.com/embed.js',
    source,
  });
}

/**
 * https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web-us/tiktok/web/node/_next/static/chunks/pages/embed-4054b9635841fc9131d0.js
 */
function useTikTokIframeSize(): 325 | 542 {
  const [iframeWidth, setIframeWidth] = useState<325 | 542>(542);
  // useEffect for ssr
  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent);
    setIframeWidth(isMobile ? 325 : 542);
  }, []);
  return iframeWidth;
}

const cssResolved = css`
  height: 1000px;
  left: 50%;
  /* TODO: make 100vw and query selector 100% elsewhere to apply mobile viewport styles as mobile */
  width: 1000px;
  transform: translateX(calc(-50% - 1px));
  position: absolute;
`;

const Trim = styled.div<{trim: number, recieved?: number}>`
  position: relative;
  width: ${({ trim = 325 }) => `${trim}px`};
  height: ${({ recieved = 680 }) => `${recieved}px`};
  /* ios not sending right heights in iframe messages? default to larger value if not desktop */
  min-height: 680px !important;
  overflow: hidden;
`;

const Wrapper = styled.div`
  ${cssResolved}
  blockquote {
    margin-top: 0 !important;
    max-width: 1000px !important;
    height: 1000px !important;
  }
  iframe {
    max-height: 1000px !important;
  }
`;

/**
 * Reads window messages for iframe details about height information from cross-origin scripts.
 */
function useTikTokIframeListener(
  ref: React.RefObject<HTMLDivElement>,
  setHeight: React.Dispatch<React.SetStateAction<number | undefined>>,
) {
  useEffect(() => {
    window.addEventListener(
      'message',
      (event) => {
        if (
          event.origin !== 'https://www.tiktok.com'
          || event.source !== ref.current?.querySelector('iframe')?.contentWindow
        ) { return; }

        try {
          const { height: tHeight } = JSON.parse(event.data);
          if (tHeight > 1) {
            setHeight(tHeight);
            // tiktok script watches iframe size change, we need this to trigger
            setTimeout(() => {
              const iframe = ref.current?.querySelector('iframe');
              if (iframe) {
                iframe.style.width = '1001px';
              }
            }, 1000);
          }
        } catch { /** */ }
      },
      false,
    );
  }, [ref, setHeight]);
}

export default function TikTokEmbed({
  source, caption,
}: EmbedProps) {
  const embed = useTikTokOEmbed(source);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const ref = useRef<HTMLDivElement>(null);
  const iframeSize = useTikTokIframeSize();
  useTikTokIframeListener(ref, setHeight);

  return (
    <div>
      <Trim trim={iframeSize} recieved={height}>
        <Wrapper ref={ref} dangerouslySetInnerHTML={{ __html: embed ?? '' }} />
      </Trim>
      <div style={{ width: iframeSize }}>
        <Caption caption={caption} />
      </div>
    </div>
  );
}
