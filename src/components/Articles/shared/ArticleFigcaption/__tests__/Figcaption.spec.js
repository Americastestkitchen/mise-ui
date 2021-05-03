import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ArticleFigcaption from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('ArticleFigcaption component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ArticleFigcaption {...props} />
      </ThemeProvider>,
    )
  );

  it('render caption text', () => {
    const caption = 'Test Caption';
    renderComponent({ caption, decorationPosition: 'bottom' });
    expect(screen.getByText(caption));
  });
});
