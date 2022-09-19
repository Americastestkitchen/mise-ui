import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EditorialTable from './EditorialTable';

export default {
  title: 'Components/Blocks/Editorial Tables/EditorialTable',
  component: EditorialTable,
} as ComponentMeta<typeof EditorialTable>;

const Template: ComponentStory<typeof EditorialTable> = args => <EditorialTable {...args} />;

export const ComparisonTablePaginated = Template.bind({});
ComparisonTablePaginated.args = {
  heading: 'Table Section Heading',
  description: 'Table description',
  table: {
    rows: [
      {
        cells: [
          {
            id: 'row-one-cell-one',
            content: 'Row Heading 1',
            type: 'rowHeader',
          },
          {
            id: 'row-one-cell-two',
            content: 'Column Heading 1',
            type: 'header',
          },
          {
            id: 'row-one-cell-three',
            content: 'Column Heading 2',
            type: 'header',
          },
          {
            id: 'row-one-cell-four',
            content: 'Column Heading 3',
            type: 'header',
          },
          {
            id: 'row-one-cell-five',
            content: 'Column Heading 4',
            type: 'header',
          },
        ],
        id: 'row-one',
      },
      {
        cells: [
          {
            id: 'row-two-cell-one',
            content: 'Row Heading 2',
            type: 'rowHeader',
          },
          {
            id: 'row-two-cell-two',
            content: '<p>Text Cell 1</p>',
            type: 'text',
          },
          {
            id: 'row-two-cell-three',
            content: '<p>Text Cell 2</p>',
            type: 'text',
          },
          {
            id: 'row-two-cell-four',
            content: '<p>Text Cell 3</p>',
            type: 'text',
          },
          {
            id: 'row-two-cell-five',
            content: '<p>Text Cell 4</p>',
            type: 'text',
          },
        ],
        id: 'row-two',
      },
      {
        cells: [
          {
            id: 'row-three-cell-one',
            content: 'Row Heading 3',
            type: 'rowHeader',
          },
          {
            id: 'row-three-cell-two',
            content: 'yes',
            type: 'icon',
          },
          {
            id: 'row-three-cell-three',
            content: 'no',
            type: 'icon',
          },
          {
            id: 'row-three-cell-four',
            content: 'yes',
            type: 'icon',
          },
          {
            id: 'row-three-cell-five',
            content: 'no',
            type: 'icon',
          },
        ],
        id: 'row-three',
      },
      {
        cells: [
          {
            id: 'row-four-cell-one',
            content: 'Row Header 4',
            type: 'rowHeader',
          },
          {
            id: 'row-four-cell-two',
            content: 'Test',
            type: 'text',
          },
          {
            id: 'row-four-cell-three',
            content: '',
            type: 'empty',
          },
          {
            id: 'row-four-cell-four',
            content: '',
            type: 'empty',
          },
          {
            id: 'row-four-cell-five',
            content: '',
            type: 'empty',
          },
        ],
        id: 'row-four',
      },
    ],
    type: 'comparison',
  },
};

export const ComparisonTableNoPagination = Template.bind({});
ComparisonTableNoPagination.args = {
  heading: 'Table Section Heading',
  description: 'Table description',
  table: {
    rows: [
      {
        cells: [
          {
            id: 'row-one-cell-one',
            content: 'Row Heading 1',
            type: 'rowHeader',
          },
          {
            id: 'row-one-cell-two',
            content: 'Column Heading 1',
            type: 'header',
          },
          {
            id: 'row-one-cell-three',
            content: 'Column Heading 2',
            type: 'header',
          },
        ],
        id: 'row-one',
      },
      {
        cells: [
          {
            id: 'row-two-cell-one',
            content: 'Row Heading 2',
            type: 'rowHeader',
          },
          {
            id: 'row-two-cell-two',
            content: '<p>Text Cell 1</p>',
            type: 'text',
          },
          {
            id: 'row-two-cell-two',
            content: '<p>Text Cell 2</p>',
            type: 'text',
          },
        ],
        id: 'row-two',
      },
      {
        cells: [
          {
            id: 'row-three-cell-one',
            content: 'Row Heading 3',
            type: 'rowHeader',
          },
          {
            id: 'row-three-cell-two',
            content: 'yes',
            type: 'icon',
          },
          {
            id: 'row-three-cell-three',
            content: 'no',
            type: 'icon',
          },
        ],
        id: 'row-three',
      },
      {
        cells: [
          {
            id: 'row-four-cell-one',
            content: 'Row Header 4',
            type: 'rowHeader',
          },
          {
            id: 'row-four-cell-two',
            content: 'Test',
            type: 'text',
          },
          {
            id: 'row-four-cell-three',
            content: '',
            type: 'empty',
          },
        ],
        id: 'row-four',
      },
    ],
    type: 'comparison',
  },
};

export const InformationalTablePaginated = Template.bind({});
InformationalTablePaginated.args = {
  heading: 'The Bottom Line',
  description: 'Tasters had strong preferences, but all styles had fans. Which ones do you have eyes for?',
  table: {
    rows: [ // rows
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
    type: 'informational',
  },
};

export const InformationalTableNoPagination = Template.bind({});
InformationalTableNoPagination.args = {
  heading: 'The Bottom Line',
  description: 'Tasters had strong preferences, but all styles had fans. Which ones do you have eyes for?',
  table: {
    rows: [ // rows
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
    type: 'informational',
  },
};
