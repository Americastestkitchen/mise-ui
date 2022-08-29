import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import ImageCollage, { ImageCollageProps } from './ImageCollage';
import { grid } from '../../../../styles';

const CollageFrame = styled.div`
  width: ${grid.columnWidth};
`;

const defaultImageUrls = [
  'https://placekitten.com/272/272',
  'https://placekitten.com/272/272',
  'https://placekitten.com/272/272',
  'https://placekitten.com/272/272',
];

export default {
  title: 'Components/Cards/shared/ImageCollage',
  component: ImageCollage,
} as ComponentMeta<typeof ImageCollage>;

const Template: ComponentStory<typeof ImageCollage> = (args: ImageCollageProps) => (
  <CollageFrame>
    <ImageCollage {...args} />
  </CollageFrame>
);

export const Default = Template.bind({});
Default.args = {
  imageAlt: 'Cats doing cat things',
  imageUrl: defaultImageUrls,
};
