import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import HeroAd from '../HeroAd';
import breakpoints from '../../../../styles/breakpoints';
import { color } from '../../../../styles';

describe('HeroAd', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <HeroAd
          backgroundColor="darkSlate"
          buttonColor="coldPool"
          cloudinaryId="mise-play/ATK-COMPLETE-SHOW-COVER"
          cta="Free trial issue"
          ctaHref="https://www.americastestkitchen.com/order"
          subtitle="All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine."
          title="Get 1,670+ Recipes from all 21 seasons!"
        />
      </ThemeProvider>,
    )
  );

  it('renders image', () => {
    renderComponent();
    expect(screen.getByTestId('hero-ad__image'));
  });

  it('renders title', () => {
    renderComponent();
    expect(screen.getByText('Get 1,670+ Recipes from all 21 seasons!'));
  });

  it('renders subtitle', () => {
    renderComponent();
    expect(screen.getByText('All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine.'));
  });

  it('renders cta link', () => {
    renderComponent();
    expect(screen.getByTitle('Free trial issue'));
  });

  it('renders correct background color', () => {
    renderComponent();
    expect(screen.getByTestId('hero-ad__inner')).toHaveStyleRule(`background-color: ${color.darkSlate};`);
  });

  it('renders correct button color', () => {
    renderComponent();
    expect(screen.getByTestId('hero-ad__cta')).toHaveStyleRule(`background-color: ${color.coldPool};`);
  });
});
