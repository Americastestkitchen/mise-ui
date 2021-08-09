import React from 'react';

import ArticleImage from './index';
import { siteKey } from '../../../config/argTypes';
import { addThemedWrapper } from '../../../config/decorators';

export default {
  title: 'Components/Articles/ArticleImage',
  component: ArticleImage,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const alt = 'A chef is holding a pan with garlic bread on it.';
const caption = 'The heat applied during pasteurization, a necessary step for all shelf-stable jars, essentially cooks the pickles.';
const imgSrcs = {
  desktopSrc: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_632/v1/AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
  imgSrc: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_341/v1/AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
  tabletSrc: 'https://res.cloudinary.com/hksqkdlah/image/upload/c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_697/v1/AKO%20Articles/2021%20Articles/Reviews%20Team/GettyImages-680787007',
};

const Template = (args) => <ArticleImage {...args} />;

export const DefaultWidth = Template.bind({});
DefaultWidth.args = {
  alt,
  caption,
  ...imgSrcs,
  siteKey: 'atk',
  width: 'default',
};

export const WideWidth = Template.bind({});
WideWidth.args = {
  alt,
  caption,
  ...imgSrcs,
  siteKey: 'atk',
  width: 'wide',
};