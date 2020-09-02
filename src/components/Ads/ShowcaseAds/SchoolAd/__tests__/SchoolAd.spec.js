import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import SchoolAd from '../index';
import breakpoints from '../../../../../styles/breakpoints';

const defaultData = {
  caption: 'dis caption',
  cloudinaryId: 'mise-play/school-ad',
  cta: 'dis cta',
  ctaHref: 'https://school.americastestkitchen.com',
  ctaTarget: '_blank',
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
    expect(screen.getByTestId('school-img'));
  });

  it('renders title', () => {
    renderComponent();
    expect(screen.getByText('dis title'));
  });

  it('renders subtitle', () => {
    renderComponent();
    expect(screen.getByText('dis subtitle'));
  });

  it('renders caption', () => {
    renderComponent();
    expect(screen.getByText('dis caption'));
  });

  it('renders cta link', () => {
    renderComponent();
    expect(screen.getByText('dis cta'));
  });
});
