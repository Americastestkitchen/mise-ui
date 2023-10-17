import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import Sticker from '../shared/Sticker';
import { color, font, fontSize } from '../../../styles';
import { getImageUrl } from '../../../lib/cloudinary';

const baseClassName = 'tall-to-square-card';
const TallToSquareCardWrapper = styled.div.attrs({
  className: baseClassName,
})`
  background-color: ${color.frost};
  ${({ backgroundImageIds }) => (backgroundImageIds ? `background-image: url(${getImageUrl(backgroundImageIds.square, { width: 220 })});` : '')}
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

  .${baseClassName}__sticker {
    background-color: ${color.black};
    margin: 0;
    position: absolute;
    opacity: 1;
    top: -0.9rem;
  }

  ${breakpoint('md')`
    ${({ backgroundImageIds }) => (backgroundImageIds ? `background-image: url(${getImageUrl(backgroundImageIds.tall, { width: 220 })});` : '')}
    height: 59.6rem;
    max-width: 27.2rem;
    width: 27.2rem;
  `}

  ${breakpoint('lg')`
    &:hover {
      background-position: 0 -1rem;
    }
  `}
`;

const TallToSquareCardGradient = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${({ gradientColor }) => gradientColor});
  bottom: 0;
  height: 15.6rem;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const TallToSquareCardContent = styled.div.attrs({
  className: `${baseClassName}__content`,
})`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 2rem 1rem 1rem;
  width: 100%;
  z-index: 1;

  ${breakpoint('md')`
    align-items: center;
  `}
`;

const TallToSquareCardTitle = styled.h2.attrs({
  className: `${baseClassName}__title`,
})`
  color: ${color.white};
  font: 700 (2.4rem/1 )${font.pnb};
  text-align: center;
  ${({ textShadowColor }) => (textShadowColor ? `text-shadow: -1px 1px 0 ${textShadowColor};` : '')}

  ${breakpoint('md')`
    font-size: 3rem;
    max-width: 18rem;
  `}
`;

const TallToSquareCardDescription = styled.p.attrs({
  className: `${baseClassName}__description`,
})`
  color: ${color.white};
  font: 700 (${fontSize.md}/1.31 )${font.pnb};
  text-align: center;

  span {
    ${({ highlightColor }) => (highlightColor ? `background-color: ${highlightColor};` : '')}
  }
`;

const TallToSquareCard = ({
  backgroundImageIds,
  description,
  gradientColor,
  highlightColor,
  href,
  newTab,
  stickerText,
  textShadowColor,
  title,
}) => {
  const [bgImages, setBgImages] = useState(null);
  const anchorProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {};

  useEffect(() => {
    setBgImages(backgroundImageIds);
  }, [backgroundImageIds]);

  return (
    <TallToSquareCardWrapper backgroundImageIds={bgImages}>
      {
        stickerText && (
          <Sticker
            className={`${baseClassName}__sticker`}
            text={stickerText}
            type="editorial"
          />
        )
      }
      <a
        className={`${baseClassName}__link`}
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

TallToSquareCard.propTypes = {
  backgroundImageIds: PropTypes.shape({
    square: PropTypes.string,
    tall: PropTypes.string,
  }).isRequired,
  description: PropTypes.string.isRequired,
  gradientColor: PropTypes.string.isRequired,
  highlightColor: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  newTab: PropTypes.bool,
  stickerText: PropTypes.string,
  textShadowColor: PropTypes.string,
  title: PropTypes.string.isRequired,
};

TallToSquareCard.defaultProps = {
  newTab: false,
  stickerText: null,
  textShadowColor: null,
};

export default TallToSquareCard;
