import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Accordion from './index';
import { disable, trueFalse, textInput} from '../../config/argTypes'
import { color } from '../../styles'

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    icon: {
      options: ['sort', 'cookbook'],
      control: {type: 'inline-radio'}
    },
    iconSize: {
      options: ['default', 'large', 'extraLarge'],
      control: {type: 'inline-radio'}
    },
    id: disable,
    isFieldset: trueFalse,
    isHidden: disable,
    label: textInput,
    onClick: disable,
    siteKey: textInput
  }
};

const AccordionWrapper = styled.div`
  ${({ backgroundColor, maxWidth, padding }) => (`
    ${backgroundColor ? `background-color: ${backgroundColor}; border-radius: 2rem;` : ''}
    ${maxWidth ? `max-width: ${maxWidth}rem;` : ''}
    ${padding ? `padding: ${padding};` : ''}
  `)}
`;

const ThemedAccordion = ({siteKey, icon, iconSize, label, isFieldset, backgroundColor, maxWidth, padding}) => (
  <ThemeProvider theme={{siteKey: siteKey}}>
    <AccordionWrapper 
      maxWidth={maxWidth}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      <Accordion
        icon={icon}
        iconSize={iconSize}
        label={label}
        isFieldset={isFieldset}
      >
        <p>Hidden Content</p>
      </Accordion>
    </AccordionWrapper>
  </ThemeProvider>
)



const Template = ({...args}) => (
  <ThemedAccordion {...args} />
);

export const KidsSearch = Template.bind({});
KidsSearch.args = {
  icon: 'sort',
  iconSize: 'default',
  isFieldset: true,
  label: 'sort by',
  maxWidth: '30',
  siteKey: 'kidsSearch'
};

export const Play = Template.bind({});
Play.args = {
  iconSize: 'default',
  backgroundColor: color.whiteSmoke,
  label: 'button',
  maxWidth: '73.7',
  padding: '2rem 2rem',
  siteKey: 'play'
}

export const SearchWithoutIcon = Template.bind({});
SearchWithoutIcon.args = {
  iconSize: 'default',
  isFieldset: true,
  label: 'button',
  maxWidth: '30'
};

export const SearchWithIcon = Template.bind({});
SearchWithIcon.args = {
  iconSize: 'default',
  icon: 'cookbook',
  isFieldset: true,
  label: 'cookbook collection',
  maxWidth: '30'
};

export const Reviewsets = Template.bind({});
Reviewsets.args = {
  iconSize: 'default',
  icon: 'cookbook',
  label: () => (
    <h3>This is a component</h3>
  ),
  maxWidth: '30',
  siteKey: 'atk',
}

export const WithComponentAsLabel = Template.bind({});
WithComponentAsLabel.args = {
  iconSize: 'default',
  icon: 'cookbook',
  label: () => (
    <h3>This is a component</h3>
  ),
  maxWidth: '30'
}

export const WithComponentAsLabelInFieldset = Template.bind({});
WithComponentAsLabelInFieldset.args = {
  iconSize: 'default',
  icon: 'cookbook',
  isFieldset: true,
  label: () => (
    <h3>This is a component in a fieldset</h3>
  ),
  maxWidth: '30'
}
