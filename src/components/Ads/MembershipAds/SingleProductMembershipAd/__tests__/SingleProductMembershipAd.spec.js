import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import SingleProductMembershipAd from '../index';
import breakpoints from '../../../../../styles/breakpoints';

const defaultData = {
  caption: 'this is the caption',
  cloudinaryId: 'mise-play/membership-single',
  cta: 'do something',
  ctaHref: '#foo',
  title: () => <div>Cook with Confidence</div>,
};

describe('components', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <SingleProductMembershipAd
          {...defaultData}
        />
      </ThemeProvider>,
    )
  );

  it('renders one image', () => {
    renderComponent();
    expect(screen.getByTestId('single-membership-ad-img'));
  });

  it('renders a title', () => {
    renderComponent();
    expect(screen.getByText('Cook with Confidence'));
  });

  it('renders a caption', () => {
    renderComponent();
    expect(screen.getByText('this is the caption'));
  });

  it('renders icons', () => {
    renderComponent();
    expect(screen.getByTestId('benefit-icons'));
  });

  it('renders cta link', () => {
    renderComponent();
    expect(screen.getByTitle('do something'));
  });
});
