import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ArticleTextBlock from '../ArticleTextBlock';
import breakpoints from '../../../../styles/breakpoints';
import storyProps from '../articleTextBlockStoryProps';

describe('ArticleTextBlock component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ArticleTextBlock {...props} />
      </ThemeProvider>,
    )
  );

  it('render a heading when provided', () => {
    renderComponent({ ...storyProps.noImageDefaultWidth });
    expect(screen.getByRole('heading', { level: 3 }));
  });

  it('not render a heading when not provided', () => {
    renderComponent({ ...storyProps.noImageDefaultWidth, title: null });
    expect(!screen.queryByRole('heading', { level: 3 }));
  });

  it('render content', () => {
    renderComponent({ ...storyProps.noImageDefaultWidth });
    expect(screen.queryByText('After crunching our way'));
  });

  it('render box treatment', () => {
    const { container } = renderComponent({ ...storyProps.boxNoImageDefaultWidth });
    expect(container.querySelector('.article-text-block--box'));
  });

  it('render an inline image above content', () => {
    renderComponent({ ...storyProps.boxTopImageDefaultWidth });
    expect(screen.getByAltText(storyProps.boxTopImageDefaultWidth.photo.altText)).toHaveStyleRule('order: 1;');
  });

  it('render an inline image below content', () => {
    renderComponent({ ...storyProps.boxBottomImageDefaultWidth });
    expect(screen.getByAltText(storyProps.boxBottomImageDefaultWidth.photo.altText)).toHaveStyleRule('order: 3;');
  });

  it('renders block with id for jumplink if includeInTOC', () => {
    const { container } = renderComponent({ ...storyProps.includeInTOC });
    expect(container.querySelector('#testingTOCTitle'));
  });
});
