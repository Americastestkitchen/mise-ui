import React from 'react';

import PullQuote from './index';
import { siteKey } from '../../../argTypes';

export default {
  title: 'Components/Articles/PullQuote',
  component: PullQuote,
  argTypes: { siteKey },
};

const Template = (args) => <PullQuote {...args} />;

const sharedArgs = {
  attribution: 'First Last',
  includeIcon: true,
  quote: 'Cast iron skillets are endlessly enjoyable. You can hand down these pans for generations.',
  siteKey: 'atk'
};

export const DefaultWidth = Template.bind({});
DefaultWidth.args = { ...sharedArgs, width: 'default' };

export const WideWidth = Template.bind({});
WideWidth.args = { ...sharedArgs, width: 'wide' };
