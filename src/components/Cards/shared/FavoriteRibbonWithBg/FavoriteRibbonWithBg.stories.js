import React from 'react';
import { action } from '@storybook/addon-actions';

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
    onClick={action('click-button')}
    siteKey="atk"
    title=""
  />
);

export const Favorited = () => (
  <FavoriteButtonWithBg
    className="favorite-ribbon"
    isFavorited
    objectId="123"
    onClick={action('click-button')}
    siteKey="atk"
    title=""
  />
);
