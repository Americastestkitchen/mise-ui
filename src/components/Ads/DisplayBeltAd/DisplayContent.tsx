import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import { color, font, fontSize, letterSpacing, mixins, withThemes } from '../../../styles';
import { md, untilMd } from '../../../styles/breakpoints';
import { cssThemedColor } from '../../../styles/mixins';
import { InferStyledTypes } from '../../../styles/utility-types';
import DetailTriangleRight from '../components/DetailTriangleRight';
import Layout from '../TrialBeltAd/Layout';

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

const cssThemedButtonBackgroundColor = withThemes({
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
});

const Cta = styled.a`
    align-items: center;
    color: ${color.white};
    display: flex;
    font: ${fontSize.lg}/2rem ${font.pnb} 700;
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

    ${cssThemedButtonBackgroundColor}
`;

const Headline = styled.p`
  font: ${fontSize.sm}/2.3rem ${font.mwr};
  margin-bottom: 0.5rem;

  ${breakpoint('md')`
    font-size: 1.9rem;
    line-height: 2rem;
  `}
  ${cssThemedColor}
`;

const SaleCopy = styled.h2`
  font: 2.8rem/2.2rem ${font.pnb} 700;

  ${breakpoint('md')`
    font-size: 3.2rem;
    line-height: 3.3rem;
  `}

  ${cssThemedColor}
`;

const cssBackgroundColor = withThemes({
  atk: css`
      background-color: ${color.frost};
    `,
  cio: css`
      background-color: ${color.ivory};
    `,
  cco: css`
      background-color: ${color.aliceBlue};
    `,
});

const ImageBgWrapper = styled.div`
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

      ${cssBackgroundColor}
  `;

export type DisplayContentProps = {
    /** background images */
    displayImageComponent: ReactNode;
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

export default function DisplayContent({
  displayImageComponent = null,
  ctaCopy = 'SAVE NOW',
  ctaLink = 'https://shop.americastestkitchen.com',
  headline = 'Discover favorite cookbooks',
  onClick,
  saleCopy = 'Up to 70% off',
  linkProps,
}: DisplayContentProps) {
  return (
    <Layout excludePadding>
      <ImageBgWrapper>
        {displayImageComponent}
        <Content>
          <TextArea>
            <Headline dangerouslySetInnerHTML={{ __html: headline }} />
            <SaleCopy dangerouslySetInnerHTML={{ __html: saleCopy }} />
          </TextArea>
        </Content>
        <Cta onClick={onClick} href={ctaLink} target="_blank" {...linkProps}>{ctaCopy}<DetailTriangleRight /></Cta>
      </ImageBgWrapper>
    </Layout>
  );
}
