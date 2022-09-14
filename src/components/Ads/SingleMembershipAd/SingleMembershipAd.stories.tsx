import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import SingleMembershipAd, { SingleMembershipAdProps } from './SingleMembershipAd';
import { UnderlineThree as Underline, UnderlinedText } from '../../DesignTokens/TextDecoration';
import DarkModeWrapper from '../../../config/decorators/mode-dark';

export default {
  title: 'Components/Ads/SingleMembershipAd',
  component: SingleMembershipAd,
  decorators: [DarkModeWrapper()],
  argTypes: { onClick: {
    action: 'clicked',
    parameter: '',
  } },
} as ComponentMeta<typeof SingleMembershipAd>;

const Template: ComponentStory<typeof SingleMembershipAd> = (args: SingleMembershipAdProps) => (
  <SingleMembershipAd {...args} />
);

export const Default = Template.bind({});
Default.args = {
  cta: 'Get free access',
  title: () => (
    <span>Cook smart with&nbsp;
      <UnderlinedText>100% reliable recipes<Underline /></UnderlinedText>
      &nbsp;trusted by millions of home cooks—Try Digital All Access Now.
    </span>
  ),
};
