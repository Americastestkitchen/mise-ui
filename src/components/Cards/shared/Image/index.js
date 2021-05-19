/* eslint-disable react-hooks/exhaustive-deps */
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
  height,
  imageAlt,
  imageUrl,
  lazy,
  lowQualityImageUrl,
  width,
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
  }, [isPrint, loadImage]);

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
  }, [lazy, lowQualityImageUrl]);

  return (
    <StyledImage
      alt={imageAlt}
      className={className}
      height={height}
      ref={intersectionRef}
      src={src}
      width={width}
    />
  );
};

Image.propTypes = {
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  imageAlt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  lazy: PropTypes.bool,
  lowQualityImageUrl: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Image.defaultProps = {
  className: '',
  height: null,
  lazy: true,
  lowQualityImageUrl: null,
  width: null,
};

export default Image;
