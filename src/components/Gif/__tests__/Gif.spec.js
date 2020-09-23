import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';

import breakpoints from '../../../styles/breakpoints';
import Gif from '../index';
import { getGifSrcSet } from '../../../lib/cloudinary';

describe('components', () => {
  const renderComponent = cloudinaryId => (
    render(
      <ThemeProvider
        theme={{
          breakpoints,
          mode: 'dark',
        }}
      >
        <Gif
          aspectRatio="16:9"
          id={`step-shot-${cloudinaryId}`}
          lazy={false}
          srcSet={getGifSrcSet(
            cloudinaryId,
            'showcaseSchoolAdDesktop',
            {
              aspectRatio: '16:9',
              width: 320,
            },
          )}
        />
      </ThemeProvider>,
    )
  );

  it('renders video element', () => {
    renderComponent('drying-kernals_1_ktu4rt');
    expect(screen.getByTestId('mise-gif'));
  });
});
