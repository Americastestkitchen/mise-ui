import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, grid, lineHeight, spacing } from '../../../styles';
import Badge from '../../Badge';
import FavoriteButton from '../shared/FavoriteButton';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import Title from '../shared/Title';

const featureCardWidth = grid.columnWidth;
const featureCardWideWidth = `${parseFloat(grid.columnWidth) * 2 + parseFloat(grid.gutterWidth)}rem`;
const featureCardWideHeight = '40rem';

const StyledFeatureCard = styled.article`
  box-shadow: 0 0 0 ${color.black};
  height: ${({ isWide }) => (isWide ? '33rem' : featureCardWideHeight)};
  position: relative;
  transition: all .3s ease;
  width: ${({ isWide }) => (isWide ? '34rem' : featureCardWidth)};

  .feature-card__gradient-overlay {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${color.black});
    bottom: 0;
    height: 16.5rem;
    left: 0;
    position: absolute;
    width: 100%;
  }

  .feature-card__subcomponents-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: ${spacing.sm} ${spacing.xsm};
    width: 100%;
    color: ${color.white};
  }

  @media(hover: hover) {
    &:hover {
      transform: translateY(-${spacing.xsm});
      box-shadow: 0 7px 8px -2px ${color.black};
    }
  }

  ${breakpoint('md')`
    height: ${featureCardWideHeight};
    width: ${({ isWide }) => (isWide ? featureCardWideWidth : featureCardWidth)};
  `}
`;

const StyledImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};
`;

const StyledTitle = styled(Title)`
  margin-bottom: ${spacing.xxsm};

  &:hover {
    color: ${color.white};
  }
`;

const StyledSticker = styled(Sticker)`
  &:first-child {
    margin-left: 0;
  }
`;

const StickerGroup = styled.div``;

const StyledFavoriteButton = styled(FavoriteButton)`
  position: absolute;
  top: ${spacing.xsm};
  right: ${spacing.xsm};
`;

const Attributions = styled.p`
  font: ${fontSize.md}/${lineHeight.md} ${font.pnb};
`;

function FeatureCard({
  attributions,
  className,
  contentType,
  displayFavoritesButton,
  href,
  imageAlt,
  imageUrl,
  isFavorited,
  isWide,
  objectId,
  onClick,
  siteKey,
  siteKeyFavorites,
  stickers,
  target,
  title,
}) {
  return (
    <StyledFeatureCard
      className={imageUrl ? '' : 'no-image'}
      contentType={contentType}
      data-testid="feature-card"
      isWide={isWide}
    >
      <a
        href={href}
        onClick={onClick}
        rel={target && target === '_blank' ? 'noopener noreferrer' : null}
        target={target}
      >
        <div className="feature-card__gradient-overlay" />
        <StyledImage
          className={className}
          imageAlt={imageAlt}
          imageUrl={imageUrl}
        />
        <StyledBadge
          className={className}
          type={siteKey}
        />
        { displayFavoritesButton ? (
          <StyledFavoriteButton
            className={className}
            fill={`${color.white}`}
            role="button"
            isFavorited={isFavorited}
            objectId={objectId}
            siteKey={siteKeyFavorites}
            title={title}
          />
        ) : null }
        <div className="feature-card__subcomponents-wrapper">
          { stickers ? (
            <StickerGroup>
              {stickers.map(({ text, type }) => (
                <StyledSticker
                  className={className}
                  key={text}
                  contentType={contentType}
                  type={type}
                  text={text}
                />
              ))}
            </StickerGroup>
          ) : null }
          <StyledTitle
            className={className}
            title={title}
          />
          { attributions ? (
            <Attributions>{attributions}</Attributions>
          ) : null }
        </div>
      </a>
    </StyledFeatureCard>
  );
}

FeatureCard.propTypes = {
  attributions: PropTypes.string,
  className: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  displayFavoritesButton: PropTypes.bool,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool,
  isWide: PropTypes.bool,
  objectId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  siteKeyFavorites: PropTypes.oneOf(['atk', 'cco', 'cio']),
  stickers: PropTypes.array,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FeatureCard.defaultProps = {
  attributions: '',
  className: null,
  displayFavoritesButton: true,
  imageAlt: ' ',
  isFavorited: false,
  isWide: false,
  onClick: null,
  siteKeyFavorites: null,
  stickers: [],
  target: null,
};

export default FeatureCard;
