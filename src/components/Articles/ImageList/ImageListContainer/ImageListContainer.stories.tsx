import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';
import ImageListContainer, { ImageListContainerProps } from './ImageListContainer';
import ArticleComponentWidthType from '../../types/ArticleComponentWidth';

export default {
  title: 'Components/Articles/ImageListContainer',
  component: ImageListContainer,
  decorators: [addThemedWrapper()],
  argTypes: { siteKey },
} as ComponentMeta<typeof ImageListContainer>;

const Template: ComponentStory<typeof ImageListContainer> = (args: ImageListContainerProps) => (
  <ImageListContainer {...args} />
);

const defaultImages: {
  altText: string;
  cloudinaryId: string;
  content: string;
  width: ArticleComponentWidthType;
}[] = [
  {
    altText: 'picture of a thing',
    cloudinaryId: 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Dill_Pickle_Hero_123',
    content: '\u003cp\u003eThere are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.\u003cp\u003e',
    width: 'default',
  },
  {
    altText: 'picture of a thing',
    cloudinaryId: 'AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
    content: '<ol><li><strong class="ql-color-#3d3d3d ql-bg-#f5f5f5"><u>While browning does improve flavor, darker pans also produced cakes </u></strong><span class="ql-color-#3d3d3d ql-bg-#f5f5f5">that were distinctly more evenly, producing taller,&nbsp;</span><a href="https://www-staging.americastestkitchen.com/" target="_blank" class="ql-color-#3d3d3d ql-bg-#f5f5f5">more level layers.</a></li><li><em class="ql-color-#3d3d3d ql-bg-#f5f5f5">As the layers cooled, one result was clear: The darker the pan the darker the cake. A dark-colored pan absorbs heat more efficiently than a light-colored pan.</em></li><li><strong class="ql-bg-#f5f5f5 ql-color-#3d3d3d">As the layers cooled, one result was clear: The darker the pan the darker the cake. A dark-colored pan absorbs heat more efficiently than a light-colored pan.</strong></li></ol>',
    width: 'default',
  },
];

export const Default = Template.bind({});
Default.args = {
  className: 'list-img-story',
  images: defaultImages,
  title: 'Image List Container',
  intro: '',
  width: 'default',
};

export const Wide = Template.bind({});
Wide.args = {
  ...Default.args,
  width: 'wide',
};

export const DefaultWithIntro = Template.bind({});
DefaultWithIntro.args = {
  ...Default.args,
  intro: 'New text between header and items',
};
