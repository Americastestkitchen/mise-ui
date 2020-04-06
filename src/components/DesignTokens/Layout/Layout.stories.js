import React from 'react';
import Layout from './index';

export default {
  title: 'Design Tokens|Layout',
  component: Layout,
};

export const Grid = () => (
  <Layout tokenGroup="grid" notes="" />
);

export const Spacing = () => (
  <Layout tokenGroup="spacing" notes="" />
);
