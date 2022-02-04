import React from 'react';

import { disable } from '../../config/argTypes';
import AtkMarketingHat from './index';


export default {
  title: 'Components|MarketingHat/AtkMarketingHat',
  component: AtkMarketingHat,
  argTypes: {
    inputId: disable,
    onSubmit: {action: 'onSubmit'},
    user: disable,
    className: disable,
    errorText: disable,
    heroImages: disable,
    success: disable,
    successText: disable,
    },
  };

const Template = args => <AtkMarketingHat 
  {...args}
  inputId="article-page-hat-form"
  user={{isUser: true}}
/>;

const sharedArgs = {
  cta: 'Get Free Access',
  description: 'Start your 2-week free trial and get instant access to everything.',
  headline: 'Cook Anything with Confidence',
}

export const DefaultMarketingHat = Template.bind({});
DefaultMarketingHat.args = { ...sharedArgs, isRegistrant: false };

export const RegistrantMarketingHat = Template.bind({});
RegistrantMarketingHat.args = { ...sharedArgs, isRegistrant: true };

