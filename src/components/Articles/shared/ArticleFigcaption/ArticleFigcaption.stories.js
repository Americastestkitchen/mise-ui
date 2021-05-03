import React from 'react';

import ArticleFigcaption from './index';

export default {
  title: 'Components|Articles/shared/ArticleFigcaption',
  component: ArticleFigcaption,
};

const caption = 'The heat applied during pasteurization, a necessary step for all shelf-stable jars, essentially cooks the pickles.';

export const DecorationOnTop = () => (
  <ArticleFigcaption
    caption={caption}
    decorationPosition="top"
  />
);

export const DecorationOnBottom = () => (
  <ArticleFigcaption
    caption={caption}
    decorationPosition="bottom"
  />
);
