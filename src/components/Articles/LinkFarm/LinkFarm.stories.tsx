import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { setBackground, storybookParameters } from '../../../config/shared.stories';
import LinkFarm from './LinkFarm';

export default {
  title: 'Components/Articles/LinkFarm',
  component: LinkFarm,
  ...storybookParameters,
  decorators: [(Story, options) => (
    <ThemeProvider theme={{ siteKey: options.parameters?.backgrounds?.default ?? 'atk' }}>
      <Story />
    </ThemeProvider>
  )],
} as ComponentMeta<typeof LinkFarm>;

const Template: ComponentStory<typeof LinkFarm> = args => <LinkFarm {...args} />;

const title = 'What are you serving at your Super Bowl party? Let us know in the comments! And for more information on make-ahead cooking and entertaining, check out these articles';

const links = [
  {
    id: 35,
    href: 'https://www.americastestkitchen.com/recipes/4593-breaded-pork-cutlets-pork-schnitzel&sa=D&source=editors&ust=1639068175019000&usg=AOvVaw2gJtHOVaXMZC-qKd_vkCZm',
    text: 'Breaded Pork Cutlets (Pork Schnitzel)',
  },
  {
    id: 36,
    href: 'https://www.cookscountry.com/recipes/13918-kansas-city-style-barbecue-ribs&sa=D&source=editors&ust=1639068175020000&usg=AOvVaw1pGjZK5UZl4mvaYOHcSbRf',
    text: 'Kansas City-Style Barbecue Ribs',
  },
  {
    id: 37,
    href: 'https://www.americastestkitchen.com/recipes/3821-skillet-barbecued-pork-chops&sa=D&source=editors&ust=1639068175020000&usg=AOvVaw2Tj6If6-HS8aVEjjbUJioF',
    text: 'Skillet-Barbecued Pork Chop',
  },
  {
    id: 38,
    href: 'https://www.cookscountry.com/recipes/5826-homemade-breakfast-sausage&sa=D&source=editors&ust=1639068175020000&usg=AOvVaw1NqdXGlMuUg00_tIJKTxuk',
    text: 'Homemade Breakfast Sausage',
  },
  {
    id: 39,
    href: 'https://www.cooksillustrated.com/recipes/10249-chinese-pork-dumplings&sa=D&source=editors&ust=1639068175021000&usg=AOvVaw0G02HMLck4HLMHh6bjbq9G',
    text: 'Chinese Pork Dumplings',
  },
  {
    id: 40,
    href: 'https://www.cookscountry.com/recipes/11132-pork-carnitas&sa=D&source=editors&ust=1639068175021000&usg=AOvVaw1V6ZQ5TZsQaGkOiD7wYDej',
    text: 'Pork Carnitas',
  },
];

export const Default = Template.bind({});
Default.args = { title, links };
setBackground('atk', Default);

export const CCO = Template.bind({});
CCO.args = { title, links };
setBackground('cco', CCO);

export const CIO = Template.bind({});
CIO.args = { title, links };
setBackground('cio', CIO);
