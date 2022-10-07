import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import LabelFrame from '../../../LabelFrame/LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import ToggleRefinement from './ToggleRefinement';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Algolia/shared/ToggleRefinement',
  component: ToggleRefinement,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof ToggleRefinement>;

const Template: ComponentStory<typeof ToggleRefinement> = args => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ToggleRefinement
        {...args}
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Trending = Template.bind({});
Trending.args = {
  attribute: 'search_document_klass',
  label: 'Equipment Reivew',
  value: 'equipment_review',
};
