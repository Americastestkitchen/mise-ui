import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import styled, { css, ThemeProvider } from 'styled-components';

import CardCarouselNotes from './CardCarousel.md';
import { breakpoints, color, spacing, withThemes } from '../../../styles';
import CardCarousel from './CardCarousel';
import { personItems, items, tallItems, heroItems, categoryItems } from './data';

export default {
  title: 'Components/Carousels/CardCarousel',
  component: CardCarousel,
  parameters: {
    notes: CardCarouselNotes,
  },
  argTypes: { onClick: { action: 'clicked' } },
}as ComponentMeta<typeof CardCarousel>;

const StoryWrapperTheme = {
  default: css`
    padding: 4rem 2rem;
  `,
  dark: css`
    background-color: ${color.gunmetal};
  `,
};

const StoryWrapper = styled.div`
  ${withThemes(StoryWrapperTheme)}
`;

const Template: ComponentStory<typeof CardCarousel> = args => (
  <ThemeProvider theme={{
    breakpoints,
    mode: select('Theme', ['default', 'dark', 'light'], 'default'),
    siteKey: select('SiteKey', ['atk', 'cco', 'cio'], 'atk'),
  }}
  >
    <StoryWrapper>
      <CardCarousel {...args} />
    </StoryWrapper>
  </ThemeProvider>
);

export const PersonCard = Template.bind({});
PersonCard.args = {
  items: personItems,
  type: 'person',
};

export const StandardCard = Template.bind({});
StandardCard.args = {
  items,
  type: 'standard',
};

export const TallCard = Template.bind({});
TallCard.args = {
  dotPosition: { sm: { bottom: `-${spacing.xxsm}`, right: '50%' } },
  items: tallItems,
  type: 'tall',
};

export const HeroCard = Template.bind({});
HeroCard.args = {
  dotPosition: { sm: { bottom: `-${spacing.lg}`, right: '50%' } },
  items: heroItems,
  type: 'hero',
};

export const CategoryCard = Template.bind({});
CategoryCard.args = {
  dotPosition: { sm: { bottom: `-${spacing.lg}`, right: '50%' } },
  items: categoryItems,
  type: 'category',
};

export const RelatedSmallCard = Template.bind({});
RelatedSmallCard.args = {
  dotPosition: { sm: { top: `-${spacing.lg}`, right: '50%' } },
  items,
  type: 'relatedsmall',
};
