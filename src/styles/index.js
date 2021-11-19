import { css } from 'styled-components';
import breakpoints from './breakpoints';
import cards from './cards';
import color from './colors';
import { fontSize, font, lineHeight, letterSpacing } from './typography';
import { grid, spacing } from './layout';
import mixins from './mixins';
import carousel from './carousel';
import fonts from './fonts';
import globalStyle from './global';

const themeValue = (prop, val) => props => (props.theme[prop] && props.theme[prop][val]) || val;
const withThemes = siteTheme => (
  css`
    ${() => siteTheme.default || ''};
    ${props => siteTheme[props.theme.siteKey]};
    ${props => siteTheme[props.theme.mode]};
  `
);

export {
  carousel,
  breakpoints,
  cards,
  color,
  fontSize,
  font,
  grid,
  lineHeight,
  letterSpacing,
  mixins,
  spacing,
  themeValue,
  withThemes,
  globalStyle,
  fonts,
};
