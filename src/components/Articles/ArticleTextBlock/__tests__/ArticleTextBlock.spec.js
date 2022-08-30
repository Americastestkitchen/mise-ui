import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import {
  WithTheme,
  DropCap,
  BoxBottomImageDefaultWidth,
  BoxTopImageDefaultWidth,
} from '../ArticleTextBlock.stories';

describe('ArticleTextBlock component should', () => {
  it('render a heading when provided', () => {
    const { getByRole } = render(<WithTheme {...WithTheme.args} />);
    expect(getByRole('heading', { level: 3 }));
  });

  it('not render a heading when not provided', () => {
    const { queryByRole } = render(<DropCap {...DropCap.args} />);
    expect(!queryByRole('heading', { level: 3 }));
  });

  it('render content', () => {
    const { queryByText } = render(<WithTheme {...WithTheme.args} />);
    expect(queryByText('After crunching our way'));
  });

  it('render box treatment', () => {
    const { container } = render(
      <BoxBottomImageDefaultWidth {...BoxBottomImageDefaultWidth.args} />,
    );
    const boxComponent = container.getElementsByClassName('article-text-block--box');
    expect(boxComponent.length).toBe(1);
  });

  it('render an inline image above content', () => {
    const { getByAltText } = render(<BoxTopImageDefaultWidth {...BoxTopImageDefaultWidth.args} />);
    expect(getByAltText(BoxTopImageDefaultWidth.args.photo.altText)).toHaveStyleRule('order: 1;');
  });

  it('render an inline image below content', () => {
    const { getByAltText } = render(
      <BoxBottomImageDefaultWidth {...BoxBottomImageDefaultWidth.args} />,
    );
    expect(getByAltText(BoxBottomImageDefaultWidth.args.photo.altText)).toHaveStyleRule('order: 3;');
  });

  it('renders block with id for jumplink if includeInTOC', () => {
    const { getByTestId } = render(<WithTheme {...{ ...WithTheme.args, includeInTOC: 'testingTOCTitle' }} />);
    expect(getByTestId('testingTOCTitle'));
  });
});
