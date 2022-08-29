import React from 'react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import ReviewsEmailCapture from '../ReviewsEmailCapture';
import breakpoints from '../../../../../styles/breakpoints';

describe('ReviewsEmailCapture', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ReviewsEmailCapture
          description="Shop smarter with our ATK..."
          inputId="review-email-capture__detail"
          onSubmit={action('click button')}
          title="Sign up for the..."
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('renders title, description, email form', () => {
    renderComponent();
    const emailForm = Array.from(document.getElementsByClassName('email-form'));
    expect(screen.getByText('Shop smarter with our ATK...')
    && screen.getByText('Sign up for the...')
    && emailForm.length > 0);
  });

  it('renders success message', () => {
    renderComponent({ success: true });
    expect(screen.getByText('Thank you! Get ready for Well-Equipped Cook in your inbox on Wednesdays!'));
  });
});
