import React, { MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import Badge from '../../../Badge/Badge';
import { getImageUrl } from '../../../../lib/cloudinary';
import {
  color,
  font,
  fontSize,
  letterSpacing,
  lineHeight,
  spacing,
  withThemes,
} from '../../../../styles';

import { lg, md } from '../../../../styles/breakpoints';
import { SiteKey } from '../../../../config/argTypes';

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

    ${md(css`
      align-items: center;
      display: flex;
    `)}
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

    ${md(css`
      flex: 0 0 34rem;
      width: 34rem;
    `)}

    ${lg(css`
      flex: 0 0 56rem;
      width: 56rem;
    `)}
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

    ${md(css`
      padding: 0;
      margin-left: ${spacing.sm};
      width: calc(50% - ${spacing.lg});
    `)}
  `,
};

const ProductInfo = styled.div.attrs({
  className: 'product__info',
})`${withThemes(ProductInfoTheme)}`;

const ProductInfoInner = styled.div`
  ${lg(css`
    width: 34.4rem;
  `)}
`;

/**
 * Product title
 */
const ProductTitleTheme = {
  default: css`
  font: 2.6rem/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.sm};
  `,
  dark: css`color: ${color.whiteSmoke}`,
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
    letter-spacing: ${letterSpacing.cta};
    height: 4rem;
    margin-top: ${spacing.xsm};
    text-align: center;
    text-transform: uppercase;
    transition: 0.2s background-color ease-in-out;
    white-space: nowrap;
    width: 100%;

    @media(hover: hover) {
      &:hover {
        background-color: ${color.rust};
      }
    }

    ${md(css`
      display: inline-block;
      margin: ${spacing.xsm} auto 0;
      width: 29rem;
    `)}

    ${lg(css`
      width: 34.4rem;
    `)}
  `,
};

const ProductCta = styled.a.attrs({
  className: 'product__cta',
})`${withThemes(ProductCtaTheme)}`;

interface SingleProductShowcaseAd {
  cloudinaryId: string;
  cta: string;
  ctaHref: string;
  ctaTarget?: string;
  onClick?: (() => void)| ((e: MouseEvent) => void);
  siteKey: SiteKey;
  subtitle: string;
  title: string;
}

const SingleProductShowcaseAd = ({
  cloudinaryId,
  cta,
  ctaHref,
  ctaTarget,
  onClick,
  siteKey,
  subtitle,
  title,
}: SingleProductShowcaseAd) => {
  console.log({ cloudinaryId,
    cta,
    ctaHref,
    ctaTarget,
    onClick,
    siteKey,
    subtitle,
    title });
  return (
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
          alt={title}
          crossOrigin="anonymous"
          decoding="async"
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
            onClick={onClick}
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
};

export default SingleProductShowcaseAd;
