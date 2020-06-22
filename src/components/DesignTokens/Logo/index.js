import React from 'react';
import Logos from './svgs';

export const ATK = () => <Logos.ATK />;

export const keyToLogo = key => ({
  atk: ATK,
}[key] || null);

export default Logos;
