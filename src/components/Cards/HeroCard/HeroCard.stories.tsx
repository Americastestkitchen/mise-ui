import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroCard from './HeroCard';

export default {
  title: 'Components/Cards/HeroCard',
  component: HeroCard,
  argTypes: {
    iconKey: { control: 'select', options: ['atk', 'cco', 'cio'] },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof HeroCard>;

const Template: ComponentStory<typeof HeroCard> = args => <HeroCard {...args} />;

export const Watch = Template.bind({});
export const Learn = Template.bind({});
export const Listen = Template.bind({});

Watch.args = {
  backgroundCloudinaryId: 'mise-play/Image_3x.png',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor ipsum a dictum ultrices.',
  iconKey: 'atk',
  ctaUrl: 'www.americastestkitchen.com',
  ctaText: 'Watch the Latest Episode',
};

Learn.args = {
  ...Watch.args,
  personHeadShot: {
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
  },
  sticker: {
    contentType: 'video',
    text: '4 videos',
    type: 'editorial',
  },
};

Listen.args = {
  ...Watch.args,
  backgroundCloudinaryId: 'v1658418555/Proof%20Play%20Images/Horizontal-The-Vanishing-Ants.jpg',
  iconKey: '',
};
