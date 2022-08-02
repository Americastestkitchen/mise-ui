import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import MediaObjectCard, { MediaCardObjectProps } from './MediaObjectCard';

export default {
  title: 'Components/Cards/MediaObjectCard',
  component: MediaObjectCard,
} as ComponentMeta<typeof MediaObjectCard>;

const Template: ComponentStory<typeof MediaObjectCard> = (args: MediaCardObjectProps) => (
  <MediaObjectCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ctaText: 'View full profile',
  ctaUrl: 'https://www.americastestkitchen.com',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid.',
  personHeadShot: {
    imgCloudinaryId: 'mise-play/Image_21_3x.png',
  },
  personName: 'Bridget Lancaster',
  personTitle: 'On-screen Instructor',
};
