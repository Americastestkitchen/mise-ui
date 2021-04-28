/* eslint-disable camelcase */
import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import AffiliateLink from '../shared/AffiliateLink';
import Image from '../shared/Image';
import Sticker from '../shared/Sticker';
import { getImageUrl } from '../../../lib/cloudinary';
import { color, font, fontSize, lineHeight, withThemes } from '../../../styles';

const ReviewableSummaryItemTheme = {
  default: css`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    background-color: ${color.white};
    padding: 1.6rem;
    position: relative;
    width: 100%;

    &[data-has-img="true"] {
      min-height: 14rem;
    }

    h3 {
      font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
    }

    img {
      float: right;
      margin-left: 1rem;
      width: 30%;
    }

    .sticker:first-of-type {
      margin-left: 0;
    }

    ${breakpoint('md')`
      &[data-has-img="true"] {
        min-height: 17rem;
        padding-right: 17.6rem;
      }

      &:only-child {
        flex-basis: 100%;
      }
    `}

    @media print {
      justify-content: flex-start;
      padding: 0;
      width: 100%;
    }
  `,
};

const ReviewableSummaryItemEl = styled.div.attrs({
  className: 'reviewable-summary-card',
})`${withThemes(ReviewableSummaryItemTheme)}`;

const TitleImageWrapper = styled.div.attrs({
  className: 'reviewable-title-image-wrapper',
})`
  align-items: stretch;
  display: flex;
  flex: 1 0 auto;
  width: 100%;

  h3 {
    font: ${fontSize.xl} / ${lineHeight.sm} ${font.pnb};
    margin-bottom: 1.4rem;
  }

  img {
    display: block;
    height: clamp(6rem, 10rem, 9rem);
    width: 6rem;
    width: clamp(6rem, 10rem, 9rem);
  }

  ${breakpoint('xs', 'md')`
    h3 {
      flex: 1 0 0;
    }
  `}

  ${breakpoint('md')`
    > .image-link,
    > img {
      position: absolute;
      height: 15rem;
      right: 1rem;
      top: 1rem;
      width: 15rem;
    }
  `}

  ${breakpoint('xlg')`
    @media print {
      width: 100%;

      > div {
        width: calc(100% - 19rem);
      }
    }
  `}
`;

const TitleImageContent = styled.div.attrs({
  className: 'reviewable-title',
})`
  display: flex;
  flex-direction: column;

  .partner-link {
    margin-top: auto;
  }

  &[data-buy-now='true'] {
    align-items: flex-start;
    flex: 1 0 0;
  }

  ${breakpoint('xs', 'md')`
    flex: 1 0 0;
    max-width: calc(100% - 10rem);
  `}
`;

const StickerWrapper = styled.div.attrs({
  className: 'reviewable-sticker-wrapper',
})`
  position: relative;
  z-index: 1;
  span {
    background-color: ${props => color[props.winner ? 'darkTeal' : 'eclipse']};
  }
`;

const ItemPrice = styled.div`
  font: ${fontSize.md}/${lineHeight.md} ${font.pnr};

  &:not(:last-child) {
    margin-bottom: 1.4rem;
  }

  [data-discontinued="true"] & {
    font-family: ${font.pnb};
  }

  ${breakpoint('xs', 'md')`
    span {
      display: block;
    }
  `}
`;

const parensRe = /(\([^)]+\))/;

const ReviewableLinkEl = styled.a`
  @media(hover: hover) {
    &:hover {
      color: ${color.mint};
    }
  }
`;

const ReviewableLink = ({
  children,
  className,
  href,
  hrefDataAttrs,
}) => (href ? (
  <ReviewableLinkEl
    className={className}
    href={href}
    {...hrefDataAttrs}
  >
    {children}
  </ReviewableLinkEl>
) : children);

ReviewableLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
  hrefDataAttrs: PropTypes.object,
};

ReviewableLink.defaultProps = {
  className: null,
  href: null,
  hrefDataAttrs: {},
};

const ReviewableSummaryCard = React.memo(({
  asin,
  buyNowLink,
  buyNowOnClick,
  buyNowOverrideAffiliateActive,
  buyNowOverrideAffiliateName,
  cloudinaryId,
  displayPrice,
  href,
  hrefDataAttrs,
  imageAltText,
  isShortList,
  name,
  price,
  recommendationStatus,
  winner,
  winnerHeader,
}) => {
  const isDiscontinued = price?.toLowerCase()?.includes('discontinued') ?? false;
  const priceMarkup = price?.replace(parensRe, '<span>$1</span>') ?? null;
  let buyNowIcon = asin ? 'Amazon' : null;
  if (buyNowOverrideAffiliateActive && buyNowOverrideAffiliateName) {
    buyNowIcon = buyNowOverrideAffiliateName;
  }
  const sortOfWinner = winner || isShortList;
  const stickerText = sortOfWinner
    ? winnerHeader || 'Winner'
    : recommendationStatus;

  return (
    <ReviewableSummaryItemEl
      data-discontinued={isDiscontinued}
      data-has-img={Boolean(cloudinaryId)}
    >
      <TitleImageWrapper>
        <TitleImageContent data-buy-now={Boolean(buyNowLink)}>
          {(sortOfWinner || recommendationStatus) && (
            <StickerWrapper winner={sortOfWinner}>
              <Sticker
                className="sticker"
                text={stickerText}
                type="editorial"
              />
            </StickerWrapper>
          )}
          <ReviewableLink href={href} hrefDataAttrs={hrefDataAttrs}>
            <h3>{name}</h3>
          </ReviewableLink>
          {!buyNowLink && priceMarkup && (
            <ItemPrice dangerouslySetInnerHTML={{ __html: priceMarkup }} />
          )}
          {buyNowLink && (
            <AffiliateLink
              dataAttrs={{
                'data-asin': asin || '',
                'data-price': price || '',
                'data-recommendation-status': recommendationStatus,
                'data-reviewable': name,
              }}
              text={displayPrice && price ? `Buy for ${price}` : 'Buy Now'}
              icon={buyNowIcon}
              name={name}
              onClick={buyNowOnClick}
              url={buyNowLink}
            />
          )}
        </TitleImageContent>
        {cloudinaryId && (
          <ReviewableLink
            className="image-link"
            href={href}
            hrefDataAttrs={hrefDataAttrs}
          >
            <Image
              aspectRatio="1:1"
              imageAlt={imageAltText}
              imageUrl={getImageUrl(cloudinaryId, 'thumbnail')}
              lowQualityImageUrl={getImageUrl(
                cloudinaryId,
                'thumbnailPlaceholder',
              )}
            />
          </ReviewableLink>
        )}
      </TitleImageWrapper>
    </ReviewableSummaryItemEl>
  );
});

ReviewableSummaryCard.propTypes = {
  asin: PropTypes.string,
  buyNowLink: PropTypes.string,
  buyNowOnClick: PropTypes.func,
  buyNowOverrideAffiliateActive: PropTypes.bool.isRequired,
  buyNowOverrideAffiliateName: PropTypes.string,
  cloudinaryId: PropTypes.string,
  displayPrice: PropTypes.bool,
  href: PropTypes.string,
  hrefDataAttrs: PropTypes.object,
  imageAltText: PropTypes.string,
  isShortList: PropTypes.bool,
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  recommendationStatus: PropTypes.string,
  winner: PropTypes.bool.isRequired,
  winnerHeader: PropTypes.string,
};

ReviewableSummaryCard.defaultProps = {
  asin: null,
  buyNowLink: null,
  buyNowOnClick: null,
  buyNowOverrideAffiliateName: null,
  cloudinaryId: null,
  displayPrice: false,
  href: null,
  hrefDataAttrs: {},
  imageAltText: '',
  isShortList: false,
  price: null,
  recommendationStatus: null,
  winnerHeader: null,
};

export default ReviewableSummaryCard;
