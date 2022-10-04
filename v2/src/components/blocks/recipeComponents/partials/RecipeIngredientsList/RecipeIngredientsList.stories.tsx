import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RecipeIngredientsList from './RecipeIngredientsList';

export default {
  title: 'Components/Blocks/RecipeComponent/RecipeIngredientsList',
  component: RecipeIngredientsList,
} as ComponentMeta<typeof RecipeIngredientsList>;

const Template: ComponentStory<typeof RecipeIngredientsList> = args => <RecipeIngredientsList {...args} />;

const ingredientListObject = [
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

export const OneGroup = Template.bind({});
OneGroup.args = {
  ingredientsList: [ingredientListObject[0]]
};
export const TwoGroups = Template.bind({});
TwoGroups.args = {
  ingredientsList: [ingredientListObject[0], ingredientListObject[1]]
};

