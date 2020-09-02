import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import SingleProductAd from '../index';
import breakpoints from '../../../../styles/breakpoints';

const defaultData = {
  cloudinaryId: 'atk-20th-anniversary-tv-show-cookbook-header_u6komg',
  cta: 'START FREE TRIAL',
  ctaHref: 'https://www.americastestkitchen.com/foo',
  ctaTarget: '_blank',
  siteKey: 'shop',
  subtitle: 'DIGITAL ALL ACCESS',
  title: 'Every recipe, rating & video',
};

describe('SingleProductAd', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <SingleProductAd
          {...defaultData}
        />
      </ThemeProvider>,
    )
  );

  it('renders image', () => {
    renderComponent();
    expect(screen.getByTestId('product-img'));
  });

  it('renders title', () => {
    renderComponent();
    expect(screen.getByText('Every recipe, rating & video'));
  });

  it('renders subtitle', () => {
    renderComponent();
    expect(screen.getByText('DIGITAL ALL ACCESS'));
  });

  it('renders cta link', () => {
    renderComponent();
    expect(screen.getByTitle('START FREE TRIAL'));
  });
});
