import PropTypes from 'prop-types';
import React from 'react';
import { action } from '@storybook/addon-actions';

import FavoriteButton from './index';

export default {
  title: 'Components|Cards/shared/FavoriteButton',
  component: FavoriteButton,
};

export const Default = ({ ariaLabel }) => (
  <FavoriteButton
    ariaLabel={ariaLabel}
    className="favorite-ribbon"
    isFavorited={false}
    objectId="123"
    onClick={action('click-button')}
    siteKey="atk"
    title=""
  />
);

Default.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
};

export const Favorited = ({ ariaLabel }) => (
  <FavoriteButton
    ariaLabel={ariaLabel}
    className="favorite-ribbon"
    isFavorited
    objectId="123"
    onClick={action('click-button')}
    siteKey="atk"
    title=""
  />
);

Favorited.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
};
