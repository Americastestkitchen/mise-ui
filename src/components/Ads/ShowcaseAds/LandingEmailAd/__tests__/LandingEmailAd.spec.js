import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import LandingEmailAd from '../LandingEmailAd';
import breakpoints from '../../../../../styles/breakpoints';

const onFormSubmit = jest.fn();

const defaultData = {
  desktopImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  inputId: 'landing-email-ad',
  headline: 'Well-Equipped Cook Newsletter',
  onSubmit: onFormSubmit,
  tabletImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
};

const defaultDark = {
  desktopImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  tabletImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  inputId: 'landing-email-ad',
  onSubmit: onFormSubmit,
  title: 'Get out of that cooking rut with six weeks of this newsletter from Jack Bishop in your inbox.',
};

describe('LandingEmailAd', () => {
  const renderDefault = () => (
    render(
      <ThemeProvider
        theme={{ breakpoints }}
      >
        <LandingEmailAd
          {...defaultData}
        />
      </ThemeProvider>,
    )
  );

  const renderDark = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <LandingEmailAd
          {...defaultDark}
        />
      </ThemeProvider>,
    )
  );

  it('renders a desktop image', () => {
    renderDark();
    expect(screen.getByTestId('landing-ad-image-desktop'));
  });

  it('renders a tablet image', () => {
    renderDark();
    expect(screen.getByTestId('landing-ad-image-tablet'));
  });

  it('renders a title', () => {
    renderDark();
    expect(screen.getByText('Get out of that cooking rut with six weeks of this newsletter from Jack Bishop in your inbox.'));
  });

  it('readers a headline', () => {
    renderDefault();
    expect(screen.getByText('Well-Equipped Cook Newsletter'));
  });

  it('renders email form', () => {
    renderDefault();
    expect(screen.getByText('Sign me up'));
  });
});
