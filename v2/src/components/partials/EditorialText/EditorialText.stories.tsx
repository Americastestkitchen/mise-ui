import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EditorialText from './EditorialText';

export default {
  title: 'Components/Partials/EditorialText',
  component: EditorialText,
} as ComponentMeta<typeof EditorialText>;

const Template: ComponentStory<typeof EditorialText> = args => <EditorialText {...args} />;

export const SampleContent = Template.bind({});
SampleContent.args = {
  content: '<p>This component is meant to be used when we need to render WSYIWYG text fields.</p><p>Currently it can style <a href="https://www.americastestkitchen.com">underlined links</a>, <em>italicized text</em>, and <strong>bolded text</strong>.</p>',
  fontStyle: 'primary',
};