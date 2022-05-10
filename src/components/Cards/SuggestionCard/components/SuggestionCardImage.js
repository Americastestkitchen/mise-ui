import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

const SuggestionCardImg = styled.a.attrs({
  className: 'suggestion-card__img',
})`
  ${({ imageUrl }) => (imageUrl ? `
    background: no-repeat center center url("${imageUrl}");
    min-height: 20rem;
  ` : '')}
  background-size: cover;
  display: block;
  overflow: hidden;
  position: relative;
  overflow: visible;
  width: 27.2rem;
  height: 19.9rem;

  ${breakpoint('md')`
    flex: 0 0 27.2rem;
    height: 27.2rem;
  `}
`;

export default SuggestionCardImg;
