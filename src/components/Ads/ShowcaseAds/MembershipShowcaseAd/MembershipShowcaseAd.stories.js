/* eslint-disable line-len */
import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs/react';

import { breakpoints, color, spacing, withThemes } from '../../../../styles';

import MembershipShowcaseAd from './index';
import TextDecorations, { UnderlinedText } from '../../../DesignTokens/TextDecoration'

const Underline = TextDecorations.UnderlineThree;

export default {
  title: 'Components|Ads/ShowcaseAds/MembershipShowcaseAd',
  component: MembershipShowcaseAd,
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
    background-color: ${color.asphalt};
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
      <MembershipShowcaseAd
        cta={text('Cta Text', 'Get free access')}
        ctaHref="https://www.americastestkitchen.com/order"
        deviceType="desktop"
        title={() => (
          <span>Cook smart with <UnderlinedText>100% reliable recipes<Underline /></UnderlinedText> trusted by millions of home cooks—Try Digital All Access Now.</span>
        )}
      />
    </StoryWrapper>
  </ThemeProvider>
);
