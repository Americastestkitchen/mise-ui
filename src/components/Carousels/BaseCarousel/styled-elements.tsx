import styled, { css } from 'styled-components';
import { withThemes, color, font } from '../../../styles';
import { untilLg } from '../../../styles/breakpoints';
import { cssThemedBackground, cssThemedColor, cssThemedFont, cssThemedLink } from '../../../styles/mixins';

const cssBreakpointWidth = css`
  ${untilLg(css`
    --side-margin: calc((100vw - 100%) / 2);
    width: calc(100% + var(--side-margin, calc((100vw - 100%) / 2)));
    margin-right: calc(-1 * var(--side-margin, calc((100vw - 100%) / 2)));
  `)}
`;

export const Carousel = styled.div <{withBreakpointWidth?: boolean}>`
  width: 100%;
  ${({ withBreakpointWidth }) => withBreakpointWidth && cssBreakpointWidth}
  .flickity-viewport {
    /* 100% slides vertical scrollbar bug */
    overflow: hidden;
  }
  .standard-card {
    width: 272px;
  }
`;

export const Divider = styled.div<{showDivider?: boolean}>`
  margin-right: 1px;
  margin-bottom: ${({ showDivider }) => (showDivider ? '12px' : '8px')};

  ${({ showDivider }) => !!showDivider && withThemes({
    default: css`
      background-color: ${color.silver};
      height: 1px;
    `,
    cco: css`
      background-color: ${color.whiteSmoke};
      height: 6px;
    `,
    cio: css`
      background-color: ${color.bone};
      height: 1px;
    `,
  })}
`;

export const Button = styled.button`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 0;
  position: relative;

  ${withThemes({
    default: css`background: ${color.wintergreenDream};`,
    cco: css`background: ${color.queenBlue};`,
    cio: css`background: ${color.squirrel};`,
  })}

  &:hover {
    ${cssThemedBackground}
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); 
    outline: none;
  }

  &:active{
    opacity: 0.6;
  }
`;

export const Svg = styled.svg`
  width: 60%;
  height: 60%;
  position: absolute;
  left: 20%;
  top: 20%;
  fill: white;
`;

export const Navigation = styled.nav`
  flex-shrink: 0;
  padding-bottom: 4px;
  ${Button}:first-child {
    margin-right: 8px;
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 4px 0;
`;

export const Title = styled.h2`
  ${cssThemedColor}
  ${cssThemedFont}
  font-size: 26px;
  line-height: 1.15;
  margin: 0;
`;

export const Intro = styled.div`
  ${cssThemedColor}
  font-family: ${font.mwr};
  font-size: 16px;
  line-height: 1.63;
  padding: 3px 0;
  a {
    ${cssThemedLink}
  }
`;

export const Subtitle = styled.span`
  ${cssThemedColor}
  font-family: ${font.pnr};
  font-size: 18px;
  line-height: 1.48;
  letter-spacing: 2.88px;
  margin: 0;
`;
