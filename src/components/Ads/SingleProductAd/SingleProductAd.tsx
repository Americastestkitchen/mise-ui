import React from 'react';
import styled, { css } from 'styled-components';
import { md, lg, xlg, untilMd } from '../../../styles/breakpoints';
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

const SingleProductWrapperTheme = {
  default: css`
    ${xlg(css`
      height: 16.2rem;
      margin: 0 auto;
    `)}
  `,
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const SingleProductWrapper = styled.div.attrs({
  className: 'single-product-ad',
})`${withThemes(SingleProductWrapperTheme)}`;

const SingleProductInner = styled.div.attrs({
  className: 'single-product-ad__inner',
})`
  ${md(css`
    align-items: center;
    display: flex;
    height: 18rem;
    justify-content: space-between;
  `)}

  ${lg(css`
    margin: 0 auto;
    max-width: 113.6rem;
  `)}
`;

const SingleProductPicture = styled.picture.attrs({
  className: 'single-product-ad__picture',
})`
  display: block;

  img {
    display: block;
  }

  ${untilMd(css`
    left: 50%;
    max-width: 130%;
    position: relative;
    transform: translateX(-50%);
    width: 130%;
  `)}

  ${md(css`
    flex: 1 0 calc(100% - 27.2rem);
    max-width: 60rem;
    width: calc(100% - 27.2rem);

    img {
      max-width: 100%;
    }
  `)}
`;

const SingleProductContentTheme = {
  default: css`
    padding: ${spacing.sm} 2rem;

    ${md(css`
      padding: ${spacing.sm};
    `)}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const SingleProductContent = styled.div.attrs({
  className: 'single-product-ad__content',
})`${withThemes(SingleProductContentTheme)}`;

const SingleProductContentInner = styled.div``;

const SingleProductTitle = styled.div.attrs({
  className: 'single-product-ad__title',
})`
  font: 2.6rem/${lineHeight.sm} ${font.pnb};
  margin-bottom: ${spacing.sm};
  text-align: center;

  ${md(css`
    text-align: left;
  `)}
`;

const SingleProductCta = styled.a.attrs({
  className: 'single-product-ad__cta',
})`
  background-color: ${color.coldPool};
  color: ${color.white};
  display: block;
  font: ${fontSize.lg}/4rem ${font.pnb};
  letter-spacing: ${letterSpacing.cta};
  height: 4rem;
  text-align: center;
  text-transform: uppercase;
  transition: 0.2s background-color ease-in-out;
  width: 100%;

  @media(hover: hover) {
    &:hover {
      background-color: ${color.darkColdPool};
    }
  }

  ${md(css`
    width: 27.2rem;
  `)}

  ${lg(css`
    width: 34.4rem;
  `)}
`;

export type SingleProductAdProps = {
  cloudinaryId: string;
  cta: string;
  ctaHref: string;
  ctaTarget?: string;
  onClick?: () => void;
  title: string;
}

const SingleProductAd = ({
  cloudinaryId,
  cta,
  ctaHref,
  ctaTarget,
  onClick,
  title,
}: SingleProductAdProps) => (
  <SingleProductWrapper>
    <SingleProductInner>
      <SingleProductContent>
        <SingleProductContentInner>
          <SingleProductTitle>{title}</SingleProductTitle>
          <SingleProductCta
            href={ctaHref}
            onClick={onClick}
            target={ctaTarget}
            title={cta}
          >
            {cta}
          </SingleProductCta>
        </SingleProductContentInner>
      </SingleProductContent>
      <SingleProductPicture>
        <source
          media="(min-width: 1024px)"
          srcSet={getImageUrl(
            cloudinaryId,
            'singleProductDesktop',
          )}
        />
        <source
          media="(min-width: 768px)"
          srcSet={getImageUrl(
            cloudinaryId,
            'singleProductTablet',
          )}
        />
        <img
          alt=""
          crossOrigin="anonymous"
          decoding="async"
          data-testid="single-product-ad-img"
          src={getImageUrl(
            cloudinaryId,
            'singleProductMobile',
          )}
        />
      </SingleProductPicture>
    </SingleProductInner>
  </SingleProductWrapper>
);

export default SingleProductAd;
