import React from 'react';
import CtaLink from './index';

export default {
  title: 'Components|Cards/shared/CtaLink',
  component: CtaLink,
};

export const Default = () => (
  <CtaLink
    ctaText="Buy the Winner"
    ctaUrl="https://www.amazon.com/dp/B01JCNEJSO/?tag=ciosearchresult-20"
  />
);
