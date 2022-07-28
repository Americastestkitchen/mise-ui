import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import SchoolAd from '../SchoolAd';
import breakpoints from '../../../../../styles/breakpoints';

const defaultData = {
  cta: 'dis cta',
  ctaHref: 'https://school.americastestkitchen.com',
  ctaTarget: '_blank',
  deviceType: 'tablet',
  siteKey: 'school',
  subtitle: 'dis subtitle',
  title: 'dis title',
};

describe('SchoolAd', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <SchoolAd
          {...defaultData}
        />
      </ThemeProvider>,
    )
  );

  it('renders image', () => {
    renderComponent();
    expect(screen.getByTestId('mise-gif'));
  });

  it('renders title', () => {
    renderComponent();
    expect(screen.getByText('dis title'));
  });

  it('renders subtitle', () => {
    renderComponent();
    expect(screen.getByText('dis subtitle'));
  });

  it('renders cta link', () => {
    renderComponent();
    expect(screen.getByText('dis cta'));
  });
});
