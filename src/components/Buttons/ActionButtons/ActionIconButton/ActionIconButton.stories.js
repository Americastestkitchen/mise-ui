import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs, text } from '@storybook/addon-knobs/react';

import ActionIconButton from './index';

export default {
  title: 'Components|Buttons/ActionButtons/ActionIconButton',
  component: ActionIconButton,
  decorators: [withKnobs],
};

export const PrintActionButton = () => (
  <ActionIconButton
    iconType='print'
    onClick={action('click button')}
    text="Print recipes"
  />
);
