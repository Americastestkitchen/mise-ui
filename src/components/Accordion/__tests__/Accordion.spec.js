import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import Accordion from '../Accordion';
import breakpoints from '../../../styles/breakpoints';

describe('Accordion component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <Accordion {...props}>
          <p>Test content</p>
        </Accordion>
      </ThemeProvider>,
    )
  );

  it('render hide-able content by default', () => {
    renderComponent({ label: 'Test' });
    expect(screen.getByTestId('accordion-content').hidden).toBe(false);
  });

  it('hide content when clicked while expanded', () => {
    renderComponent({ label: 'Test' });
    fireEvent.click(screen.getByText('Test'));
    expect(screen.getByTestId('accordion-content').hidden).toBe(true);
  });

  it('reveal content when clicked while collapsed', () => {
    renderComponent({ isHidden: true, label: 'Test' });
    fireEvent.click(screen.getByText('Test'));
    expect(screen.getByTestId('accordion-content').hidden).toBe(false);
  });

  it('render a Plus icon', () => {
    renderComponent({ label: 'Test' });
    expect(screen.getByTestId('plus-svg'));
  });

  it('render a label icon with appropriate props', () => {
    renderComponent({ isFieldset: true, icon: 'cookbook', label: 'Test' });
    expect(screen.getByTestId('cookbook-svg'));
  });
});
