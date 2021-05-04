import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import SidebarCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('Sidebar component should', () => {
  const renderComponent = (props) => {
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <SidebarCard
          {...props}
          alt=""
        />
      </ThemeProvider>,
    );
  };

  it('renders photo if provided', () => {
    renderComponent({ photo: 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Pickle_Samples_with_Brine_104-1', altText: 'testing' });
    expect(screen.getByAltText('testing'));
  });

  it('renders title and description', () => {
    renderComponent({ title: 'FAQ About Storing Blue Cheese', description: 'We’ve happily made do with?' });
    expect(screen.getByText('FAQ About Storing Blue Cheese') && screen.getByText('We’ve happily made do with?'));
  });

  it('renders a link w/ url as href', () => {
    renderComponent({ url: '/testing.org' });
    const link = screen.getByRole('link');
    expect(link.getAttribute('href') === '/testing.org');
  });
});
