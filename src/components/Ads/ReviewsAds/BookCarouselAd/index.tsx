import PropTypes from 'prop-types';
import React, { ReactElement } from 'react';
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
  font: ${fontSize.lg}/1.2rem ${font.pnb};
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
  position: absolute;
  top: 1.5rem;
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

const BookCarouselAdDefaults = {
  cloudinaryId: 'ATK Reviews Ads/Mask_Group_49066_3x.jpg',
  ctaLinkText: 'Save 56% Now',
  hrefUrl: 'https://shop.americastestkitchen.com/complete-atk-21.html',
  title: 'Every Recipe (1,670!) From All 21 Seasons',
};

type BookCarouselAdProps = {
  cloudinaryId?: string;
  ctaLinkText?: string;
  hrefUrl?: string;
  sourceKey: string;
  title?: string;
};

const BookCarouselAd = ({
  cloudinaryId = BookCarouselAdDefaults.cloudinaryId,
  ctaLinkText = BookCarouselAdDefaults.ctaLinkText,
  hrefUrl = BookCarouselAdDefaults.hrefUrl,
  sourceKey,
  title = BookCarouselAdDefaults.title,
}: BookCarouselAdProps): ReactElement => (
  <AdWrapper>
    <AdTitle>{title}</AdTitle>
    <Image
      className="book-carousel-ad__image"
      imageAlt="The Complete America's Test Kitchen TV Show Cookbook"
      imageUrl={cloudinaryId ? getImageUrl(cloudinaryId, { aspectRatio: '816:1200', width: 272, height: 400 }) : ''}
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

export default BookCarouselAd;
