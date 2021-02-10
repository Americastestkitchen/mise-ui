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
    justify-content: center;
    padding: 1.6rem;
    position: relative;
    min-height: 14rem;

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
      flex: 0 0 calc(50% - 1.6rem);
      padding-right: 19.6rem;
      min-height: 20rem;

      &:only-child {
        flex-basis: 100%;
      }
    `}
  `,
};

const ReviewableSummaryItemEl = styled.div.attrs({
  className: 'reviewable-summary-card',
})`${withThemes(ReviewableSummaryItemTheme)}`;

const TitleImageWrapper = styled.div`
  align-items: flex-start;
  display: flex;

  h3 {
    flex: 1 0 0;
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: 1.4rem;
  }

  img {
    display: block;
    width: 6rem;
    width: clamp(6rem, 10rem, 9rem);
  }

  ${breakpoint('md')`
    img {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 18rem;
    }
  `}
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
  buyNowOverrideAffiliateActive,
  buyNowOverrideAffiliateName,
  cloudinaryId,
  imageAltText,
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

  return (
    <ReviewableSummaryItemEl>
      <TitleImageWrapper>
        <div>
          {(winner || recommendationStatus) && (
            <div>
              {winner && (
                <Sticker
                  className="sticker"
                  text={winnerHeader || 'Winner'}
                  type="editorial"
                />
              )}
              {!winner && recommendationStatus && (
                <Sticker
                  className="sticker"
                  text={recommendationStatus}
                  type="editorial"
                />
              )}
            </div>
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
              url={buyNowLink}
            />
          )}
        </div>
        {cloudinaryId && (
          <Image
            aspectRatio="1:1"
            imageAlt={imageAltText}
            imageUrl={getImageUrl(cloudinaryId, 'thumbnail')}
          />
        )}
      </TitleImageWrapper>
    </ReviewableSummaryItemEl>
  );
});

ReviewableSummaryCard.propTypes = {
  asin: PropTypes.string,
  buyNowLink: PropTypes.string,
  buyNowOverrideAffiliateActive: PropTypes.bool.isRequired,
  buyNowOverrideAffiliateName: PropTypes.string,
  cloudinaryId: PropTypes.string,
  imageAltText: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.string,
  recommendationStatus: PropTypes.string,
  winner: PropTypes.bool.isRequired,
  winnerHeader: PropTypes.string,
};

ReviewableSummaryCard.defaultProps = {
  asin: null,
  buyNowLink: null,
  buyNowOverrideAffiliateName: null,
  cloudinaryId: null,
  imageAltText: '',
  price: null,
  recommendationStatus: null,
  winnerHeader: null,
};

export default ReviewableSummaryCard;
