import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import Badge from '../../Badge';
import { getImageUrl } from '../../../lib/cloudinary';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../styles';

/**
 * Wrapper
 */
const ProductTheme = {
  dark: css`
    background-color: ${color.mineShaft};
    position: relative;

    .badge {
      left: ${spacing.xsm};
      position: absolute;
      top: ${spacing.xsm};
    }

    ${breakpoint('md')`
      align-items: center;
      display: flex;
    `}
  `,
};

const Product = styled.article.attrs({
  className: 'product',
})`${withThemes(ProductTheme)}`;

/**
 * Picture
 */
const ProductPictureTheme = {
  dark: css`
    display: block;

    ${breakpoint('md')`
      flex: 0 0 34rem;
      width: 34rem;
    `}

    ${breakpoint('lg')`
      flex: 0 0 56rem;
      width: 56rem;
    `}
  `,
};

const ProductPicture = styled.picture.attrs({
  className: 'product__picture',
})`${withThemes(ProductPictureTheme)}`;


/**
 * Product info
 */
const ProductInfoTheme = {
  default: css`
    align-items: center;
    display: flex;
    flex: 1 0 auto;
    justify-content: center;
    padding: 2rem 2rem 3.8rem;

    ${breakpoint('md')`
      padding: 0;
      margin-left: ${spacing.sm};
      width: calc(50% - ${spacing.lg});
    `}
  `,
};
const ProductInfo = styled.div.attrs({
  className: 'product__info',
})`${withThemes(ProductInfoTheme)}`;

const ProductInfoInner = styled.div`
  ${breakpoint('lg')`
    width: 34.4rem;
  `}
`;

/**
 * Product title
 */
const ProductTitleTheme = {
  default: css`
    font: 2.6rem/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.sm};
  `,
  dark: css`
    color: ${color.white}
  `,
};
const ProductTitle = styled.h3.attrs({
  className: 'product__title',
})`${withThemes(ProductTitleTheme)}`;

/**
 * Product subtitle
 */
const ProductSubtitleTheme = {
  default: css`
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnr};
    margin-bottom: ${spacing.sm};
  `,
  dark: css`
    color: ${color.whiteSmoke}
  `,
};

const ProductSubtitle = styled.h4.attrs({
  className: 'product__subtitle',
})`${withThemes(ProductSubtitleTheme)}`;

/**
 * Product cta button
 */
const ProductCtaTheme = {
  default: css`
    color: ${color.white};
    background-color: ${color.tomato};
    display: block;
    flex: 1 0 100%;
    font: ${fontSize.lg}/4rem ${font.pnb};
    letter-spacing: ${letterSpacing.xlg};
    height: 4rem;
    margin-top: ${spacing.xsm};
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${color.rust};
      }
    }

    ${breakpoint('md')`
      display: inline-block;
      margin: ${spacing.xsm} auto 0;
      width: 29rem;
    `}

    ${breakpoint('lg')`
      width: 34.4rem;
    `}
  `,
};

const ProductCta = styled.a.attrs({
  className: 'product__cta',
})`${withThemes(ProductCtaTheme)}`;

const SingleProductAd = ({
  cloudinaryId,
  cta,
  ctaHref,
  ctaTarget,
  siteKey,
  subtitle,
  title,
}) => (
  <Product>
    <ProductPicture>
      <source
        media="(min-width: 1024px)"
        srcSet={getImageUrl(
          cloudinaryId,
          'showcaseFreeTrialDesktop',
        )}
      />
      <source
        media="(min-width: 768px)"
        srcSet={getImageUrl(
          cloudinaryId,
          'showcaseFreeTrialTablet',
        )}
      />
      <img
        alt=" "
        data-testid="product-img"
        src={getImageUrl(
          cloudinaryId,
          'showcaseFreeTrialMobile',
        )}
      />
    </ProductPicture>
    <ProductInfo>
      <ProductInfoInner>
        <ProductTitle>
          {title}
        </ProductTitle>
        <ProductSubtitle>
          {subtitle}
        </ProductSubtitle>
        <ProductCta
          href={ctaHref}
          target={ctaTarget}
          title={cta}
        >
          {cta}
        </ProductCta>
      </ProductInfoInner>
    </ProductInfo>
    <Badge
      type={siteKey}
    />
  </Product>
);

SingleProductAd.propTypes = {
  cloudinaryId: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  ctaTarget: PropTypes.string,
  siteKey: PropTypes.oneOf(['atk', 'cio', 'cco', 'kids', 'school', 'shop']).isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

SingleProductAd.defaultProps = {
  ctaTarget: null,
};

export default SingleProductAd;
