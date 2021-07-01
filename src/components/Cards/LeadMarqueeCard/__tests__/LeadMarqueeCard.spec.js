import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import LeadMarqueeCard from '../index';
import breakpoints from '../../../../styles/breakpoints';

describe('LeadMarqueeCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <LeadMarqueeCard
          author="Kevin Pang"
          authorImageCloudinaryId="Play%20Cast%20Headshots/staff_dan_souza"
          imageAlt="Image alt text"
          imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/v1/AKO%20Articles/Cooking%20for%20One/SFS_LemonySpaghettiGarlicPineNuts-4"
          backgroundColor="#783681"
          description="There’s a better way than squinting into a laptop."
          href="https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing"
          siteKey="atk"
          stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: 'Holiday' }]}
          title="How to Make Your Zoom Thanksgiving Feel Like the Real Thing"
        />
      </ThemeProvider>,
    )
  );

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
    expect(screen.getByText('Holiday'));
  });

  it('render an image', () => {
    renderComponent();
    expect(screen.getByAltText('Image alt text'));
  });

  it('renders a title', () => {
    renderComponent();
    expect(screen.getByText('How to Make Your Zoom Thanksgiving Feel Like the Real Thing'));
  });

  it('renders a description', () => {
    renderComponent();
    expect(screen.getByText('There’s a better way than squinting into a laptop.'));
  });

  it('renders an author', () => {
    renderComponent();
    expect(screen.getByText('By Kevin Pang'));
  });
});
