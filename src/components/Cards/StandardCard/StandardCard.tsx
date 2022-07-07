import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, fontSize, mixins, spacing, withThemes } from '../../../styles';
import { StandardUserAttributions } from '../shared/UserAttributions/UserAttributions';
import Attributions from '../shared/Attributions/Attributions';
import Badge from '../../Badge/Badge';
import CtaLink from '../shared/CtaLink/CtaLink';
import FavoriteButton from '../shared/FavoriteButton';
import Image from '../shared/Image';
import ImageCollage from '../shared/ImageCollage';
import Sticker from '../shared/Sticker';
import Title from '../shared/Title';
import { BaseCardPropType } from '../Cards';

const StandardCardTheme = {
  default: css`
    color: ${color.eclipse};

    // This hover state is necessary for a specificity issue related to SERP
    @media(hover: hover) {
      a.standard-card__anchor:hover {
        color: ${color.eclipse};
      }
    }

    .search-page & {
      a:focus-within p {
        ${mixins.focusIndicator()};
      }
    }
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
  dark: css`
    color: ${color.white};

    // This hover state is necessary for a specificity issue related to SERP
    @media(hover: hover) {
      a.standard-card__anchor:hover {
        color: ${color.white};
      }
    }
  `,
};

const StyledStandardCard = styled.article`
  ${withThemes(StandardCardTheme)}
  margin-bottom: ${spacing.xsm};
  position: relative;
  padding-bottom: ${spacing.sm};
  width: ${cards.standard.width.base};

  ${breakpoint('lg')`
    margin-bottom: ${spacing.sm};
    padding-bottom: ${spacing.sm};
    width: ${cards.standard.width.lg};
  `}
`;

const ImageWrapper = styled.div`
  background: ${color.white};
  position: relative;
  width: 100%;

  .no-image & {
    background: transparent;
    display: flex;
    align-items: center;
    margin-bottom: ${spacing.xxsm};
  }

  img {
    display: block;
    width: 100%;
  }
`;

const TitleWrapperTheme = {
  default: css`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-top: ${spacing.xsm};
  `,
};

const TitleWrapper = styled.div`
  ${withThemes(TitleWrapperTheme)}
`;

export const StyledTitle = styled(Title)`
  font-size: ${fontSize.md};
  margin-bottom: ${spacing.xsm};

  .carousel & {
    font-size: ${fontSize.xl};
  }

  ${breakpoint('lg')`
    font-size: ${fontSize.xl};
  `}
`;

export const StyledFavoriteButton = styled(FavoriteButton)`
  flex-shrink: 0;
`;

export const StickerGroup = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;

  .no-image & {
    position: static;

    & > * {
      margin-bottom: 0;
    }
  }
`;

const StyledAttributions = styled(Attributions)`
  ${breakpoint('xs', 'lg')`
    font-size: 1.2rem;

    & > span {
      display: block;
    }

    .attributions__bullet {
      display: none;
    }
  `}
`;

const stickerHeightMobile = '1.2rem';
export const StyledSticker = styled(Sticker)`
  ${breakpoint('xs', 'lg')`
    border-radius: 0.5rem;
    line-height: ${stickerHeightMobile};
    height: ${stickerHeightMobile};
    font-size: ${fontSize.xxsm};

    &:not(:first-of-type) {
      display: none;
    }
  `}
`;

export const StyledBadge = styled(Badge)`
  position: absolute;
  top: ${spacing.xsm};
  left: ${spacing.xsm};

  .no-image & {
    position: relative;
    top: 0;
    left: 0;
  }

  ${breakpoint('xs', 'md')`
    width: 1.6rem;
    height: 1.6rem;
  `}
`;

export type StandardCardPropTypes = BaseCardPropType & {
  avgRating?: number,
  ctaDataAttrs?: Record<string, unknown>,
  ctaText?: string,
  ctaUrl?: string,
  contentTypeFormatted?: string,
  dataAttrs?: Record<string, unknown>,
  displayFavoritesButton?: boolean,
  displayCookbook?: boolean,
  displayRecipeAttribution?: boolean,
  displaySecondaryAttribution?: boolean,
  displayLockIcon?: boolean,
  favoriteRibbonColor?: string, // TODO: pull from list of colors
  imageUrl?: string,
  isFavorited?: boolean,
  numRatings?: number,
  objectId: string,
  searchAttribution?: boolean,
  searchComments?: number,
  secondaryAttribution?: number | string,
  shopPrices?: Record<string, unknown>, //TODO: what object shape should this be?
  siteKeyFavorites?: DomainSiteKey,
  title: string,
  renderImage?(): Element;
  quickViewButton?: Element;
}
function StandardCard({
  avgRating,
  className,
  contentType,
  contentTypeFormatted,
  ctaDataAttrs,
  ctaText,
  ctaUrl,
  dataAttrs,
  displayCookbook,
  displayRecipeAttribution,
  displaySecondaryAttribution,
  displayFavoritesButton,
  displayLockIcon,
  favoriteRibbonColor,
  stickers,
  imageAlt,
  imageUrl,
  isFavorited,
  numRatings,
  objectId,
  onClick,
  renderImage,
  searchAttribution,
  searchComments,
  secondaryAttribution,
  shopPrices,
  siteKey,
  siteKeyFavorites,
  target,
  title,
  href,
  quickViewButton,
}: StandardCardPropTypes) {
  const ImageItem = Array.isArray(imageUrl) ? ImageCollage : Image;
  let stickerAria = '';
  if (stickers) {
    stickers.forEach((el) => {
      stickerAria += el.text;
    });
  }
  return (
    <StyledStandardCard
      className={`standard-card${imageUrl ? '' : ' no-image'}`}
      data-qa="standard-card"
      {...dataAttrs}
    >
      <>
        <ImageWrapper className="standard-card__image-wrapper">
          { imageUrl ? (
            <a
              tabIndex={-1}
              className="standard-card__anchor"
              href={href}
              onClick={onClick}
              rel={target && target === '_blank' ? 'noopener noreferrer' : ''}
              target={target}
            >
              {
                renderImage ? renderImage() : (
                  <ImageItem
                    aria-hidden="true"
                    imageAlt={imageAlt || ''}
                    imageUrl={imageUrl}
                  />
                )
              }
            </a>
          ) : null }
          <StyledBadge
            className={className}
            type={siteKey}
          />
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
        </ImageWrapper>
        <TitleWrapper className="standard-card__title-wrapper">
          <a
            aria-label={`${title}, ${stickerAria}, ${contentTypeFormatted || contentType}`}
            className="standard-card__anchor"
            href={href}
            onClick={onClick}
            rel={target && target === '_blank' ? 'noopener noreferrer' : ''}
            target={target}
          >
            <StyledTitle className={className} title={title} />
          </a>
          { displayFavoritesButton ? (
            <StyledFavoriteButton
              className={className}
              fill={favoriteRibbonColor}
              isFavorited={isFavorited}
              objectId={objectId}
              siteKey={siteKeyFavorites}
              title={title}
            />
          ) : null }
          {quickViewButton}
        </TitleWrapper>
      </>
      {searchAttribution && (
        <StandardUserAttributions
          commentsCount={searchComments}
          numRatings={displayRecipeAttribution ? numRatings : undefined}
          avgRating={displayRecipeAttribution ? avgRating : undefined}
        />
      )}
      <StyledAttributions
        displayCookbook={displayCookbook}
        displayLockIcon={displayLockIcon}
        displaySecondaryAttribution={displaySecondaryAttribution}
        primaryAttribution={contentTypeFormatted || contentType}
        secondaryAttribution={secondaryAttribution}
        shopPrices={shopPrices}
      />
      {
        ctaUrl && (
          <CtaLink
            ctaText={ctaText || ''}
            ctaUrl={ctaUrl}
            dataAttrs={ctaDataAttrs}
            onClick={onClick}
          />
        )
      }
    </StyledStandardCard>
  );
}

export default React.memo(StandardCard, (prev, next) => (
  prev.objectId === next.objectId
  && prev.href === next.href
));
