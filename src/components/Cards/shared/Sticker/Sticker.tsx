import React from 'react';
import styled from 'styled-components';
import { color, font, fontSize, letterSpacing, spacing } from '../../../../styles';
import { Collection, VideoPlay } from '../../../DesignTokens/Icon';
import { StickerType, StickerContentType } from '../../Cards';

const stickerHeight = '1.8rem';

const StyledSticker = styled.span<{ type: string }>`
  display: inline-flex;
  align-items: center;
  margin-bottom: ${spacing.xsm};
  margin-left: ${spacing.xsm};
  padding-left: ${spacing.xsm};
  padding-right: ${spacing.xsm};
  height: ${stickerHeight};
  border-radius: 0.6rem;
  background-color: ${({ type }) => (type === 'priority' ? color.tomato : color.transparentBlack)};
  color: ${color.white};
  font: ${fontSize.xsm}/${stickerHeight} ${font.pnb};
  letter-spacing: ${letterSpacing.md};
  text-transform: uppercase;
  vertical-align: top;
  white-space: nowrap;

  svg {
    margin-right: ${spacing.xxsm};
    width: 1rem;
    height: 1rem;
    max-height: 60%;
  }

  @media print {
    background-color: ${color.black};
  }
`;

const determineIconType = (contentType: StickerContentType) => {
  const contentTypes = {
    collection: Collection,
    clip: VideoPlay,
    episode: VideoPlay,
    playlist: VideoPlay,
    video: VideoPlay,
    'cooking school course': VideoPlay,
  };
  const El = contentTypes[contentType];

  return El ? <El fill={`${color.white}`} /> : null;
};

export default function Sticker({
  className = '',
  contentType,
  icon,
  text,
  type,
}: StickerType) {
  return (
    <StyledSticker
      className={className}
      type={type}
    >
      { icon && contentType && type === 'editorial' ? determineIconType(contentType) : null }
      <span dangerouslySetInnerHTML={{ __html: text }} />
    </StyledSticker>
  );
}
