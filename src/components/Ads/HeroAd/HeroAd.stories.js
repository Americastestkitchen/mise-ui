import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';


import HeroAd from './index';
import { breakpoints, color, spacing, withThemes } from '../../../styles';
import { disable, textInput } from '../../../config/argTypes';

export default {
  title: 'Components/Ads/HeroAd',
  component: HeroAd,
  argTypes: {
    backgroundColor: {
      options: ['darkSlate', 'bluewood', 'squirrel', 'slate'],
      control: {type: 'select'}
    },
    buttonColor: {
      options: ['coldPool', 'tomato', 'eclipse'],
      control: {type: 'select'}
    },
    buttonHoverColor: textInput,
    cloudinaryId: {
      options: ['mise-play/ATK-COMPLETE-SHOW-COVER', 'mise-play/CCO-SHOW-COVER'],
      control: {type: 'select'}
    },
    cta: textInput,
    ctaHref: textInput,
    ctaTarget: disable,
    onClick: disable,
    subtitle: textInput,
    title: textInput
  }
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


const Template = ({...args}) => (
  <ThemeProvider theme={{
    breakpoints,
    mode: 'dark'
  }}>
    <StoryWrapper>
      <HeroAd {...args}/>
    </StoryWrapper>
  </ThemeProvider>
)

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'darkSlate',
  buttonColor: 'coldPool',
  buttonHoverColor: 'darkColdPool',
  cloudinaryId: 'mise-play/ATK-COMPLETE-SHOW-COVER',
  cta: 'Save 56% Now',
  ctaHref: 'https://shop.americastestkitchen.com',
  subtitle: '',
  title: 'Get 1,670+ Recipes from all 21 seasons!'
}

