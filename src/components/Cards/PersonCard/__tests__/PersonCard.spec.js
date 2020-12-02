import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import PersonCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('PersonCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <PersonCard
          description="Test PersonCard description."
          imgAlt="test-head-shot"
          imgCloudinaryId="mise-play/Image_21_3x.png"
          name="Test Person"
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText('test-head-shot'));
  });

  it('render a description', () => {
    renderComponent();
    expect(screen.getByText('Test PersonCard description.'));
  });

  it('render a name', () => {
    renderComponent();
    expect(screen.getByText('Test Person'));
  });

  // width and height are fixed for these cards
  it('have correct width and height', () => {
    renderComponent();
    const personCard = screen.getByTestId('person-card');
    expect(personCard).toHaveStyleRule('width: 27.2rem');
    expect(personCard).toHaveStyleRule('height: 27.2rem');
  });
});
