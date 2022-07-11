/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { color } from '../../../styles';

export const TopResultCardWrapper = styled.a`
  width: 100%;
  background-color: ${color.white};
  align-self: start;
  overflow: hidden;

  margin-bottom: 40px;
  @media (min-width: 768px) and (max-width: 1024px) {
    margin-bottom: 30px;
  }

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 250px 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 340px 1fr;
    grid-template-rows: 1fr;
    min-height: 272px;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 272px 1fr;
    width: 560px;
    height: 400px;
  }
  > * {
    height: 100%;
    width: 100%;
  }
`;
