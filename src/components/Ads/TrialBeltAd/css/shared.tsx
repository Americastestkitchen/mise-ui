import { css } from 'styled-components';
import { color, withThemes } from '../../../../styles';

export const cssThemedLightBackground = withThemes({
  default: css`background-color: ${color.frost};`,
  cio: css`background-color: ${color.ivory};`,
  cco: css`background-color: ${color.aliceBlue};`,
});

export const cssThemedButton = withThemes({
  default: css`
    background-color: ${color.coldPool};
    &:hover {
      background-color: ${color.darkColdPool};
    }
  `,
});

export const cssVerticalGridAreas = css`
  grid-template-columns: auto 1fr auto; 
  grid-template-rows: auto auto auto; 
  grid-template-areas: 
    "ImageArea TextArea TextArea"
    "ImageArea TextArea TextArea"
    "ButtonArea ButtonArea ButtonArea"; 
`;

export const cssHorizontalGridAreas = css`
  grid-template-columns: auto 1fr auto; 
  grid-template-rows: auto auto auto; 
  grid-template-areas: 
    "ImageArea TextArea ButtonArea"
    "ImageArea TextArea ButtonArea"
    "ImageArea TextArea ButtonArea"; 
`;

export const cssTextAdTabletGrid = css`
  grid-template-columns: auto auto; 
  grid-template-rows: auto auto; 
  grid-template-areas: 
    "ImageArea ButtonArea"
    "TextArea ButtonArea";
`;

export const cssTextAdMobileGrid = css`
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto); 
  grid-template-areas: 
    "ImageArea"
    "TextArea"
    "ButtonArea";
`;
