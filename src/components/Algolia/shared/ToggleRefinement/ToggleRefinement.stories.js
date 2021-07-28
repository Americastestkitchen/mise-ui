import React from 'react';

import LabelFrame from '../../../LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import ToggleRefinement from './index';

export default {
  title: 'Components/Algolia/shared/ToggleRefinement',
  component: ToggleRefinement,
};

export const Trending = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ToggleRefinement
        attribute="search_review_type_list"
        label="Trending This Week"
        value="Trending This Week"
      />
    </LabelFrame>
  </MiseInstantSearch>
);
