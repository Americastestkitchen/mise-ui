import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import FormInput from '../index';

const onChange = jest.fn();

describe('components', () => {
  const renderComponent = (error = '') => (
    render(
      <FormInput
        aria-label="email"
        error={error}
        name="email"
        onChange={onChange}
        placeholder="placeholder text"
        readOnly={false}
      />,
    )
  );

  it('renders input', () => {
    renderComponent();
    expect(screen.getByPlaceholderText('placeholder text'));
  });

  it('renders error message', () => {
    renderComponent('dis error');
    expect(screen.getByText('dis error'));
  });

  it('submits correctly', () => {
    renderComponent();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'foo@bar.com' },
    });
    expect(onChange).toHaveBeenCalled();
  });
});
