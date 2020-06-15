import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import PersonHeadShot from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('PersonHeadShot component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <PersonHeadShot
          imgAlt="test-head-shot"
          imgSrc="https://res.cloudinary.com/hksqkdlah/image/upload/v1591822137/mise-play/Image_21_3x.png"
        />
      </ThemeProvider>,
    )
  );

  it('render an image with correct dimensions', () => {
    renderComponent();
    const headShot = screen.getByAltText('test-head-shot');
    expect(headShot);
    expect(headShot).toHaveStyle('border-radius: 10rem;');
    expect(headShot).toHaveStyle('height: 10rem;');
    expect(headShot).toHaveStyle('width: 10rem;');
  });
});
