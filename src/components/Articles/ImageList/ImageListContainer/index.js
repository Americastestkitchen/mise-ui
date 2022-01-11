import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ImageListItem from '../ImageListItem';
import { color, font, fontSize, mixins, withThemes } from '../../../../styles';

const ImageListWrapperTheme = {
  default: css`
    background-color: ${color.white};
    margin: 3rem 0 2.7rem;
    max-width: 100%;
    padding: 2.4rem 1rem 2rem;
    border: ${({ borderWith }) => (borderWith ? `solid ${borderWith}px ${color.borderGray}` : '')};
    ${breakpoint('md')`
      padding: 2.4rem;
    `}

    ${breakpoint('xlg')`
      ${({ width }) => (mixins.articlesWidth(width))};
    `}
  `,
  cco: css`
    ${mixins.ccoReviewSetBorder()};
    border: ${({ borderWith }) => (borderWith ? `solid ${borderWith}px ${color.borderGray}` : '')};
  `,
};

const ImageListWrapper = styled.aside`
  ${withThemes(ImageListWrapperTheme)}
`;

const ImageListTitleTheme = {
  default: css`
    font: ${fontSize.xl}/2.6rem ${font.pnb};
    letter-spacing: normal;
    margin-bottom: 0.4rem;
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const ImageListTitle = styled.h3`
  ${withThemes(ImageListTitleTheme)}
`;

const ImageListContainer = ({
  images,
  className,
  title,
  width,
  borderWith,
}) => (
  <ImageListWrapper className={className} width={width} borderWith={borderWith}>
    {title && <ImageListTitle>{title}</ImageListTitle>}
    {
      images.map(image => (
        <ImageListItem
          key={image.cloudinaryId}
          width={width}
          {...image}
        />
      ))
    }
  </ImageListWrapper>
);

ImageListContainer.propTypes = {
  images: PropTypes.array.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.oneOf(['default', 'wide']).isRequired,
  borderWith: PropTypes.number,
};

ImageListContainer.defaultProps = {
  className: '',
  title: null,
};

export default ImageListContainer;
