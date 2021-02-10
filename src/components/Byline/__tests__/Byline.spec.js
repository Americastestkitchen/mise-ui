import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Byline from '../index';
import breakpoints from '../../../styles/breakpoints';

describe('Byline component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <Byline
          author="Kevin Pang"
          authorImageCloudinaryId="Play%20Cast%20Headshots/staff_dan_souza"
          attribution="Yesterday"
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText(''));
  });

  it('renders an author and a publish date attribution', () => {
    renderComponent();
    expect(screen.getByText('Kevin Pang'));
    expect(screen.getByText('Yesterday'));
  });
});
