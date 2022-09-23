import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import EditorialTable from './EditorialTable';

export default {
  title: 'Components/Blocks/EditorialTable',
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
            content: 'The Soda Maker',
            type: 'rowHeader',
          },
          {
            id: 'row-one-cell-two',
            content: {
              affiliate: {
                text: 'Buy On Amazon',
                url: 'https://www.amazon.com/dp/B097TD8V5P/?tag=atkequipchart-20',
              },
              image: {
                cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_270/SIL_SodaStream_Terra_dbrqwh',
              },
              stickerText: 'Best For Most People',
              title: 'SodaStream Terra',
            },
            type: 'colHeaderDetailed',
          },
          {
            id: 'row-one-cell-three',
            content: {
              affiliate: {
                text: 'Buy On Williams Sonoma',
                url: 'https://www.americastestkitchen.com',
              },
              image: {
                cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_270/v1/ATK%20Reviews/2021/6_CIND_Soda%20Makers/SIL_SodaStream_AquaFizz_1876',
              },
              stickerText: 'Best With Glass',
              title: 'SodaStream AquaFizz',
            },
            type: 'colHeaderDetailed',
          },
          {
            id: 'row-one-cell-four',
            content: {
              affiliate: {
                text: 'Buy On Amazon',
                url: '',
              },
              image: {
                cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_270/v1/ATK%20Reviews/2021/6_CIND_Soda%20Makers/SIL_SodaStream_OneTouch-Electric_1842',
              },
              stickerText: 'Easiest To Use',
              title: 'SodaStream OneTouch',
            },
            type: 'colHeaderDetailed',
          },
          {
            id: 'row-one-cell-five',
            content: {
              affiliate: {
                text: 'Buy On Amazon',
                url: '',
              },
              image: {
                cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_270/v1/ATK%20Reviews/2021/6_CIND_Soda%20Makers/SIL_Aarke_Carbonator-III_1743',
              },
              stickerText: 'Most Stylish',
              title: 'Column Heading 4',
            },
            type: 'colHeaderDetailed',
          },
        ],
        id: 'row-one',
      },
      {
        cells: [
          {
            id: 'row-two-cell-one',
            content: 'Carbonation Source',
            type: 'rowHeader',
          },
          {
            id: 'row-two-cell-two',
            content: '<p>60-liter “quick connect” CO2 canisters</p>',
            type: 'text',
          },
          {
            id: 'row-two-cell-three',
            content: '<p>60-liter CO2 canisters</p>',
            type: 'text',
          },
          {
            id: 'row-two-cell-four',
            content: '<p>60-liter CO2 canisters</p>',
            type: 'text',
          },
          {
            id: 'row-two-cell-five',
            content: '<p>60-liter CO2 canisters</p>',
            type: 'text',
          },
        ],
        id: 'row-two',
      },
      {
        cells: [
          {
            id: 'row-three-cell-one',
            content: 'Type of Water Bottle',
            type: 'rowHeader',
          },
          {
            id: 'row-three-cell-two',
            content: '<p>Plastic (dishwasher-safe)</p>',
            type: 'text',
          },
          {
            id: 'row-three-cell-three',
            content: '<p>Glass (dishwasher-safe)</p>',
            type: 'text',
          },
          {
            id: 'row-three-cell-four',
            content: '<p>Plastic (must be hand-washed)</p>',
            type: 'text',
          },
          {
            id: 'row-three-cell-five',
            content: '<p>Plastic (must be hand-washed)</p>',
            type: 'text',
          },
        ],
        id: 'row-three',
      },      {
        cells: [
          {
            id: 'row-four-cell-one',
            content: 'How It Works',
            type: 'rowHeader',
          },
          {
            id: 'row-four-cell-two',
            content: '<p>Manually, by repeatedly pressing a button</p>',
            type: 'text',
          },
          {
            id: 'row-four-cell-three',
            content: '<p>Manually, by repeatedly pressing a button</p>',
            type: 'text',
          },
          {
            id: 'row-four-cell-four',
            content: '<p>Automatically, by pressing a button that corresponds to a preprogrammed carbonation (low, medium, high)</p>',
            type: 'text',
          },
          {
            id: 'row-four-cell-five',
            content: '<p>Manually, by repeatedly pressing a button</p>',
            type: 'text',
          },
        ],
        id: 'row-four',
      },
      {
        cells: [
          {
            id: 'row-five-cell-one',
            content: 'Carbonate Liquids Other Than Water',
            type: 'rowHeader',
          },
          {
            id: 'row-five-cell-two',
            content: 'no',
            type: 'icon',
          },
          {
            id: 'row-five-cell-three',
            content: 'no',
            type: 'icon',
          },
          {
            id: 'row-five-cell-four',
            content: 'no',
            type: 'icon',
          },
          {
            id: 'row-five-cell-five',
            content: 'no',
            type: 'icon',
          },
        ],
        id: 'row-five',
      },
      {
        cells: [
          {
            id: 'row-six-cell-one',
            content: 'Requies Electricity',
            type: 'rowHeader',
          },
          {
            id: 'row-six-cell-two',
            content: 'no',
            type: 'icon',
          },
          {
            id: 'row-six-cell-three',
            content: 'no',
            type: 'icon',
          },
          {
            id: 'row-six-cell-four',
            content: 'yes',
            type: 'icon',
          },
          {
            id: 'row-six-cell-five',
            content: 'no',
            type: 'icon',
          },
        ],
        id: 'row-six',
      },
    ],
    type: 'comparison',
  },
  brandKey: 'atk',
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
            type: 'colHeader',
          },
          {
            id: 'row-one-cell-three',
            content: 'Column Heading 2',
            type: 'colHeader',
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
  brandKey: 'atk',
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
            type: 'colHeader',
          },
          {
            id: 'tof2t',
            content: 'No',
            type: 'colHeader',
          },
          {
            id: 'r4fot',
            content: 'Moderate',
            type: 'colHeader',
          },
          {
            id: 'hlr6f',
            content: 'Maybe',
            type: 'colHeader',
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
  brandKey: 'atk',
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
            type: 'colHeader',
          },
          {
            id: 'tof2t',
            content: 'No',
            type: 'colHeader',
          },
          {
            id: 'r4fot',
            content: 'Moderate',
            type: 'colHeader',
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
  brandKey: 'atk',
};
