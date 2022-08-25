import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import FormLabel from '../FormLabel';

describe('components', () => {
  const renderComponent = (hidden = false) => (
    render(
      <FormLabel
        hidden={hidden}
        inputId="test-input"
      />,
    )
  );

  it('renders label', () => {
    renderComponent();
    expect(screen.getByTestId('form-label'));
  });

  it('renders hidden', () => {
    renderComponent(true);
    expect(screen.getByTestId('form-label')).toHaveClass('visually-hidden');
  });
});
