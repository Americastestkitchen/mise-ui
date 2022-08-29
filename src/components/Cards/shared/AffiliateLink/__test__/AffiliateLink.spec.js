import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import AffiliateLink from '../AffiliateLink';
import breakpoints from '../../../../../styles/breakpoints';

const defaultProps = {
  icon: 'Amazon',
  text: 'Buy Now',
  url: 'https://www.amazon.com/dp/B00AW4XQ82/?tag=akoequippilot-20',
};

describe('ReviewableSummaryCard component should', () => {
  const renderComponent = (props = defaultProps) => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <AffiliateLink
          {...props}
        />
      </ThemeProvider>,
    )
  );

  it('render the text', () => {
    renderComponent();
    expect(screen.getByText(defaultProps.text));
  });

  it('renders the image with correct alt text', () => {
    renderComponent();
    expect(screen.getByRole('img'));
  });
});
