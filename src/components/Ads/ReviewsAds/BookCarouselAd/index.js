// import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Image from '../../../Cards/shared/Image';

import {
  color,
  font,
  fontSize,
  letterSpacing,
  spacing,
} from '../../../../styles';

import { getImageUrl } from '../../../../lib/cloudinary';

const AdCtaLink = styled.a`
  align-items: center;
  background-color: ${color.pictonBlue};
  color: ${color.white};
  display: flex;
  font: ${fontSize.lg}/1.2rem ${font.pnb};
  letter-spacing: ${letterSpacing.cta}; 
  justify-content: center;
  margin-bottom: ${spacing.xsm};
  min-height: 4rem;
  min-width: 19.6rem;
  text-transform: uppercase;
`;

const AdTitle = styled.h2`
  color: ${color.white};
  font: ${fontSize.xl}/2.6rem ${font.mwr};
  font-weight: bold;
  letter-spacing: normal;
  margin-bottom: ${spacing.xxsm};
  text-align: center;
`;

const AdWrapper = styled.div`
  align-items: center;
  background-color: ${color.eclipse};
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 40rem;
  max-width: 27.2rem;
  min-height: 40rem;
  overflow: hidden;

  img {
    max-height: 27rem;
    max-width: 20.9rem;
    transform: rotate(10deg);
  }
`;

const BookCarouselAd = ({
  cloudinaryId,
  ctaLinkText,
  title,
}) => (
  <AdWrapper>
    <AdTitle>{title}</AdTitle>
    <Image
      className="book-carousel-ad__image"
      imageAlt="The Complete America's Test Kitchen TV Show Cookbook"
      imageUrl={getImageUrl(cloudinaryId, { aspectRatio: '673:790', width: 177, height: 225 })}
    />
    <AdCtaLink href="">{ctaLinkText}</AdCtaLink>
  </AdWrapper>
);

BookCarouselAd.propTypes = {
  cloudinaryId: PropTypes.string,
  ctaLinkText: PropTypes.string,
  title: PropTypes.string,
};

BookCarouselAd.defaultProps = {
  cloudinaryId: 'ATK Reviews Ads/ATKTV21_Cover_CMYK_3x.png',
  ctaLinkText: 'Save 56% Now',
  title: 'Every Recipe (1,670!) From All 21 Seasons',
};

export default BookCarouselAd;
