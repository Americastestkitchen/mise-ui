import React from 'react';

import ImageListContainer from './index';
import ImageListItem from '../ImageListItem/index';

export default {
    title: 'Components/Articles/ImageListContainer',
    component: ImageListContainer,
};

const images = [{
  altText: "picture of a thing",
  cloudinaryId: "TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Dill_Pickle_Hero_123",
  content: "\u003cp\u003eThere are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.\u003cp\u003e",
  lazy: true
}, {
  altText: "picture of a thing",
  cloudinaryId: "TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Dill_Pickle_Hero_123",
  content: "\u003cp\u003eThere are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.\u003cp\u003e",
  lazy: true
}];

const image = [{
  altText: "picture of a thing",
  cloudinaryId: "TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Dill_Pickle_Hero_123",
  content: "\u003cp\u003eThere are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.\u003cp\u003e",
  lazy: true
}];

export const defaultBoxOneImage = () => (
  <ImageListContainer
    children={image.map((el => <ImageListItem {...el}/>))}
    className="image-list__container"
    title="These are my images"
    width="default"
  />
);

export const wideBoxMultipleImages = () => (
  <ImageListContainer
    children={images.map((el, idx) => <ImageListItem key={`${el.altText}-${idx}`} {...el} width="wide"/>)}
    className="image-list__container"
    title="These are my images"
    width="wide"
  />
);
