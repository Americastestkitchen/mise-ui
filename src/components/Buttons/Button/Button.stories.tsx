import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Button, { DefaultButton } from './Button';

const type: unknown = {
  options: ['submit', 'reset', 'button'],
  control: { type: 'inline-radio' },
};

export default {
  title: 'Components/Buttons/Button',
  component: Button,
  argTypes: { type },
  parameters: {
    actions: {
      handles: ['click'],
    },
  },
} as ComponentMeta<typeof Button>;

const defaultArgs: DefaultButton = {
  className: '',
  children: 'Done',
  onClick: () => {},
  type: 'button',
};

const Template = (args: DefaultButton) => <Button {...args} />;

export const DefaultTextButton: ComponentStory<typeof Button> = Template.bind({});
DefaultTextButton.args = { ...defaultArgs };
