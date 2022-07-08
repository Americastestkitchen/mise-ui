import React from 'react';
import Attributions from './Attributions';

export default {
  title: 'Components/Cards/shared/Attributions',
  component: Attributions,
};

export const Default = () => (
  <Attributions
    contentType="Recipe"
    commentCount={3}
    displayCommentCount
  />
);

export const CookbookCollection = () => (
  <Attributions
    contentType="Cookbook Collection"
    displayLockIcon
    commentCount={1}
    displayCommentCount
  />
);
