import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, grid, lineHeight, mixins, spacing } from '../../../styles';
import { cssThemedFontBold } from '../../../styles/mixins';
import { FeatureCardUserAttributions } from '../shared/UserAttributions';
import { untilLg } from '../../../styles/breakpoints';
import Badge from '../../Badge';
import FavoriteRibbonWithBg from '../shared/FavoriteRibbonWithBg';
import Image from '../shared/Image';
import PersonHeadShot from '../shared/PersonHeadShot';
import Sticker from '../shared/Sticker';
import Title from '../shared/Title';
import { BaseCardPropType } from '../Cards';

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

  ${({ themedTitle }) => (themedTitle && cssThemedFontBold)}
  ${({ themedTitle }) => (themedTitle && css`
    font-size: 3.2rem;
    line-height: 3.6rem;

    ${untilLg(css`font-size: 2.3rem; line-height: 2.6rem;`)}
  `)}
`;

const StyledSticker = styled(Sticker)`
  &:first-child {
    margin-left: 0;
  }
`;

const StickerGroup = styled.div``;

const StyledFavoriteButtonWithBg = styled(FavoriteRibbonWithBg)`
  position: absolute;
  top: 0.6rem;
  right: 0.6rem;

  &:focus {
    ${mixins.focusIndicator()};
  }
`;

const Attributions = styled.p.attrs({
  className: 'feature-card__attributions',
})`
  font: ${fontSize.md}/${lineHeight.md} ${font.pnr};
`;

const CtaLink = styled.a`
  ${mixins.styledLink(color.tomato, color.rust, color.white)};
  bottom: ${spacing.sm};
  font: ${fontSize.md}/${lineHeight.sm} ${font.pnb};
  left: ${spacing.xsm};
  position: absolute;
  z-index: 2;

  &:focus {
    ${mixins.focusIndicator(color.white)};

  }
`;

const PricingWrapper = styled.div`
  display: flex;
  white-space: break-spaces;
`;

const DiscountPricing = styled.p`
  font: ${fontSize.md}/1 ${font.pnb};
  line-height: 1.2rem;
`;

const OriginalPricing = styled.p`
  font: ${fontSize.md}/1 ${font.pnr};
  line-height: 1.2rem;
  text-decoration: line-through;
`;

export interface FeatureCardPropTypes extends BaseCardPropType {
  avgRating: number,
  displayFavoritesButton: boolean,
  ctaDataAttrs: Record<string, unknown>, //TODO: what object shape should this be?
  dataAttrs: Record<string, unknown>, // TODO: document data attributes. What shape is this?
  isFavorited: boolean,
  numRatings: number,
  objectId: string,
  ctaText: string,
  ctaUrl: string,
  attributions: string,
  themedTitle: boolean,
  commentsCount?: number,
  discountedPrice: string,
  isWide: boolean,
  lazyImage: boolean,
  originalPrice: string,
  personHeadShot: Record<string, unknown>, // TODO: change to PersonHeadshotProps when that work begins
  siteKeyFavorites: DomainSiteKey,
  title: string,
}

function FeatureCard({
  attributions,
  avgRating,
  themedTitle = false,
  className,
  commentsCount,
  contentType,
  ctaDataAttrs,
  ctaText,
  ctaUrl,
  dataAttrs,
  discountedPrice,
  displayFavoritesButton = true,
  href,
  imageAlt,
  imageUrl,
  isFavorited = false,
  isWide = false,
  lazyImage = true,
  numRatings,
  objectId,
  onClick,
  originalPrice,
  personHeadShot,
  siteKey,
  siteKeyFavorites,
  stickers,
  target,
  title,
}: FeatureCardPropTypes) {
  return (
    <StyledFeatureCard
      className={ctaUrl ? 'has-cta feature-card' : 'feature-card'}
      contentType={contentType}
      data-qa="feature-card"
      data-testid="feature-card"
      {...dataAttrs}
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
          lazy={lazyImage}
        />
        <div className="feature-card__subcomponents-wrapper">
          <div className="feature-card__subcomponents-content">
            {stickers ? (
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
            ) : null}
            <StyledTitle themedTitle={themedTitle} className={className} title={title} />
            <FeatureCardUserAttributions
              avgRating={avgRating}
              commentsCount={commentsCount || null}
              numRatings={numRatings}
            />
            {attributions ? <Attributions>{attributions}</Attributions> : null}
            {originalPrice && discountedPrice ? (
              <PricingWrapper>
                <DiscountPricing>{`${discountedPrice} `}</DiscountPricing>
                <OriginalPricing>{originalPrice}</OriginalPricing>
              </PricingWrapper>
            ) : null}
          </div>
          {personHeadShot && (
            <div className="feature-card__subcomponents-aside">
              <PersonHeadShot
                {...personHeadShot}
                size={{
                  sm: '5',
                  md: '8',
                }}
              />
            </div>
          )}
        </div>
        <StyledBadge className={className} type={siteKey} />
        {displayFavoritesButton && siteKeyFavorites && objectId ? (
          <StyledFavoriteButtonWithBg
            className={className}
            siteKey={siteKeyFavorites}
            role="button"
            isFavorited={isFavorited}
            objectId={objectId}
            title={title}
          />
        ) : null}
      </a>
      {ctaUrl && (
        <CtaLink
          aria-label={`${ctaText} (opens in new window)`}
          className="cta-link"
          href={ctaUrl}
          target="_blank"
          {...ctaDataAttrs}
        >
          {ctaText}
        </CtaLink>
      )}
    </StyledFeatureCard>
  );
}

export default FeatureCard;