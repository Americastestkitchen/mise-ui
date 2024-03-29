import breakpoint from 'styled-components-breakpoint';
import styled from 'styled-components';

const SuggestionCardContentInner = styled.div.attrs({
  className: 'suggestion-card__content-inner',
})`
  padding: 0 0 0 2.5rem;
  min-width: 26.6rem;
  width: 26.6rem;
  max-width: 30rem;
  text-align: center;
  margin: 2rem 0;

  ${breakpoint('md')`
    text-align: left;
    max-width: 30rem;
  `}

  .recipe-attributions {
    justify-content: center;

    ${breakpoint('md')`
      justify-content: flex-start;
    `}
  }
`;

export default SuggestionCardContentInner;
