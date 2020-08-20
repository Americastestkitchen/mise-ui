import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import {
  color,
  font,
  fontSize,
  lineHeight,
  withThemes,
} from '../../../../styles';

const LabelTheme = {
  default: css`
    color: ${color.eclipse};
    font: ${fontSize.md}/${lineHeight.sm} ${font.pnr};
  `,
};

const FormLabelEl = styled.label`
  ${withThemes(LabelTheme)}
`;

const FormLabel = ({ hidden, inputId, ...restProps }) => (
  <FormLabelEl
    className={hidden ? 'visually-hidden' : null}
    data-testid="form-label"
    htmlFor={inputId}
    {...restProps}
  />
);

FormLabel.propTypes = {
  hidden: PropTypes.bool,
  inputId: PropTypes.string.isRequired,
};

FormLabel.defaultProps = {
  hidden: false,
};

export default FormLabel;
