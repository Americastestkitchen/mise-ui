/* eslint-disable line-len */
import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs';

import { breakpoints, color, spacing, withThemes } from '../../../styles';

import SingleMembershipAd from './index';
import TextDecorations, { UnderlinedText } from '../../DesignTokens/TextDecoration'

const Underline = TextDecorations.UnderlineThree;

export default {
  title: 'Components/Ads/SingleMembershipAd',
  component: SingleMembershipAd,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
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
      <SingleMembershipAd
        cta={text('Cta Text', 'Get free access')}
        ctaHref="https://www.americastestkitchen.com/order"
        title={() => (
          <span>Cook smart with <UnderlinedText>100% reliable recipes<Underline /></UnderlinedText> trusted by millions of home cooks—Try Digital All Access Now.</span>
        )}
      />
    </StoryWrapper>
  </ThemeProvider>
);
