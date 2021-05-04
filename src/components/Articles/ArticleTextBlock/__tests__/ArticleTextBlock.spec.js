import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ArticleTextBlock from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('ArticleTextBlock component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ArticleTextBlock {...props} content="Test Content" />
      </ThemeProvider>,
    )
  );

  it('render a heading when provided', () => {
    renderComponent({ title: 'Test Heading' });
    expect(screen.getByRole('heading', { level: 3 }));
  });

  it('not render a heading when not provided', () => {
    renderComponent({});
    expect(!screen.queryByRole('heading', { level: 3 }));
  });

  it('render content', () => {
    renderComponent({});
    expect(screen.getByText('Test Content'));
  });
});
