import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';

import QueueCard from '../QueueCard';
import breakpoints from '../../../../styles/breakpoints';

const inProgressEpisode = {
  contentType: 'episode',
  href: 'https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2',
  imageAlt: 'Image alt text',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1560883900/ATKTV%20and%20CCTV%20Season%20Refresh/ATKTV%20S19/ATK-S1926_Episode.jpg',
  progress: 0.25,
  siteKey: 'atk',
  stickers: [{ type: 'editorial', text: '28:08' }],
  title: 'Hearty Mediterranean at Home',
  type: 'episode',
  videoId: 'episode_666',

};

const nextSkill = {
  contentType: 'episode',
  href: 'https://www.americastestkitchen.com/equipment_reviews/1879-plastic-food-storage-containers?ref=new_search_experience_2',
  imageAlt: 'Image alt text',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1497106905/35926_episode.jpg',
  progress: 0.25,
  siteKey: 'atk',
  stickers: [{ type: 'editorial', text: '28:08' }],
  title: 'Bakery-Style Pastries',
  type: 'skill',
  videoId: 'video_4293',
};

describe('QueueCard component', () => {
  const renderComponent = props => (
    render(
      <ThemeProvider theme={{ breakpoints }}>
        <QueueCard {...props} />
      </ThemeProvider>,
    )
  );

  it('render a badge', () => {
    renderComponent(inProgressEpisode);
    expect(screen.getByTestId('atk-badge'));
  });

  it('render an image', () => {
    renderComponent(inProgressEpisode);
    expect(screen.getByAltText('Image alt text'));
  });

  // width is fixed for this card
  it('has correct width', () => {
    renderComponent(inProgressEpisode);
    const queueCard = screen.getByTestId('queue-card');
    expect(queueCard).toHaveStyleRule('width: 27.2rem');
  });

  it('render an editorial sticker', () => {
    renderComponent(inProgressEpisode);
    expect(screen.getByText('28:08'));
  });

  it('render a title', () => {
    renderComponent(inProgressEpisode);
    expect(screen.getByText('Hearty Mediterranean at Home'));
  });

  it('render a progress bar', () => {
    renderComponent(inProgressEpisode);
    expect(screen.getByTestId('in-progress'));
  });

  it('does not render a progress bar', () => {
    renderComponent(nextSkill);
    expect(screen.getByTestId('in-progress', { exact: false }));
  });

  it('has correct type', () => {
    renderComponent(inProgressEpisode);
    expect(screen.getByText('Resume episode'));
  });

  it('has correct type', () => {
    renderComponent(nextSkill);
    expect(screen.getByText('Resume skill'));
  });
});
