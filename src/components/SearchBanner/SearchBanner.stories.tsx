import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { addThemedWrapper } from '../../config/decorators';
import LabelFrame from '../LabelFrame/LabelFrame';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import SearchBanner, { SearchBannerProps } from './SearchBanner';
import SearchInput from '../SearchInput';

export default {
  title: 'Components/SearchBanner',
  component: SearchBanner,
  decorators: [addThemedWrapper()],
} as ComponentMeta<typeof SearchBanner>;

const Template: ComponentStory<typeof SearchBanner> = (args: SearchBannerProps) => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchBanner {...args} />
    </LabelFrame>
    <LabelFrame label="Supplemental Component">
      <SearchInput />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
Default.args = {
  message: 'Test Search Banner',
  url: 'www.americastestkitchen.com',
};
