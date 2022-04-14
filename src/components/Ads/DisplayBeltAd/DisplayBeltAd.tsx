import React from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { color, font, fontSize, letterSpacing, mixins, withThemes } from '../../../styles';
import { md, untilMd } from '../../../styles/breakpoints';
import { cssThemedColor } from '../../../styles/mixins';
import { InferStyledTypes } from '../../../styles/utility-types';
import useMedia from '../../hooks/useMedia';
import DetailTriangleRight from '../components/DetailTriangleRight';
import Layout from '../TrialBeltAd/Layout';

export type HeroImages = {
  mobile: string,
  tablet: string,
  largeTablet: string,
  desktop: string,
}

const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: right;
  ${md(css`
    text-align: center;
  `)}
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  margin-top: 5px;
  z-index: 1;
  ${untilMd(css`
    margin-left: 140px;
  `)}
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

    &:focus {
      ${mixins.focusIndicator(`${color.white}`, '-4px')}
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
    position: relative;
    width: 100%;
    padding-bottom: 20px;
  
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
  /** background images */
  backgroundImages?: HeroImages;
  /** cta button copy */
  ctaCopy?: string;
  /** cta link */
  ctaLink?: string;
  /** top headline copy */
  headline?: string;
  /** Onclick fires mixpanel accepted event */
  onClick: () => void;
  /** sale copy  */
  saleCopy?: string;
  /**
   * Pass any additional props to the click area. This can be for
   *  analytics events, accessibility with "aria-label", or any other
   *  property unseen for future requirements on the anchor tag.
   */
  linkProps?: InferStyledTypes<typeof Cta>;
};

const ImageLeft = styled.img`
  position: absolute;
  height: 100%;
  left: 0;
  max-width: unset;
`;

const ImageRight = styled.img`
  position: absolute;
  height: 100%;
  right: 0;
  max-width: unset;
`;

const FullImage = styled.img`
  position: absolute;
  height: 100%;
  max-width: unset;
`;

const exampleImages = {
  desktop: '2022 Review Landing/Belt-placeholder-AKO-Desktop-1280x150_2x.png',
  largeTablet: '2022 Review Landing/Belt-placeholder-AKO-Landscape_Tablet-1024x150_2x.png',
  mobile: '2022 Review Landing/Belt-placeholder-AKO-Mobile-372x192_2x.png',
  tablet: '2022 Review Landing/Belt-placeholder-AKO-Tablet-768x150_2x.png',
};

const shared = { alt: '', crossOrigin: 'anonymous', decoding: 'async' } as const;

function DisplayBeltImage({ backgroundImages } : {backgroundImages: HeroImages}) {
  const isMobile = useMedia('(max-width: 767px)');
  const isTablet = useMedia('(min-width: 768px)');
  const isLargeTablet = useMedia('(min-width: 1024px)');
  const isDesktop = useMedia('(min-width: 1136px)');

  if (isDesktop) {
    return (
      <FullImage
        className="display-belt__desktop-image"
        src={cloudinaryInstance.url(backgroundImages?.desktop, {
          ...baseImageConfig,
          height: 150,
        })}
        {...shared}
      />
    );
  }

  if (isLargeTablet) {
    return (
      <>
        <ImageLeft
          src={cloudinaryInstance.url(backgroundImages?.largeTablet, {
            ...baseImageConfig,
            height: 150,
            width: 350,
            gravity: 'west',
          })}
          {...shared}
        />
        <ImageRight
          src={cloudinaryInstance.url(backgroundImages?.largeTablet, {
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
          src={cloudinaryInstance.url(backgroundImages?.tablet, {
            ...baseImageConfig,
            height: 150,
            width: 220,
            gravity: 'west',
          })}
          {...shared}
        />
        <ImageRight
          src={cloudinaryInstance.url(backgroundImages?.tablet, {
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
        src={cloudinaryInstance.url(backgroundImages?.mobile, {
          ...baseImageConfig,
          height: 192,
          width: 192,
        })}
        {...shared}
      />
    );
  }

  return null;
}

const DisplayBeltAd = ({
  backgroundImages = exampleImages,
  ctaCopy = 'SAVE NOW',
  ctaLink = 'https://shop.americastestkitchen.com',
  headline = 'Discover favorite cookbooks',
  onClick,
  saleCopy = 'Up to 70% off',
  linkProps,
}: DisplayBeltAdProps) => (
  <Layout excludePadding>
    <ImageBgWrapper>
      <DisplayBeltImage backgroundImages={backgroundImages} />
      <Content>
        <TextArea>
          <Headline>{headline}</Headline>
          <SaleCopy>{saleCopy}</SaleCopy>
        </TextArea>
      </Content>
      <Cta onClick={onClick} href={ctaLink} target="_blank" {...linkProps}>{ctaCopy}<DetailTriangleRight /></Cta>
    </ImageBgWrapper>
  </Layout>
);

export default DisplayBeltAd;
