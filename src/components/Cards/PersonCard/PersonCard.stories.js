import React from "react";

import PersonCard from "./index";
import { mode, siteKey } from "../../../config/argTypes";
import ThemedWrapper from "../../../config/decorators/ThemedWrapper";

export default {
  title: "Components/Cards/PersonCard",
  component: PersonCard,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey, mode },
};

const Template = (args) => <PersonCard {...args} />;

export const DarkMode = Template.bind({});
DarkMode.args = {
  description:
    'Bridget\'s favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>',
  imgCloudinaryId: "mise-play/Image_21_3x.png",
  mode: "dark",
  name: "Bridget Lancaster",
  siteKey: "atk",
};

export const LightMode = Template.bind({});
LightMode.args = {
  ...DarkMode.args,
  mode: "light",
};
