import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import styled, { css } from 'styled-components';
import { mode } from '../../../config/argTypes';

import LoadingCard from './LoadingCard';
import { withThemes, color } from '../../../styles';

export default {
  title: 'Components/Cards/LoadingCard',
  component: LoadingCard,
  argTypes: { mode },
} as ComponentMeta<typeof LoadingCard>;

const StoryWrapperTheme = {
  default: css`
    padding: 12rem;
    background-color: ${color.whiteSmoke};
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

const Template: ComponentStory<typeof LoadingCard> = args => (
  <StoryWrapper>
    <LoadingCard {...args} />
  </StoryWrapper>
);

export const Default = Template.bind({});
Default.args = {
  type: 'standard',
};
