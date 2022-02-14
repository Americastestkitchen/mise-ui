import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Accordion from './index';
import { disable } from '../../config/argTypes'
import { color } from '../../styles'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    icon: {
      options: ['sort', 'cookbook'],
      control: 'inline-radio'
    },
    iconSize: {
      options: ['default', 'large', 'extraLarge'],
      control: 'inline-radio'
    },
    id: disable,
    isHidden: disable,
    onClick: {action: 'onClick callback'},
  }
};

const AccordionWrapper = styled.div`
  ${({ backgroundColor, maxWidth, padding }) => (`
    ${backgroundColor ? `background-color: ${backgroundColor}; border-radius: 2rem;` : ''}
    ${maxWidth ? `max-width: ${maxWidth}rem;` : ''}
    ${padding ? `padding: ${padding};` : ''}
  `)}
`;

const Template = ({...args}) => (
  <Accordion {...args} >
    <p>Hidden Content</p>
  </Accordion>
)



export const KidsSearch = Template.bind({});
KidsSearch.decorators = [
  (Story) => (
    <ThemeProvider theme={{ siteKey: 'kidsSearch' }}>
      <AccordionWrapper maxWidth="30">
        <Story />
      </AccordionWrapper>
    </ThemeProvider>
  )
];
KidsSearch.args = {
  icon: 'sort',
  iconSize: 'default',
  isFieldset: true,
  label: 'sort by',
};

export const Play = Template.bind({});
Play.decorators = [
  (Story) => (
    <ThemeProvider theme={{ siteKey: 'play' }}>
      <AccordionWrapper 
      maxWidth="73.7"
      padding="2rem 2rem"
      backgroundColor={color.whiteSmoke}
      >
        <Story />
      </AccordionWrapper>
    </ThemeProvider>
  )
];
Play.args = {
  iconSize: 'default',
  backgroundColor: color.whiteSmoke,
  label: 'button',
};

export const SearchWithoutIcon = Template.bind({});
SearchWithoutIcon.decorators = [
  (Story) => (
    <AccordionWrapper maxWidth="30">
      <Story />
    </AccordionWrapper>
  )
];
SearchWithoutIcon.args = {
  iconSize: 'default',
  isFieldset: true,
  label: 'button',
};

export const SearchWithIcon = Template.bind({});
SearchWithIcon.decorators = [
  (Story) => (
    <AccordionWrapper maxWidth="30">
      <Story />
    </AccordionWrapper>
  )
]
SearchWithIcon.args = {
  iconSize: 'default',
  icon: 'cookbook',
  isFieldset: true,
  label: 'cookbook collection',
};

export const Reviewsets = Template.bind({});
Reviewsets.decorators = [
  (Story) => (
    <ThemeProvider theme={{siteKey: 'atk'}}>
      <AccordionWrapper maxWidth="30">
      <Story />
    </AccordionWrapper>
    </ThemeProvider>
    
  )
]
Reviewsets.args = {
  iconSize: 'default',
  icon: 'cookbook',
  isFieldset: false,
  label: () => (
    <h3>This is a component</h3>
  ),
}

export const WithComponentAsLabel = Template.bind({});
WithComponentAsLabel.decorators = [
  (Story) => (
    <AccordionWrapper maxWidth="30">
      <Story />
    </AccordionWrapper>
  )
]
WithComponentAsLabel.args = {
  iconSize: 'default',
  icon: 'cookbook',
  isFieldset: false,
  label: () => (
    <h3>This is a component</h3>
  ),
}

export const WithComponentAsLabelInFieldset = Template.bind({});
WithComponentAsLabelInFieldset.decorators = [
  (Story) => (
    <AccordionWrapper maxWidth="30">
      <Story />
    </AccordionWrapper>
  )
]
WithComponentAsLabelInFieldset.args = {
  iconSize: 'default',
  icon: 'cookbook',
  isFieldset: true,
  label: () => (
    <h3>This is a component in a fieldset</h3>
  ),
  maxWidth: '30'
}
