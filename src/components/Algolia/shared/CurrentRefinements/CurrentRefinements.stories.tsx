import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabelFrame from '../../../LabelFrame/LabelFrame';
import CurrentRefinements from './CurrentRefinements';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import SearchRefinementList from '../../search/SearchRefinementList/SearchRefinementList';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Algolia/shared/CurrentRefinements',
  component: CurrentRefinements,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof CurrentRefinements>;

const Template: ComponentStory<typeof CurrentRefinements> = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <CurrentRefinements />
    </LabelFrame>
    <LabelFrame label="Supplemental Component">
      <SearchRefinementList
        attribute="search_review_type_list"
        operator="or"
        showHideLabel="Equipment"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
