import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReviewableSummaryCard from './ReviewableSummaryCard';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

const affiliateCategory = { table: { category: 'Affiliate' } };
const ctaCategory = { table: { category: 'CTA' } };
const recommendationCategory = { table: { category: 'Recommendation Status' } };

export default {
  title: 'Components/Cards/ReviewableSummaryItem',
  component: ReviewableSummaryCard,
  decorators: [addThemedWrapper()],
  argTypes: {
    recommendationStatus: { ...recommendationCategory },
    winner: { ...recommendationCategory },
    winnerHeader: { ...recommendationCategory },
    buyNowOverrideAffiliateActive: {
      ...affiliateCategory,
    },
    buyNowOverrideAffiliateName: {
      control: {
        options: [
          'Amazon',
          'BlueApron',
          'Houzz',
          'KingArthur',
          'SurLaTable',
          'ThermoWorks',
          'Victorinox',
          'WilliamsSonoma',
        ],
        type: 'select',
      },
      ...affiliateCategory,
    },
    asin: { ...ctaCategory },
    buyNowLink: { ...ctaCategory },
    displayPrice: { ...ctaCategory },
    price: { ...ctaCategory },
    siteKey,
  },
} as ComponentMeta<typeof ReviewableSummaryCard>;

const Template: ComponentStory<typeof ReviewableSummaryCard> = args => (
  <ReviewableSummaryCard {...args} />
);

export const Standard = Template.bind({});

Standard.args = {
  asin: 'B004T6M702',
  buyNowLink: 'https://www.amazon.com/dp/B004T6M702/?tag=akoequippilot-20',
  buyNowOverrideAffiliateActive: false,
  buyNowOverrideAffiliateName: 'Amazon',
  cloudinaryId: 'Equipment Images/SIL_CookwareSets_All-Clad1And1-2QTSaucepan_1746',
  displayPrice: true,
  name: 'All-Clad Stainless 2Qt Saucepan',
  price: '$15.99',
  recommendationStatus: 'Highly Recommended',
  winner: true,
  winnerHeader: 'winner',
  isShortList: false,
};
