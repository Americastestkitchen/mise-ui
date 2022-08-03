import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import ImageListItem from '../ImageListItem';
import { color, font, fontSize, mixins, withThemes } from '../../../../styles';
import { cssThemedColor, cssThemedLink } from '../../../../styles/mixins';

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

  a {
    ${cssThemedLink}
  }
`;

const Intro = styled.div`
  ${cssThemedColor}
  font-family: ${font.pnr};
  font-size: 16px;
  line-height: 1.5;
  padding-bottom: 8px;
`;

const ImageListContainer = ({
  images,
  className,
  title,
  intro,
  width,
}) => (
  <ImageListWrapper className={className} width={width}>
    {title && <ImageListTitle dangerouslySetInnerHTML={{ __html: title }} />}
    {!!intro && <Intro>{intro}</Intro> }
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
  intro: PropTypes.string,
  width: PropTypes.oneOf(['default', 'wide']).isRequired,
};

ImageListContainer.defaultProps = {
  className: '',
  title: null,
  intro: undefined,
};

export default ImageListContainer;
