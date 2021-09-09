import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

const SuggestionCardImg = styled.a.attrs({
  className: 'suggestion-card__img',
})`
  ${({ imageUrl }) => (imageUrl ? `
    background: no-repeat center center url("${imageUrl}");
    min-height: 25rem;
  ` : '')}
  background-size: cover;
  display: block;
  overflow: hidden;
  position: relative;
  width: 100%;

  ${breakpoint('md', 'lg')`
    flex: 0 0 25rem;
  `}

  ${breakpoint('lg')`
    flex: 0 0 41rem;
  `}
`;

export default SuggestionCardImg;
