import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import FavoriteActionButton, { DefaultFavoriteActionButton } from './FavoriteActionButton';

export default {
  title: 'Components/Buttons/ActionButtons/FavoriteActionButton',
  component: FavoriteActionButton,
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as ComponentMeta<typeof FavoriteActionButton>;

const defaultArgs: DefaultFavoriteActionButton = {
  className: '',
  favoritableId: '',
  isFavorited: false,
  onClick: () => {},
  title: 'button',
};

const Template = (args: DefaultFavoriteActionButton) => <FavoriteActionButton {...args} />;

export const FavoriteButton: ComponentStory<typeof FavoriteActionButton> = Template.bind({});
FavoriteButton.args = { ...defaultArgs };
