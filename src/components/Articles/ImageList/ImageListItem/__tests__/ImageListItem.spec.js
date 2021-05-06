import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import ImageListItem from '../index';
import breakpoints from '../../../../../styles/breakpoints';

describe('ImageListItem component should', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <ImageListItem
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('renders a photo if provided', () => {
    renderComponent({ cloudinaryId: 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Pickle_Samples_with_Brine_104-1', altText: 'testing' });
    expect(screen.getByAltText('testing'));
  });

  it('renders a content description', () => {
    renderComponent({ content: 'testing' });
    expect(screen.getByText('testing'));
  });
});
