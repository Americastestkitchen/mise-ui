import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import { breakpoints, color, spacing, withThemes } from '../../../../styles';
import FreeTrialAd from './index';
import { disable, mode, textInput } from '../../../../config/argTypes';

export default {
  title: 'Components/Ads/ShowcaseAds/FreeTrialAd',
  component: FreeTrialAd,
  argTypes: {
    cloudinaryId: disable,
    cta: textInput,
    ctaHref: disable,
    onClick: disable,
    mode: mode,
    title: textInput,
    subtitle: textInput,
  }
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

const Template = ({...args}) => (
  <ThemeProvider theme={{
    breakpoints
  }}>
    <StoryWrapper>
      <FreeTrialAd {...args}/>
    </StoryWrapper>
  </ThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  cloudinaryId: 'mise-play/play-showcase-magazine-ad',
  cta: 'Free trial issue',
  ctaHref: 'https://www.americastestkitchen.com/order',
  mode: 'dark',
  subtitle: 'All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine.',
  title: 'Claim Your Free Trial Issue!',
};
