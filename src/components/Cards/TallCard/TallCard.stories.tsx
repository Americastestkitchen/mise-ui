import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import TallCard from './TallCard';

export default {
  title: 'Components/Cards/TallCard',
  component: TallCard,
  decorators: [withKnobs],
};

export const Default = () => (
  <TallCard
    contentType="episode"
    dek="New episodes weekly"
    href="https://www.google.com"
    logoKey="atk"
    imageAlt={text('Image alt text', '')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1592937037/mise-play/tall-card.jpg')}
    overlayColor="#a53015"
    siteKey="cco"
    stickers={[{ type: 'priority', text: 'Popular' }]}
    onClick={action('result-click')}
  />
);

export const Wide = () => (
  <TallCard
    contentType="episode"
    dek="Intimate conversations with culinary trailblazers"
    href="https://www.google.com"
    logoKey="cco"
    imageAlt={text('Image alt text', '')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/v1593448958/mise-play/tall-card-wide.jpg')}
    isWide
    overlayColor="#711a5d"
    siteKey="cco"
    stickers={[{ type: 'priority', text: 'New' }, { type: 'editorial', text: '38:08' }]}
    onClick={action('result-click')}
  />
);
