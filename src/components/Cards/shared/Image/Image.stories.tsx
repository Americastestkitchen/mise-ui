import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Image, { ImagePropTypes } from './Image';

export default {
  title: 'Components/Cards/shared/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args: ImagePropTypes) => (
  <Image {...args} />
);

export const Default = Template.bind({});

Default.args = {
  imageAlt: 'Gray cat pulling up the edge of a rug',
  imageUrl: 'https://placekitten.com/272/272',
  className: '',
  height: 272,
  width: 272,
  lazy: false,
};
