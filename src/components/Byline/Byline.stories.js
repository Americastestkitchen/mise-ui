import React from 'react';

import Byline from './Byline';
import { siteKey } from '../../config/argTypes';
import { addThemedWrapper } from '../../config/decorators';

export default {
  title: 'Components/Byline',
  component: Byline,
  decorators: [ addThemedWrapper() ],
  argTypes: { siteKey },
};

const Template = (args) => <Byline {...args} />;

export const WithoutPhoto = Template.bind({});
WithoutPhoto.args = {
  author: 'Kevin Pang',
  attribution: 'Digital Editorial Director',
  imgAlt: 'This is Kevin Pang',
  siteKey: 'atk',
};

export const WithPhoto = Template.bind({});
WithPhoto.args = {
  ...WithoutPhoto.args,
  authorImageCloudinaryId: 'AKO%20Articles/Author_Headshots/staff_kevin_pang',
};
