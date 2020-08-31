import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import MembershipShowcaseAd from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('components', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <MembershipShowcaseAd
          cloudinaryId="mise-play/play-showcase-membership-ad"
          cta="get free access"
          ctaHref="https://www.americastestkitchen.com"
          title={() => <div>Cook with Confidence</div>}
        />
      </ThemeProvider>,
    )
  );

  it('renders an image', () => {
    renderComponent();
    expect(screen.getByTestId('membership-showcase-ad-img'));
  });

  it('renders a title', () => {
    renderComponent();
    expect(screen.getByText('Cook with Confidence'));
  });

  it('renders benefit icons and text', () => {
    renderComponent();
    expect(screen.getByTestId('membership-benefit-0'));
    expect(screen.getByText('12,000 + recipes'));

    expect(screen.getByTestId('membership-benefit-1'));
    expect(screen.getByText('8,000 + ratings'));

    expect(screen.getByTestId('membership-benefit-2'));
    expect(screen.getByText('video and tips'));

    expect(screen.getByTestId('membership-benefit-3'));
    expect(screen.getByText('cookbook collection'));

    expect(screen.getByTestId('membership-benefit-4'));
    expect(screen.getByText('mobile app'));
  });

  it('renders cta link', () => {
    renderComponent();
    expect(screen.getByTitle('get free access'));
  });
});
