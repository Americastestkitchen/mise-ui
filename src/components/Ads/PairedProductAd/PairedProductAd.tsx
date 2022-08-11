import React from 'react';
import styled, { css } from 'styled-components';
import { md, lg } from '../../../styles/breakpoints';
import { getImageUrl } from '../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing, lineHeight, spacing, withThemes } from '../../../styles';

const PairedProductWrapperTheme = {
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const PairedProductWrapper = styled.div.attrs({
  className: 'paired-product',
})`${withThemes(PairedProductWrapperTheme)}`;

const PairedProductInnerWrapper = styled.div.attrs({
  className: 'paired-product',
})`
  ${md(css`
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `)}

  ${lg(css`
    align-items: center;
    flex-wrap: nowrap;
    margin: 0 auto;
    max-width: 113.6rem;
  `)}
`;

const PairedProductMainTitleTheme = {
  default: css`
    font: ${fontSize.xxl}/${lineHeight.sm} ${font.pnb};
    margin-bottom: ${spacing.xsm};
    text-align: center;    

    ${md(css`
      flex: 1 0 100%;
      width: 100%;
    `)}

    ${lg(css`
      flex: 0 0 19.2rem;
      text-align: left;
    `)}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const PairedProductMainTitle = styled.h3.attrs({
  className: 'paired-product__title',
})`${withThemes(PairedProductMainTitleTheme)}`;

const PairedProduct = styled.div.attrs({
  className: 'paired-product__product',
})`
  align-content: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: ${spacing.sm};
  position: relative;

  ${md(css`
    flex: 0 0 calc(50% - 1.8rem);
    width: calc(50% - 1.8rem);
  `)}

  ${lg(css`
    flex: 1 0 calc(50% - (19.2rem / 2) - 2rem);
    height: 16.2rem;
    margin-bottom: 0;
    padding-left: 17rem;
    width: calc(50% - (19.2rem / 2) - 2rem);
  
    &:last-child {
      margin-left: 4rem;
    }
  `)}
`;

const PairedProductImage = styled.img.attrs({
  className: 'paired-product__product-image',
})`
  flex: 0 0 50%;
  max-width: 17rem;
  width: 50%;

  ${lg(css`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  `)}
`;

const PairedProductInfo = styled.div.attrs({
  className: 'paired-product__product-info',
})`
  flex: 0 0 50%;
  margin-top: -${spacing.md};
  width: 50%;

  ${lg(css`
    flex: 1 0 auto;
    margin-top: 0;
    text-align: center;
    width: 100%;
  `)}
`;

const PairedProductTitleTheme = {
  default: css`
    font: ${fontSize.xl}/${lineHeight.sm} ${font.pnb};

    ${lg(css`
      font: 2.6rem/${lineHeight.sm} ${font.pnb};
  
      span {
        white-space: nowrap;
      }
    `)}
  `,
  dark: css`
    color: ${color.white};
  `,
};

const PairedProductTitle = styled.div.attrs({
  className: 'paired-product__product-title',
})`${withThemes(PairedProductTitleTheme)}`;

const PairedProductSubtitleTheme = {
  default: css`
    font: ${fontSize.sm}/${lineHeight.lg} ${font.pnr};
    letter-spacing: 2.2px
  `,
  dark: css`
    color: ${color.white};
  `,
};

const PairedProductSubtitle = styled.div.attrs({
  className: 'paired-product__product-subtitle',
})`${withThemes(PairedProductSubtitleTheme)}`;

const PairedProductCta = styled.a.attrs({
  className: 'paired-product__cta',
})`
  color: ${color.white};
  background-color: ${color.frog};
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
      background-color: ${color.darkFrog};
    }
  }
  
  ${lg(css`
    display: inline-block;
    flex: 0 0 24rem;
    margin: ${spacing.xsm} auto 0;
    width: 24rem;
  `)}
`;

type product = {
  cloudinaryId: string;
  cta: string;
  ctaHref: string;
  ctaTarget?: string;
  subtitle: string;
  title: string;
}

export type PairedProductProps = {
  onClick?: () => void;
  products: product[];
  title: string;
}

const PairedProducts = ({
  onClick = () => {},
  products,
  title,
}: PairedProductProps) => (
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
        <PairedProduct key={ctaHref}>
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
            <PairedProductCta
              href={ctaHref}
              onClick={onClick}
              target={ctaTarget}
              title={cta}
            >
              {cta}
            </PairedProductCta>
          </PairedProductInfo>
        </PairedProduct>
      ))}
    </PairedProductInnerWrapper>
  </PairedProductWrapper>
);

export default PairedProducts;
