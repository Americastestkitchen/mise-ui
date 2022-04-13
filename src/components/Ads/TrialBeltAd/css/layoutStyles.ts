import { css } from 'styled-components';
import { lg, md } from '../../../../styles/breakpoints';
import { ButtonArea, ClickArea, TextArea } from './components';
import { cssHorizontalGridAreas, cssVerticalGridAreas } from './shared';

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
`;

const desktopLayout = css`
  ${TextArea} {
    padding-left: 32px;
    padding-right: 32px;
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

export default layoutStyles;
