import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import EditorsNote from '../index';
import breakpoints from '../../../styles/breakpoints';

const defaultProps = {
  subtitle: 'February 2020',
  title: 'Price Update',
  text: 'This is longer and less interesting',
  type: 'bell',
};

describe('EditorsNote component should', () => {
  const renderComponent = (props = defaultProps) => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <EditorsNote
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('render the text', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.text));
  });

  it('render the title', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.title));
  });

  it('render the subtitle', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.subtitle));
  });

  it('renders the icon', () => {
    renderComponent();
    expect(screen.getByRole('img'));
  });
});
