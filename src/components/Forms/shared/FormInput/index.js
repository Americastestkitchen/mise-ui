import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import FormError from '../FormError';
import FormLabel from '../FormLabel';
import { color, font, fontSize, withThemes } from '../../../../styles';

const FormInputTheme = {
  default: css`
    appearance: none;
    background-color: ${props => color[props.error ? 'bridesmaid' : 'whiteSmoke']};
    border: 1px solid ${props => color[props.error ? 'shadyLady' : 'whiteSmoke']};
    border-radius: 0;
    box-shadow: none;
    color: ${color.eclipse};
    font: ${fontSize.lg}/1 ${font.pnr};
    padding: 0.9rem 1rem;

    &:focus {
      outline: 0;
      outline-offset: 0;
    }

    &::placeholder {
      color: ${color.eclipse};
      font: ${fontSize.lg}/1 ${font.pnr};
    }
  `,
};

const FormInput = styled.input`
  ${withThemes(FormInputTheme)}
`;

const InputWrapper = styled.div.attrs({
  className: 'form-input',
})`
  position: relative;

  input {
    width: 100%;
  }
`;

const FormTextInput = ({
  error,
  id,
  label,
  name,
  onBlur,
  onChange,
  onFocus,
  placeholder,
  readOnly,
  renderAs,
  type,
  ...restProps
}) => {
  const [value, setValue] = useState('');
  return (
    <InputWrapper>
      <FormLabel
        inputId={id}
        hidden
      >
        {label}
      </FormLabel>
      <FormInput
        data-valid={Boolean(error)}
        id={id}
        name={name}
        onBlur={onBlur}
        onChange={(evt) => {
          setValue(evt.target.value);
          if (onChange) onChange(evt.target.value);
        }}
        onFocus={onFocus}
        placeholder={placeholder}
        readOnly={readOnly}
        type={type}
        value={value}
        {...restProps}
      />
      {error && <FormError renderAs={renderAs}>{error}</FormError>}
    </InputWrapper>
  );
};

FormTextInput.propTypes = {
  /** Error text */
  error: PropTypes.string,
  /** HTML id attribute */
  id: PropTypes.string,
  /** Text for input label */
  label: PropTypes.string.isRequired,
  /** HTML name attribute */
  name: PropTypes.string.isRequired,
  /** Callback triggered on input blur */
  onBlur: PropTypes.func,
  /** Callback triggered on input change */
  onChange: PropTypes.func,
  /** Callback triggered on input focus */
  onFocus: PropTypes.func,
  /** HTML placeholder attribute */
  placeholder: PropTypes.string,
  /** HTML readonly attribute */
  readOnly: PropTypes.bool,
  /** Block or inline (for error messages) */
  renderAs: PropTypes.string,
  /** HTML type attribute */
  type: PropTypes.string,
  /** Set value for controlled components. */
  value: PropTypes.string,
};

FormTextInput.defaultProps = {
  error: false,
  id: null,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: null,
  readOnly: false,
  renderAs: 'inline',
  type: 'text',
  value: undefined,
};

export default FormTextInput;
