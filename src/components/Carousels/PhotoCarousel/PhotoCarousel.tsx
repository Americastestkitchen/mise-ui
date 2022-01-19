/* eslint-disable react/require-default-props */
import React from 'react';
import styled, { css } from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { withThemes, color, font } from '../../../styles';
import { cssThemedColor, cssThemedFont } from '../../../styles/mixins';
import Carousel from '../Carousel';

export type PhotoCarouselCellProps = {
  /** Carousel uses id value for reconciliation of its cell items. */
  id: string;
  /**
   * Image to display
   * cloudinaryId option chooses aspect ratio and resolution breakpoints.
   * src option should use consistent image size and aspect ratio because of flickity
   *  controlling its boundaries outside of css.
   */
  img: { src: string } | { cloudinaryId: string };
  /** Image alt text. Default is decorative '' */
  alt?: string;
  /** Description text under image. */
  description: string;
}

export type PhotoCarouselProps = {
  /** Title passthrough as property of styled components. i.e. h1, h2, etc. */
  as?: React.ElementType;
  /**
   * Max width for carousel. Prevents aspect ratio from scaling out of control.
   * Default is '1400px'
   */
  maxWidth?: string;
  /** Large title displayed above carousel */
  title: string;
  /** Lists of properties to pass to PhotoCarouselCell */
  items: PhotoCarouselCellProps[];
}

const flickityOptions = {
  autoPlay: false,
  cellAlign: 'left',
  freeScroll: true,
  imagesLoaded: true,
  navigationArrows: true,
  navigationDots: false,
  slideshow: false,
  wrapAround: true,
};

const Wrapper = styled.div<{ maxWidth: string }>`
  .carousel {
    width: 100%;
    padding-top: 0;
    max-width: ${props => props.maxWidth};
  }
  .flickity-viewport {
    overflow: hidden;
  }
  .carousel-cell {
    width: 100%;
    margin-right: 5%;
  }
  .flickity-button {
    display: block;
    ${withThemes({
    default: css`background: ${color.wintergreenDream};`,
    cco: css`background: ${color.queenBlue};`,
    cio: css`background: ${color.squirrel};`,
  })}
  }
  .flickity-button:hover {
    ${withThemes({
    default: css`box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);`,
    atk: css`background: ${color.eclipse};`,
    cco: css`background: ${color.black};`,
    cio: css`background: ${color.cork};`,
  })}
    svg {
      opacity: 1 !important;
      transform: none !important;
    }
  }
  .flickity-prev-next-button {
    width: 25px;
    height: 25px;
    border-radius: 100%;
    top: -28px !important;
    left: unset !important;
  }
  .flickity-button-icon {
    fill: ${color.white};
    height: 14px !important;
    top: 6px !important;
  }
  .flickity-prev-next-button.previous {
    right: 35px;
    .flickity-button-icon {
      left: 16% !important;
    }
  }
  .flickity-prev-next-button.next {
    right: 0;
    .flickity-button-icon {
      left: 25% !important;
    }
  }
`;

const Img = styled.img`
  margin-bottom: 14px;
`;

const Description = styled.div`
  font-family: ${font.pnb};
  font-size: 16px;
  line-height: 1.5;
  color: ${color.doveGray};
`;

const AccentRectangle = styled.div`
  width: 19.5px;
  height: 7px;
  margin-top: 8px;
  ${withThemes({
    default: css`background-color: ${color.mint};`,
    atk: css`background-color: ${color.mint};`,
    cco: css`background-color: ${color.bermudaGray};`,
    cio: css`background-color: ${color.squirrel};`,
  })}
`;

const cloudinaryOptions = { ...baseImageConfig, aspectRatio: '3:2' };

/**
 * Contents for div.carousel-cell.
 * Keyed rendering is set by parent component so id is unused property here.
 */
export const PhotoCarouselCell = ({
  img,
  alt = '',
  description,
}: PhotoCarouselCellProps) => (
  <>
    { 'cloudinaryId' in img ? (
      <picture>
        <source media="(min-width: 1148px)" srcSet={cloudinaryInstance.url(img.cloudinaryId, { ...cloudinaryOptions, width: 1200 })} />
        <source media="(min-width: 768px)" srcSet={cloudinaryInstance.url(img.cloudinaryId, { ...cloudinaryOptions, width: 800 })} />
        <Img
          src={cloudinaryInstance.url(img.cloudinaryId, { ...cloudinaryOptions, width: 400 })}
          alt={alt}
          crossOrigin="anonymous"
          decoding="async"
        />
      </picture>
    ) : (
      <Img
        src={img.src}
        alt={alt}
        crossOrigin="anonymous"
        decoding="async"
      />
    )}

    {!!description && (
      <>
        <Description>{description}</Description>
        <AccentRectangle />
      </>
    )}
  </>
);

const Title = styled.div`
  margin: 12px 0;
  font-size: 26px;
  line-height: 1.15;
  // in order for consistent spacing, arrow buttons overlap above otherwise.
  min-height: 32px;
  // depends on .flickity-prev-next-button.previous
  padding-right: 72px;
  ${cssThemedColor}
  ${cssThemedFont}
`;

/** Composable component API or references for styled components classNames. */
export const SingleCarousel = {
  Wrapper,
  Title,
  PhotoCarouselCell,
};

export default function PhotoCarousel({ as, title, items, maxWidth = '1400px' } : PhotoCarouselProps) {
  const itemsId = items.map((item, index) => ({ ...item, id: index }));

  return (
    <SingleCarousel.Wrapper maxWidth={maxWidth}>
      <SingleCarousel.Title as={as}>{title}</SingleCarousel.Title>
      <Carousel
        items={itemsId}
        renderItem={(args: PhotoCarouselCellProps) => (
          <SingleCarousel.PhotoCarouselCell {...args} />
        )}
        options={flickityOptions}
      />
    </SingleCarousel.Wrapper>
  );
}
