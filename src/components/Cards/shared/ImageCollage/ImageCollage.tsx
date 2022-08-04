import React from 'react';
import styled from 'styled-components';

const StyledImage = styled.img.attrs({
  className: 'image-collage__img',
})`
  max-width: 100%;
`;

const CollageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .image-collage__img {
    display: block;
    flex: 0 0 50%;
    width: 50%;
  }
`;

export type ImageCollageProps = {
  className?: string;
  imageAlt: string;
  imageUrl?: string[];
  testId?: string;
};

const ImageCollage = ({
  className = 'image-collage',
  imageAlt,
  imageUrl = [],
  testId = '',
}: ImageCollageProps) => (
  imageUrl && (
    <CollageWrapper
      aria-label={imageAlt}
      className={className}
      data-testid={testId}
      role="img"
    >
      {imageUrl.slice(0, 4).map(src => (
        <StyledImage key={src} src={src} />
      ))}
    </CollageWrapper>
  )
);

export default ImageCollage;
