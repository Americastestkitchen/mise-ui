import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font, fontSize, mixins } from '../../../../styles';

const ImageListWrapper = styled.aside`
  background-color: ${color.white};
  margin: 3rem 0 2.7rem;
  max-width: 100%;
  padding: 2.4rem 1rem 2rem;

  ${breakpoint('md')`
    max-width: 69.6rem;
    padding: 2.4rem;
  `}

  ${breakpoint('xlg')`
    ${({ width }) => (mixins.articlesWidth(width))};
  `}
`;

const ImageListTitle = styled.h3`
  color: ${color.eclipse};
  font: ${fontSize.xl}/2.6rem ${font.pnb};
  height: 3.3rem;
  letter-spacing: normal;
  margin-bottom: 0.4rem;
`;

const ImageListContainer = ({
  children,
  className,
  title,
  width,
}) => (
  <ImageListWrapper className={className} width={width}>
    <ImageListTitle>{title}</ImageListTitle>
    {children}
  </ImageListWrapper>
);

ImageListContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  width: PropTypes.oneOf(['default', 'wide']).isRequired,
};

ImageListContainer.defaultProps = {
  className: '',
};

export default ImageListContainer;
