import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import AtkMarketingHat from '../index';
import breakpoints from '../../../styles/breakpoints';

const defaultResponse = {
  inputId: 'article-page-hat-form',
  onSubmit: action('click button'),
  user: { isUser: true },
};

describe('AtkMarketingHat', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <AtkMarketingHat
          {...defaultResponse}
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('renders headline, description, input when anon', () => {
    renderComponent({ isRegistrant: false });
    expect(screen.getByText('Cook Anything with Confidence')
    && screen.getByText('Start your 2-week free trial and get instant access to everything.')
    && screen.getByLabelText('Email address'));
  });

  it('renders button for registrant', () => {
    renderComponent({ isRegistrant: true });
    expect(screen.getByTestId('isRegistrant'));
  });
});
