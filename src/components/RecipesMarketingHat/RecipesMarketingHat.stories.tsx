import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import RecipesMarketingHat from './RecipesMarketingHat';

export default {
  title: 'Components|MarketingHat/RecipesMarketingHat1',
  component: RecipesMarketingHat,
  argTypes: { onSubmit: {
    action: 'submitted',
    parameter: '',
  } },
} as ComponentMeta<typeof RecipesMarketingHat>;

const Template: ComponentStory<typeof RecipesMarketingHat> = args => (
  <RecipesMarketingHat {...args} />
);

const defaultArgs = {
  inputId: 'article-page-hat-form',
  user: { isUser: true },
};

export const anonymous = Template.bind({});
anonymous.args = {
  isRegistrant: false,
  ...defaultArgs,
};

export const anonymousTall = Template.bind({});
anonymousTall.args = {
  ...defaultArgs,
  isRegistrant: false,
  description: '<span className="hide-tablet">Cook anything better with the most reliable recipes, guaranteed.<br /></span> Get instant access to everything across our sites free for 2 weeks.',
  isTall: 'is-tall',
};

export const registrant = Template.bind({});
registrant.args = {
  ...defaultArgs,
  isRegistrant: true,
};

export const registrantTall = Template.bind({});
registrantTall.args = {
  ...defaultArgs,
  isRegistrant: true,
  description: '<span className="hide-tablet">Cook anything better with the most reliable recipes, guaranteed.<br /></span> Get instant access to everything across our sites free for 2 weeks.',
  isTall: 'is-tall',
};
