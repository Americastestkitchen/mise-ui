import React from 'react';

import ArticleFigcaption from './index';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Articles/shared/ArticleFigcaption',
  component: ArticleFigcaption,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const caption = 'The heat applied during pasteurization, a necessary step for all shelf-stable jars, essentially cooks the pickles.';
const linkCaption = 'The heat applied during pasteurization, a necessary step for all <a href="#">shelf-stable jars</a>, essentially cooks the pickles.';

const Template = (args) => <ArticleFigcaption {...args} />;

export const WithoutLink = Template.bind({});
WithoutLink.args = { caption, decorationPosition: 'bottom', siteKey: 'atk' };

export const WithLink = Template.bind({});
WithLink.args = { caption: linkCaption, decorationPosition: 'bottom', siteKey: 'atk' };
