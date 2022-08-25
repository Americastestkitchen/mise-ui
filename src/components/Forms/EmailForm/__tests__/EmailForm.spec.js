import React from 'react';
import { ThemeProvider } from 'styled-components';
import { fireEvent, render, screen } from '@testing-library/react';

import EmailForm from '../EmailForm';
import breakpoints from '../../../../styles/breakpoints';

const onSubmit = jest.fn();

describe('components', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <EmailForm
          buttonColor="frog"
          buttonText="make me some cookies"
          errorText="no cookies for you!"
          inputId="email-1"
          inputLabel="give da email"
          placeholder="fake email address"
          onSubmit={onSubmit}
        />
      </ThemeProvider>,
    )
  );

  it('renders input', () => {
    renderComponent();
    expect(screen.getByPlaceholderText('fake email address'));
  });

  it('renders submit button', () => {
    renderComponent();
    expect(screen.getByText('make me some cookies'));
  });

  it('renders error message', () => {
    renderComponent();
    fireEvent.change(screen.getByLabelText('give da email'), { target: { value: 'someEmail' } });
    fireEvent.click(screen.getByText('make me some cookies'));
    expect(screen.getByText('no cookies for you!'));
  });

  it('renders Email is required when no email given', () => {
    renderComponent();
    fireEvent.click(screen.getByText('make me some cookies'));
    expect(screen.getByText('Email is required'));
  });

  it('renders label', () => {
    renderComponent();
    expect(screen.getByText('give da email'));
  });

  it('renders how we use link', () => {
    renderComponent();
    expect(screen.getByTestId('email-form__how--link'));
  });

  it('renders how we use message', () => {
    renderComponent();
    fireEvent.click(screen.getByTestId('email-form__how--link'));
    expect(screen.getByTestId('email-form__how--text'));
  });

  it('submits correctly', () => {
    renderComponent();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'foo@bar.com' },
    });
    fireEvent.click(screen.getByText('make me some cookies'));
    expect(screen.queryByTestId('form-error')).toBeNull();
    expect(onSubmit).toHaveBeenCalled();
  });

  it('renders error message', () => {
    renderComponent();
    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'notvalidemail' },
    });
    fireEvent.click(screen.getByText('make me some cookies'));
    expect(screen.getByTestId('form-error'));
    expect(onSubmit).toHaveBeenCalled();
  });
});
