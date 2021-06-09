import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import CookingSchoolAd from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('CookingSchoolAd', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <CookingSchoolAd
          deviceType="desktop"
          onClick={action('click button')}
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('renders headline, description, link', () => {
    renderComponent({ identifier: 'landing' });
    expect(screen.getByText('Take your skills to the next level with 320+ courses led by our expert test cooks.')
    && screen.getByText('Try our online cooking school')
    && screen.getByText('Try for Free'));
  });

  it('renders with specific dimensions for detail page', () => {
    renderComponent({ identifier: 'detail' });
    const adDimensions = Array.from(document.getElementsByClassName('cooking-school-ad__detail'));
    expect(adDimensions.length > 1
    && adDimensions[0].getAttribute('width') === 848);
  });
});
