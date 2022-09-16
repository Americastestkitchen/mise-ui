import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import ReviewsMarketingHat from '../ReviewsMarketingHat';
import breakpoints from '../../../../../styles/breakpoints';

const defaultResponse = {
  buttonText: 'Rejoin Now',
  description: 'Would you cook 700 eggs...',
  headline: 'Get instant access...',
  incode: 'MAR2DAA1A',
  inputId: 'email-form__input',
  mdc: 'AF0150MA1D',
  promoId: 'a-promo-about-700-eggs',
  subdomain: 'www-test',
  title: 'Rejoin Now',
  user: { testing: true },
};

describe('ReviewsMarketingHat', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ReviewsMarketingHat
          {...defaultResponse}
          {...props}
          onSubmit={action('click button')}
        />
      </ThemeProvider>,
    )
  );

  it('renders title, headline, description', () => {
    renderComponent({ isAnonymous: false });
    expect(screen.getByText('Would you cook 700 eggs...')
    && screen.getAllByText('Rejoin Now')
    && screen.getByText('Get instant access...'));
  });

  it('renders full email form for anonymous users', () => {
    renderComponent({ isAnonymous: true });
    const emailForm = Array.from(document.getElementsByClassName('email-form__how'));
    expect(emailForm.length > 0);
  });
});
