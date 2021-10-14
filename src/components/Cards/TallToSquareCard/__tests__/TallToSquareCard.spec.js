import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import TallToSquareCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('TallToSquareCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <TallToSquareCard
          backgroundImageIds={{
            square: 'atk-kids/kids-hp-preschool-card-mobile',
            tall: 'atk-kids/kids-hp-preschool-card-desktop',
          }}
          description="Discover <span>food-based play</span> with <span>themed boxes</span> like Colors, On the Farm & Restaurants."
          gradientColor="#378590"
          highlightColor="#057477"
          href="https://www.americastestkitchen.com/kids/pcc-how-it-works?ref=KidsHomeATF"
          stickerText="Kids 3-5"
          title="Preschool Chefs’ Club"
        />
      </ThemeProvider>,
    )
  );

  it('render a sticker', () => {
    renderComponent();
    expect(screen.getByText('Kids 3-5'));
  });

  it('render a title', () => {
    renderComponent();
    expect(screen.getByText('Preschool Chefs’ Club'));
  });

  it('render a description', () => {
    renderComponent();
    expect(screen.queryByText('On the Farm'));
  });
});
