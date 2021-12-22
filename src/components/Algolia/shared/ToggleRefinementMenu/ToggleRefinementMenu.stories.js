import React from 'react';

import LabelFrame from '../../../LabelFrame';
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
        menuAttribute="search_review_type_list"
        toggleRefinementAttribute="search_document_klass"
        toggleRefinementLabel="Equipment Reivews"
        toggleRefinementValue="equipment_review"
        {...args}
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const EquipmentReview = Template.bind({});
EquipmentReview.args = { siteKey: 'atk' };
