import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EmailForm from './EmailForm';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Forms/EmailForm',
  component: EmailForm,
  decorators: [addThemedWrapper()],
  parameters: {
    actions: {
      handles: ['submit'],
    },
  },
} as ComponentMeta<typeof EmailForm>;

const Template: ComponentStory<typeof EmailForm> = args => (
  <EmailForm {...args} />
);

export const Default = Template.bind({});
Default.args = {
  inputId: 'form-input',
  onSubmit: () => {},
};
