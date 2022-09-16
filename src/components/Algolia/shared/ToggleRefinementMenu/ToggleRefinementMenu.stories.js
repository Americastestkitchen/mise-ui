import React from 'react';

import LabelFrame from '../../../LabelFrame/LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import ToggleRefinementMenu from './index';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Algolia/shared/ToggleRefinementMenu',
  component: ToggleRefinementMenu,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const Template = (args) => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ToggleRefinementMenu
        documentType="Equipment Review"
        menuAttribute="search_review_type_list"
        menuOnClickItem={() => { console.log('clicked item'); }}
        toggleRefinementAttribute="search_document_klass"
        toggleRefinementLabel="Equipment Reviews"
        toggleRefinementValue="equipment_review"
        {...args}
      />
    </LabelFrame>
    <LabelFrame label="Component">
      <ToggleRefinementMenu
        documentType="Taste Test"
        menuAttribute="search_test_type_list"
        toggleRefinementAttribute="search_document_klass"
        toggleRefinementLabel="Ingredient Reviews"
        toggleRefinementValue="taste_test"
        {...args}
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const EquipmentReview = Template.bind({});
EquipmentReview.args = { siteKey: 'atk' };
