import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticleCard from './ArticleCard';

export default {
  title: 'Components/ArticleCard',
  component: ArticleCard,
} as ComponentMeta<typeof ArticleCard>;

const Template: ComponentStory<typeof ArticleCard> = props => <ArticleCard {...props} />;

export const Default = Template.bind({});
Default.args = {
  documentSiteKey: 'atk',
  title: 'Testing',
  description: 'Card',
  cloudinaryId: 'SFS_stir_fried_ground_pork_topping_congee-1_1_la51ps',
  stickers: [],
  authors: [],
  attribution: '',
  linkProps: {
    href: '',
  },
};
