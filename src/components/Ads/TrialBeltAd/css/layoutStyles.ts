import { css } from 'styled-components';
import { lg, md } from '../../../../styles/breakpoints';
import { AccentHeadline, ButtonArea, ClickArea, GridImageArea, TextArea } from './components';
import { cssHorizontalGridAreas, cssTextAdMobileGrid, cssTextAdTabletGrid, cssVerticalGridAreas } from './shared';

const desktop = '@media only screen and (min-width: 1280px)';

const mobileLayout = css<{ excludePadding?: boolean }>`
  height: 192px;
  ${({ excludePadding }) => (!excludePadding ? 'padding-top: 16px; padding-bottom: 16px;' : '')}
  
  ${ClickArea} {
    ${cssVerticalGridAreas}
  }
  ${TextArea} {
    padding-left: 16px;
  }
  ${ButtonArea} {
    max-width: 340px;
    width: 100%;
  }
`;

const tabletLayout = css<{ excludePadding?: boolean}>`
  height: 150px;
  ${({ excludePadding }) => (!excludePadding ? 'padding-top: 25px; padding-bottom: 25px;' : '')}
  
  ${ClickArea} {
    ${cssHorizontalGridAreas}
  }
  ${TextArea} {
    padding-right: 16px;
  }
  ${ButtonArea} {
    width: 200px;
  }
`;

const tabletLargeLayout = css`
  ${ButtonArea} {
    width: 272px;
  }
  ${ClickArea} {
    ${cssHorizontalGridAreas}
  }
  ${GridImageArea} {
    border-right: 1px solid #707070;
  }
`;

const desktopLayout = css`
  ${TextArea} {
    padding-left: 32px;
    padding-right: 32px;
  }
  ${ClickArea} {
    ${cssHorizontalGridAreas}
  }
  ${ButtonArea} {
    margin-right: 72px;
  }
`;

const layoutStyles = css`
  ${mobileLayout}
  ${md(css`${tabletLayout}`)}
  ${lg(css`${tabletLargeLayout}`)}
  ${desktop} {
    ${desktopLayout}
  }
`;

const textMobileLayout = css`
  height: 192px;
  padding-top: 16px;
  padding-bottom: 16px;

  ${ClickArea} {
    ${cssTextAdMobileGrid}
  }

  ${ButtonArea} {
    max-width: 340px;
    width: 100%;
  } 
`;

const textTabletLayout = css`
  height: 150px;
  padding-top: 25px;
  padding-bottom: 25px;
  
  ${ClickArea} {
    ${cssTextAdTabletGrid}
  }
  ${TextArea} {
    padding-right: 16px;
  }
  ${ButtonArea} {
    width: 200px;
  }
`;

const textTabletLargeLayout = css`
  ${ButtonArea} {
    width: 272px;
  }
  ${ClickArea} {
    ${cssHorizontalGridAreas}
  }
  ${GridImageArea} {
    display: flex;
    align-items: center;
  }
  ${AccentHeadline} {
    display: flex;
    align-items: center;
    height: 76px;
    border-right: 1px solid #707070;
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const textDesktopLayout = css`
  ${TextArea} {
    padding-right: 32px;
  }
  ${ClickArea} {
    ${cssHorizontalGridAreas}
  }
  ${ButtonArea} {
    margin-right: 72px;
  }
`;

export const textLayoutStyles = css`
  ${textMobileLayout}
  ${md(css`${textTabletLayout}`)}
  ${lg(css`${textTabletLargeLayout}`)}
  ${desktop} {
    ${textDesktopLayout}
  }
`;

export default layoutStyles;
