import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import PullQuote from './index';
import { siteKey } from '../../../config/argTypes';
import ThemedWrapper from '../../../config/decorators/ThemedWrapper';

export default {
  title: 'Components/Articles/PullQuote',
  component: PullQuote,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof PullQuote>;

const Template: ComponentStory<typeof PullQuote> = props => <PullQuote {...props} />;

const sharedArgs = {
  attribution: 'First Last',
  includeIcon: true,
  quote: 'Cast iron skillets are endlessly enjoyable. You can hand down these pans for generations.',
  siteKey: 'atk',
};

export const DefaultWidth = Template.bind({});
DefaultWidth.args = { ...sharedArgs, width: 'default' };

export const WideWidth = Template.bind({});
WideWidth.args = { ...sharedArgs, width: 'wide' };