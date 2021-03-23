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
  align-items: flex-start;
  display: flex;
  width: 100%;

  h3 {
    flex: 1 0 0;
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: 1.4rem;
  }

  img {
    display: block;
    height: clamp(6rem, 10rem, 9rem);
    width: 6rem;
    width: clamp(6rem, 10rem, 9rem);
  }

  ${breakpoint('md')`
    img {
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

const TitleImageContent = styled.div`
  flex: 1 0 0;

  ${breakpoint('xs', 'md')`
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

  ${breakpoint('xs', 'md')`
    span {
      display: block;
    }
  `}
`;

const parensRe = /(\([^)]+\))/;

const ReviewableSummaryCard = React.memo(({
  asin,
  buyNowLink,
  buyNowOnClick,
  buyNowOverrideAffiliateActive,
  buyNowOverrideAffiliateName,
  cloudinaryId,
  imageAltText,
  isShortList,
  name,
  price,
  recommendationStatus,
  winner,
  winnerHeader,
}) => {
  const priceMarkup = price?.replace(parensRe, '<span>$1</span>') ?? null;
  let buyNowIcon = asin ? 'Amazon' : null;
  if (buyNowOverrideAffiliateActive && buyNowOverrideAffiliateName) {
    buyNowIcon = buyNowOverrideAffiliateName;
  }
  const sortOfWinner = winner || isShortList;

  return (
    <ReviewableSummaryItemEl
      data-has-img={Boolean(cloudinaryId)}
    >
      <TitleImageWrapper>
        <TitleImageContent>
          {(sortOfWinner || recommendationStatus) && (
            <StickerWrapper winner={sortOfWinner}>
              <Sticker
                className="sticker"
                text={sortOfWinner ? (winnerHeader || 'Winner') : recommendationStatus}
                type="editorial"
              />
            </StickerWrapper>
          )}
          <h3>{name}</h3>
          {priceMarkup && (
            <ItemPrice
              dangerouslySetInnerHTML={{ __html: priceMarkup }}
            />
          )}
          {buyNowLink && (
            <AffiliateLink
              text="Buy Now"
              icon={buyNowIcon}
              onClick={buyNowOnClick}
              url={buyNowLink}
            />
          )}
        </TitleImageContent>
        {cloudinaryId && (
          <Image
            aspectRatio="1:1"
            imageAlt={imageAltText}
            imageUrl={getImageUrl(cloudinaryId, 'thumbnail')}
            lowQualityImageUrl={getImageUrl(cloudinaryId, 'thumbnailPlaceholder')}
          />
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
  imageAltText: '',
  isShortList: false,
  price: null,
  recommendationStatus: null,
  winnerHeader: null,
};

export default ReviewableSummaryCard;
