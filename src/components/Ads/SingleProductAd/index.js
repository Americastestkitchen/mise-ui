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

const SingleProductWrapperTheme = {
  default: css`
    ${breakpoint('xlg')`
      height: 16.2rem;
      margin: 0 auto;
    `}
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
  ${breakpoint('md')`
    align-items: center;
    display: flex;
    height: 18rem;
    justify-content: space-between;
  `}

  ${breakpoint('lg')`
    margin: 0 auto;
    max-width: 113.6rem;
  `}
`;

const SingleProductPictureTheme = {
  default: css`
    display: block;

    img {
      display: block;
    }

    ${breakpoint('xs', 'md')`
      left: 50%;
      max-width: 130%;
      position: relative;
      transform: translateX(-50%);
      width: 130%;
    `}

    ${breakpoint('md')`
      flex: 1 0 calc(100% - 27.2rem);
      max-width: 60rem;
      width: calc(100% - 27.2rem);

      img {
        max-width: 100%;
      }
    `}
  `,
};

const SingleProductPicture = styled.picture.attrs({
  className: 'single-product-ad__picture',
})`${withThemes(SingleProductPictureTheme)}`;

const SingleProductContentTheme = {
  default: css`
    padding: ${spacing.sm} 2rem;

    ${breakpoint('md')`
      padding: ${spacing.sm};
    `}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const SingleProductContent = styled.div.attrs({
  className: 'single-product-ad__content',
})`${withThemes(SingleProductContentTheme)}`;

const SingleProductContentInner = styled.div``;

const SingleProductTitleTheme = {
  default: css`
    font: 2.6rem/${lineHeight.sm} ${font.pnb} 700;
    margin-bottom: ${spacing.sm};
    text-align: center;

    ${breakpoint('md')`
      text-align: left;
    `}
  `,
};

const SingleProductTitle = styled.div.attrs({
  className: 'single-product-ad__title',
})`${withThemes(SingleProductTitleTheme)}`;

const SingleProductCtaTheme = {
  default: css`
    background-color: ${color.coldPool};
    color: ${color.white};
    display: block;
    font: ${fontSize.lg}/4rem ${font.pnb} 700;
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

    ${breakpoint('md')`
      width: 27.2rem;
    `}

    ${breakpoint('lg')`
      width: 34.4rem;
    `}
  `,
};

const SingleProductCta = styled.a.attrs({
  className: 'single-product-ad__cta',
})`${withThemes(SingleProductCtaTheme)}`;

const SingleProductAd = ({
  alt,
  cloudinaryId,
  cta,
  ctaHref,
  ctaTarget,
  onClick,
  title,
}) => (
  <SingleProductWrapper>
    <SingleProductInner>
      <SingleProductContent>
        <SingleProductContentInner>
          <SingleProductTitle>
            {title}
          </SingleProductTitle>
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
          alt={alt}
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

SingleProductAd.propTypes = {
  alt: PropTypes.string,
  cloudinaryId: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  ctaHref: PropTypes.string.isRequired,
  ctaTarget: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

SingleProductAd.defaultProps = {
  alt: '',
  ctaTarget: null,
  onClick: null,
};

export default SingleProductAd;
