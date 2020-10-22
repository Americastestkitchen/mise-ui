import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, grid, lineHeight, mixins, spacing } from '../../../styles';
import Badge from '../../Badge';
import FavoriteButton from '../shared/FavoriteButton';
import Image from '../shared/Image';
import PersonHeadShot from '../shared/PersonHeadShot';
import Sticker from '../shared/Sticker';
import Title from '../shared/Title';

const featureCardWidth = grid.columnWidth;
const featureCardWideWidth = `${parseFloat(grid.columnWidth) * 2 + parseFloat(grid.gutterWidth)}rem`;
const featureCardWideHeight = '40rem';

const StyledFeatureCard = styled.article`
  box-shadow: 0 0 0 ${color.black};
  height: ${({ isWide }) => (isWide ? '33rem' : featureCardWideHeight)};
  overflow: hidden; // solves/hides FF image edge flashing bug
  position: relative;
  width: ${({ isWide }) => (isWide ? '34rem' : featureCardWidth)};

  .feature-card__gradient-overlay {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), ${color.black});
    bottom: 0;
    height: 16.5rem;
    left: 0;
    position: absolute;
    width: 100%;
    z-index: 1;
  }

  .feature-card__subcomponents-wrapper {
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: ${spacing.sm} ${spacing.xsm};
    width: 100%;
    color: ${color.white};
    z-index: 2;
  }

  .feature-card__subcomponents-content:not(:only-child) {
    flex: 1 0 calc(100% -  6.2rem);
    max-width: calc(100% -  6.2rem);
  }

  .feature-card__subcomponents-aside {
    align-self: flex-end;
    flex: 0 0 5rem;
  }

  &.has-cta .feature-card__subcomponents-wrapper {
    bottom: ${spacing.md};
  }

  a img {
    transition: all .3s ease;
  }

  @media(hover: hover) {
    &:hover {
      .feature-card__background-img {
        transform: translateY(-${spacing.xsm});
        z-index: 0;
      }
    }
  }

  ${breakpoint('md')`
    height: ${featureCardWideHeight};
    width: ${({ isWide }) => (isWide ? featureCardWideWidth : featureCardWidth)};
  `}
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
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

const Attributions = styled.p.attrs({
  className: 'feature-card__attributions',
})`
  font: ${fontSize.md}/${lineHeight.md} ${font.pnb};
`;

const CtaLink = styled.a`
  ${mixins.styledLink(color.tomato, color.rust, color.white)};
  bottom: ${spacing.sm};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
  left: ${spacing.xsm};
  position: absolute;
`;

function FeatureCard({
  attributions,
  className,
  contentType,
  ctaText,
  ctaUrl,
  displayFavoritesButton,
  href,
  imageAlt,
  imageUrl,
  isFavorited,
  isWide,
  objectId,
  onClick,
  personHeadShot,
  siteKey,
  siteKeyFavorites,
  stickers,
  target,
  title,
}) {
  return (
    <StyledFeatureCard
      className={ctaUrl ? 'has-cta feature-card' : 'feature-card'}
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
          className={`${className} feature-card__background-img`}
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
        <div
          className="feature-card__subcomponents-wrapper"
        >
          <div
            className="feature-card__subcomponents-content"
          >
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
          {
            personHeadShot && (
              <div
                className="feature-card__subcomponents-aside"
              >
                <PersonHeadShot
                  {...personHeadShot}
                  size={{
                    sm: '5',
                    md: '8',
                  }}
                />
              </div>
            )
          }
        </div>
      </a>
      { ctaUrl && (
        <CtaLink ctaUrl={ctaUrl}>
          { ctaText }
        </CtaLink>
      )}
    </StyledFeatureCard>
  );
}

FeatureCard.propTypes = {
  attributions: PropTypes.string,
  className: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  displayFavoritesButton: PropTypes.bool,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  isFavorited: PropTypes.bool,
  isWide: PropTypes.bool,
  objectId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  /** Optional: Image data that is used to render a PersonHeadShot. */
  personHeadShot: PropTypes.shape({
    ...PersonHeadShot.propTypes,
  }),
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  siteKeyFavorites: PropTypes.oneOf(['atk', 'cco', 'cio']),
  stickers: PropTypes.array,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
};

FeatureCard.defaultProps = {
  attributions: '',
  className: '',
  ctaText: '',
  ctaUrl: '',
  displayFavoritesButton: true,
  imageAlt: '',
  isFavorited: false,
  isWide: false,
  onClick: null,
  personHeadShot: null,
  siteKeyFavorites: null,
  stickers: [],
  target: null,
};

export default FeatureCard;
