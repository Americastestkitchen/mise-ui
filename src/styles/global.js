import { createGlobalStyle, css } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { fonts } from './fonts'

export const globalStyles = css`
  ${styledNormalize}
  ${fonts}

  html {
    height: 100%;
    box-sizing: border-box;
    font-size: 62.5%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    font-weight: inherit;
  }

  body {
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  li {
    list-style-type: none;
  }

  img {
    max-width: 100%;
  }
`;

export const GlobalStyle = createGlobalStyle`
  ${globalStyles}
`;
