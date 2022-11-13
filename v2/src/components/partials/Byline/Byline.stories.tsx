import React from 'react';

import type { ComponentMeta, ComponentStory } from '@storybook/react';
import BylineList, { ByLineListProps } from './Byline';

export default {
  title: 'Partials/Byline',
  component: BylineList,
} as ComponentMeta<typeof BylineList>;

const Template = (args: ByLineListProps) => <BylineList {...args} />;
const authorList = [
  {
    id: 156,
    firstName: 'Kevin',
    lastName: 'Pang',
    image:
    {
      altText: '',
      url: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
    },
    inactive: false,
  },
  {
    id: 52,
    firstName: 'Steve',
    lastName: 'Dunn',
    image:
    {
      altText: '',
      url: ''
    },
    inactive: false,
  },
  {
    id: 14,
    firstName: 'Brian',
    lastName: 'Davis',
    image:
    {
      altText: '',
      url: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_brian_davis.jpg'
    },
    inactive: true,
  },
]

export const WithPhoto: ComponentStory<typeof BylineList> = Template.bind({});
WithPhoto.args = {
  authors: [authorList[0]],
  onClick: () => { },
};
export const WithAttribution: ComponentStory<typeof BylineList> = Template.bind({});
WithAttribution.args = {
  authors: [authorList[0]],
  attribution: "Senior Editor, Cook's Illustrated",
  onClick: () => { },
};
export const WithoutPhoto: ComponentStory<typeof BylineList> = Template.bind({});
WithoutPhoto.args = {
  authors: [authorList[1]],
  onClick: () => { },
};
export const WithoutAuthor: ComponentStory<typeof BylineList> = Template.bind({});
WithoutAuthor.args = {
  authors: [],
  attribution: 'Updated on Jun. 2020',
  onClick: () => { },
};

export const TwoAuthors: ComponentStory<typeof BylineList> = Template.bind({});
TwoAuthors.args = {
  authors: [authorList[0], authorList[1]],
  onClick: () => { },
};
export const ThreeAuthors: ComponentStory<typeof BylineList> = Template.bind({});
ThreeAuthors.args = {
  authors: [authorList[0], authorList[1], authorList[2]],
  onClick: () => { },
};