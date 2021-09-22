import { ThemeProvider } from 'styled-components';
import React from 'react';

import ActionSummaryItem from './index';
import breakpoints from '../../styles/breakpoints';
import { disable, siteKey } from '../../config/argTypes';

const ThemedActionSummaryItem = ({
  children,
  icon,
  siteKey = 'atk'
}) => (
  <ThemeProvider theme={{
    breakpoints,
    siteKey
  }}>
    <ActionSummaryItem icon={icon}>
      {children}
    </ActionSummaryItem>
  </ThemeProvider>
);

export default {
  title: 'Components/ActionSummaryItem',
  component: ActionSummaryItem,
  argTypes: {
    children: disable,
    siteKey,
    icon: {
      options: ['comment', 'star'],
      control: { type: 'inline-radio' },
    },
  },
};


const Template = ({ children, ...args }) => (
  <ThemedActionSummaryItem {...args}>
    {children}
  </ThemedActionSummaryItem>
);

export const Default = Template.bind({});
Default.args = {
  children: <><strong>4.6</strong>&nbsp;<span>(36 ratings)</span></>,
  icon: 'star',
};

export const Basic = Template.bind({});
Basic.args = {
  children: <span>12 comments</span>,
  icon: 'comment',
};
