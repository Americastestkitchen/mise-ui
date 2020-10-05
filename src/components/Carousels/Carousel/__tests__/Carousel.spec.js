import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import breakpoints from '../../../../styles/breakpoints';
import Carousel from '../index';

const images = new Array(5)
  .fill('http://placeimg.com/250/250/nature')
  .map((i, idx) => `${i}?i=${idx}`);

describe('Carousel component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <Carousel
          items={images}
          renderItem={i => <img data-testid={i} src={i} alt="" />}
        />
      </ThemeProvider>,
    )
  );

  it('render all slides', () => {
    renderComponent();
    expect(screen.getByTestId(images[0]));
    expect(screen.getByTestId(images[1]));
    expect(screen.getByTestId(images[2]));
    expect(screen.getByTestId(images[3]));
    expect(screen.getByTestId(images[4]));
  });
});
