import React from 'react';
import { action } from '@storybook/addon-actions';

import FavoriteButton from './index';

export default {
  title: 'Components/Cards/shared/FavoriteButton',
  component: FavoriteButton,
};

export const Default = () => (
  <FavoriteButton
    className="favorite-ribbon"
    isFavorited={false}
    objectId="123"
    onClick={action('click-button')}
    siteKey="atk"
    title=""
  />
);

export const Favorited = () => (
  <FavoriteButton
    className="favorite-ribbon"
    isFavorited
    objectId="123"
    onClick={action('click-button')}
    siteKey="atk"
    title=""
  />
);
