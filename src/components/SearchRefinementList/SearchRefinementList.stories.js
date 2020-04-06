import React from 'react';

import LabelFrame from '../LabelFrame';
import SearchRefinementList from './index';
import MiseInstantSearch from '../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components|SearchRefinementList',
  component: SearchRefinementList,
};

export const SearchSiteList = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchRefinementList
        attribute="search_site_list"
        showHideLabel="RESULTS FROM"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const SearchCuisine = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchRefinementList
        attribute="search_cuisine_list"
        operator="and"
        showHideLabel="CUISINE"
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const SearchDishType = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchRefinementList
        attribute="search_dish_type_list"
        operator="and"
        showHideLabel="DISH TYPE"
      />
    </LabelFrame>
  </MiseInstantSearch>
);
