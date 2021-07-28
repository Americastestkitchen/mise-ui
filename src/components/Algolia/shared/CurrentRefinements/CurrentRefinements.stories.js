import React from 'react';

import LabelFrame from '../../../LabelFrame';
import CurrentRefinements from './index';
import SearchRefinementList from '../../search/SearchRefinementList';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/Algolia/shared/CurrentRefinements',
  component: CurrentRefinements,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <CurrentRefinements />
    </LabelFrame>
    <LabelFrame label="Supplemental Component">
      <SearchRefinementList
        attribute="search_cuisine_list"
        operator="and"
        showHideLabel="CUISINE"
      />
    </LabelFrame>
  </MiseInstantSearch>
);
