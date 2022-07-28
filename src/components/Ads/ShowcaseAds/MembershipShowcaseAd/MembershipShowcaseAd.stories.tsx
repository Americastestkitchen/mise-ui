import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';
import { color, spacing, withThemes } from '../../../../styles';
import { lg } from '../../../../styles/breakpoints';
import MembershipShowcaseAd, { MembershipShowcaseAdProps } from './MembershipShowcaseAd';
import { UnderlinedText, UnderlineThree } from '../../../DesignTokens/TextDecoration';

export default {
  title: 'Components/Ads/ShowcaseAds/MembershipShowcaseAd',
  component: MembershipShowcaseAd,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof MembershipShowcaseAd>;

const StoryWrapperTheme = {
  default: css`
    padding: ${spacing.sm};

    ${lg(css`
      padding: 8rem ${spacing.sm};
    `)}
  `,
  dark: css`
    background-color: ${color.asphalt};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

const Template = (args: MembershipShowcaseAdProps) => (
  <ThemeProvider theme={{ mode: 'dark' }}>
    <StoryWrapper>
      <MembershipShowcaseAd {...args} />
    </StoryWrapper>
  </ThemeProvider>
);

export const Default: ComponentStory<typeof MembershipShowcaseAd> = Template.bind({});
Default.args = {
  cta: 'Get free access',
  ctaHref: 'http://www.americastestkitchen.com/order',
  deviceType: 'desktop',
  title: () => (
    <span>
      Cook smart with <UnderlinedText>100% reliable recipes<UnderlineThree /></UnderlinedText>
      trusted by millions of home cooks—Try Digital All Access Now.
    </span>
  ),
};
