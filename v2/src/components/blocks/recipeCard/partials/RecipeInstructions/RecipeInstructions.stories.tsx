import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import RecipeInstructions from './RecipeInstructions';

export default {
  title: 'Components/Blocks/RecipeCard/Partials/RecipeInstructions',
  component: RecipeInstructions,
} as ComponentMeta<typeof RecipeInstructions>;

const instructions = {
    header: "<p>This is the header for the instructions</p>",
    list: [
      {
        content: "<p>In large bowl, stir together zucchini, 2 tablespoons water, and salt. Cover and microwave until zucchini is softened (some slices will curl at edges) and liquid is released, 8 to 10 minutes, stirring halfway through microwaving. Drain zucchini in colander and let cool slightly, about 5 minutes.</p>",
        subSteps: [
          {
            content: "<p>This is a <strong>sub</strong> step</p>"
          },
          {
            content: "<p><em>This is ano<u>ther sub step</u></em></p>"
          }
        ]
      },
      {
        content: "<p>Heat oil in 10-inch nonstick skillet over medium-high heat until shimmering. Add zucchini (do not wash colander) and spread into even layer. Cook, stirring every 4 minutes and then reflattening into even layer, until zucchini is very tender and about half of slices are lightly browned, 8 to 10 minutes (it is OK if some pieces fall apart). (Zucchini can be refrigerated for up to 2 days.)</p>",
        subSteps: []
      },
      {
        content: "<p>Meanwhile, bring 2 quarts water to boil in large pot. Add pasta and 1½ teaspoons salt and cook, stirring often, until al dente. Reserve ¾ cup cooking water, then drain pasta and return it to pot.</p>",
        subSteps: []
      },
      {
        content: "<p>Add ½ cup reserved cooking water, zucchini, butter, basil, and pepper to pasta. Set pot over low heat and cook, stirring and tossing pasta constantly, until ingredients are evenly distributed and butter is melted, about 1 minute. Off heat, add provolone and Parmesan. Stir vigorously until cheeses are melted and pasta is coated in creamy, lightly thickened sauce, about 1 minute, adjusting consistency with remaining reserved cooking water as needed. Transfer pasta to platter and serve immediately.</p>",
        subSteps: [
          {
            content: "<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam</p>"
          }
        ]
      }
    ]
};

const Template: ComponentStory<typeof RecipeInstructions> = args => <RecipeInstructions {...args} />;

export const Instructions: ComponentStory<typeof RecipeInstructions> = Template.bind([]);
Instructions.args = {...instructions}