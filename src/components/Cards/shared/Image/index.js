import React, { useCallback, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import useIntersection from '../../../hooks/useIntersection';
import useMedia from '../../../hooks/useMedia';

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
  const isPrint = useMedia('print');

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

  const loadImage = useCallback(() => {
    setSrc(imageUrl);
  }, [imageUrl]);

  useEffect(() => {
    if (isIntersecting) loadImage();
  }, [isIntersecting]);

  useEffect(() => {
    if (isPrint) loadImage();
  }, [isPrint]);

  useEffect(() => {
    if (lazy && lowQualityImageUrl) {
      setSrc(lowQualityImageUrl);
    }
    if (typeof dry !== 'undefined') {
      // eslint-disable-next-line no-undef
      const printSub = dry.events.subscribe('images:load', loadImage);
      return () => printSub.remove();
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
