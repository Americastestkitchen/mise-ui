import React from 'react';

import LabelFrame from '../../../LabelFrame/LabelFrame';
import SearchNumericMenu from './index';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/Algolia/shared/SearchNumericMenu',
  component: SearchNumericMenu,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <SearchNumericMenu
        attribute="search_overall_time"
        icon="time"
        items={[
          { label: '15 minutes or under', end: 15, noRefinement: true },
          { label: '30 minutes or under', end: 30, noRefinement: true },
          { label: '60 minutes or under', end: 60, noRefinement: true },
          { label: 'Over 60 minutes', start: 60, noRefinement: true },
        ]}
        showHideLabel="Overall Time"
      />
    </LabelFrame>
  </MiseInstantSearch>
);
