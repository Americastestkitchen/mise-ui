import React from 'react';

import HeroCard from './index';

export default {
  title: 'Components|Cards/HeroCard',
  component: HeroCard,
};

export const Watch = () => (
  <HeroCard
    backgroundCloudinaryId="mise-play/Image_3x.png"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum a dictum ultrices."
    iconKey="atk"
    ctaUrl="www.americastestkitchen.com"
    ctaText="Watch the Latest Episode"
  />
);

export const Learn = () => (
  <HeroCard
    backgroundCloudinaryId="mise-play/Image_3x.png"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum a dictum ultrices."
    ctaUrl="www.americastestkitchen.com"
    ctaText="Start Learning"
    personHeadShot={{
      imgCloudinaryId: 'mise-play/Image_21_3x.png',
    }}
    sticker={{
      contentType: 'video',
      text: '4 videos',
      type: 'editorial',
    }}
  />
);
