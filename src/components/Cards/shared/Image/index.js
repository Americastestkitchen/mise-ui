import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 100%;
`;

const Image = ({ className, imageAlt, imageUrl }) => (
  <StyledImage
    alt={imageAlt}
    className={className}
    src={imageUrl}
  />
);

Image.propTypes = {
  className: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

Image.defaultProps = {
  className: '',
};

export default Image;
