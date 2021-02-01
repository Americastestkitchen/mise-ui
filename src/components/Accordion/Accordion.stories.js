import React from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';

import Accordion from './index';
import { color } from '../../styles';

export default {
  title: 'Components|Accordion',
  component: Accordion,
  decorators: [withKnobs],
};

const AccordionWrapper = styled.div`
  ${({ backgroundColor, maxWidth, padding }) => (`
    ${backgroundColor ? `background-color: ${backgroundColor}; border-radius: 2rem;` : ''}
    ${maxWidth ? `max-width: ${maxWidth}rem;` : ''}
    ${padding ? `padding: ${padding};` : ''}
  `)}
`;

export const KidsSearch = () => (
  <ThemeProvider theme={{ siteKey: 'kidsSearch' }}>
    <AccordionWrapper maxWidth="30">
      <Accordion
        icon="sort"
        isFieldset
        label="sort by"
      >
        <p>Hidden Content</p>
      </Accordion>
    </AccordionWrapper>
  </ThemeProvider>
);

export const Play = () => (
  <ThemeProvider theme={{ siteKey: 'play' }}>
    <AccordionWrapper
      backgroundColor={color.whiteSmoke}
      maxWidth="73.7"
      padding="2rem 2rem"
    >
      <Accordion label="button">
        <p>Hidden Content</p>
      </Accordion>
    </AccordionWrapper>
  </ThemeProvider>
);

export const SearchWithoutIcon = () => (
  <AccordionWrapper maxWidth="30">
    <Accordion
      isFieldset
      label="button"
    >
      <p>Hidden Content</p>
    </Accordion>
  </AccordionWrapper>
);

export const SearchWithIcon = () => (
  <AccordionWrapper maxWidth="30">
    <Accordion
      icon="cookbook"
      isFieldset
      label="cookbook collection"
    >
      <p>Hidden Content</p>
    </Accordion>
  </AccordionWrapper>
);

export const Reviewsets = () => (
  <ThemeProvider theme={{ siteKey: 'reviewsets' }}>
    <AccordionWrapper maxWidth="30">
      <Accordion
        icon="cookbook"
        label={() => (
          <h3>This is a component</h3>
        )}
      >
        <p>Hidden Content</p>
      </Accordion>
    </AccordionWrapper>
  </ThemeProvider>
);

export const WithComponentAsLabel = () => (
  <AccordionWrapper maxWidth="30">
    <Accordion
      icon="cookbook"
      label={() => (
        <h3>This is a component</h3>
      )}
    >
      <p>Hidden Content</p>
    </Accordion>
  </AccordionWrapper>
);

export const WithComponentAsLabelInFieldset = () => (
  <AccordionWrapper maxWidth="30">
    <Accordion
      icon="cookbook"
      isFieldset
      label={() => (
        <h3>This is a component in a fieldset</h3>
      )}
    >
      <p>Hidden Content</p>
    </Accordion>
  </AccordionWrapper>
);
