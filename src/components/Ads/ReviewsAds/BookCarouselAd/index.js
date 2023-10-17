// import breakpoint from 'styled-components-breakpoint';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Image from '../../../Cards/shared/Image';

import {
  color,
  font,
  fontSize,
  spacing,
} from '../../../../styles';

import { getImageUrl } from '../../../../lib/cloudinary';

const AdCtaLink = styled.a`
  align-items: center;
  background-color: ${color.pictonBlue};
  color: ${color.white};
  display: flex;
  font: ${fontSize.lg}/1.2rem ${font.pnb} 700;
  letter-spacing: 1.8px;
  justify-content: center;
  margin-bottom: ${spacing.xsm};
  min-height: 4rem;
  min-width: 19.6rem;
  position: absolute;
  top: 34.5rem;
  text-transform: uppercase;

  &:hover {
    background-color: ${color.darkColdPool};
  }
`;

const AdTitle = styled.p`
  color: ${color.white};
  font: ${fontSize.xl}/2.6rem ${font.mwr};
  font-weight: bold;
  letter-spacing: normal;
  margin-bottom: ${spacing.xxsm};
  max-width: 24rem;
  position: absolute;
  top: 2rem;
  text-align: center;
`;

const AdWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-height: 40rem;
  max-width: 27.2rem;
  min-height: 40rem;
  overflow: hidden;

  @media print {
    display: none;
  }

  img {
    max-height: 40rem;
    max-width: 27.2rem;
  }
`;

const BookCarouselAd = ({
  cloudinaryId,
  ctaLinkText,
  hrefUrl,
  sourceKey,
  title,
}) => (
  <AdWrapper>
    <AdTitle>{title}</AdTitle>
    <Image
      className="book-carousel-ad__image"
      imageAlt="The Complete America's Test Kitchen TV Show Cookbook"
      imageUrl={getImageUrl(cloudinaryId, { aspectRatio: '816:1200', width: 272, height: 400 })}
    />
    <AdCtaLink href={`${hrefUrl}?sourcekey=${sourceKey}`} target="_blank">{ctaLinkText}</AdCtaLink>
  </AdWrapper>
);

BookCarouselAd.propTypes = {
  cloudinaryId: PropTypes.string,
  ctaLinkText: PropTypes.string,
  hrefUrl: PropTypes.string,
  sourceKey: PropTypes.string.isRequired,
  title: PropTypes.string,
};

BookCarouselAd.defaultProps = {
  cloudinaryId: 'ATKTV22Book_Mise_ReviewsBookCarouselAd_816x1200.jpg',
  ctaLinkText: 'Save 56% Now',
  hrefUrl: 'https://shop.americastestkitchen.com/complete-atk-22.html',
  title: 'Get 1,727 recipes from all 22 seasons!',
};

export default BookCarouselAd;
