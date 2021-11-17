import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import breakpoints from '../../../../styles/breakpoints';
import Carousel from '../index';

const images = new Array(5)
  .fill('http://placeimg.com/250/250/nature')
  .map((i, idx) => ({ src: `${i}?i=${idx}`, id: idx }));

describe('Carousel component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <Carousel
          items={images}
          renderItem={({ id, src }) => <img data-testid={id} src={src} alt="" />}
        />
      </ThemeProvider>,
    )
  );

  it('render all slides', () => {
    renderComponent();
    expect(screen.getByTestId(images[0].id));
    expect(screen.getByTestId(images[1].id));
    expect(screen.getByTestId(images[2].id));
    expect(screen.getByTestId(images[3].id));
    expect(screen.getByTestId(images[4].id));
  });
});
