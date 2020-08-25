import { css } from 'styled-components';
import styledNormalize from 'styled-normalize';
import fonts from './fonts';

export default css`
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
    margin: 1rem;
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

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input[type="button"],
  input[type="submit"] {
    border: 0;
    margin: 0;
    padding: 0;
    background: none;
    color: currentColor;
    font-family: inherit;
    cursor: pointer;
    text-decoration: none;
    appearance: none;
  }

  input[type="text"],
  input[type="search"] {
    appearance: none;
  }

  ul,
  li {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  ins {
    text-decoration: none;
  }

  ins::before,
  ins::after,
  del::before,
  del::after {
    clip-path: inset(100%);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }

  del::before {
    content: " [deletion start] ";
  }

  del::after {
    content: " [deletion end] ";
  }

  ins::before {
    content: " [insertion start] ";
  }

  ins::after {
    content: " [insertion end] ";
  }

  .visually-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    width: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
