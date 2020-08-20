import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import InlineNewsletter from '../index';
import breakpoints from '../../../../styles/breakpoints';

const onSubmit = jest.fn();

describe('components', () => {
  const renderComponent = (success = false) => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <InlineNewsletter
          inputId="inline-newsletter"
          onSubmit={onSubmit}
          success={success}
          successText="good"
          subtitle="newsletter"
          title="this is good stuff"
        />
      </ThemeProvider>,
    )
  );

  it('renders subtitle', () => {
    renderComponent();
    expect(screen.getByText('newsletter'));
  });

  it('renders title', () => {
    renderComponent();
    expect(screen.getByText('this is good stuff'));
  });

  it('renders success correctly', () => {
    renderComponent(true);
    expect(screen.getByText('good'));
    expect(screen.queryByText('this is good stuff')).toBeNull();
    expect(screen.queryByTestId('email-form-wrapper')).toBeNull();
  });
});
