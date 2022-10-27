import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";
import { withDesign } from "storybook-addon-designs";

import { HeroCard, HeroCardProps } from "./HeroCard";

export default {
  title: "NEW COMPONENT/HeroCard",
  component: HeroCard,
  decorators: [withDesign],
  argTypes: {
    className: {
      control: null,
    },
  },
} as Meta;

export const Basic: Story<HeroCardProps> = ({ ...args }) => {
  return <HeroCard {...args} />;
};