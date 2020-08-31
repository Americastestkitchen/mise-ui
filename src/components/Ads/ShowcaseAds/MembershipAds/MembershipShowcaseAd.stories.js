import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import TextDecorations, { UnderlinedText } from '../../../DesignTokens/TextDecoration'

import MembershipShowcaseAd from '../MembershipAds/index';
import { breakpoints, color, spacing, withThemes } from '../../../../styles';

const Underline = TextDecorations.UnderlineThree;

export default {
  title: 'Components|Ads/ShowcaseAds/MembershipShowcaseAd',
  component: MembershipShowcaseAd,
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
      <MembershipShowcaseAd
        title={() => (
          <span>Cook smart with <UnderlinedText>100% reliable recipes<Underline /></UnderlinedText> trusted by millions of home cooks—Try Digital All Access Now.</span>
        )}
        cloudinaryId="mise-play/showcase-membership-ad.gif"
        cta='get free access'
        ctaHref='https://www.americastestkitchen.com'
      />
    </StoryWrapper>
  </ThemeProvider>
);