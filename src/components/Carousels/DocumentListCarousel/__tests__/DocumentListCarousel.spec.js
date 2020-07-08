import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import breakpoints from '../../../../styles/breakpoints';
import data from './data';
import DocumentListCarousel from '../index';

describe('DocumentListCarousel component should', () => {
  const renderComponent = ({ ctaText, ctaUrl, intro, title, type }) => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <DocumentListCarousel
          ctaText={ctaText}
          ctaUrl={ctaUrl}
          intro={intro}
          items={data.standardItems}
          title={title}
          type={type}
        />
      </ThemeProvider>,
    )
  );

  it('render all text components', () => {
    renderComponent({
      ctaUrl: 'https://www.americastestkitchen.com',
      ctaText: 'Something less interesting',
      intro: 'Something even less interesting',
      title: 'Something interesting',
      type: 'standard',
    });
    expect(screen.getByText('Something interesting'));
    expect(screen.getByText('Something less interesting', { exact: false }));
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
