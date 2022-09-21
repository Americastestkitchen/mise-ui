import React from 'react';

import LabelFrame from '../../../LabelFrame/LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import RefinementList2 from './index';

export default {
  title: 'Components/Algolia/shared/RefinementList2',
  component: RefinementList2,
};

export const WithLabelIcon = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <RefinementList2
        attribute="search_cookbook_collection_titles"
        legend="Cookbook Collection"
        operator="and"
        showHideLabel="COOKBOOK COLLECTION"
      />
    </LabelFrame>
  </MiseInstantSearch>
);
