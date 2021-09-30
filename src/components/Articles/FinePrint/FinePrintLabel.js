import breakpoint from 'styled-components-breakpoint';
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import { color, font, fontSize, withThemes } from '../../../styles';

const LabelWrapper = styled.div`
  max-width: 33.3rem;
  padding: 2.4rem 2.3rem 1.9rem 1rem;
  text-align: left;
  text-transform: none;

  ${breakpoint('md')`
    max-width: 69.6rem;
    padding: 2.4rem 2.4rem 2.1rem 1.6rem;
  `}

  ${breakpoint('xlg')`
    max-width: 63.2rem;
    padding: 2.4rem 2.4rem 2.0rem 2.4rem;
  `}
`;

const FinePrintTitleTheme = {
  default: css`
    font: ${fontSize.xl}/2.6rem ${font.pnb};
    letter-spacing: normal;
    min-height: 3.3rem;
    width: 100%;
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const FinePrintTitle = styled.h3`
  ${withThemes(FinePrintTitleTheme)}
`;

const FinePrintSubtitleTheme = {
  default: css`
    font: ${fontSize.md}/normal ${font.pnr};
    letter-spacing: normal;
    min-height: 2rem;
    width: 100%:
  `,
  atk: css`
    color: ${color.eclipse};
  `,
  cco: css`
    color: ${color.black};
  `,
  cio: css`
    color: ${color.cork};
  `,
};

const FinePrintSubtitle = styled.span`
  ${withThemes(FinePrintSubtitleTheme)}
`;

const FinePrintLabel = ({
  subtitle,
  title,
}) => (
  <LabelWrapper>
    <FinePrintTitle>{title}</FinePrintTitle>
    <FinePrintSubtitle>{subtitle}</FinePrintSubtitle>
  </LabelWrapper>
);

FinePrintLabel.propTypes = {
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default FinePrintLabel;
