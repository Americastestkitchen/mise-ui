import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import RelatedContentCard, { RelatedContentCardProps } from './RelatedContentCard';
import { siteKey } from '../../../config/argTypes';
import ThemedWrapper from '../../../config/decorators/ThemedWrapper';

export default {
  title: 'Components/Cards/RelatedContentCard',
  component: RelatedContentCard,
  decorators: [ThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof RelatedContentCard>;

const Template = (args: RelatedContentCardProps) => (
  <RelatedContentCard {...args} />
);

const defaultArgs = {
  href: '/',
  src: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,f_auto,g_faces:auto,q_auto:low,w_200,ar_1:1/v1592840035/mise-play/feature-card-wide.jpg',
  headline: 'Recipe',
  title: 'Whole Roast Snapper with Citrus Vinaigrette Vinaigrette',
  body: 'To serve up an impressive dish of roasted red snapper, we started by making shallow slashes in the skin to ensure even cooking and seasoning; this step also allowed us to gauge the doneness of the fish easily.',
  siteKey: 'atk',
};

export const withoutLink: ComponentStory<typeof RelatedContentCard> = Template.bind({});
withoutLink.args = { ...defaultArgs };
export const withoutTextWrap: ComponentStory<typeof RelatedContentCard> = Template.bind({});
withoutTextWrap.args = { ...defaultArgs, title: 'short title', body: 'short body' };
export const withLink: ComponentStory<typeof RelatedContentCard> = Template.bind({});
withLink.args = { ...defaultArgs, link: 'Save 26% Right Now' };
export const withButton: ComponentStory<typeof RelatedContentCard> = Template.bind({});
withButton.args = { ...defaultArgs, link: 'Save 26% Right Now', withButton: true };
export const withoutImage: ComponentStory<typeof RelatedContentCard> = Template.bind({});
withoutImage.args = { ...defaultArgs, src: undefined };
export const withLinkWithoutImage: ComponentStory<typeof RelatedContentCard> = Template.bind({});
withLinkWithoutImage.args = { ...defaultArgs, link: 'Save 26% Right Now', src: undefined };
export const withButtonWithoutImage: ComponentStory<typeof RelatedContentCard> = Template.bind({});
withButtonWithoutImage.args = { ...defaultArgs, link: 'Save 26% Right Now', withButton: true, src: undefined };
