import styled, { css } from 'styled-components';
import { withThemes, color, font } from '../../../styles';
import {
  cssThemedBackground,
  cssThemedBackgroundAccentColorAlt,
  cssThemedColor,
  cssThemedFontBold,
  cssThemedLink,
} from '../../../styles/mixins';

export const Carousel = styled.div`
  width: 100%;
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
      height: 4px;
    `,
    cio: css`
      background-color: ${color.bone};
      height: 1px;
    `,
  })}
`;

export const Button = styled.button`
  display: block !important;;
  width: 25px !important;
  height: 25px !important;
  border-radius: 100%;
  border: 0;
  position: relative;

  ${cssThemedBackgroundAccentColorAlt}

  &:hover {
    ${cssThemedBackground}
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16); 
    outline: none;
  }

  &:active{
    ${cssThemedBackgroundAccentColorAlt}
    opacity: 0.6;
  }
`;

export const Svg = styled.svg<{rotated?: boolean}>`
  width: 60%;
  height: 60%;
  position: absolute;
  left: ${({ rotated }) => (rotated ? '23%' : '25%')};
  top: ${({ rotated }) => (rotated ? '18%' : '20%')};;
  fill: white;
  max-width: 1.3rem;
`;

export const Navigation = styled.nav`
  flex-shrink: 0;
  display: flex;
  padding-left: 20px;
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

export const TitleWrapper = styled.div`
  align-items: center;
  display: flex; 
`;

export const Title = styled.h2`
  ${cssThemedColor}
  ${cssThemedFontBold}
  font-size: 26px;
  line-height: 33px;
  margin: 0;
`;

export const Intro = styled.div`
  ${cssThemedColor}
  font-family: ${font.mwr};
  font-size: 16px;
  line-height: 1.6;
  padding: 3px 0;
  a {
    ${cssThemedLink}
  }
`;

export const Topic = styled.div`
  ${cssThemedColor}
  font-family: ${font.pnb};
  font-size: 16px;
  line-height: 1.1666;
  margin: 0 0 18px;
`;

export const Subtitle = styled.span`
  ${cssThemedColor}
  font-family: ${font.pnr};
  font-size: 18px;
  line-height: 1.48;
  letter-spacing: 2.88px;
  margin: 0;
`;
