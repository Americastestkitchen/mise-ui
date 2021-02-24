import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import SubscribeBubbles from '../index';
import breakpoints from '../../../styles/breakpoints';

describe('SubscribeBubbles component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <SubscribeBubbles
          bubbles={[{
            type: 'applePodcasts',
            name: 'Apple Podcasts',
            href: 'https://itunes.apple.com/us/podcast/proof/id1438546054',
          }]}
          pathname="/podcasts"
        />
      </ThemeProvider>,
    )
  );

  it('render a subscribe heading', () => {
    renderComponent();
    expect(screen.getByText('SUBSCRIBE'));
  });

  it('render a subscription name', () => {
    renderComponent();
    expect(screen.getByText('Apple Podcasts'));
  });

  it('render a subscription icon', () => {
    renderComponent();
    expect(screen.getByTestId('apple-podcasts'));
  });
});
