import React from 'react';

import LabelFrame from '../../../LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import ToggleRefinement from './index';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Algolia/shared/ToggleRefinement',
  component: ToggleRefinement,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const Template = (args) => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ToggleRefinement
        attribute="search_review_type_list"
        label="Trending This Week"
        value="Trending This Week"
        {...args}
      />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Trending = Template.bind({});
Trending.args = {siteKey: 'atk' };
