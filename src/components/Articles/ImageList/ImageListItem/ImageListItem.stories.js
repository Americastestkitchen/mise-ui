import React from 'react';

import ImageListItem from './index';

export default {
    title: 'Components|Articles/ImageListItem',
    component: ImageListItem,
};

const props = {
  altText: "picture of a thing",
  cloudinaryId: "TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Dill_Pickle_Hero_123",
  content: "There are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.",
  lazy: true,
}

export const DefaultImageListItem = () => (
  <ImageListItem 
    {...props}
    width="default"
  />
);

export const WideImageListItem = () => (
  <ImageListItem
    {...props}
    width="wide"
  />
)
