import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Accordion from './Accordion';

export default {
  title: 'Components/AccordionList',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

const defaultArgs = [
  {
    label: "Who exactly reviews all of these products?",
    content: "We have a dedicated team of 10 full-time product reviewers and editors. In previous lives we were newspaper reporters, professional bakers, cookbook editors, farmers, bartenders, and restaurant cooks—and we even count an epidemiologist among us. We believe the right kitchen equipment and ingredients can make your life better."
  },
  {
    label: "Why should I trust you?",
    content: "<p>We think (and shop) like home cooks. We purchase all of the products we test at retail, which allows us to remain impartial and objective. Our testing is careful and rigorous. Each review we publish is based on weeks or even months of hands-on testing. Once we know how a product performs, we want to make sure it will last. We test everything for durability, washing items repeatedly and even tossing them off the counter. We make a smoothie in our winning blender 365 times in a row or dip a piping hot skillet into a bucket of ice water to check for warping. We call on experts—scientists, professors, industry specialists, and our own science research editor—to help us understand our test results. When we recommend an item, you can trust that it’s been thoroughly and completely vetted.</p><p>We don’t accept advertising or free products. Whenever possible, we provide links to products so that you can easily find our recommended items. When you make a purchase using one of those links, we may earn an affiliate commission.</p>"
  },
  {
    label: "How do you decide what to test?",
    content: "<p>We focus on cooking equipment and ingredients but we also test products that are used outside the kitchen. We’ve evaluated camp stoves and coolers as well as robot vacuums and outdoor pizza ovens. To put together our testing lineups, we survey the market. Our goal is always to test the full range of options available. We include both big, familiar brands and products from newer, smaller companies. For all of our reviews, we focus on products that can be easily found at brick-and-mortar stores or online.</p><p>If you have a suggestion for a new review or product we should test, we would love to hear about it! Email us at <a href='#'>atkreviews@americastestkitchen.com.</a>"
  }
]

const Template: ComponentStory<typeof Accordion> = args => <Accordion {...args} />;

export const DefaultAccordion: ComponentStory<typeof Accordion> = Template.bind({});
DefaultAccordion.args = {accordion: defaultArgs}  