import styled, { css } from 'styled-components';
import { md, lg } from '../../../styles/breakpoints';
import { color } from '../../../styles';

const HeroHatContent = styled.div.attrs<{ isTall: string; }>(
  ({ isTall }) => ({ className: `hero-hat__content ${isTall}` }))<{isTall: string;}>`
  color: ${color.eclipse};
  flex: 1 0 0;


  &.is-tall {
    align-items: center;
    color: #3d3d3d;
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  ${md(css`
    padding-right: 1rem;
  `)}

  ${lg(css`
    max-width: 52%;
    padding-right: 2rem;
  `)}
`;

export default HeroHatContent;
