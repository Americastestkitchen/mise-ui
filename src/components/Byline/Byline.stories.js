import React from 'react';
import Byline from './index';

export default {
  title: 'Components|Byline',
  component: Byline,
};

export const Default = () => (
  <Byline
    author="Kevin Pang"
    authorImageCloudinaryId="Play%20Cast%20Headshots/staff_dan_souza"
    attribution="Yesterday"
  />
);

export const NoImage = () => (
  <Byline
    author="Kevin Pang"
    attribution="Yesterday"
  />
);