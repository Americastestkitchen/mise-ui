import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import BookCarouselAd from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('BookCarouselAd', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <BookCarouselAd
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('renders title, image w/ alt text, button', () => {
    renderComponent();
    expect(screen.getByText('Every Recipe (1,670!) From All 21 Seasons')
    && screen.getByText('Save 56% Now')
    && screen.getByAltText('The Complete America\'s Test Kitchen TV Show Cookbook'));
  });
});
