import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { cards, color, fontSize, mixins, spacing, withThemes } from '../../../styles';
import Badge from '../../Badge';
import Attributions from '../shared/Attributions';
import CtaLink from '../shared/CtaLink';
import FavoriteButton from '../shared/FavoriteButton';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import Title from '../shared/Title';

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
    margin-right: ${props => [props.displayFavoritesButton ? spacing.md : 'none']};
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
  position: absolute;
  top: 17rem;
  right: 0;

  .no-image & {
    top: 3.5rem;
  }

  ${breakpoint('lg')`
    top: 28rem;

    .no-image & {
      top: 3.5rem;
    }
  `}
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

function StandardCard({
  className,
  contentType,
  contentTypeFormatted,
  ctaDataAttrs,
  ctaText,
  ctaUrl,
  dataAttrs,
  displayCookbook,
  displaySecondaryAttribution,
  displayFavoritesButton,
  displayLockIcon,
  favoriteRibbonColor,
  stickers,
  imageAlt,
  imageUrl,
  isFavorited,
  objectId,
  onClick,
  secondaryAttribution,
  shopPrices,
  siteKey,
  siteKeyFavorites,
  target,
  title,
  href,
}) {
  return (
    <StyledStandardCard
      className={`standard-card${imageUrl ? '' : ' no-image'}`}
      {...dataAttrs}
    >
      <a
        className="standard-card__anchor"
        href={href}
        onClick={onClick}
        rel={target && target === '_blank' ? 'noopener noreferrer' : null}
        target={target}
      >
        <ImageWrapper className="standard-card__image-wrapper">
          { imageUrl ? (
            <Image
              aria-hidden="true"
              imageAlt={imageAlt}
              imageUrl={imageUrl}
            />
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
        <TitleWrapper displayFavoritesButton={displayFavoritesButton} className="standard-card__title-wrapper">
          <StyledTitle className={className} title={title} />
        </TitleWrapper>
      </a>
      { displayFavoritesButton ? (
        <StyledFavoriteButton
          className={className}
          fill={favoriteRibbonColor}
          role="button"
          isFavorited={isFavorited}
          objectId={objectId}
          siteKey={siteKeyFavorites}
          title={title}
        />
      ) : null }
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
            ctaText={ctaText}
            ctaUrl={ctaUrl}
            dataAttrs={ctaDataAttrs}
            onClick={onClick}
          />
        )
      }
    </StyledStandardCard>
  );
}

StandardCard.propTypes = {
  displayFavoritesButton: PropTypes.bool,
  className: PropTypes.string,
  contentType: PropTypes.string.isRequired,
  contentTypeFormatted: PropTypes.string,
  ctaDataAttrs: PropTypes.object,
  ctaText: PropTypes.string,
  ctaUrl: PropTypes.string,
  /** document data attributes */
  dataAttrs: PropTypes.object,
  displayCookbook: PropTypes.bool,
  displaySecondaryAttribution: PropTypes.bool,
  displayLockIcon: PropTypes.bool,
  favoriteRibbonColor: PropTypes.string,
  href: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  imageUrl: PropTypes.string,
  isFavorited: PropTypes.bool,
  objectId: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  secondaryAttribution: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  shopPrices: PropTypes.object,
  siteKey: PropTypes.oneOf(['atk', 'cco', 'cio', 'kids', 'school', 'shop']).isRequired,
  siteKeyFavorites: PropTypes.oneOf(['atk', 'cco', 'cio']),
  stickers: PropTypes.array,
  target: PropTypes.string,
  title: PropTypes.string.isRequired,
};

StandardCard.defaultProps = {
  className: null,
  contentTypeFormatted: null,
  ctaDataAttrs: null,
  ctaText: '',
  ctaUrl: '',
  dataAttrs: null,
  displayCookbook: false,
  displaySecondaryAttribution: false,
  displayFavoritesButton: false,
  displayLockIcon: false,
  favoriteRibbonColor: color.eclipse,
  imageAlt: '',
  imageUrl: '',
  isFavorited: false,
  onClick: null,
  secondaryAttribution: null,
  shopPrices: null,
  siteKeyFavorites: null,
  stickers: [],
  target: null,
};

export default React.memo(StandardCard, (prev, next) => (
  prev.objectId === next.objectId
  && prev.href === next.href
));
