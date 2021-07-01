import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import RelatedDocumentCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('RelatedDocumentCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <RelatedDocumentCard
          attribution="AMERICA’S TEST KITCHEN"
          contentType="episode"
          imageAlt="this is a test, only a test"
          imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,f_auto,g_faces:auto,q_auto:low,w_300,ar_16:9/v1592840035/mise-play/feature-card-wide.jpg"
          siteKey="atk"
          stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: '28:03' }]}
          subtitle="This is the subtitle"
          title="Tasting International Yogurts"
          href="https://www.americastestkitchen.com/episode/742-crepes-two-ways"
        />
      </ThemeProvider>,
    )
  );

  it('render a title', () => {
    renderComponent();
    expect(screen.getByText('Tasting International Yogurts'));
  });

  it('render a subtitle', () => {
    renderComponent();
    expect(screen.getByText('This is the subtitle'));
  });

  it('render a badge', () => {
    renderComponent();
    expect(screen.getByTestId('atk-badge'));
  });

  it('render a priority sticker', () => {
    renderComponent();
    expect(screen.getByText('New'));
  });

  it('render an editorial sticker', () => {
    renderComponent();
    expect(screen.getByText('28:03'));
  });

  it('render an attribution', () => {
    renderComponent();
    expect(screen.getByText('AMERICA’S TEST KITCHEN'));
  });
});
