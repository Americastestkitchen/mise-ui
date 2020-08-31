import styled from 'styled-components';

const UnderlinedText = styled.span`
  display: inline-block;
  position: relative;

  svg {
    position: absolute;
    top: 95%;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
`;

export default UnderlinedText;
