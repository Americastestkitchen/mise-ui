/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useIntersection from '../../../hooks/useIntersection';
import useMedia from '../../../hooks/useMedia';

const StyledImage = styled.img`
  max-width: 100%;
`;

const inlineSrc = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';

type ImagePropTypes = {
  className?: string,
  height?: string | number,
  imageAlt: string,
  imageUrl: string,
  lazy?: boolean,
  lowQualityImageUrl?: string,
  testId?: string,
  width?: string | number,
}

const Image = ({
  className = '',
  height,
  imageAlt,
  imageUrl,
  lazy,
  lowQualityImageUrl,
  testId,
  width,
}: ImagePropTypes) => {
  const intersectionRef = useRef(null);
  const isPrint = useMedia('print');
  const [imageLoaded, setImageLoaded] = useState(!lazy);

  const { isIntersecting } = useIntersection(intersectionRef, {
    root: null,
    rootMargin: lowQualityImageUrl ? '0px' : '30px',
    threshold: 0,
  }, imageLoaded) || { isIntersecting: false };

  let initSrc = lazy ? inlineSrc : imageUrl;
  if (lazy && lowQualityImageUrl) {
    initSrc = lowQualityImageUrl;
  }
  const [src, setSrc] = useState(initSrc);

  const loadImage = useCallback(() => {
    setSrc(imageUrl);
    setImageLoaded(true);
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
    if (typeof window.dry !== 'undefined') {
      // eslint-disable-next-line no-undef
      const printSub: any = window.dry.events.subscribe('images:load', loadImage);
      return () => printSub.remove();
    }
    return () => {};
  }, [lazy, lowQualityImageUrl]);

  return (
    <StyledImage
      alt={imageAlt}
      className={className}
      crossOrigin="anonymous"
      decoding="async"
      data-testid={testId}
      height={height}
      ref={intersectionRef}
      src={src}
      width={width}
    />
  );
};

export default Image;
