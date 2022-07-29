import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import PodcastEpisodeCard from './PodcastEpisodeCard';

export default {
  title: 'Components/Cards/PodcastEpisodeCard',
  component: PodcastEpisodeCard,
  argTypes: {
    isPlaying: { control: 'boolean' },
  },
} as ComponentMeta<typeof PodcastEpisodeCard>;

const Template: ComponentStory<typeof PodcastEpisodeCard> = args => (
  <PodcastEpisodeCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  episode: 8,
  title: 'Exodus Bagels: A Small Business and COVID-19',
  description: 'This is the story of one family, struggling to save their bagel cafe in Boston during the COVID-19 pandemic.',
  href: 'https://www.americastestkitchen.com/proof/exodus-bagels-covid-19',
  id: 'ffbb762f-7b06-41a1-bbd1-95bf1a6d1ff6',
  isPlaying: false,
  imageAlt: 'Image alt',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/v1587568772/Proof%20Season%204/04-Pandemic_Exodus_Bagels2.jpg',
  siteKey: 'atk',
  stickers: [{ type: 'editorial', text: '28:08' }],
};
