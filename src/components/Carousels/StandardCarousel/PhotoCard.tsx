import styled, { css } from 'styled-components';
import React from 'react';
import { withThemes, color, font } from '../../../styles';
import cloudinaryInstance, { baseImageConfig } from '../../../lib/cloudinary';
import { useCarouselContext } from './StandardCarousel';

export type PhotoCardProps = {
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

export function PhotoCard({
  img,
  alt = '',
  description,
}: PhotoCardProps) {
  const { onFocus } = useCarouselContext();
  return (
    <div>
      { 'cloudinaryId' in img ? (
        <picture>
          <source media="(min-width: 1148px)" srcSet={cloudinaryInstance.url(img.cloudinaryId, { ...cloudinaryOptions, width: 1200 })} />
          <source media="(min-width: 768px)" srcSet={cloudinaryInstance.url(img.cloudinaryId, { ...cloudinaryOptions, width: 800 })} />
          <Img
            src={cloudinaryInstance.url(img.cloudinaryId, { ...cloudinaryOptions, width: 400 })}
            alt={alt}
            crossOrigin="anonymous"
            decoding="async"
            onFocus={onFocus}
          />
        </picture>
      ) : (
        <Img
          src={img.src}
          alt={alt}
          crossOrigin="anonymous"
          decoding="async"
          onFocus={onFocus}
        />
      )}

      <Description>{description}</Description>
      <AccentRectangle />
    </div>
  );
}
