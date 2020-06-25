import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import breakpoints from '../../../../styles/breakpoints';
import CardCarousel from '../index';
import data from '../../DocumentListCarousel/__tests__/data';

describe('DocumentListCarousel component should', () => {
  const renderComponent = ({ type }) => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <CardCarousel
          items={data.standardItems}
          type={type}
        />
      </ThemeProvider>,
    )
  );

  it('render standard cards', () => {
    renderComponent({ type: 'standard' });
    expect(screen.getByTestId('card-carousel--standard'));
  });

  it('render feature cards', () => {
    renderComponent({ type: 'feature' });
  });
});
