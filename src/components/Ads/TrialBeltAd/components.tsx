import styled from 'styled-components';
import { font, color } from '../../../styles';
import { cssThemedColor } from '../../../styles/mixins';
import { cssThemedButton } from './css';

export const Headline = styled.p`
  font-family: ${font.pnr};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 2.24px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-family: ${font.pnb};
  font-size: 18px;
  line-height: 20px;
`;

export const TextArea = styled.div`
  ${cssThemedColor}
  grid-area: TextArea;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageArea = styled.div`
  grid-area: ImageArea;
  height: 100px;
  width: 100px;
`;

export const ButtonArea = styled.div`
  ${cssThemedButton}
  grid-area: ButtonArea;
  height: 40px;
  place-self: center;
  overflow: hidden;

  display: flex;
  place-items: center;
  place-content: center;
  font-family: ${font.pnb};
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 2.88px;
  color: ${color.white};
  text-transform: uppercase;
`;

export const ClickArea = styled.a`
  display: grid; 
  grid-template-columns: auto 1fr auto; 
  grid-template-rows: auto auto auto; 
  gap: 0px 0px; 
  width: 100%;
`;
