import React from 'react';

import FavoriteButtonWithBg from './index';

export default {
  title: 'Components/Cards/shared/FavoriteButtonWithBg',
  component: FavoriteButtonWithBg,
};

export const Default = () => (
  <FavoriteButtonWithBg
    className="favorite-ribbon"
    isFavorited={false}
    objectId="123"
    siteKey="atk"
    title=""
  />
);

export const Favorited = () => (
  <FavoriteButtonWithBg
    className="favorite-ribbon"
    isFavorited
    objectId="123"
    siteKey="atk"
    title=""
  />
);
