import React from 'react';

import LabelFrame from '../../../LabelFrame/LabelFrame';
import SearchRefinementList from './index';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/Algolia/search/SearchRefinementList',
  component: SearchRefinementList,
};

export const WithoutLabelIcon = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchRefinementList
        attribute="search_site_list"
        showHideLabel="RESULTS FROM"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const WithLabelIcon = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchRefinementList
        attribute="search_cookbook_collection_titles"
        operator="and"
        showHideLabel="COOKBOOK COLLECTION"
      />
    </LabelFrame>
  </MiseInstantSearch>
);
