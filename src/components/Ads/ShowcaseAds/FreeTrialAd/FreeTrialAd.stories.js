import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs/react';

import { breakpoints, color, spacing, withThemes } from '../../../../styles';

import FreeTrialAd from './index';

export default {
  title: 'Components|Ads/ShowcaseAds/FreeTrialAd',
  component: FreeTrialAd,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: ${spacing.sm};

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

export const Default = () => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark',
  }}>
    <StoryWrapper>
      <FreeTrialAd
        cloudinaryId={text('Image', 'mise-play/play-showcase-magazine-ad')}
        cta={text('Cta Text', 'Free trial issue')}
        ctaHref="https://www.americastestkitchen.com/order"
        subtitle={text('Subtitle', 'All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine.')}
        title={text('Title', 'Claim Your Free Trial Issue!')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
