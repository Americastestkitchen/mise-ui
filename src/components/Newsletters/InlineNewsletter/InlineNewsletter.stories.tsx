import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import InlineNewsletter, { InlineNewsletterProps } from './InlineNewsletter';
import DarkModeWrapper from '../../../config/decorators/DarkMode';

export default {
  title: 'Components/Newsletters/InlineNewsletter',
  component: InlineNewsletter,
  decorators: [DarkModeWrapper()],
} as ComponentMeta<typeof InlineNewsletter>;

const Template: ComponentStory<typeof InlineNewsletter> = (args: InlineNewsletterProps) => (
  <InlineNewsletter {...args} />
);

export const Default: ComponentStory<typeof InlineNewsletter> = Template.bind({});
Default.args = {
  buttonColor: 'frog',
  buttonTextColor: 'white',
  buttonText: 'Sign me up',
  inputId: 'newsletter-email',
  onSubmit: () => {},
  subtitle: 'ATK Kids Newsletter',
  success: false,
  title: 'Get kid-friendly recipes and fun activities from the test kitchen in your inbox!',
};

export const DefaultSuccess: ComponentStory<typeof InlineNewsletter> = Template.bind({});
DefaultSuccess.args = {
  buttonColor: 'frog',
  buttonTextColor: 'white',
  buttonText: 'Sign me up',
  inputId: 'newsletter-email',
  onSubmit: () => {},
  subtitle: 'ATK Kids Newsletter',
  success: true,
  successText: 'Thank you! Get ready for Well-Equipped Cook in your inbox on Wednesdays!',
  title: 'Get kid-friendly recipes and fun activities from the test kitchen in your inbox!',
};
