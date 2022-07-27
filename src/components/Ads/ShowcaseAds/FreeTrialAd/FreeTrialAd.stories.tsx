import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { css, ThemeProvider } from 'styled-components';
import { lg } from '../../../../styles/breakpoints';

import { breakpoints, color, spacing, withThemes } from '../../../../styles';

import FreeTrialAd from './FreeTrialAd';

const StoryWrapperTheme = {
  default: css`
    padding: ${spacing.sm};
    ${lg(css`
      padding: 8rem ${spacing.sm};
    `)}
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

export default {
  title: 'Components/Ads/ShowcaseAds/FreeTrialAd',
  component: FreeTrialAd,
  argTypes: { onClick: { action: 'clicked' } },
}as ComponentMeta<typeof FreeTrialAd>;

const Template: ComponentStory<typeof FreeTrialAd> = args => <FreeTrialAd {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  cloudinaryId: 'mise-play/play-showcase-magazine-ad',
  cta: 'Free trial issue',
  ctaHref: 'https://www.americastestkitchen.com/order',
  subtitle: 'All-new foolproof recipes and kitchen discoveries in America’s most-trusted cooking magazine.',
  title: 'Claim Your Free Trial Issue!',
};

Primary.decorators = [
  Story => (
    <ThemeProvider theme={{
      breakpoints,
      mode: 'dark',
    }}
    >
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    </ThemeProvider>
  ),
];
