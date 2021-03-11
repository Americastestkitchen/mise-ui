import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ReviewableSummaryCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

const defaultProps = {
  id: 2058,
  name: 'Morton & Bassett Chili Powder',
  isShortList: true,
  recommendationStatus: 'Recommended',
  winnerHeader: 'Best Buy',
  testersComments: '<p>This “smoky, sizzling, full-flavored” chili powder was “much more dimensional than others.” “The flavor I’ve been waiting for!” one taster wrote. The “hot, smoky, herbaceous” powder was “balanced,” “bright,” and “lively,” with “raisiny fruitiness” and a “nice building heat.”</p>',
  winner: true,
  asin: 'B00AW4XQ82',
  price: '$5.19 for 1.9 oz ($2.73 per oz)',
  cloudinaryId: '12540_sil-chili-powder-morton-and-bassett-3',
  buyNowLink: 'https://www.amazon.com/dp/B00AW4XQ82/?tag=akoequippilot-20',
  buyNowOverrideAffiliateName: null,
  buyNowOverrideAffiliateActive: false,
  imageAltText: 'Buy me',
};

describe('ReviewableSummaryCard component should', () => {
  const renderComponent = (props = defaultProps) => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ReviewableSummaryCard
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('render the name', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.name));
  });

  it('renders the winner sticker with custom text', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.winnerHeader));
  });

  it('renders the winner sticker with default text', () => {
    renderComponent({ ...defaultProps, winnerHeader: null });
    expect(screen.getByText('Winner'));
  });

  it('renders the editorial sticker with proper text', () => {
    renderComponent({ ...defaultProps, winner: false });
    expect(screen.getByText('Best Buy'));
  });

  it('renders the image with correct alt text', () => {
    renderComponent();
    expect(screen.getByAltText(defaultProps.imageAltText));
  });

  it('renders the price', () => {
    renderComponent({ ...defaultProps, price: '$5' });
    expect(screen.getByText('$5'));
  });

  it('renders the affiliate link with Buy Now text', () => {
    renderComponent();
    expect(screen.getByText('Buy Now'));
  });
});
