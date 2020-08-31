/* eslint-disable line-len */
import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs/react';

import { breakpoints, color, spacing, withThemes } from '../../../../styles';

import SingleProductMembershipAd from './index';
import TextDecorations, { UnderlinedText } from '../../../DesignTokens/TextDecoration'

const Underline = TextDecorations.UnderlineThree;

export default {
  title: 'Components|Ads/MembershipAds/SingleProductMembershipAd',
  component: SingleProductMembershipAd,
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
      <SingleProductMembershipAd
        caption={text('Caption', 'Pork Chops with Sweet Potatoes and Rosemary-Maple Sauce')}
        cloudinaryId={text('Image', 'mise-play/membership-single')}
        cta={text('Cta Text', 'Get free access')}
        ctaHref="https://www.americastestkitchen.com/order"
        title={() => (
          <span>Cook smart with <UnderlinedText>100% reliable recipes<Underline /></UnderlinedText> trusted by millions of home cooks—Try Digital All Access Now.</span>
        )}
      />
    </StoryWrapper>
  </ThemeProvider>
);
