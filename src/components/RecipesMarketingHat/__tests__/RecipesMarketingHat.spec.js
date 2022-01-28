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
    expect(screen.getByText('Get Every Recipe')
    && screen.getByText('Cook anything better with the most reliable recipes, guaranteed. Get instant access to everything across our sites free for 2 weeks.')
    && screen.getByLabelText('Email address'));
  });

  it('renders button for registrant', () => {
    renderComponent({ isRegistrant: true });
    expect(screen.getByTestId('isRegistrant'));
  });
});
