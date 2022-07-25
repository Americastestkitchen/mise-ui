import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { storybookParameters } from '../../../config/shared.stories';
import RelatedDocumentCard, { RelatedDocumentCardProps } from './RelatedDocumentCard';

export default {
  title: 'Components/Cards/RelatedDocumentCard',
  component: RelatedDocumentCard,
  ...storybookParameters,
} as ComponentMeta<typeof RelatedDocumentCard>;

const Template = (args: RelatedDocumentCardProps) => (
  <RelatedDocumentCard {...args} />
);

export const Default: ComponentStory<typeof RelatedDocumentCard> = Template.bind({});
Default.args = {
  attribution: 'AMERICA’S TEST KITCHEN',
  contentType: 'episode',
  href: 'https://www.americastestkitchen.com/episode/742-crepes-two-ways',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,f_auto,g_faces:auto,q_auto:low,w_300,ar_16:9/v1592840035/mise-play/feature-card-wide.jpg',
  subtitle: 'From season 13, watch in play',
  title: 'Tasting International Yogurts',
  siteKey: 'atk',
};
