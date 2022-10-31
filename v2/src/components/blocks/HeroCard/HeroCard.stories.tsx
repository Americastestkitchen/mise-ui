import React from "react";

import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroCard from "./HeroCard";

export default {
  title: "Components/Blocks/HeroCard",
  component: HeroCard,
} as ComponentMeta<typeof HeroCard>;

export const Template: ComponentStory<typeof HeroCard> = args => {
  return <HeroCard {...args} />;
};

export const HeroCardStory: ComponentStory<typeof HeroCard> = Template.bind({});
