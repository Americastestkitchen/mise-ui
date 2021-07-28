import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Badge from './index';
import { color } from '../../styles';

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [withKnobs],
};

export const ATKBadge = () => <Badge type="atk" fill={text('fill', color.transparentBlack)} />;

export const CIOBadge = () => <Badge type="cio" fill={text('fill', color.transparentBlack)} />;

export const CCOBadge = () => <Badge type="cco" fill={text('fill', color.transparentBlack)} />;

export const KidsBadge = () => <Badge type="kids" fill={text('fill', color.transparentBlack)} />;

export const ShopBadge = () => <Badge type="shop" fill={text('fill', color.transparentBlack)} />;

export const SchoolBadge = () => <Badge type="school" fill={text('fill', color.transparentBlack)} />;
