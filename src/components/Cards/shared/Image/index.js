import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useIntersection from '../../../hooks/useIntersection';

const StyledImage = styled.img`
  max-width: 100%;
`;

const inlineSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

const Image = ({
  className,
  imageAlt,
  imageUrl,
  lazy,
}) => {
  const intersectionRef = useRef(null);

  const { isIntersecting } = useIntersection(intersectionRef, {
    root: null,
    rootMargin: '30px',
    threshold: 0,
  }) || { isIntersecting: false };

  const [src, setSrc] = useState(lazy ? inlineSrc : imageUrl);

  useEffect(() => {
    if (isIntersecting) setSrc(imageUrl);
  }, [imageUrl, isIntersecting]);

  useEffect(() => {
    const showImage = () => setSrc(imageUrl);
    window.addEventListener('beforeprint', showImage);
    return () => window.removeEventListener('beforeprint', showImage);
  }, [imageUrl]);

  return (
    <StyledImage
      alt={imageAlt}
      className={className}
      ref={intersectionRef}
      src={src}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  imageAlt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
};

Image.defaultProps = {
  className: '',
  lazy: true,
};

export default Image;
