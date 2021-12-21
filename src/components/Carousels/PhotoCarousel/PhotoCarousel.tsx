/* eslint-disable react/require-default-props */
/* eslint-disable no-undef */ // missing eslint typescript compat rules.
import React, { useContext, useRef } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
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
    default: css`background: ${color.gray20};`,
    cco: css`background: #426491;`,
    cio: css`background: #94856b;`,
  })}
  .flickity-button:hover {
    ${withThemes({
    default: css`background: ${color.nobel}; opacity: 1;`,
    cco: css`background: #426491; opacity: 0.6;`,
    cio: css`background: #94856b; opacity: 0.6;`,
  })}
  }
  }
  .flickity-prev-next-button {
    width: 28px;
    height: 28px;
    border-radius: 100%;
    top: -28px !important;
    left: unset !important;
  }
  .flickity-button-icon {
    fill: ${color.white};
    height: 14px !important;
    top: 25% !important;
  }
  .flickity-prev-next-button.previous {
    right: 38px;
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

const Description = styled.span`
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
const PhotoCarouselCell = ({
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

    <Description>{description}</Description>
    <AccentRectangle />
  </>
);

const Title = styled.div`
  margin: 12px 0;
  font-size: 26px;
  line-height: 1.15;
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
  const { siteKey } = useContext(ThemeContext);
  const itemsId = items.map((item, index) => ({ ...item, id: index }));
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <SingleCarousel.Wrapper ref={ref} maxWidth={maxWidth}>
      <SingleCarousel.Title as={as}>{title}</SingleCarousel.Title>
      <Carousel
        items={itemsId}
        renderItem={(args: PhotoCarouselCellProps) => (
          <SingleCarousel.PhotoCarouselCell {...args} />
        )}
        options={flickityOptions}
        onChange={(data) => {
          const button = ref.current?.querySelector<HTMLButtonElement>('.flickity-prev-next-button.previous');
          if (!button) return;
          if (siteKey === 'atk') {
            button.style.background = data === 0 ? `${color.nobel}` : '';
          } else {
            button.style.opacity = data === 0 ? '0.6' : '1';
          }
        }}
      />
    </SingleCarousel.Wrapper>
  );
}
