import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import PairedProduct from './index';
import { breakpoints, color, spacing, withThemes } from '../../../styles';

export default {
  title: 'Components/Ads/PairedProductAd',
  component: PairedProduct,
};

const StoryWrapperTheme = {
  default: css`
    padding: 0 ${spacing.sm};

    ${breakpoint('lg')`
      padding: 8rem ${spacing.sm};
    `}
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
}

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

const defaultData = {
  title: 'Cook with Confidence',
  products: [
    {
      cloudinaryId: 'atk-20th-anniversary-tv-show-cookbook-header_u6komg',
      cta: 'START FREE TRIAL',
      ctaHref: 'https://www.americastestkitchen.com',
      ctaTarget: '_blank',
      subtitle: 'DIGITAL ALL ACCESS',
      title: 'Every recipe, rating & video',
    },
    {
      cloudinaryId: 'atk-20th-anniversary-tv-show-cookbook-header_u6komg',
      cta: 'SAVE NOW',
      ctaHref: 'https://www.americastestkitchen.com',
      ctaTarget: '_blank',
      subtitle: 'COOKBOOKS',
      title: 'Cook along with our TV Shows',
    },
  ],
};

export const Default = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark',
  }}>
    <StoryWrapper>
      <PairedProduct
        title={defaultData.title}
        products={defaultData.products}
      />
    </StoryWrapper>
  </ThemeProvider>
);
