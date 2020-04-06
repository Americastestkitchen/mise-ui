import React from 'react';

import LabelFrame from '../LabelFrame';
import SearchCurrentRefinements from './index';
import SearchRefinementList from '../SearchRefinementList';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchCurrentRefinements',
  component: SearchCurrentRefinements,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchCurrentRefinements />
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
