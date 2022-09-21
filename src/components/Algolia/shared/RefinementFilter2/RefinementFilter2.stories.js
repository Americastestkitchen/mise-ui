import React from 'react';

import LabelFrame from '../../../LabelFrame/LabelFrame';
import RefinementFilter2 from './index';

export default {
  title: 'Components/Algolia/shared/RefinementFilter2',
  component: RefinementFilter2,
};

export const UncheckedWithoutCount = () => (
  <LabelFrame label="Component">
    <RefinementFilter2
      attribute="search_review_type_list"
      label="Equipment Reviews"
      value="equipment_reviews"
    />
  </LabelFrame>
);

export const UncheckedWithCount = () => (
  <LabelFrame label="Component">
    <RefinementFilter2
      attribute="search_review_type_list"
      count="444"
      includeCount
      label="Equipment Reviews"
      value="equipment_reviews"
    />
  </LabelFrame>
);

export const CheckedWithoutCount = () => (
  <LabelFrame label="Component">
    <RefinementFilter2
      attribute="search_review_type_list"
      isRefined
      label="Equipment Reviews"
      value="equipment_reviews"
    />
  </LabelFrame>
);

export const CheckedWithCount = () => (
  <LabelFrame label="Component">
    <RefinementFilter2
      attribute="search_review_type_list"
      count="444"
      includeCount
      isRefined
      label="Equipment Reviews"
      value="equipment_reviews"
    />
  </LabelFrame>
);
