import React from 'react';
import { action } from '@storybook/addon-actions';
import RecipesMarketingHat from './index';

export default {
  title: 'Components|MarketingHat/RecipesMarketingHat',
  component: RecipesMarketingHat,
};

export const anonymousMarketingHat = () => (
  <RecipesMarketingHat
    inputId="article-page-hat-form"
    isRegistrant={false}
    onSubmit={action('click button')}
    user={{ isUser: true }}
  />
);

export const registrantMarketingHat = () => (
  <RecipesMarketingHat
    inputId="article-page-hat-form"
    isRegistrant
    onSubmit={action('click button')}
    user={{ isUser: true }}
  />
);

export const anonymousMarketingHatTall = () => (
  <RecipesMarketingHat
    inputId="article-page-hat-form"
    isRegistrant={false}
    onSubmit={action('click button')}
    description={'<span className="hide-tablet">Cook anything better with the most reliable recipes, guaranteed.<br /></span> Get instant access to everything across our sites free for 2 weeks.'}
    user={{ isUser: true }}
    isTall="is-tall"
  />
);

export const registrantMarketingHatTall = () => (
  <RecipesMarketingHat
    inputId="article-page-hat-form"
    isRegistrant
    description={'<span className="hide-tablet">Cook anything better with the most reliable recipes, guaranteed.<br /></span> Get instant access to everything across our sites free for 2 weeks.'}
    onSubmit={action('click button')}
    user={{ isUser: true }}
    isTall="is-tall"
  />
);
