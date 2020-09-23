import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import MembershipShowcaseAd from '../index';
import breakpoints from '../../../../../styles/breakpoints';

const defaultData = {
  cta: 'do something',
  ctaHref: '#foo',
  deviceType: 'desktop',
  title: () => <div>Cook with Confidence</div>,
};

describe('MembershipShowcaseAd', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <MembershipShowcaseAd
          {...defaultData}
        />
      </ThemeProvider>,
    )
  );

  it('renders one image', () => {
    renderComponent();
    expect(screen.getByTestId('mise-gif'));
  });

  it('renders a title', () => {
    renderComponent();
    expect(screen.getByText('Cook with Confidence'));
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
