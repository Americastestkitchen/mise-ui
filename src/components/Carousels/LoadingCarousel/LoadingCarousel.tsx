import React from 'react';
import styled, { css } from 'styled-components';
import { md } from '../../../styles/breakpoints';
import { color, spacing } from '../../../styles';

import LoadingCard from '../../Cards/LoadingCard/LoadingCard';

const LoadingCarouselWrapper = styled.div.attrs({ className: 'loading-carousel' })``;
const LoadingCarouselIntro = styled.div.attrs({
  className: 'intro',
})`
  background-color: ${color.black};
  height: 2.1rem;
  margin-bottom: ${spacing.sm};
  width: 22rem;

  ${md(css`
    width: 32.6rem;
  `)}
`;

const LoadingCarouselTextAndDots = styled.div`
  display: flex;
  height: 2.1rem;
  justify-content: space-between;
  margin: 0 0 ${spacing.xsm};
  width: 100%;

  ${md(css`
    max-width: 115rem;
  `)}
`;

const LoadingCarouselTitleCta = styled.div.attrs({ className: 'title-and-cta' })`
  background-color: ${color.black};
  width: 24rem;

  ${md(css`
    width: 61.2rem;
  `)}
`;

const LoadingCarouselDots = styled.div.attrs({ className: 'dots' })`
  background-color: ${color.black};
  width: 5.1rem;
`;

const LoadingCardCarousel = styled.div.attrs({ className: 'card-carousel' })`
  display: flex;
  flex-direction: column;
  max-width: 100%;

  .card {
    &:not(:first-child) {
      display: none;
    }
  }

  ${md(css`
    .card {
      margin-right: ${spacing.sm};

      &:not(:first-child) {
        display: block;
      }
    }
  `)}
`;

const LoadingCardsWrapper = styled.div.attrs({ className: 'cards' })`display: flex;`;

const LoadingCardPeek = styled.div.attrs({ className: 'card-peek' })`
  ${md(css`
    background-color: ${color.black};
    width: 4rem;
  `)}
`;

type cardTypes = 'category' | 'feature' | 'person' | 'reviewable' | 'standard' | 'tall' | 'related-small' | 'related-recipe' | 'suggestion';

export type LoadingCarouselProps = {
  ctaText?: string;
  intro?: string;
  title?: string;
  type: cardTypes;
  count?: number;
};

const LoadingCarousel = ({
  ctaText = '',
  intro = '',
  title = '',
  type,
  count = 4,
}: LoadingCarouselProps) => {
  const cards = Array(count).fill(<LoadingCard type={type} />);
  return (
    <LoadingCarouselWrapper>
      {intro && <LoadingCarouselIntro />}
      {title && ctaText && (
        <LoadingCarouselTextAndDots className={`text-and-dots ${type}`}>
          <LoadingCarouselTitleCta />
          <LoadingCarouselDots />
        </LoadingCarouselTextAndDots>
      )}
      <LoadingCardCarousel>
        <LoadingCardsWrapper>
          {cards}
          {title && ctaText && (
          <LoadingCardPeek />
          )}
        </LoadingCardsWrapper>
      </LoadingCardCarousel>
    </LoadingCarouselWrapper>
  );
};

export default LoadingCarousel;
