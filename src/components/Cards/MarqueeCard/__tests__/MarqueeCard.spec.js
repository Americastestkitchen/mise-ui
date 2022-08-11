import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import MarqueeCard from '../MarqueeCard';

import breakpoints from '../../../../styles/breakpoints';

describe('MarqueeCard component should', () => {
  const renderComponent = () => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <MarqueeCard
          author="Kevin Pang"
          authorImageCloudinaryId="Play%20Cast%20Headshots/staff_dan_souza"
          imageUrl="https://res.cloudinary.com/hksqkdlah/image/upload/v1/AKO%20Articles/Cooking%20for%20One/SFS_LemonySpaghettiGarlicPineNuts-4"
          description="Including a virtual bread project; a punchy, small-batch hot sauce; and a digital encyclopedia of Texas tacos."
          href="https://www.americastestkitchen.com/articles/2839-how-to-make-your-zoom-thanksgiving-feel-like-the-real-thing"
          publishDate="Yesterday"
          siteKey="atk"
          stickers={[{ type: 'editorial', text: 'Community' }]}
          title="10 Things in the Food World We Loved in November"
        />
      </ThemeProvider>,
    )
  );

  it('render a badge', () => {
    renderComponent();
    expect(screen.getByTestId('atk-badge'));
  });

  it('render an editorial sticker', () => {
    renderComponent();
    expect(screen.getByText('Community'));
  });

  it('render an image', () => {
    renderComponent();
    expect(screen.getAllByAltText(''));
  });

  it('renders a title', () => {
    renderComponent();
    expect(screen.getByText('10 Things in the Food World We Loved in November'));
  });

  it('renders a description', () => {
    renderComponent();
    expect(screen.getByText('Including a virtual bread project; a punchy, small-batch hot sauce; and a digital encyclopedia of Texas tacos.'));
  });

  it('renders an author and a publish date', () => {
    renderComponent();
    expect(screen.getByText('Kevin Pang'));
    expect(screen.getByText('Yesterday'));
  });
});
