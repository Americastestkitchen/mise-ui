import styled from 'styled-components';
import { cssThemedLightBackground } from './css/shared';
import layoutStyles, { textLayoutStyles } from './css/layoutStyles';
import reducedTextSizing from './css/reducedTextSizing';

/**
 * Consolidates all breakpoint specific layout and styles.
 * Any style changes unrelated to theming can be made here.
 */
const Layout = styled.div<{ excludePadding?: boolean, reducedTextSizing?: boolean; textGrid?: boolean; }>`
  ${cssThemedLightBackground}
  ${({ textGrid }) => (textGrid ? textLayoutStyles : layoutStyles)}
  ${reducedTextSizing}

  box-sizing: border-box;
  width: 100vw;
  margin-left: calc((100vw - 100%) / -2);
  margin-right: calc((100vw - 100%) / -2);
  ${({ excludePadding }) => (!excludePadding ? 'padding-left: calc((100vw - 100%) / 2); padding-right: calc((100vw - 100%) / 2);' : '')}

  display: flex;
  justify-content: center;
  align-items: stretch;
`;

export default Layout;
