import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, lineHeight, spacing } from '../../styles';
import { Sticker } from '../Sticker';
import { FavoriteRibbon } from '../DesignTokens/Icon';

const StyledCard = styled.article`
  position: relative;
  width: 16.2rem;
  color: ${color.eclipse};

  ${breakpoint('tablet')`
    width: 27.2rem;
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 16.2rem;

  ${breakpoint('tablet')`
    height: 27.2rem;
  `}
`;

const Title = styled.h3`
  margin-bottom: ${spacing.xxsm};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};

  ${breakpoint('tablet')`
    font-size: ${fontSize.xl};
  `}
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: ${spacing.xsm};
  padding-bottom: ${spacing.xsm};
`;

const StyledFavoriteRibbon = styled(FavoriteRibbon)`
  flex-shrink: 0;
  margin-top: ${spacing.xxsm};
  width: 1.5rem;
  stroke: currentColor;
  fill: transparent;
`;

const Attributions = styled.p`
  font: 1.2rem/${lineHeight.md} ${font.pnr};
  padding-bottom: ${spacing.sm};

  ${breakpoint('tablet')`
    font-size: ${fontSize.sm};
  `}
`;

const StickerGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
`;

const StyledSticker = styled(Sticker)`

  ${breakpoint('mobile', 'tablet')`
    height: 1.2rem;
    line-height: 1.2rem;
    font-size: ${fontSize.xxsm};
  `}
`;

export function Card({
  attributions,
  className,
  hasImage,
  isAuthenticated,
  hasStickers,
  imageAlt,
  title,
}) {
  return (
    <StyledCard>
      <ImageWrapper>
        { hasImage ? (
          <img src="https://placekitten.com/272/272" alt={imageAlt} />
        ) : null }
        { hasStickers ? (
          <StickerGroup>
            <StyledSticker className={className} isPriority text='new' />
            <StyledSticker className={className} text='popular' />
          </StickerGroup>
        ) : null }
      </ImageWrapper>

      <TextWrapper>
        <Title>{title}</Title>
        { isAuthenticated ? (
          <StyledFavoriteRibbon className={className} />
        ) : null }
      </TextWrapper>
      <Attributions>{attributions}</Attributions>
    </StyledCard>
  )
}

Card.propTypes = {
  attributions: PropTypes.string,
  isAuthenticated: PropTypes.bool,
  hasStickers: PropTypes.bool,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

Card.defaultProps = {
  attributions: '',
  hasStickers: false,
};
