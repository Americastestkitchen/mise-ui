import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import RecipeHeader from './RecipeHeader';

export default {
  title: 'Components/Blocks/RecipeHeader/RecipeHeader',
  component: RecipeHeader,
} as ComponentMeta<typeof RecipeHeader>;

const defaultArgs = {
  authors: [
    {
      id: 156,
      firstName: 'Kevin',
      lastName: 'Pang',
      image:
      {
        altText: 'This is Kevin Pang',
        cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
      },
      inactive: false,
      title: "Senior Editor, Cook's Illustrated",
    },
  ],
  onClick: () => { },
  header:
  {
    name: 'Copycat Taco Bell Mexican Pizza',
    time: '40 minutes',
    yields: "Serves 2",
    headnote: '<p><em>Be sure to use zucchini that are smaller than 8 ounces because they contain fewer seeds. Using a mandoline will make quick work of slicing the zucchini. Use a 1¼-ounce block of mild provolone from the deli counter rather than presliced cheese.</em></p>'
  },
};

const Template: ComponentStory<typeof RecipeHeader> = args => <RecipeHeader {...args} />;

export const Default: ComponentStory<typeof RecipeHeader> = Template.bind({});
Default.args = { ...defaultArgs };