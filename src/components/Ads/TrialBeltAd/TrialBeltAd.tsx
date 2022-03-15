import React from 'react';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { InferStyledTypes } from '../../../styles/utility-types';
import DetailTriangleRight from '../components/DetailTriangleRight';
import { ButtonArea, ClickArea, Description, Headline, ImageArea, TextArea } from './css/components';
import Layout from './Layout';

export type TrialBeltAdProps = {
  /** Link for card click area. */
  href: string;
  /** Image to render in 100x100 area */
  cloudinaryId: string;
  /** Top line of text, read as html */
  headline: string;
  /** Text below headline, read as html */
  description: string;
  /** Text for button (button is a div since card is an anchor tag) */
  cta: string;
  /** Reduced font sizes for larger text options */
  reducedTextSizing?: boolean;
  /**
   * Pass any additional props to the click area. This can be for
   *  analytics events, accessibility with "aria-label", or any other
   *  property unseen for future requirements on the anchor tag.
   */
  linkProps?: InferStyledTypes<typeof ClickArea>;
};

export default function TrialBeltAd({
  href,
  cloudinaryId,
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
            alt=""
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
