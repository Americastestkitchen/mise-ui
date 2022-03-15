import { css } from 'styled-components';
import { untilMd } from '../../../../styles/breakpoints';
import { Description, Headline } from './components';

const untilDesktop = '@media only screen and (max-width: 1281px)';

const cssHeadlineSize = css`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 2.56px;
`;

const cssHeadlineReduced = css`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 2.24px;
`;

const cssDescriptionReduced = css`
  font-size: 18px;
  line-height: 20px;
`;

const cssDescriptionSize = css`
  font-size: 23px;
  line-height: 26px;
`;

const schoolStyles = css`
  ${Headline} {
    padding-bottom: 8px;
    ${cssHeadlineSize}

    ${untilMd(css`
      padding-bottom: 0;
      ${cssHeadlineReduced}
    `)}
  }
  
  ${Description} {
    ${cssDescriptionSize}
    
    ${untilDesktop} {
      ${cssDescriptionReduced}
    }
  }
`;

const magStyles = css`
  ${Headline} {
    padding-bottom: 8px;
    ${cssHeadlineSize}
  }

  ${Description} {
    ${cssDescriptionSize}

    ${untilMd(css`
      ${cssDescriptionReduced}
    `)}
  }
`;

/**
 * Cooking school and Magazine ads share this component. Use largeTextStyles for smaller margin
 * between header and description on mobile and smaller font sizes for smaller viewports.
 */
const reducedTextSizing = css<{ reducedTextSizing?: boolean }>`
    ${({ reducedTextSizing }) => (reducedTextSizing ? schoolStyles : magStyles)}
`;

export default reducedTextSizing;
