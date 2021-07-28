import React from 'react';

import LabelFrame from '../../../LabelFrame';
import ResultsCount from './index';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';

export default {
  title: 'Components/Algolia/shared/ResultsCount',
  component: ResultsCount,
};

export const Default = () => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ResultsCount />
    </LabelFrame>
  </MiseInstantSearch>
);
