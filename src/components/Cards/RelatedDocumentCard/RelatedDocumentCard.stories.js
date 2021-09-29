import React from 'react';

import RelatedDocumentCard from './index';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Cards/RelatedDocumentCard',
  component: RelatedDocumentCard,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const Template = (args) => <RelatedDocumentCard {...args} />;

export const DefaultWidth = Template.bind({});
DefaultWidth.args = {
  attribution: 'AMERICA’S TEST KITCHEN',
  contentType: 'episode',
  href: 'https://www.americastestkitchen.com/episode/742-crepes-two-ways',
  imageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,f_auto,g_faces:auto,q_auto:low,w_300,ar_16:9/v1592840035/mise-play/feature-card-wide.jpg',
  subtitle: 'From season 13, watch in play',
  title: 'Tasting International Yogurts',
  siteKey: 'atk',
};
