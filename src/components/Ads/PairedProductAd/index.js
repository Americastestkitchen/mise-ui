import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

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
const PairedProductWrapperTheme = {
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const PairedProductWrapper = styled.div.attrs({
  className: 'paired-product',
})`${withThemes(PairedProductWrapperTheme)}`;

/**
 * Wrapper inner
 */
const PairedProductInnerWrapperTheme = {
  default: css`
    ${breakpoint('md')`
      align-items: flex-end;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    `}

    ${breakpoint('lg')`
      align-items: center;
      flex-wrap: nowrap;
      margin: 0 auto;
      max-width: 113.6rem;
    `}
  `,
};

const PairedProductInnerWrapper = styled.div.attrs({
  className: 'paired-product',
})`${withThemes(PairedProductInnerWrapperTheme)}`;

/**
 * Main title
 */
const PairedProductMainTitleTheme = {
  default: css`
    font: ${fontSize.xxl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};
    text-align: center;

    ${breakpoint('md')`
      flex: 1 0 100%;
      width: 100%;
    `}

    ${breakpoint('lg')`
      flex: 0 0 19.2rem;
      text-align: left;
    `}
  `,
  dark: css`
    color: ${color.white}
  `,
};

const PairedProductMainTitle = styled.h3.attrs({
  className: 'paired-product__title',
})`${withThemes(PairedProductMainTitleTheme)}`;

/**
 * Individual Product
 */
const PairedProductTheme = {
  default: css`
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: ${spacing.sm};
    position: relative;

    ${breakpoint('md')`
      flex: 0 0 calc(50% - 1.8rem);
      width: calc(50% - 1.8rem);
    `}

    ${breakpoint('lg')`
      flex: 1 0 calc(50% - (19.2rem / 2) - 2rem);
      height: 16.2rem;
      margin-bottom: 0;
      padding-left: 17rem;
      width: calc(50% - (19.2rem / 2) - 2rem);

      &:last-child {
        margin-left: 4rem;
      }
    `}
  `,
};

const PairedProduct = styled.div.attrs({
  className: 'paired-product__product',
})`${withThemes(PairedProductTheme)}`;

/**
 * Product image
 */
const PairedProductImageTheme = {
  default: css`
    flex: 0 0 50%;
    max-width: 17rem;
    width: 50%;

    ${breakpoint('lg')`
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    `}
  `,
};

const PairedProductImage = styled.img.attrs({
  className: 'paired-product__product-image',
})`${withThemes(PairedProductImageTheme)}`;

/**
 * Product info
 */
const PairedProductInfoTheme = {
  default: css`
    flex: 0 0 50%;
    margin-top: -${spacing.md};
    width: 50%;

    ${breakpoint('lg')`
      flex: 1 0 auto;
      margin-top: 0;
      text-align: center;
      width: 100%;
    `}
  `,
};
const PairedProductInfo = styled.div.attrs({
  className: 'paired-product__product-info',
})`${withThemes(PairedProductInfoTheme)}`;

/**
 * Product title
 */
const PairedProductTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};

    ${breakpoint('lg')`
      font: 2.6rem/${lineHeight.sm} ${font.pnb};

      span {
        white-space: nowrap;
      }
    `}
  `,
  dark: css`
    color: ${color.white}
  `,
};
const PairedProductTitle = styled.div.attrs({
  className: 'paired-product__product-title',
})`${withThemes(PairedProductTitleTheme)}`;

/**
 * Product subtitle
 */
const PairedProductSubtitleTheme = {
  default: css`
    font: ${fontSize.sm}/${lineHeight.lg} ${font.pnr};
    letter-spacing: 2.2px
  `,
  dark: css`
    color: ${color.white}
  `,
};

const PairedProductSubtitle = styled.div.attrs({
  className: 'paired-product__product-subtitle',
})`${withThemes(PairedProductSubtitleTheme)}`;

/**
 * Product cta button
 */
const PairedProductCtaTheme = {
  default: css`
    color: ${color.white};
    background-color: ${color.wasabi};
    display: block;
    flex: 1 0 100%;
    font: ${fontSize.lg}/4rem ${font.pnb};
    letter-spacing: ${letterSpacing.cta};
    height: 4rem;
    margin-top: ${spacing.xsm};
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${color.olive};
      }
    }

    ${breakpoint('lg')`
      display: inline-block;
      flex: 0 0 24rem;
      margin: ${spacing.xsm} auto 0;
      width: 24rem;
    `}
  `,
};

const PairedProductCta = styled.a.attrs({
  className: 'paired-product__cta',
})`${withThemes(PairedProductCtaTheme)}`;

const PairedProducts = ({ title, products }) => (
  <PairedProductWrapper>
    <PairedProductInnerWrapper>
      <PairedProductMainTitle>
        {title}
      </PairedProductMainTitle>
      {products.map(({
        cloudinaryId,
        cta,
        ctaHref,
        ctaTarget,
        subtitle,
        title,
      }, idx) => (
        <PairedProduct
          key={ctaHref}
        >
          <PairedProductImage
            alt=""
            data-testid={`paired-img-${idx}`}
            src={getImageUrl(
              cloudinaryId,
              'pairedProduct',
            )}
          />
          <PairedProductInfo>
            <PairedProductSubtitle>
              {subtitle}
            </PairedProductSubtitle>
            <PairedProductTitle
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </PairedProductInfo>
          <PairedProductCta
            href={ctaHref}
            target={ctaTarget}
            title={cta}
          >
            {cta}
          </PairedProductCta>
        </PairedProduct>
      ))}
    </PairedProductInnerWrapper>
  </PairedProductWrapper>
);

PairedProducts.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      cloudinaryId: PropTypes.string.isRequired,
      cta: PropTypes.string.isRequired,
      ctaHref: PropTypes.string.isRequired,
      ctaTarget: PropTypes.string,
      subtitle: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PairedProducts;
