import styled from 'styled-components';

const SquiggledText = styled.span`
  display: inline-block;
  position: relative;

  svg {
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
`;

export default SquiggledText;
