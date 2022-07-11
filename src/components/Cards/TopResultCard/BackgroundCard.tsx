import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { color, font, mixins } from '../../../styles';
import Sticker from '../shared/Sticker';

const Stack = styled.div`
  height: 100%;

  display: block;
  overflow: hidden;
  position: relative;
  > * {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  &:focus {
    ${mixins.focusIndicator()}
  }
  &:hover {
    img {   
      transform: translateY(-8px);
    }
  }
`;

const PictureWrapper = styled.div`
  picture {
    height: 100%;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.3s ease;
  }
`;

const GradientOverlay = styled.div`
  top: auto;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    ${color.black}
  );
  height: 260px;
`;

export type TopResultFeatureCardProps = {
  picture: ReactNode;
  topLeft?: ReactNode;
  topRight?: ReactNode;
  children?: ReactNode;
}

export function BackgroundCard({
  picture,
  topLeft,
  topRight,
  children,
}: TopResultFeatureCardProps) {
  return (
    <Stack>
      <PictureWrapper>
        {picture}
      </PictureWrapper>
      <GradientOverlay />
      { children ? (
        <div style={{ top: 'auto', padding: '8px' }}>
          {children}
        </div>
      ) : null}
      { topLeft ? (
        <div style={{ right: 'auto', bottom: 'auto', padding: '8px' }}>
          {topLeft}
        </div>
      ) : null}
      { topRight ? (
        <div style={{ left: 'auto', bottom: 'auto', padding: '8px' }}>
          {topRight}
        </div>
      ) : null}
    </Stack>
  );
}

export const BackgroundCardTitle = styled.p`
  font-size: 23px;
  line-height: 1.13;
  font-family: ${font.pnb};
  color: white;
  margin-bottom: 4px;
`;

export const BackgroundCardSubtitle = styled.p`
  font-size: 16px;
  line-height: 1.25;
  font-family: ${font.pnr};
  color: white;
`;

export const BackgroundCardAnchor = styled.a`
  display: block;
  height: 400px;
  width: 272px;
  &:focus {
    ${mixins.focusIndicator()}
  }
`;

const StyledSticker = styled(Sticker)`
  margin-left: 0;
  margin-right: 0.8rem;
  &:last-child {
    margin-right: 0;
  }
`;

export function BackgroundCardStickers({ stickers }: { stickers: string[] }) {
  return stickers ? (
    <div>
      {stickers.map(sticker => (
        sticker ? (
          <StyledSticker
            key={sticker}
            type={sticker === 'new' ? 'priority' : 'editorial'}
            text={sticker}
          />
        ) : null
      ))}
    </div>
  ) : null;
}
