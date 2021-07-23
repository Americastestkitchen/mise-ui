import React from 'react';
import { action } from '@storybook/addon-actions';
import AtkMarketingHat from './index';

export default {
  title: 'Components|MarketingHat/AtkMarketingHat',
  component: AtkMarketingHat,
};

export const defaultMarketingHat = () => (
  <AtkMarketingHat 
    inputId="article-page-hat-form"
    isRegistrant={false}
    onSubmit={action('click button')}
    user={{isUser: true}}
  />
)

export const registrantMarketingHat = () => (
  <AtkMarketingHat 
    inputId="article-page-hat-form"
    isRegistrant={true}
    onSubmit={action('click button')}
    user={{isUser: true}}
  />
)

