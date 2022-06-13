import React, { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';
import { color } from '../../../styles';
import { InferStyledTypes } from '../../../styles/utility-types';
import { useCarouselContext } from './BaseCarousel';

export type SlideProps = PropsWithChildren<{
  key: React.Key,
  divProps?: InferStyledTypes<typeof StandardSlideThemed>
}>;

export function FullWidthSlide({ children }: SlideProps) {
  const { onFocus } = useCarouselContext();
  return (
    <div style={{ width: '100%', marginRight: '16px' }} onFocus={onFocus}>
      {children}
    </div>
  );
}

const mapSiteString = (map: Record<string, string>) => css`
  ${({ theme }: { theme: { siteKey: SiteKey }}) => map?.[theme.siteKey] ?? 'unset'}
`;

const colorValue = mapSiteString({
  atk: color.eclipse,
  cco: color.black,
  cio: color.cork,
});

const accentValue = mapSiteString({
  atk: color.mint,
  cco: color.denim,
  cio: color.squirrel,
});

const StandardSlideThemed = styled.div`
  width: 272px;
  margin-left: 1px;
  margin-right: 14px;
  .standard-card__anchor {
    color: ${colorValue} !important;
    @media(hover: hover) {
      p:hover {
        color: ${accentValue} !important;
      }
    }
  }
  .action-summary {
    color: ${colorValue} !important;
    path {
      fill: ${accentValue} !important;
    }
  }
  .attributions__content-type-wrapper {
    color: ${colorValue} !important;
  }
  button.favorite-action {
    &.favorited {
      [class*="ribbon"] {
        fill: ${colorValue} !important;
      }
      [class*="vertical-line"] {
        stroke: ${colorValue} !important;
      }
      &:hover {
        [class*="horizontal-line"] {
          stroke: ${color.white} !important;
          stroke-width: 2;
        }
      }
    }
    .outer-stroke {
      stroke: ${colorValue} !important;
    }
    @media(hover: hover) {
      &:hover {
        .favorite-ribbon__ribbon {
          fill: ${colorValue} !important;
        }
      }
    }
  }
`;

export function StandardSlide({ children, divProps }: SlideProps) {
  const { onFocus } = useCarouselContext();
  return (
    <StandardSlideThemed onFocus={onFocus} {...divProps} className="standard-slide">
      {children}
    </StandardSlideThemed>
  );
}
