import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs';

import HeroAd from './index';
import { breakpoints, color, spacing, withThemes } from '../../../styles';

export default {
  title: 'Components|Ads/HeroAd',
  component: HeroAd,
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
      <HeroAd
        backgroundColor={select('Background Color', ['darkSlate', 'bluewood', 'squirrel', 'slate'], 'darkSlate')}
        buttonColor={select('Button Color', ['coldPool', 'tomato', 'eclipse'], 'coldPool')}
        buttonHoverColor="darkColdPool"
        cloudinaryId={select('Image', ['mise-play/ATK-COMPLETE-SHOW-COVER', 'mise-play/CCO-SHOW-COVER'], 'mise-play/ATK-COMPLETE-SHOW-COVER')}
        cta={text('CTA Text', 'Save 56% Now')}
        ctaHref="https://shop.americastestkitchen.com"
        subtitle={text('Subtitle', '')}
        title={text('Title', 'Get 1,670+ Recipes from all 21 seasons!')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
