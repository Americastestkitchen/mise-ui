import styled, { css } from 'styled-components';
import { lg, md } from '../../../styles/breakpoints';
import { ButtonArea, ClickArea, Description, Headline, TextArea } from './components';
import { cssThemedLightBackground, cssHorizontalGridAreas, cssVerticalGridAreas } from './css';

const desktop = '@media only screen and (min-width: 1280px)';

const mobileLayout = css`
  height: 192px;
  padding-top: 16px;
  padding-bottom: 16px;
  
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

const tabletLayout = css`
  height: 150px;
  padding-top: 25px;
  padding-bottom: 25px;
  
  ${ClickArea} {
    ${cssHorizontalGridAreas}
  }
  ${TextArea} {
    padding-right: 16px;
  }
  ${Headline} {
    letter-spacing: 2.56px;
    line-height: 20px;
    margin-bottom: 6px;
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
  ${Headline} {
    font-size: 16px;
  }
  ${Description} {
    font-size: 23px;
    line-height: 26px;
  }
  ${ButtonArea} {
    margin-right: 72px;
  }
`;

/**
 * Consolidates all breakpoint specific layout and styles.
 * Any style changes unrelated to theming can be made here.
 */
const Layout = styled.div`
  ${cssThemedLightBackground}

  ${mobileLayout}
  ${md(css`${tabletLayout}`)}
  ${lg(css`${tabletLargeLayout}`)}
  ${desktop} {
    ${desktopLayout}
  }

  box-sizing: border-box;
  width: 100vw;
  margin-left: calc((100vw - 100%) / -2);
  margin-right: calc((100vw - 100%) / -2);
  padding-left: calc((100vw - 100%) / 2);
  padding-right: calc((100vw - 100%) / 2);

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export default Layout;
