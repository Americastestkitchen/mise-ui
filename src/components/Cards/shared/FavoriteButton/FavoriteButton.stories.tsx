import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FavoriteButton from './FavoriteButton';

export default {
  title: 'Components/Cards/shared/FavoriteButton',
  component: FavoriteButton,
  argTypes: {
    siteKey: {
      control: {
        type: 'select',
        options: [
          'atk', 'cco', 'cio',
        ],
      },
    },
    isFavorited: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof FavoriteButton>;

export const Default = () => (
  <FavoriteButton
    className="favorite-ribbon"
    isFavorited={false}
    objectId="123"
    siteKey="atk"
    title=""
  />
);

export const Favorited = () => (
  <FavoriteButton
    className="favorite-ribbon"
    isFavorited
    objectId="123"
    siteKey="atk"
    title=""
  />
);

const Template: ComponentStory<typeof FavoriteButton> = args => <FavoriteButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  className: 'favorite-ribbon',
  isFavorited: false,
  objectId: '123',
  siteKey: 'atk',
  title: '',
};
