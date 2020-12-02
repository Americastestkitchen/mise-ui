import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import FreeTrialAd from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('FreeTrialAd', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <FreeTrialAd
          cloudinaryId="mise-play/play-showcase-magazine-ad"
          cta="Free trial issue"
          ctaHref="https://www.americastestkitchen.com/order"
          subtitle="All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine."
          title="Claim Your Free Trial Issue!"
        />
      </ThemeProvider>,
    )
  );

  it('renders two images', () => {
    renderComponent();
    expect(screen.getByTestId('showcase-ad-img'));
  });

  it('renders title', () => {
    renderComponent();
    expect(screen.getByText('Claim Your Free Trial Issue!'));
  });

  it('renders subtitle', () => {
    renderComponent();
    expect(screen.getByText('All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine.'));
  });

  it('renders cta link', () => {
    renderComponent();
    expect(screen.getByTitle('Free trial issue'));
  });
});
