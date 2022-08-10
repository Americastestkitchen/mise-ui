import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { md, lg } from '../../../styles/breakpoints';

import Sticker from '../shared/Sticker/Sticker';

import { color, font, fontSize } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';

const baseClass = 'tall-to-square-card';

type bgImgIds = {
  square: string;
  tall: string;
};

const TallToSquareCardWrapper = styled.div.attrs({
  className: baseClass,
})<{ backgroundImageIds: bgImgIds }>`
  background-size: cover;
  background-position: center;
  display: flex;
  height: 32rem;
  justify-content: center;
  max-width: 30rem;
  position: relative;
  transition: background-position 0.5s ease;
  width: 30rem;
  z-index: 1;

  .${baseClass}__sticker {
    background-color: ${color.black};
    margin: 0;
    position: absolute;
    opacity: 1;
    top: -0.9rem;
  }

  ${({ backgroundImageIds }) => (backgroundImageIds ? md(css`background-image: url(${getImageUrl(backgroundImageIds.tall, { width: 220 })});`) : '')}

  ${md(css`
    height: 59.6rem;
    max-width: 27.2rem;
    width: 27.2rem;
  `)}

  ${lg(css`
    &:hover {
      background-position: 0 -1rem;
    }
  `)}
`;

const TallToSquareCardGradient = styled.div<{ gradientColor: string }>`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${({ gradientColor }) => gradientColor});
  bottom: 0;
  height: 15.6rem;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const TallToSquareCardContent = styled.div.attrs({
  className: `${baseClass}__content`,
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 2rem 1rem 1rem;
  width: 100%;
  z-index: 1;

  ${md(css`
    align-items: center;
  `)}
`;

const TallToSquareCardTitle = styled.h2.attrs({
  className: `${baseClass}__title`,
})<{ textShadowColor: string }>`
  color: ${color.white};
  font: 2.4rem/1 ${font.pnb};
  text-align: center;

  ${({ textShadowColor }) => (textShadowColor ? `text-shadow: -1px 1px 0 ${textShadowColor};` : '')}

  ${md(css`
    font-size: 3rem;
    max-width: 18rem;
  `)}
`;

const TallToSquareCardDescription = styled.p.attrs({
  className: `${baseClass}__description`,
})<{ highlightColor: string }>`
  color: ${color.white};
  font: ${fontSize.md}/1.31 ${font.pnb};
  text-align: center;

  span {
    ${({ highlightColor }) => (highlightColor ? `background-color: ${highlightColor};` : '')}
  }
`;

export type TallToSquareCardProps = {
  backgroundImageIds: bgImgIds;
  description: string;
  gradientColor: string;
  highlightColor: string;
  href: string;
  newTab?: boolean;
  stickerText?: string;
  textShadowColor?: string;
  title: string;
}

const TallToSquareCard = ({
  backgroundImageIds,
  description,
  gradientColor,
  highlightColor,
  href,
  newTab = false,
  stickerText = '',
  textShadowColor = '',
  title,
}: TallToSquareCardProps) => {
  const [bgImages, setBgImages] = useState<bgImgIds>({ square: '', tall: '' });
  const anchorProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {};

  useEffect(() => {
    setBgImages(backgroundImageIds);
  }, [backgroundImageIds]);

  return (
    <TallToSquareCardWrapper backgroundImageIds={bgImages}>
      {stickerText && (
        <Sticker
          className={`${baseClass}__sticker`}
          text={stickerText}
          type="editorial"
        />
      )}
      <a
        className={`${baseClass}__link`}
        href={href}
        {...anchorProps}
      >
        <TallToSquareCardGradient gradientColor={gradientColor} />
        <TallToSquareCardContent>
          <TallToSquareCardTitle textShadowColor={textShadowColor || highlightColor}>
            {title}
          </TallToSquareCardTitle>
          <TallToSquareCardDescription
            dangerouslySetInnerHTML={{ __html: description }}
            highlightColor={highlightColor}
          />
        </TallToSquareCardContent>
      </a>
    </TallToSquareCardWrapper>
  );
};

export default TallToSquareCard;
