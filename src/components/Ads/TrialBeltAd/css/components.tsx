import styled, { css } from 'styled-components';
import { font, color, mixins } from '../../../../styles';
import { cssThemedColor } from '../../../../styles/mixins';
import { md, lg, xlg } from '../../../../styles/breakpoints';
import { cssThemedButton } from './shared';

export const AccentHeadline = styled.p`
  font-family: 'Univers LT Std', sans-serif; 
  padding-top: 14px; /* embedded visual metrics need fixing? */
  font-size: 46px;
  line-height: 26px;
  letter-spacing: 0.46px;
  color: #d73a19; // not tomato?
  text-transform: uppercase;
`;

export const Headline = styled.p`
  font-family: ${font.pnr};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 2.24px;
  text-transform: uppercase;
`;

export const Description = styled.p`
  font-family: ${font.pnb};
  font-size: 18px;
  line-height: 22px;
  max-width: 208px;

  ${md(css`max-width: 300px;`)}
  ${xlg(css`max-width: 100%;`)}
`;

export const VariantDescription = styled(Description)`
  max-width: 27.5rem;
  ${md(css`max-width: 42rem;`)}
  ${lg(css`max-width: 100%;`)}
`;

export const TextArea = styled.div`
  ${cssThemedColor}
  grid-area: TextArea;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageArea = styled.div`
  grid-area: ImageArea;
  height: 100px;
  width: 100px;
`;

export const GridImageArea = styled.div`
  grid-area: ImageArea;
`;

export const ButtonArea = styled.div`
  ${cssThemedButton}
  grid-area: ButtonArea;
  height: 40px;
  place-self: center;
  overflow: hidden;

  display: flex;
  place-items: center;
  place-content: center;
  font-family: ${font.pnb};
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: 2.88px;
  color: ${color.white};
  text-transform: uppercase;
`;

export const VariantButtonArea = styled(ButtonArea)`
  ${xlg('margin-right: 0 !important;')}
`;

export const ClickArea = styled.a`
  display: grid; 
  gap: 0px 0px; 
  width: 100%;
  
  &:focus {
    ${mixins.focusIndicator()};
  }
`;

export const VerticalLine = styled.div`
  ${lg(css`
    margin: 0 16px;
    width: 1px;
    height: 78px;
    background-color: #707070;
  `)}
`;
