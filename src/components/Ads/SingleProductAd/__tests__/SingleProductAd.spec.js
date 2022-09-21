import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import SingleProductAd from '../SingleProductAd';
import breakpoints from '../../../../styles/breakpoints';

const defaultData = {
  cloudinaryId: 'mise-play/single-product-atk',
  cta: 'Save 55% NOW',
  ctaHref: '#foo',
  title: 'Get 1,670+ recipes from all 21 seasons!',
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

  it('renders a title', () => {
    renderComponent();
    expect(screen.getByText('Get 1,670+ recipes from all 21 seasons!'));
  });

  it('renders an image', () => {
    renderComponent();
    expect(screen.getByTestId('single-product-ad-img'));
  });

  it('renders cta link', () => {
    renderComponent();
    expect(screen.getByTitle('Save 55% NOW'));
  });
});
