import React from 'react';

import LabelFrame from '../../../LabelFrame/LabelFrame';
import NumericMenu from './index';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/Algolia/shared/NumericMenu',
  component: NumericMenu,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <NumericMenu
        attribute="search_overall_time"
        items={[
          { label: '15 minutes or under', end: 15, noRefinement: true },
          { label: '30 minutes or under', end: 30, noRefinement: true },
          { label: '60 minutes or under', end: 60, noRefinement: true },
          { label: 'Over 60 minutes', start: 60, noRefinement: true },
        ]}
      />
    </LabelFrame>
  </MiseInstantSearch>
);
