import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import PodcastEpisodeCard from '../PodcastEpisodeCard';

import breakpoints from '../../../styles/breakpoints';

describe('PodcastEpisodeCard component', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <PodcastEpisodeCard
          episode={8}
          title="Exodus Bagels: A Small Business and COVID-19"
          description="This is the story of one family, struggling to save their bagel cafe in Boston during the COVID-19 pandemic."
          href="https://www.americastestkitchen.com/proof/exodus-bagels-covid-19"
          imageAlt="Image alt text"
          cardId="exodus-bagels-a-small-business-and-covid"
          id="ffbb762f-7b06-41a1-bbd1-95bf1a6d1ff6"
          imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,h_460,q_auto:low,w_460/v1/Proof%20Season%204/04-Pandemic_Exodus_Bagels2"
          siteKey="atk"
          stickers={[{ type: 'editorial', text: '28:08' }]}
        />
      </ThemeProvider>,
    )
  );

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText('Image alt text'));
  });

  it('render an editorial sticker', () => {
    renderComponent();
    expect(screen.getByText('28:08'));
  });

  it('renders an episode number', () => {
    renderComponent();
    expect(screen.getByText('Episode 8'));
  });

  it('renders a title', () => {
    renderComponent();
    expect(screen.getByText('Exodus Bagels: A Small Business and COVID-19'));
  });

  it('renders a description', () => {
    renderComponent();
    expect(screen.getAllByText('This is the story of one family, struggling to save their bagel cafe in Boston during the COVID-19 pandemic.'));
  });

  it('render an atk badge', () => {
    renderComponent();
    expect(screen.getByTestId('badge'));
  });
});
