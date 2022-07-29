/* eslint-disable react/require-default-props */
/* eslint-disable camelcase */
import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css } from 'styled-components';

import AffiliateLink from '../shared/AffiliateLink/AffiliateLink';
import Image from '../shared/Image/Image';
import Sticker from '../shared/Sticker/Sticker';
import { getImageUrl } from '../../../lib/cloudinary';
import { color, font, fontSize, lineHeight, mixins, spacing, withThemes } from '../../../styles';

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
      cursor: pointer;
      font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
    }

    .reviewable-img {
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
  atk: css`
    h3 {
      color: ${color.eclipse};

      &:hover {
        color: ${color.mint};
      }
    }
  `,
  cco: css`
    ${mixins.ccoReviewSetBorder()}

    button[aria-expanded='true'] & {
      border-bottom: none;
    }

    h3 {
      color: ${color.black};

      &:hover {
        color: ${color.denim};
      }
    }
  `,
  cio: css`
    h3 {
      color: ${color.cork};

      &:hover {
        color: ${color.squirrel};
      }
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

  p {
    font: ${fontSize.lg}/${lineHeight.lg} ${font.mwr};
    margin-bottom: ${spacing.md};
  }

  .reviewable-img {
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
    > .reviewable-img {
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
})<{ winner: boolean} >`
  position: relative;
  z-index: 1;
  span {
    background-color: ${({ winner }) => color[winner ? 'darkTeal' : 'eclipse']};
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
  z-index: 1;

  @media(hover: hover) {
    &:hover {
      color: ${color.mint};
    }
  }
`;

type ReviewLinkProps = {
  children: React.ReactNode,
  className?: string,
  href?: string,
  hrefDataAttrs?: Record<string, unknown>,
}

const ReviewableLink = ({
  children,
  className,
  href,
  hrefDataAttrs = {},
}: ReviewLinkProps) => (
  <>
    { href ? (
      <ReviewableLinkEl
        className={className}
        href={href}
        {...hrefDataAttrs}
      >
        {children}
      </ReviewableLinkEl>
    ) : children }
  </>
);

export type ReviewableSummaryCardProps = {
  asin?: string,
  buyNowLink?: string,
  buyNowOnClick?: () => void,
  buyNowOverrideAffiliateActive: boolean,
  buyNowOverrideAffiliateName?: string,
  cloudinaryId?: string,
  dek?: string,
  displayPrice?: boolean,
  href?: string,
  hrefDataAttrs?: Record<string, unknown>,
  imageAltText?: string,
  isShortList: boolean,
  name: string,
  price?: string,
  recommendationStatus?: string,
  winner: boolean,
  winnerHeader?: string,
}

const ReviewableSummaryCard = React.memo(({
  asin,
  buyNowLink,
  buyNowOnClick,
  buyNowOverrideAffiliateActive,
  buyNowOverrideAffiliateName,
  cloudinaryId,
  dek = '',
  displayPrice = false,
  href,
  hrefDataAttrs = {},
  imageAltText = '',
  isShortList,
  name,
  price,
  recommendationStatus,
  winner,
  winnerHeader,
}: ReviewableSummaryCardProps) => {
  const isDiscontinued = price?.toLowerCase()?.includes('discontinued') ?? false;
  const priceMarkup = price?.replace(parensRe, '<span>$1</span>') ?? null;
  let buyNowIcon = asin ? 'Amazon' : null;
  if (buyNowOverrideAffiliateActive) {
    buyNowIcon = buyNowOverrideAffiliateName || null;
  }
  if (buyNowLink && buyNowLink.includes('amazon')) {
    buyNowIcon = 'Amazon';
  }
  const sortOfWinner = winner || isShortList;
  const stickerText: string = sortOfWinner !== undefined
    ? winnerHeader || 'Winner'
    : recommendationStatus || '';

  return (
    <ReviewableSummaryItemEl
      data-discontinued={isDiscontinued}
      data-has-img={Boolean(cloudinaryId)}
      data-buy-now={Boolean(buyNowLink)}
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
            {dek && <p>{dek}</p>}
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
                'aria-label': `Buy ${name} now`,
              }}
              text={displayPrice && price ? `Buy for ${price}` : 'Buy Now'}
              icon={buyNowIcon}
              name={name}
              onClick={buyNowOnClick}
              readerLabel={buyNowIcon || 'our affiliate partner'}
              url={buyNowLink}
            />
          )}
        </TitleImageContent>
        {cloudinaryId && (
          <a
            className="image-link"
            href={href}
            {...hrefDataAttrs}
          >
            <Image
              className="reviewable-img"
              imageAlt={imageAltText}
              imageUrl={getImageUrl(cloudinaryId, 'thumbnail')}
              lowQualityImageUrl={getImageUrl(
                cloudinaryId,
                'thumbnailPlaceholder',
              )}
            />
          </a>
        )}
      </TitleImageWrapper>
    </ReviewableSummaryItemEl>
  );
});

export default ReviewableSummaryCard;