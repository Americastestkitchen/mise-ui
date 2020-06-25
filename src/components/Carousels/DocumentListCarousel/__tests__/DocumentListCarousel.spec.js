import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import breakpoints from '../../../../styles/breakpoints';
import data from './data';
import DocumentListCarousel from '../index';

describe('DocumentListCarousel component should', () => {
  const renderComponent = ({ intro, subtitle, title, type }) => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <DocumentListCarousel
          intro={intro}
          items={data.standardItems}
          subtitle={subtitle}
          title={title}
          type={type}
        />
      </ThemeProvider>,
    )
  );

  it('render all text components', () => {
    renderComponent({
      intro: 'Something even less interesting',
      subtitle: 'Something less interesting',
      title: 'Something interesting',
      type: 'standard',
    });
    expect(screen.getByText('Something interesting'));
    expect(screen.getByText('Something less interesting'));
    expect(screen.getByText('Something even less interesting'));
    expect(screen.getByTestId('card-carousel--standard'));
  });

  it('not render optional components', () => {
    renderComponent({ title: 'Something interesting', type: 'feature' });
    expect(screen.getByTestId('card-carousel--feature'));
    expect(screen.queryAllByText('Something less interesting').length).toBe(0);
    expect(screen.queryAllByText('Something even less interesting').length).toBe(0);
  });
});
