import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import LandingEmailAd from '../index';
import breakpoints from '../../../../../styles/breakpoints';

const onFormSubmit = jest.fn();

const defaultData = {
  headline: 'Well-Equipped Cook Newsletter',
  inputId: 'landing-email-ad',
  onSubmit: onFormSubmit,
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
};

const defaultDark = {
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

  it('renders an image', () => {
    renderDark();
    expect(screen.getByTestId('adImage'));
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
