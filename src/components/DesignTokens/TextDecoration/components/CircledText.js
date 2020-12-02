import styled from 'styled-components';

const CircledText = styled.span`
  display: inline-block;
  position: relative;

  svg {
    max-width: 150%;
    position: absolute;
    top: 50%;
    max-height: 170%;
    height: 170%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export default CircledText;
