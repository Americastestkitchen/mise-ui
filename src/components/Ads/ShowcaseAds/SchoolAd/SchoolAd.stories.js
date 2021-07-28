import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { withKnobs, select , text } from '@storybook/addon-knobs';

import SchoolAd from './index';
import { breakpoints, color, spacing, withThemes } from '../../../../styles';

export default {
  title: 'Components|Ads/ShowcaseAds/SchoolAd',
  component: SchoolAd,
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
      <SchoolAd
        cta={text('Cta Text', 'TRY FOR FREE')}
        ctaHref="https://school.americastestkitchen.com"
        ctaTarget={select('CTA Target', ['_self', '_blank'], '_blank')}
        deviceType="desktop"
        siteKey={select('Site Key', ['atk', 'cio', 'cco', 'kids', 'school', 'shop'], 'school')}
        subtitle={text('Subtitle', 'Get access to 320+ courses and learn from our expert test cooks in your kitchen, on your schedule.')}
        title={text('Title', 'Great cooks never stop learning.')}
      />
    </StoryWrapper>
  </ThemeProvider>
);
