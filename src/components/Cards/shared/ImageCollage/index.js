/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledImage = styled.img`
  max-width: 100%;
`;

const CollageWrapper = styled.div.attrs({
  className: 'image-collage',
})`
  display: flex;
  flex-wrap: wrap;

  .image-collage__img {
    display: block;
    flex: 0 0 50%;
    width: 50%;
  }
`;

const ImageCollage = ({
  className,
  imageAlt,
  imageUrl,
  testId,
}) => (imageUrl ? (
  <CollageWrapper
    aria-label={imageAlt}
    className={className}
    data-testid={testId}
    role="img"
  >
    {imageUrl.slice(0, 4).map(src => (
      <StyledImage
        className="image-collage__img"
        key={src}
        src={src}
      />
    ))}
  </CollageWrapper>
) : null);

ImageCollage.propTypes = {
  className: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  imageUrl: PropTypes.array,
  testId: PropTypes.string,
};

ImageCollage.defaultProps = {
  className: '',
  imageUrl: null,
  testId: '',
};

export default ImageCollage;
