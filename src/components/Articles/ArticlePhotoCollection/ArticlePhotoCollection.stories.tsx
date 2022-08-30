import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import ArticlePhotoCollection, { ArticlePhotoCollectionPropTypes } from './ArticlePhotoCollection';
import images from './imagesResponse';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Articles/ArticlePhotoCollection',
  component: ArticlePhotoCollection,
  decorators: [addThemedWrapper()],
  argTypes: {
    siteKey: { ...siteKey, defaultValue: 'atk' },
    count: { table: { disable: true } },
  },
} as ComponentMeta<typeof ArticlePhotoCollection>;

const caption = 'The heat applied during pasteurization, a necessary step for all <a href="#">shelf-stable jars</a>, essentially cooks the pickles. Pickle spears (left) are especially vulnerable and often turn out soft and soggy. Shelf-stable whole pickles (right) are much more likely to stay firm and crunchy.';
const title = 'Collection of Pickle Photos';

// eslint-disable-next-line max-len
const Template: ComponentStory<typeof ArticlePhotoCollection> = (args: ArticlePhotoCollectionPropTypes) => <ArticlePhotoCollection {...args} />;

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
