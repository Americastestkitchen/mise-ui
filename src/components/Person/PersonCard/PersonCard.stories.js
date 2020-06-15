import React from 'react';

import PersonCard from './index';

export default {
  title: 'Components|Person/PersonCard',
  component: PersonCard,
};

export const Default = () => (
  <PersonCard
    description={`Bridget's favorite fair food is deep fried twinkies: learn why on this <a href="#">episode of proof</a>`} // eslint-disable-line
    imgSrc="https://res.cloudinary.com/hksqkdlah/image/upload/v1591822137/mise-play/Image_21_3x.png"
    name="Bridget Lancaster"
  />
);
