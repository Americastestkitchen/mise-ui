import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ImageListItem from '../ImageListItem';
import { color, font, fontSize, mixins, withThemes } from '../../../../styles';

const ImageListWrapper = styled.aside`
  background-color: ${color.white};
  margin: 3rem 0 2.7rem;
  max-width: 100%;
  padding: 2.4rem 1rem 2rem;

  ${breakpoint('md')`
    padding: 2.4rem;
  `}

  ${breakpoint('xlg')`
    ${({ width }) => (mixins.articlesWidth(width))};
  `}
`;

const ImageListTitleTheme = {
  default: css`
    font: ${fontSize.xl}/2.6rem ${font.pnb};
    height: 3.3rem;
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
}) => (
  <ImageListWrapper className={className} width={width}>
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
};

ImageListContainer.defaultProps = {
  className: '',
  title: null,
};

export default ImageListContainer;
