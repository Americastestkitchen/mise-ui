import React from 'react';
import styled, { css } from 'styled-components';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';

import Carousel from './index';
import CarouselNotes from './Carousel.md';

export default {
  title: 'Components/Carousels/Carousel',
  component: Carousel,
  decorators: [withKnobs],
  parameters: {
    notes: CarouselNotes,
  },
};

const images = new Array(10)
  .fill('http://placeimg.com/250/250/nature')
  .map((i, idx) => `${i}?i=${idx}`);

const DefaultCarouselWrapper = styled.div`
  .carousel-cell {
    margin-right: 1rem;
    min-height: 25rem;
    width: 25rem;
    max-width: 100vw;
  }
`;

export const Default = () => (
  <DefaultCarouselWrapper>
    <Carousel
      items={images}
      renderItem={(i) => <img src={i} alt="" />}
      options={{
        cellAlign: select('Cell Alignment', ['center', 'left', 'right'], 'center'),
        navigationDots: boolean('Navigation Dots', true),
        slideshow: boolean('Slideshow', true),
        wrapAround: boolean('Wraparound', true),
      }}
    />
  </DefaultCarouselWrapper>
);
