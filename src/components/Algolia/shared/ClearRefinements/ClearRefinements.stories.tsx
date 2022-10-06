import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabelFrame from '../../../LabelFrame/LabelFrame';
import ClearRefinements from './ClearRefinements';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import SearchRefinementList from '../../search/SearchRefinementList/SearchRefinementList';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Algolia/shared/ClearRefinements',
  component: ClearRefinements,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof ClearRefinements>;

const Template: ComponentStory<typeof ClearRefinements> = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ClearRefinements />
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
