import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs/react';

import SingleProductAd from './index';
import { breakpoints, color, spacing, withThemes } from '../../../styles';

export default {
  title: 'Components|Ads/SingleProductAd',
  component: SingleProductAd,
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
      <SingleProductAd
        cloudinaryId={text('Image', 'mise-play/ako-book-spread')}
        cta={text('Cta Text', 'SAVE 56% NOW')}
        ctaHref="https://www.americastestkitchen.com/order"
        ctaTarget={select('CTA Target', ['_self', '_blank'], '_self')}
        siteKey={select('Site Key', ['atk', 'cio', 'cco', 'kids', 'school', 'shop'], 'shop')}
        subtitle={text('Subtitle', 'Every recipe (1,674+) from all 21 seasons + a 57-page shopping guide.')}
        title={text('Title', 'Get the 2021 edition of our #1 bestselling cookbook.')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
