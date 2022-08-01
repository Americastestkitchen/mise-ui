import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import LoadingRelatedDocumentCard from '../LoadingRelatedDocumentCard';
import breakpoints from '../../../../styles/breakpoints';

describe('LoadingRelatedDocumentCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <LoadingRelatedDocumentCard
          imageAspectRatio="16:9"
          siteKey="atk"
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText('loading-related-img'));
  });

  it('render a badge', () => {
    renderComponent();
    expect(screen.getByTestId('atk-badge'));
  });
});
