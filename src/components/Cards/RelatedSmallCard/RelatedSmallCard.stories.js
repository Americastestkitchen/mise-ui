import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import RelatedSmallCard from '.';


export default {
  title: 'Components/Cards/RelatedSmallCard',
  component: RelatedSmallCard,
  decorators: [withKnobs],
};

export const Default = () => (
  <RelatedSmallCard
    href="https://www.google.com"
    imageAlt={text('Image alt text', '')}
    imageUrl={text('Image url', 'https://res.cloudinary.com/hksqkdlah/image/upload/t_media_lib_thumb/v1608319975/ATK%20TV%20Play%20Images/S21/ATK2103_REC_13_JULIA_05.jpg')}
    onClick={action('result-click')}
    title={text('Title', 'Congee (Chinese Rice Porridge) with Stir-Fried Ground Pork')}
  />
);