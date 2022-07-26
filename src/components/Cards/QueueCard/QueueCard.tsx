import React from 'react';
import styled, { css } from 'styled-components';
import { untilLg } from '../../../styles/breakpoints';
import { color, fontSize, spacing, lineHeight, font, letterSpacing, withThemes } from '../../../styles';

import Badge from '../../Badge/Badge';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import { StickerType } from '../Cards';
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';

const QueueCardTheme = {
  default: css``,
  dark: css`
    color: ${color.white};

    @media(hover: hover) {
      &hover {
        color: ${color.silver};
      }
    }
  `,
};

const StyledQueueCard = styled.article`
  ${withThemes(QueueCardTheme)}
  position: relative;
  width: 27.2rem;

  h4 {
    color: ${color.silver};
    font: 1.2rem/${lineHeight.sm} ${font.pnb};
    letter-spacing: ${letterSpacing.lg};
    margin-bottom: ${spacing.xsm};
    text-transform: uppercase;
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: ${spacing.sm};
  position: relative;
  width: 100%;
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  left: ${spacing.xsm};
  top: ${spacing.xsm};
`;

const VideoInfo = styled.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding-right: ${spacing.sm};
  position: absolute;
  width: 100%;
`;

const stickerHeightMobile = '1.2rem';
export const StyledSticker = styled(Sticker)`
  ${untilLg(css`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};
  `)}
`;

export const StyledTitle = styled(Title)`
  font-size: ${fontSize.xl};
  transition: color 0.2s ease;
`;

export type QueueCardProps = {
  className?: string;
  contentType: 'episode' | 'video';
  href: string;
  imageAlt?: string;
  imageUrl: string;
  onClick: () => void;
  progress?: number;
  siteKey: ThemeSiteKey;
  stickers?: StickerType[];
  target?: string;
  title: string;
  type?: string;
  videoId: string;
};

const QueueCard = ({
  className = '',
  contentType,
  href,
  imageAlt = '',
  imageUrl,
  onClick = () => {},
  progress = 0,
  siteKey,
  stickers = [],
  target = '',
  title,
  type = '',
  videoId,
}: QueueCardProps) => (
  <StyledQueueCard id={videoId} data-testid="queue-card">
    <a
      className="queue-card__anchor"
      href={href}
      onClick={onClick}
      rel={target && target === '_blank' ? 'noopener noreferrer' : ''}
      target={target}
    >
      <ImageWrapper>
        <StyledBadge className={className} type={siteKey} />
        <Image aria-hidden="true" imageAlt={imageAlt} imageUrl={imageUrl} />
        { stickers ? (
          <VideoInfo>
            {stickers.map(({ text, type }) => (
              <StyledSticker
                className={className}
                contentType={contentType}
                key={text}
                type={type}
                text={text}
              />
            ))}
            <ProgressBar progress={progress} />
          </VideoInfo>
        ) : null}
      </ImageWrapper>
      <h4>Resume {type}</h4>
      <StyledTitle className={className} title={title} />
    </a>
  </StyledQueueCard>
);

export default QueueCard;
