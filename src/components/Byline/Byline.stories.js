import React from 'react';
import Byline from './index';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Components|Byline',
  component: Byline,
  decorators: [withKnobs],
};

export const Default = () => (
  <Byline
    author={text('Author Name', 'Kevin Pang')}
    authorImageCloudinaryId={text('Author Image', 'AKO%20Articles/Author_Headshots/staff_kevin_pang')}
    attribution={text('Attribution', 'Yesterday')}
  />
);

export const NoImage = () => (
  <Byline
    author={text('Author Name', 'Kevin Pang')}
    attribution={text('Attribution', 'Digital Editorial Director')}
  />
);