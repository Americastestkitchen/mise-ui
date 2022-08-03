import React from 'react';
import Image from './Image';

export default {
  title: 'Components/Cards/shared/Image',
  component: Image,
};

export const StandardCardImage = () => (
  <Image
    imageAlt="Gray cat pulling up the edge of a rug"
    imageUrl="https://placekitten.com/272/272"
  />
);
