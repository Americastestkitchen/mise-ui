import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabelFrame from '../LabelFrame/LabelFrame';
import SearchInput from './SearchInput';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = args => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchInput {...args} />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
Default.args = {
  handleClickClose: () => {
    const SearchInputEl: HTMLInputElement | null = document.querySelector('.search-input__input');
    if (SearchInputEl) {
      SearchInputEl.focus();
    }
  },
};
