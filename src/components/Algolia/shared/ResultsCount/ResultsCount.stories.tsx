import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import LabelFrame from '../../../LabelFrame/LabelFrame';
import MiseInstantSearch from '../../../../lib/algolia/MiseInstantSearch/MiseInstantSearch';
import ResultsCount from './ResultsCount';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Algolia/shared/ResultsCount',
  component: ResultsCount,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof ResultsCount>;

const Template: ComponentStory<typeof ResultsCount> = args => (
  <MiseInstantSearch>
    <LabelFrame label="Component">
      <ResultsCount {...args} />
    </LabelFrame>
  </MiseInstantSearch>
);

export const Default = Template.bind({});
Default.args = {
  nbHits: 2,
};
