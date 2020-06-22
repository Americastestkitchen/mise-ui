import React from 'react';

import HeroCard from './index';

export default {
  title: 'Components|Cards/HeroCard',
  component: HeroCard,
};

export const Watch = () => (
  <HeroCard
    backgroundImg="https://res.cloudinary.com/hksqkdlah/image/upload/b_rgb:000000,bo_1px_solid_rgb:000000,co_rgb:000000,e_gradient_fade:8,y_-0.5/a_0/v1592424066/mise-play/Image_3x.png"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum a dictum ultrices."
    iconKey="atk"
    ctaUrl="www.americastestkitchen.com"
    ctaText="Watch the Latest Episode"
  />
);

export const Learn = () => (
  <HeroCard
    backgroundImg="https://res.cloudinary.com/hksqkdlah/image/upload/b_rgb:000000,bo_1px_solid_rgb:000000,co_rgb:000000,e_gradient_fade:8,y_-0.5/a_0/v1592424066/mise-play/Image_3x.png"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum a dictum ultrices."
    ctaUrl="www.americastestkitchen.com"
    ctaText="Start Learning"
    personHeadShot={{
      imgSrc: "https://res.cloudinary.com/hksqkdlah/image/upload/v1591822137/mise-play/Image_21_3x.png"
    }}
    sticker={{
      contentType: 'video',
      text: '4 videos',
      type: 'editorial',
    }}
  />
);
