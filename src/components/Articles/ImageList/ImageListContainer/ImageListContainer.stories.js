import React from 'react';

import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import ImageListContainer from './index';
import { siteKey } from '../../../../config/argTypes';
import { addThemedWrapper } from '../../../../config/decorators';

export default {
  title: 'Components/Articles/ImageListContainer',
  component: ImageListContainer,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey, },
};

const ImageListStoryWrapper = styled.div`
  background-color: #FFFFFF;
  padding: 1.6rem;
  ${breakpoint('md')`
    padding: 3.6rem;
  `}
`;

const images = [
  {
    altText: 'picture of a thing',
    cloudinaryId: 'TnT/2020/1_CCJJ_Dill%20Pickles/SPS_Dill_Pickle_Hero_123',
    content: '\u003cp\u003eThere are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.\u003cp\u003e',
    lazy: true
  },
  {
    altText: 'picture of a thing',
    cloudinaryId: 'AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
    content: '\u003cp\u003eThere are many things about this picture to say. There are many things about this picture to say. There are many things about this picture to say.\u003cp\u003e',
    lazy: true
  }
];

const Template = (args) => <ImageListContainer {...args} />;

const TemplateWrapper = (args) => (
  <ImageListStoryWrapper>
    <ImageListContainer {...args} />;
  </ImageListStoryWrapper>
)

export const DefaultWidth = Template.bind({});
DefaultWidth.args = {
  images,
  siteKey: 'atk',
  title: 'Image List Container',
  width: 'default',
};

export const DefaultWidthBorder = TemplateWrapper.bind({});
DefaultWidthBorder.args = {
  ...DefaultWidth.args,
  borderWith: 4
};

export const WideWidth = Template.bind({});
WideWidth.args = {
  ...DefaultWidth.args,
  width: 'width',
};

export const WideWidthBorder = TemplateWrapper.bind({});
WideWidthBorder.args = {
  ...DefaultWidth.args,
  borderWith: 4,
};

export const WithIntroField = Template.bind({})
WithIntroField.args = {
  ...DefaultWidth.args,
  intro: 'New text between header and items'
}
