import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs, text } from '@storybook/addon-knobs/react';

import FavoriteActionButton from './index';

export default {
  title: 'Components|Buttons/ActionButtons/FavoriteActionButton',
  component: FavoriteActionButton,
  decorators: [withKnobs],
};

export const Default = () => (
  <FavoriteActionButton
    isFavorited={boolean("Is Favorited", false)}
    onClick={action('click button')}
  />
);
