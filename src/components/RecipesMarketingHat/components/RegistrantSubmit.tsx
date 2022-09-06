import styled, { css } from 'styled-components';
import { md } from '../../../styles/breakpoints';

import { color, font } from '../../../styles';

const RegistrantSubmit = styled.button.attrs<{isTall: string}>(
  ({ isTall }) => ({ className: `registrant-submit hero-hat__button ${isTall}` }))<{isTall: string}>`
  background-color: ${color.frog};
  color: ${color.white};
  height: 4rem;
  text-transform: uppercase;
  width: 100%;

  &:hover {
    background-color: ${color.darkFrog};
  }

  &.is-tall {
    align-items: center;
    border: none;
    display: flex;
    font: 1.8rem/20px ${font.pnb};
    height: 4rem;
    justify-content: center;
    letter-spacing: 2.88px;
    text-align: center;

    ${md(css`
      max-width: 24.5rem;
    `)}
  }
`;

export default RegistrantSubmit;
