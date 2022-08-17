import React from 'react';
import styled from 'styled-components';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { addThemedWrapper } from '../../config/decorators';
import { hidden, disable } from '../../config/argTypes';

import Accordion from './Accordion';
import { color } from '../../styles';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  decorators: [addThemedWrapper()],
  argTypes: {
    siteKey: hidden,
    maxWidth: hidden,
    padding: hidden,
    isHidden: disable,
    backgroundColor: hidden,
    children: disable,
  },
} as ComponentMeta<typeof Accordion>;

export type ArgsProps = {
  maxWidth?: string;
  padding?: string;
  backgroundColor?: string;
}
const AccordionWrapper = styled.div<ArgsProps>`
  ${({ backgroundColor, maxWidth, padding }) => (`
    ${backgroundColor ? `background-color: ${backgroundColor}; border-radius: 2rem;` : ''}
    ${maxWidth ? `max-width: ${maxWidth}rem;` : ''}
    ${padding ? `padding: ${padding};` : ''}
  `)}
`;

const Template: ComponentStory<typeof Accordion> = props => (
  <AccordionWrapper {...props}>
    <Accordion {...props} />
  </AccordionWrapper>
);

const defaultKidsArgs = {
  siteKey: 'kidsSearch',
};
const defaultPlayArgs = {
  siteKey: 'play',
  backgroundColor: `${color.whiteSmoke}`,
  maxWidth: '73.7',
  padding: '2rem 2rem',
  isHidden: true,
};
const defaulWidthArgs = {
  maxWidth: '30',
  isHidden: true,
};
const defaultSiteKeyArgs = {
  siteKey: 'atk',
};

export const KidsSearch = Template.bind({});
KidsSearch.args = {
  ...defaulWidthArgs,
  ...defaultKidsArgs,
  label: 'sort by',
  isFieldset: true,
  icon: 'sort',
  children: <p>Hidden Content</p>,
};
export const Play = Template.bind({});
Play.args = {
  ...defaultPlayArgs,
  label: 'button',
  children: <p>Hidden Content</p>,
};
export const SearchWithoutIcon = Template.bind({});
SearchWithoutIcon.args = {
  ...defaulWidthArgs,
  isFieldset: true,
  label: 'button',
  children: <p>Hidden Content</p>,
};
export const SearchWithIcon = Template.bind({});
SearchWithIcon.args = {
  ...defaulWidthArgs,
  isFieldset: true,
  icon: 'cookbook',
  label: 'cookbook collection',
  children: <p>Hidden Content</p>,
};
export const ReviewSet = Template.bind({});
ReviewSet.args = {
  ...defaulWidthArgs,
  ...defaultSiteKeyArgs,
  icon: 'cookbook',
  label: () => (
    <h3>This is a component</h3>
  ),
  children: <p>Hidden Content</p>,
};
export const WithComponentAsLabel = Template.bind({});
WithComponentAsLabel.args = {
  ...defaulWidthArgs,
  icon: 'cookbook',
  label: () => (
    <h3>This is a component</h3>
  ),
  children: <p>Hidden Content</p>,
};
export const WithComponentAsLabelInFieldset = Template.bind({});
WithComponentAsLabelInFieldset.args = {
  ...defaulWidthArgs,
  icon: 'cookbook',
  isFieldset: true,
  label: () => (
    <h3>This is a component in a fieldset</h3>
  ),
  children: <p>Hidden Content</p>,
};
