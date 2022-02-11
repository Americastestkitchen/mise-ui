import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

import { color, font } from '../../../styles';

const RegistrantSubmit = styled.button.attrs({
  className: 'hero-hat__button',
})`
  background-color: ${color.frog};
  color: ${color.white};
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

    ${breakpoint('md')`
      max-width: 24.5rem;
    `}
  }
`;

export default RegistrantSubmit;
