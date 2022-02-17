import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing, withThemes } from '../../../styles';
import { cssThemedColor } from '../../../styles/mixins';

export type HeroImages = {
  mobile: string,
  tablet: string,
  largeTablet: string,
  desktop: string,
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.2rem;
  margin: 2.5rem 3.3rem 3.2rem auto;
  text-align: right;

  ${breakpoint('md')`
    margin: 0 auto 1.6rem;
    text-align: center;
  `}

  z-index: 1;
`;

const CtaTheme = {
  default: css`
    align-items: center;
    color: ${color.white};
    display: flex;
    font: ${fontSize.lg}/2rem ${font.pnb};
    height: 4rem;
    justify-content: center;
    letter-spacing: ${letterSpacing.cta};
    margin: 0 auto;
    width: 34rem;

    span {
      font-size: 3.1rem;
      margin: 0.15rem 0 0 0.8rem;
    }

    ${breakpoint('md')`
      width: 27.2rem;
    `}

    z-index: 1;
  `,
  atk: css`
    background-color: ${color.coldPool};

    &:hover {
    background-color: ${color.darkColdPool};
    }
  `,
  cio: css`
    background-color: ${color.squirrel};

    &:hover {
    background-color: ${color.cork};
    }
  `,
  cco: css`
    background-color: ${color.denim};

    &:hover {
    background-color: ${color.arapawa};
    }
  `,
};
const Cta = styled.a`${withThemes(CtaTheme)}`;

const Headline = styled.p`
  font: ${fontSize.sm}/2.3rem ${font.mwr};
  font-style: italic;
  margin-bottom: 0.5rem;

  ${breakpoint('md')`
    font-size: 1.9rem;
    line-height: 2rem;
  `}
  ${cssThemedColor}
`;

const SaleCopy = styled.h2`
  font: 2.8rem/2.2rem ${font.pnb};

  ${breakpoint('md')`
    font-size: 3.2rem;
    line-height: 3.3rem;
  `}
  ${cssThemedColor}
`;

const ImageBgWrapperTheme = {
  default: css`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 19.2rem;
    overflow: hidden;
    justify-content: center;
    position: relative;
    width: 100%;
  
    ${breakpoint('md')`
      height: 15rem;
    `}
  `,
  atk: css`
    background-color: ${color.frost};
  `,
  cio: css`
    background-color: ${color.ivory};
  `,
  cco: css`
    background-color: ${color.aliceBlue};
  `,
};
const ImageBgWrapper = styled.div`${withThemes(ImageBgWrapperTheme)}`;

const Img = styled.img`
  height: 100%;
  left: 50%;
  position: absolute;
  top: 47%;
  transform: translate(-50%, -50%);

  ${breakpoint('md')`
    top: 50%;
  `}
`;

export type DisplayBeltAdProps = {
  /** cloudinary strings for background images */
  backgroundImages: HeroImages;
  /** cta button copy */
  ctaCopy?: string;
  /** cta link */
  ctaLink?: string;
  /** top headline copy */
  headline?: string;
  /** Onclick fires mixpanel accepted event */
  onClick: () => void;
  /** sale copy  */
  saleCopy?: string
};

const DisplayBeltAd = ({
  backgroundImages,
  ctaCopy = 'SAVE NOW',
  ctaLink = 'https://shop.americastestkitchen.com',
  headline = 'Discover favorite cookbooks',
  onClick,
  saleCopy = 'Up to 70% off',
}: DisplayBeltAdProps) => (
  <ImageBgWrapper>
    <picture>
      <source media="(min-width: 1136px)" srcSet={cloudinaryInstance.url(backgroundImages.desktop, { ...baseImageConfig, height: 150 })} />
      <source media="(min-width: 1024px)" srcSet={cloudinaryInstance.url(backgroundImages.largeTablet, { ...baseImageConfig, height: 150 })} />
      <source media="(min-width: 768px)" srcSet={cloudinaryInstance.url(backgroundImages.tablet, { ...baseImageConfig, height: 150 })} />
      <Img
        src={cloudinaryInstance.url(backgroundImages.mobile, { ...baseImageConfig, height: 130 })}
        alt=""
        crossOrigin="anonymous"
        decoding="async"
      />
    </picture>
    <Content>
      <Headline>{headline}</Headline>
      <SaleCopy>{saleCopy}</SaleCopy>
    </Content>
    <Cta onClick={onClick} href={ctaLink}>{ctaCopy} ▸</Cta>
  </ImageBgWrapper>
);

export default DisplayBeltAd;
