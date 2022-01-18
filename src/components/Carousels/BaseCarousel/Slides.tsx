import React, { PropsWithChildren } from 'react';
import { useCarouselContext } from './BaseCarousel';

export type SlideProps = PropsWithChildren<{key: React.Key}>;

export function FullWidthSlide({ children }: SlideProps) {
  const { onFocus } = useCarouselContext();
  return (
    <div style={{ width: '100%', marginRight: '16px' }} onFocus={onFocus}>
      {children}
    </div>
  );
}

export function StandardSlide({ children }: SlideProps) {
  const { onFocus } = useCarouselContext();
  return (
    <div style={{ width: '272px', marginRight: '16px' }} onFocus={onFocus}>
      {children}
    </div>
  );
}
