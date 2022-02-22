import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing, withThemes } from '../../../styles';
import { cssThemedColor } from '../../../styles/mixins';
import * as Icons from '../../DesignTokens/Icon';
import useMedia from '../../hooks/useMedia';

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

export type DisplayBeltAdProps = {
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

const ImageLeft = styled.img`
  position: absolute;
  height: 100%;
  left: 0;
`;

const ImageRight = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
`;

const OffcenterImage = styled.img`
  position: absolute;
  height: 100%;
  transform: translateX(-74px);
`;

const exampleImages = {
  desktop: '2022 Review Landing/Belt-placeholder-AKO-Desktop-1280x150_2x.png',
  largeTablet: '2022 Review Landing/Belt-placeholder-AKO-Landscape_Tablet-1024x150_2x.png',
  mobile: '2022 Review Landing/Belt-placeholder-AKO-Mobile-372x192_2x.png',
  tablet: '2022 Review Landing/Belt-placeholder-AKO-Tablet-768x150_2x.png',
};

const shared = { alt: '', crossOrigin: 'anonymous', decoding: 'async' } as const;

function DisplayBeltImage() {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px)');
  const isLargeTablet = useMedia('(min-width: 1024px)');
  const isDesktop = useMedia('(min-width: 1136px)');

  if (isDesktop) {
    return (
      <OffcenterImage
        src={cloudinaryInstance.url(exampleImages.desktop, {
          ...baseImageConfig,
          height: 150,
          width: 1136,
        })}
        {...shared}
      />
    );
  }

  if (isLargeTablet) {
    return (
      <>
        <ImageLeft
          src={cloudinaryInstance.url(exampleImages.largeTablet, {
            ...baseImageConfig,
            height: 150,
            width: 350,
            gravity: 'west',
          })}
          {...shared}
        />
        <ImageRight
          src={cloudinaryInstance.url(exampleImages.largeTablet, {
            ...baseImageConfig,
            height: 150,
            width: 350,
            gravity: 'east',
          })}
          {...shared}
        />
      </>
    );
  }

  if (isTablet) {
    return (
      <>
        <ImageLeft
          src={cloudinaryInstance.url(exampleImages.tablet, {
            ...baseImageConfig,
            height: 150,
            width: 220,
            gravity: 'west',
          })}
          {...shared}
        />
        <ImageRight
          src={cloudinaryInstance.url(exampleImages.tablet, {
            ...baseImageConfig,
            height: 150,
            width: 220,
            gravity: 'east',
          })}
          {...shared}
        />
      </>
    );
  }

  if (isMobile) {
    return (
      <ImageLeft
        src={cloudinaryInstance.url(exampleImages.mobile, {
          ...baseImageConfig,
          height: 150,
          width: 150,
        })}
        {...shared}
      />
    );
  }

  return null;
}

const TriangleStyles = styled.div`> .triangle-right {
  fill: ${color.white};
  margin-left: 10px;
  margin-bottom: 1px;
  height: 9px;
  width: 9px;
}`;

const TriangleRight = () => (
  <TriangleStyles>
    <Icons.TriangleRight />
  </TriangleStyles>
);

const DisplayBeltAd = ({
  ctaCopy = 'SAVE NOW',
  ctaLink = 'https://shop.americastestkitchen.com',
  headline = 'Discover favorite cookbooks',
  onClick,
  saleCopy = 'Up to 70% off',
}: DisplayBeltAdProps) => (
  <ImageBgWrapper>
    <DisplayBeltImage />
    <Content>
      <Headline>{headline}</Headline>
      <SaleCopy>{saleCopy}</SaleCopy>
    </Content>
    <Cta onClick={onClick} href={ctaLink}>{ctaCopy}<TriangleRight /></Cta>
  </ImageBgWrapper>
);

export default DisplayBeltAd;
