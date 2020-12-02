/* eslint-disable line-len */
import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs/react';

import { breakpoints, color, spacing, withThemes } from '../../../styles';

import SingleProductAd from './index';

export default {
  title: 'Components|Ads/SingleProductAd',
  component: SingleProductAd,
  decorators: [withKnobs],
};

const StoryWrapperTheme = {
  default: css`
    padding: 10rem 0;
    overflow: hidden;

    ${breakpoint('md')`
      overflow: visible;
    `}

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
      <SingleProductAd
        cloudinaryId={text('Cloudinary ID', 'mise-play/single-product-atk')}
        cta={text('Cta Text', 'Save 55% NOW')}
        ctaHref="https://www.americastestkitchen.com/order"
        title={text('Title', 'Get 1,670+ recipes from all 21 seasons!')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
