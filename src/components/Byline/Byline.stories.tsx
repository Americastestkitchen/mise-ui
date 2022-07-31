import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Byline, { ByLineProps } from './Byline';
import { siteKey } from '../../config/argTypes';
import ThemedWrapper from '../../config/decorators/ThemedWrapper';

export default {
  title: 'Components/Byline',
  component: Byline,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof Byline>;

const Template = (args: ByLineProps) => <Byline {...args} />;

const defaultArgs = {
  author: 'Kevin Pang',
  attribution: 'Digital Editorial Director',
  imgAlt: 'This is Kevin Pang',
  siteKey: 'atk',
};

export const WithoutPhoto: ComponentStory<typeof Byline> = Template.bind({});
WithoutPhoto.args = { ...defaultArgs };

export const WithPhoto: ComponentStory<typeof Byline> = Template.bind({});
WithPhoto.args = {
  ...defaultArgs,
  authorImageCloudinaryId: 'AKO%20Articles/Author_Headshots/staff_kevin_pang',
};
