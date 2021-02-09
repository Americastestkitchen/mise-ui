import breakpoint from 'styled-components-breakpoint';
import React, { useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { boolean, withKnobs, select, text } from '@storybook/addon-knobs/react';

import {
  breakpoints,
  color,
  spacing,
  withThemes,
} from '../../../styles';

import ReviewableSummaryItem from './index';

export default {
  title: 'Components|Cards/ReviewableSummaryItem',
  component: ReviewableSummaryItem,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    background-color: ${color.whiteSmoke};
    padding: ${spacing.xxlg};
    width: 600px;
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export const Default = () => {
  const [success, setSuccess] = useState(false);
  return (
    <ThemeProvider theme={{
      breakpoints,
      siteKey: 'atk',
    }}>
      <StoryWrapper>
        <ReviewableSummaryItem
          asin={text('ASIN', 'B004T6M702')}
          buyNowLink={text('Buy Now Link', 'https://www.amazon.com/dp/B004T6M702/?tag=akoequippilot-20')}
          buyNowOverrideAffiliateActive={boolean('Buy Now Affiliate Active', false)}
          buyNowOverrideAffiliateName={select(
            'Affiliate Override',
            [
              'Amazon',
              'BlueApron',
              'Houzz',
              'KingArthur',
              'SurLaTable',
              'ThermoWorks',
              'Victorinox',
              'WilliamsSonoma',
            ],
            null)}
          cloudinaryId={text('Cloudinary ID', 'Equipment Images/SIL_CookwareSets_All-Clad1And1-2QTSaucepan_1746')}
          name={text('Product name', 'All-Clad Stainless 2Qt Saucepan')}
          price={text('Price', '$15.99')}
          recommendationStatus={text('Recommendation Status', 'Highly Recommended')}
          winner={boolean('Winner?', true)}
          winnerHeader={text('Winner Header', 'winner')}
        />
      </StoryWrapper>
    </ThemeProvider>
  );
}
