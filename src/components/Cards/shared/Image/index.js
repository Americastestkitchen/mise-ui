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
  lowQualityImageUrl,
}) => {
  const intersectionRef = useRef(null);

  const { isIntersecting } = useIntersection(intersectionRef, {
    root: null,
    rootMargin: lowQualityImageUrl ? '0px' : '30px',
    threshold: 0,
  }) || { isIntersecting: false };

  let initSrc = lazy ? inlineSrc : imageUrl;
  if (lazy && lowQualityImageUrl) {
    initSrc = lowQualityImageUrl;
  }
  const [src, setSrc] = useState(initSrc);

  useEffect(() => {
    if (isIntersecting) setSrc(imageUrl);
  }, [isIntersecting]);

  useEffect(() => {
    if (lazy && lowQualityImageUrl) {
      setSrc(lowQualityImageUrl);
    }
  }, []);

  useEffect(() => {
    if (lazy) {
      const showImage = () => setSrc(imageUrl);
      window.addEventListener('beforeprint', showImage);
      return () => window.removeEventListener('beforeprint', showImage);
    }
    return () => {};
  }, []);

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
  lowQualityImageUrl: PropTypes.string,
};

Image.defaultProps = {
  className: '',
  lazy: true,
  lowQualityImageUrl: null,
};

export default Image;
