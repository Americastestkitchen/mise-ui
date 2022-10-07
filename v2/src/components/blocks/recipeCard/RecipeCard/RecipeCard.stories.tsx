import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import RecipeCard from './RecipeCard';

export default {
  title: 'Components/Blocks/RecipeCard/RecipeCard',
  component: RecipeCard,
} as ComponentMeta<typeof RecipeCard>;

const attributes = {
  header: {
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
  },
  ingredients: {
    group: [
      {
        name: "This is the First Ingredient Group Name",
        items: [
          {
            name: "small zucchini",
            post: ", sliced ⅛ inch thick",
            quantity: "1",
            measurement: "pound"
          },
          {
            name: "table salt",
            post: ", plus salt for cooking pasta",
            quantity: "½",
            measurement: "teaspoon"
          },
          {
            name: "extra-virgin olive oil",
            post: "",
            quantity: "1",
            measurement: "tablespoon"
          },
          {
            name: "spaghetti",
            post: "",
            quantity: "6",
            measurement: "ounces"
          },
          {
            name: "unsalted butter",
            post: "",
            quantity: "1",
            measurement: "tablespoon"
          },
          {
            name: "chopped fresh basil",
            post: "",
            quantity: "1",
            measurement: "tablespoon"
          },
          {
            name: "pepper",
            post: "",
            quantity: "¼",
            measurement: "teaspoon"
          },
          {
            name: "provolone cheese",
            post: ", shredded (⅓ cup)",
            quantity: "1¼",
            measurement: "ounces"
          },
          {
            name: "grated Parmesan cheese",
            post: "",
            quantity: "3",
            measurement: "tablespoons"
          }
        ]
      },
      {
        name: "This is the second Ingredient Group Name",
        items: [
          {
            name: "small zucchini",
            post: ", sliced ⅛ inch thick",
            quantity: "1",
            measurement: "pound"
          },
          {
            name: "table salt",
            post: ", plus salt for cooking pasta",
            quantity: "½",
            measurement: "teaspoon"
          },
          {
            name: "extra-virgin olive oil",
            post: "",
            quantity: "1",
            measurement: "tablespoon"
          },
          {
            name: "spaghetti",
            post: "",
            quantity: "6",
            measurement: "ounces"
          },
          {
            name: "unsalted butter",
            post: "",
            quantity: "1",
            measurement: "tablespoon"
          },
          {
            name: "chopped fresh basil",
            post: "",
            quantity: "1",
            measurement: "tablespoon"
          },
          {
            name: "pepper",
            post: "",
            quantity: "¼",
            measurement: "teaspoon"
          },
          {
            name: "provolone cheese",
            post: ", shredded (⅓ cup)",
            quantity: "1¼",
            measurement: "ounces"
          },
          {
            name: "grated Parmesan cheese",
            post: "",
            quantity: "3",
            measurement: "tablespoons"
          }
        ]
      },
    ]
  },
  instructions: {
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
  }
};

const Template: ComponentStory<typeof RecipeCard> = args => <RecipeCard {...args} />;

export const Card: ComponentStory<typeof RecipeCard> = Template.bind([]);
Card.args = {...attributes}