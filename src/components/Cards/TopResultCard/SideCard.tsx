import styled from 'styled-components';
import { color, font } from '../../../styles';
import { cssThemedLink } from '../../../styles/mixins';

export const Font1 = styled.div`
  font-family: "proximaNovaBold";
  font-size: 23px;
  line-height: 26px;
  color: ${color.eclipse};
`;

export const Font2 = styled.div`
  font-family: ${font.pnr};
  color: ${color.eclipse};
  font-size: 16px;
  line-height: 23px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 26px;
  }
  button {
    font-style: italic;
    letter-spacing: unset !important;
    ${cssThemedLink}
  }
`;

export const Font3 = styled.div`
  font-family: ${font.pnr};
  font-size: 16px;
  line-height: 23px;
  color: ${color.eclipse};

  strong {
    font-family: ${font.pnb};
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 0.98px;
  }
`;

export const SideCard = styled.div`
  padding: 20px 12px 20px 10px;
  @media screen and (min-width: 768px) {
    padding: 20px 26px;
  }
  @media screen and (min-width: 1024px) {
    padding: 20px 26px 20px 22px;
  }
  ${Font1}, ${Font2} {
    margin-bottom: 7px;
  }
`;

export const TopResultWrapper = styled.a`
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
