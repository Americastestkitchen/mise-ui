import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import EmailCapture from './EmailCapture';

export default {
  title: 'Components/Email Capture',
  component: EmailCapture,
  parameters: { actions: { validSubmission: true} },
} as ComponentMeta<typeof EmailCapture>;


const Template: ComponentStory<typeof EmailCapture> = (args) => <EmailCapture {...args} />;

export const DefaultCapture: ComponentStory<typeof EmailCapture> = Template.bind({});
DefaultCapture.args = {view: {
  frequency: 'Weekly',
  days: 'Mondays',
  title:
    'Notes From the Test Kitchen',
  description:
    'The latest from the test kitchen—our best seasonal recipes, equipment reviews, cooking advice, and behind-the-scenes spotlights of our cast, crew, and staff.',
  successText:
    '<strong>Thank you!</strong> Get ready for weeknight meals from the Dinner Tonight cook in your inbox.',
},
meta: {
  newsletter_id: '16',
},
validSubmission: false,
onClick: () => {},
}  