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
    renderComponent({ sourceKey: 'CARDDTVAA' });
    expect(screen.getByText('Get 1,727 recipes from all 22 seasons!')
    && screen.getByText('Save 56% Now')
    && screen.getByAltText('The Complete America\'s Test Kitchen TV Show Cookbook'));
  });
});
