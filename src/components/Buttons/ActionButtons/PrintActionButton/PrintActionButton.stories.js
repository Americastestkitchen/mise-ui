import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, withKnobs, text } from '@storybook/addon-knobs/react';

import PrintActionButton from './index';

export default {
  title: 'Components|Buttons/ActionButtons/PrintActionButton',
  component: PrintActionButton,
  decorators: [withKnobs],
};

export const Default = () => (
  <PrintActionButton
    actionType='print'
    onClick={action('click button')}
    text="Print recipes"
  />
);
