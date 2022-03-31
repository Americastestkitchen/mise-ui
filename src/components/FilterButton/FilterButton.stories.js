import React from 'react';

import FilterButton from './index';
import { mode, siteKey } from '../../config/argTypes';
import { addThemedWrapper } from '../../config/decorators';

export default {
  title: 'Components/FilterButton',
  component: FilterButton,
  decorators: [ addThemedWrapper() ],
  argTypes: { mode, siteKey },
};

const Template = args => <FilterButton {...args} />;

export const LightMode = Template.bind({});
LightMode.args = { siteKey: 'atk' };

export const DarkMode = Template.bind({});
DarkMode.args = { mode: 'dark', siteKey: 'atk', text: 'More Seasons' };
