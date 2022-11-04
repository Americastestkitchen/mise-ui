import { ComponentStory, ComponentMeta } from '@storybook/react';
import HeroCard from "./HeroCard";

export default {
  title: "Components/Blocks/HeroCard",
  component: HeroCard,
} as ComponentMeta<typeof HeroCard>;

const Template: ComponentStory<typeof HeroCard> = args => {
  return <HeroCard {...args} />;
};

const defaultAuthor = {
  id: 156,
  firstName: 'Kevin',
  lastName: 'Pang',
  image:
  {
    altText: '',
    cloudinaryUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low/AKO%20Articles/Author_Headshots/staff_kevin_pang'
  },
  inactive: false,
}

export const HeroCardStory: ComponentStory<typeof HeroCard> = Template.bind({});
HeroCardStory.args = {
  author: defaultAuthor,
}
