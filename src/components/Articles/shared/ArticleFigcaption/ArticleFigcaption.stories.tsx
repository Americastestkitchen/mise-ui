import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import ArticleFigcaption from './index';
import { siteKey } from '../../../../config/argTypes';
import ThemedWrapper from '../../../../config/decorators/ThemedWrapper';

export default {
  title: 'Components/Articles/shared/ArticleFigcaption',
  component: ArticleFigcaption,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof ArticleFigcaption>;

const Template: ComponentStory<typeof ArticleFigcaption> = props => (
  <ArticleFigcaption {...props} />
);

const sharedArgs = {
  caption: 'The heat applied during pasteurization, a necessary step for all <a href="#">shelf-stable jars</a>, essentially cooks the pickles.',
  siteKey: 'atk',
};

export const DecorationOnBottom = Template.bind({});
DecorationOnBottom.args = {
  ...sharedArgs,
  decorationPosition: 'bottom',
};

export const DecorationOnTop = Template.bind({});
DecorationOnTop.args = {
  ...sharedArgs,
  decorationPosition: 'bottom',
};
