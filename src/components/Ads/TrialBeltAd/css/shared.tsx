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
  cio: css`
    background-color: ${color.squirrel};
    &:hover {
      background-color: ${color.cork};
    }
  `,
  cco: css`
    background-color: ${color.denim};
    &:hover {
        background-color: ${color.arapawa};
    }
  `,
});

export const cssVerticalGridAreas = css`
  grid-template-areas: 
    "ImageArea TextArea TextArea"
    "ImageArea TextArea TextArea"
    "ButtonArea ButtonArea ButtonArea"; 
`;

export const cssHorizontalGridAreas = css`
  grid-template-areas: 
    "ImageArea TextArea ButtonArea"
    "ImageArea TextArea ButtonArea"
    "ImageArea TextArea ButtonArea"; 
`;
