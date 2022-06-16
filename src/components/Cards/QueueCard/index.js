import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, fontSize, spacing, lineHeight, font, letterSpacing, withThemes } from '../../../styles';
import Badge from '../../Badge/Badge';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';

const QueueCardTheme = {
  default: css`
  `,
  dark: css`
    color: ${color.white};

    @media(hover: hover) {
      &:hover {
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
  top: ${spacing.xsm};
  left: ${spacing.xsm};
`;

export const VideoInfo = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  bottom: 0;
  justify-content: space-between;
  padding-right: ${spacing.sm};
  width: 100%;
`;

const stickerHeightMobile = '1.2rem';
export const StyledSticker = styled(Sticker)`
  ${breakpoint('xs', 'lg')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};
  `}
`;

export const StyledTitle = styled(Title)`
  font-size: ${fontSize.xl};
  transition: color 0.2s ease;
`;

const QueueCard = ({
  className,
  contentType,
  href,
  imageAlt,
  imageUrl,
  onClick,
  progress,
  siteKey,
  stickers,
  target,
  title,
  type,
  videoId,
}) => (
  <StyledQueueCard
    id={videoId}
    data-testid="queue-card"
  >
    <a
      className="queue-card__anchor"
      href={href}
      onClick={onClick}
      rel={target && target === '_blank' ? 'noopener noreferrer' : null}
      target={target}
    >
      <ImageWrapper>
        <StyledBadge
          className={className}
          type={siteKey}
        />
        <Image
          aria-hidden="true"
          imageAlt={imageAlt}
          imageUrl={imageUrl}
        />
        { stickers ? (
          <VideoInfo>
            {stickers.map(({ text, type }) => (
              <StyledSticker
                className={className}
                key={text}
                contentType={contentType}
                type={type}
                text={text}
              />
            ))}
            <ProgressBar progress={progress} />
          </VideoInfo>
        ) : null }
      </ImageWrapper>
      <h4>Resume {type} </h4>
      <StyledTitle className={className} title={title} />
    </a>
  </StyledQueueCard>
);

QueueCard.propTypes = {
  className: PropTypes.string,
  contentType: PropTypes.oneOf(['episode', 'video']).isRequired,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  progress: PropTypes.number,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  stickers: PropTypes.array,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  videoId: PropTypes.string.isRequired,
};

QueueCard.defaultProps = {
  className: null,
  imageAlt: '',
  onClick: null,
  progress: 0,
  stickers: [],
  target: null,
  type: null,
};

export default QueueCard;
