import React from 'react';
import styled from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { InferStyledTypes } from '../../../styles/utility-types';
import DetailTriangleRight from '../components/DetailTriangleRight';
import {
  AccentHeadline,
  ButtonArea,
  ClickArea,
  Description,
  GridImageArea,
  Headline,
  ImageArea,
  TextArea,
  VariantButtonArea,
  VariantDescription,
  VerticalLine,
} from './css/components';
import Layout from './Layout';

export type TextTrialBeltProps = {
  /** Link for card click area. */
  href: string;
  /** Top line of text, read as html */
  headline: string;
  /** Text below headline, read as html */
  description: string;
  /** Text for button (button is a div since card is an anchor tag) */
  cta: string;
  /**
   * Pass any additional props to the click area. This can be for
   *  analytics events, accessibility with "aria-label", or any other
   *  property unseen for future requirements on the anchor tag.
   */
  linkProps?: InferStyledTypes<typeof ClickArea>;
}

export type TextImageTrialBeltProps = {
  /** Link for card click area. */
  href: string;
  /** Image cloudinary id */
  cloudinaryId: string;
  /** Image alt */
  imageAlt?: string;
  /** Text below headline, read as html */
  description: string;
  /** Text for button (button is a div since card is an anchor tag) */
  cta: string;
  /**
   * Pass any additional props to the click area. This can be for
   *  analytics events, accessibility with "aria-label", or any other
   *  property unseen for future requirements on the anchor tag.
   */
  linkProps?: InferStyledTypes<typeof ClickArea>;
}

export type TrialBeltAdProps = TextTrialBeltProps & {
  /** Reduced font sizes for larger text options. All defined in ./css/reducedTextSizing.ts. */
  reducedTextSizing?: boolean;
  /** Image to render in 100x100 area */
  cloudinaryId: string;
  /** Image alt */
  imageAlt?: string;
};

export function TextTrialBeltAd({
  href,
  headline,
  description,
  cta,
  linkProps = {},
}: TextTrialBeltProps) {
  return (
    <Layout reducedTextSizing textGrid>
      <ClickArea href={href} {...linkProps}>
        <GridImageArea>
          <AccentHeadline dangerouslySetInnerHTML={{ __html: headline }} />
        </GridImageArea>
        <TextArea>
          <VariantDescription dangerouslySetInnerHTML={{ __html: description }} />
        </TextArea>
        <VariantButtonArea>
          {cta}<DetailTriangleRight />
        </VariantButtonArea>
      </ClickArea>
    </Layout>
  );
}

const InlineImage = styled.div`
  height: 40px;
  width: 240px;
  overflow: hidden;
  object-fit: cover;
`;

export function TextImageTrialBeltAd({
  href,
  cloudinaryId,
  imageAlt,
  description,
  cta,
  linkProps = {},
}: TextImageTrialBeltProps) {
  const src = cloudinaryInstance.url(cloudinaryId, { ...baseImageConfig, height: 42 });
  return (
    <Layout reducedTextSizing textGrid>
      <ClickArea href={href} {...linkProps}>
        <GridImageArea>
          <InlineImage>
            <img src={src} alt={imageAlt ?? ''} height="40" />
          </InlineImage>
          <VerticalLine />
        </GridImageArea>
        <TextArea>
          <VariantDescription dangerouslySetInnerHTML={{ __html: description }} />
        </TextArea>
        <VariantButtonArea>
          {cta}<DetailTriangleRight />
        </VariantButtonArea>
      </ClickArea>
    </Layout>
  );
}

export default function TrialBeltAd({
  href,
  cloudinaryId,
  imageAlt,
  headline,
  description,
  cta,
  reducedTextSizing,
  linkProps = {},
}: TrialBeltAdProps) {
  const src = cloudinaryInstance.url(cloudinaryId, { ...baseImageConfig, height: 100, width: 100 });
  return (
    <Layout reducedTextSizing={reducedTextSizing}>
      <ClickArea href={href} {...linkProps}>
        <ImageArea>
          <img
            src={src}
            alt={imageAlt}
            width={100}
            height={100}
            crossOrigin="anonymous"
            decoding="async"
          />
        </ImageArea>
        <TextArea>
          <Headline dangerouslySetInnerHTML={{ __html: headline }} />
          <Description dangerouslySetInnerHTML={{ __html: description }} />
        </TextArea>
        <ButtonArea>
          {cta}<DetailTriangleRight />
        </ButtonArea>
      </ClickArea>
    </Layout>
  );
}
