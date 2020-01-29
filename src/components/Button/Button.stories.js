import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';


export default {
  title: 'Components|Button',
  component: Button,
};

export const Text = () => <Button>Hello Button</Button>;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
