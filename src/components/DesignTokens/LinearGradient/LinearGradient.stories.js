import React from 'react';
import LinearGradient from './index';
import styled from 'styled-components';
import { withKnobs, select, text } from '@storybook/addon-knobs';

const GradientContainer = styled.div`
  height: 100vh;
  width: 100vw;

  .linear-gradient {
    height: 100vh;
    width: 100%;
  }
`;

export default {
  title: 'Design Tokens/Linear Gradient',
  component: LinearGradient,
  decorators: [withKnobs],
};

export const Default = () => (
  <GradientContainer>
    <LinearGradient />
  </GradientContainer>
);

export const Horizontal = () => (
  <GradientContainer>
    <LinearGradient
      angle={90}
    />
  </GradientContainer>
);
export const CustomStop = () => (
  <GradientContainer>
    <LinearGradient
      stop={select('Stop', ['10%', '30%', '50%', '80%', '90%'], '50%')}
    />
  </GradientContainer>
);

export const CustomColors = () => (
  <GradientContainer>
    <LinearGradient
      angle={90}
      startColor={text('Start Color', 'transparentBlack')}
      endColor={text('End Color', 'gunmetal')}
    />
  </GradientContainer>
);
