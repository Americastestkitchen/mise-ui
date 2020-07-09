import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';

import ActionButton from './index';

export default {
  title: 'Components|Buttons/ActionButton',
  component: ActionButton,
  decorators: [withKnobs],
};

export const FavoriteActionButton = () => (
  <ActionButton
    actionType="favorite"
    onClick={action('click button')}
  >
    {text('Text', 'Done')}
  </ActionButton>
);
