import React from 'react';
import styled from 'styled-components';

import Brands from './index';

const BC = styled.div`
  width: 200px;

  img {
    width: 100%;
  }
`;

export default {
  title: 'Design Tokens/Brands',
  component: Brands,
};

export const Amazon = () => <BC><Brands.Amazon /></BC>;
export const BlueApron = () => <BC><Brands.BlueApron /></BC>;
export const Houzz = () => <BC><Brands.Houzz /></BC>;
export const KingArthur = () => <BC><Brands.KingArthur /></BC>;
export const SurLaTable = () => <BC><Brands.SurLaTable /></BC>;
export const ThermoWorks = () => <BC><Brands.ThermoWorks /></BC>;
export const Victorinox = () => <BC><Brands.Victorinox /></BC>;
export const WilliamsSonoma = () => <BC><Brands.WilliamsSonoma /></BC>;
