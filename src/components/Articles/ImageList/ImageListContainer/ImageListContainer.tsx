import React from 'react';
import styled, { css } from 'styled-components';
import { md, xlg } from '../../../../styles/breakpoints';
import ImageListItem, { ImageListItemProps } from '../ImageListItem/ImageListItem';
import { color, font, fontSize, mixins, withThemes } from '../../../../styles';
import { cssThemedColor } from '../../../../styles/mixins';
import ArticleComponentWidthType from '../../types/ArticleComponentWidth';

const ImageListWrapper = styled.aside<{width: ArticleComponentWidthType}>`
  background-color: ${color.white};
  margin: 3rem 0 2.7rem;
  max-width: 100%;
  padding: 2.4rem 1rem 2rem;

  ${md(css`
    padding: 2.4rem;
  `)}

  ${({ width }) => (
    xlg(css`${mixins.articlesWidth(width)}`)
  )}

  ${withThemes({
    cco: css`
      ${mixins.ccoReviewSetBorder()}
    `,
  })}
`;

const ImageListTitle = styled.h3`
  ${cssThemedColor}
  font: ${fontSize.xl}/2.6rem ${font.pnb};
  letter-spacing: normal;
  margin-bottom: 0.4rem;
`;

const Intro = styled.div`
  ${cssThemedColor}
  font-family: ${font.pnr};
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 8px;
`;

export type ImageListContainerProps = {
  className?: string;
  images: ImageListItemProps[];
  intro?: string;
  title?: string;
  width: ArticleComponentWidthType;
};

const ImageListContainer = ({
  className,
  images,
  intro,
  title,
  width,
}: ImageListContainerProps) => (
  <ImageListWrapper className={className} width={width}>
    {title && <ImageListTitle>{title}</ImageListTitle>}
    {!!intro && <Intro>{intro}</Intro>}
    {
      images.map(image => (
        <ImageListItem
          key={image.cloudinaryId}
          {...image}
          width={width}
        />
      ))
    }
  </ImageListWrapper>
);

export default ImageListContainer;
