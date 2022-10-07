import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LabelFrame from '../../../LabelFrame/LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import ToggleRefinementMenu from './ToggleRefinementMenu';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Algolia/shared/ToggleRefinementMenu',
  component: ToggleRefinementMenu,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof ToggleRefinementMenu>;

const Template: ComponentStory<typeof ToggleRefinementMenu> = args => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ToggleRefinementMenu {...args} />
    </LabelFrame>
  </MiseInstantSearch>
);

export const EquipmentReviews = Template.bind({});
EquipmentReviews.args = {
  menuAttribute: 'search_review_type_list',
  toggleRefinementAttribute: 'search_document_klass',
  toggleRefinementLabel: 'Equipment Reviews',
  toggleRefinementValue: 'equipment_review',
};

export const TasteTests = Template.bind({});
TasteTests.args = {
  menuAttribute: 'search_test_type_list',
  toggleRefinementAttribute: 'search_document_klass',
  toggleRefinementLabel: 'Ingredient Reviews',
  toggleRefinementValue: 'taste_test',
};
