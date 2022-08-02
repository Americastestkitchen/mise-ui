import React from 'react';

import ArticlePhotoCollection from './index';
import images from './imagesResponse';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Articles/ArticlePhotoCollection',
  component: ArticlePhotoCollection,
  decorators: [ addThemedWrapper() ],
  argTypes: {
    siteKey,
    count: { table: { disable: true } },
  },
};

const caption = 'The heat applied during pasteurization, a necessary step for all <a href="#">shelf-stable jars</a>, essentially cooks the pickles. Pickle spears (left) are especially vulnerable and often turn out soft and soggy. Shelf-stable whole pickles (right) are much more likely to stay firm and crunchy.';
const title = 'Collection of <a>Pickle Photos</a>';

const Template = (args) => <ArticlePhotoCollection {...args} />;

export const TwoUp = Template.bind({});
TwoUp.args = {
  caption,
  count: 2,
  images: images.slice(0, 2),
  siteKey: 'atk',
  title,
  width: 'default',
};

export const ThreeUp = Template.bind({});
ThreeUp.args = {
  caption,
  count: 3,
  images,
  siteKey: 'atk',
  title,
  width: 'default',
};