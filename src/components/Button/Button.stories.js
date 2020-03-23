import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { Button } from '../Button';


export default {
  title: 'Components|Button',
  component: Button,
  decorators: [withKnobs],
};

export const DefaultTextButton = () => (
  <Button onClick={action('click button')}>
    {text("Text", "Done")}
  </Button>
);
