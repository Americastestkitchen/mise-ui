import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InformationalTable from './InformationalTable';

export default {
  title: 'Components/Blocks/Editorial Tables/InformationalTable',
  component: InformationalTable,
} as ComponentMeta<typeof InformationalTable>;

const Template: ComponentStory<typeof InformationalTable> = args => <InformationalTable {...args} />;

export const Pagination = Template.bind({});
Pagination.args = {
  heading: 'The Bottom Line',
  description: 'Tasters had strong preferences, but all styles had fans. Which ones do you have eyes for?',
  table: [ // rows
    { // row
      cells: [
        {
          id: 'y5z24',
          content: 'Yes',
          type: 'header',
        },
        {
          id: 'tof2t',
          content: 'No',
          type: 'header',
        },
        {
          id: 'r4fot',
          content: 'Moderate',
          type: 'header',
        },
        {
          id: 'hlr6f',
          content: 'Maybe',
          type: 'header',
        },
      ],
      id: '0mx0g',
    },
    { // row
      cells: [
        {
          id: 'ewx5e',
          content: '<p>Meat (pasture-raised/grass-fed/wild)</p>',
          type: 'text',
        },
        {
          id: '50zm5',
          content: '<p>Processed foods</p>',
          type: 'text',
        },
        {
          id: 'wqws2',
          content: '<p>Fruit (organic)</p>',
          type: 'text',
        },
        {
          id: '5kpgp',
          content: '<p>Vegetables (organic)</p>',
          type: 'text',
        },
      ],
      id: 'rxzbz',
    },
    {
      cells: [
        {
          id: 'pxbke',
          content: '<p>Alcohol</p>',
          type: 'text',
        },
        {
          id: 'gb2fs',
          content: '<p>Spices</p>',
          type: 'text',
        },
        {
          id: 'yr327i',
          content: '',
          type: 'empty',
        },
        {
          id: 'x2t8o',
          content: '<p>Dairy</p>',
          type: 'text',
        },
      ],
      id: '',
    },
    { // row
      cells: [
        {
          id: '5dhv',
          content: 'yes',
          type: 'icon',
        },
        {
          id: 'q15rp',
          content: 'no',
          type: 'icon',
        },
        {
          id: 'k8xxg',
          content: 'yes',
          type: 'icon',
        },
        {
          id: '962clk',
          content: 'no',
          type: 'icon',
        },
      ],
      id: '6syfg',
    },
  ],
};

export const NoPagination = Template.bind({});
NoPagination.args = {
  heading: 'The Bottom Line',
  description: 'Tasters had strong preferences, but all styles had fans. Which ones do you have eyes for?',
  table: [ // rows
    { // row
      cells: [
        {
          id: 'y5z24',
          content: 'Yes',
          type: 'header',
        },
        {
          id: 'tof2t',
          content: 'No',
          type: 'header',
        },
        {
          id: 'r4fot',
          content: 'Moderate',
          type: 'header',
        },
      ],
      id: '0mx0g',
    },
    { // row
      cells: [
        {
          id: 'ewx5e',
          content: '<p>Meat (pasture-raised/grass-fed/wild)</p>',
          type: 'text',
        },
        {
          id: '50zm5',
          content: '<p>Processed foods</p>',
          type: 'text',
        },
        {
          id: 'wqws2',
          content: '<p>Fruit (organic)</p>',
          type: 'text',
        },
      ],
      id: 'rxzbz',
    },
    { // row
      cells: [
        {
          id: '5dhv',
          content: 'yes',
          type: 'icon',
        },
        {
          id: 'q15rp',
          content: 'no',
          type: 'icon',
        },
        {
          id: 'k8xxg',
          content: 'yes',
          type: 'icon',
        },
      ],
      id: '6syfg',
    },
  ],
};
