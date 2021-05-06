import React from 'react';

import ArticlePhotoCollection from './index';
import images from './imagesResponse';

export default {
    title: 'Components|Articles/ArticlePhotoCollection',
    component: ArticlePhotoCollection,
};

export const defaultTwoImages = () => (
  <ArticlePhotoCollection 
    caption={"The heat applied during pasteurization, a necessary step for all shelf-stable jars, essentially cooks the pickles. Pickle spears (left) are especially vulnerable and often turn out soft and soggy. Shelf-stable whole pickles (right) are much more likely to stay firm and crunchy."}
    count={2}
    items={images.slice(0, 2)}
    title=""
    width="default"
  />
);

export const defaultThreeImagesWithTitle = () => (
    <ArticlePhotoCollection 
    caption={"The heat applied during pasteurization, a necessary step for all shelf-stable jars, essentially cooks the pickles. Pickle spears (left) are especially vulnerable and often turn out soft and soggy. Shelf-stable whole pickles (right) are much more likely to stay firm and crunchy."}
    count={3}
    items={images}
    title="Collection of Pickle Photos"
    width="default"
  />
);

export const wideTwoImagesWithTitle = () => (
    <ArticlePhotoCollection 
    caption={"The heat applied during pasteurization, a necessary step for all shelf-stable jars, essentially cooks the pickles. Pickle spears (left) are especially vulnerable and often turn out soft and soggy. Shelf-stable whole pickles (right) are much more likely to stay firm and crunchy."}
    count={2}
    items={images.slice(0, 2)}
    title="Collection of Pickle Photos"
    width="wide"
  />
);

export const wideThreeImages = () => (
    <ArticlePhotoCollection 
    caption={"The heat applied during pasteurization, a necessary step for all shelf-stable jars, essentially cooks the pickles. Pickle spears (left) are especially vulnerable and often turn out soft and soggy. Shelf-stable whole pickles (right) are much more likely to stay firm and crunchy."}
    count={3}
    items={images}
    title=""
    width="wide"
  />
);
