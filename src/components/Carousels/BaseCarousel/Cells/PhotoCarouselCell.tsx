/* eslint-disable react/require-default-props */
import React, { HTMLProps } from 'react';
import styled, { css } from 'styled-components';
import cloudinaryInstance, { baseImageConfig } from '../../../../lib/cloudinary';
import { withThemes, color, font } from '../../../../styles';
import { cssThemedLink } from '../../../../styles/mixins';
import ConditionalAnchor from '../../../Articles/shared/ConditionalAnchor';

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
  anchor?: HTMLProps<HTMLAnchorElement>;
}

const Img = styled.img`
  margin-bottom: 14px;
`;

const Description = styled.div`
  font-family: ${font.pnb};
  font-size: 16px;
  line-height: 1.5;
  color: ${color.doveGray};
  a {
    ${cssThemedLink}
  }
`;

const AccentRectangle = styled.div`
  width: 19.5px;
  height: 7px;
  margin-top: 8px;
  ${withThemes({
    default: css`background-color: ${color.mint};`,
    atk: css`background-color: ${color.mint};`,
    cco: css`background-color: ${color.denim};`,
    cio: css`background-color: ${color.squirrel};`,
  })}
`;

const cloudinaryOptions = { ...baseImageConfig, aspectRatio: '3:2' };

/**
 * Contents for div.carousel-cell.
 * Keyed rendering is set by parent component so id is unused property here.
 */
export default function PhotoCarouselCell({
  img,
  alt = '',
  description,
  anchor,
}: PhotoCarouselCellProps) {
  return (
    <>
      { 'cloudinaryId' in img ? (
        <ConditionalAnchor showAnchor={!!anchor?.href} displayBlock {...anchor}>
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
        </ConditionalAnchor>
      ) : (
        <ConditionalAnchor showAnchor={!!anchor?.href} displayBlock {...anchor}>
          <Img
            src={img.src}
            alt={alt}
            crossOrigin="anonymous"
            decoding="async"
          />
        </ConditionalAnchor>
      )}

      {!!description && (
      <>
        <Description
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <AccentRectangle />
      </>
      )}
    </>
  );
}
