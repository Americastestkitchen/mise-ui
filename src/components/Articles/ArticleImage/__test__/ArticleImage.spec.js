import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ArticleImage from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('ArticleImage component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ArticleImage
          {...props}
          alt="Test Alt Text"
          imgSrc="https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_341/v1/AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007"
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent({});
    expect(screen.getByAltText('Test Alt Text'));
  });

  it('render a caption if provided', () => {
    renderComponent({ caption: 'Test Caption' });
    expect(screen.getByText('Test Caption'));
  });

  it('not render a caption if not provided', () => {
    renderComponent({});
    expect(!screen.queryByText('Test Caption'));
  });
});
