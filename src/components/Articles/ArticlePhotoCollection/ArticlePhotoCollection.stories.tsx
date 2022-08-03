import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlePhotoCollection from './ArticlePhotoCollection';
import images from './imagesResponse';
import { siteKey } from '../../../config/argTypes';
import ThemedWrapper from '../../../config/decorators/ThemedWrapper';

export default {
  title: 'Components/Articles/ArticlePhotoCollection',
  component: ArticlePhotoCollection,
  decorators: [ThemedWrapper()],
  argTypes: {
    siteKey,
    count: { table: { disable: true } },
  },
} as ComponentMeta<typeof ArticlePhotoCollection>;

const caption = 'The heat applied during pasteurization, a necessary step for all <a href="#">shelf-stable jars</a>, essentially cooks the pickles. Pickle spears (left) are especially vulnerable and often turn out soft and soggy. Shelf-stable whole pickles (right) are much more likely to stay firm and crunchy.';
const title = 'Collection of Pickle Photos';

type CPSA = ComponentStory<typeof ArticlePhotoCollection>
const Template: CPSA = args => <ArticlePhotoCollection {...args} />;

export const TwoUp = Template.bind({});
TwoUp.args = {
  caption,
  count: 2,
  images: images.slice(0, 2),
  title,
  width: 'default',
};

export const ThreeUp = Template.bind({});
ThreeUp.args = {
  caption,
  count: 3,
  images,
  title,
  width: 'default',
};
