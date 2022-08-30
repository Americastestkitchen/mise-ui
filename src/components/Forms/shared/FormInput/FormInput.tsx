import React, { useState } from 'react';
import styled from 'styled-components';
import FormError from '../FormError/FormError';
import FormLabel from '../FormLabel/FormLabel';
import { color, font, fontSize, mixins } from '../../../../styles';

const FormTextInput = styled.input<{error: boolean}>`
  appearance: none;
  background-color: ${({ error }) => color[error ? 'bridesMaid' : 'whiteSmoke']};
  border: 1px solid ${({ error }) => color[error ? 'shadyLady' : 'whiteSmoke']};
  border-radius: 0;
  box-shadow: none;
  color: ${color.eclipse};
  font: ${fontSize.lg}/1 ${font.pnr};
  padding: 0.9rem 1rem;

  &::placeholder {
    color: ${color.eclipse};
    font: ${fontSize.lg}/1 ${font.pnr};
  }

  &:focus {
    ${mixins.focusIndicator()}
    outline: ${({ error }) => (error ? 'red auto 1px' : '')};
  }
`;

const InputWrapper = styled.div.attrs({
  className: 'form-input',
})`
  position: relative;

  input {
    width: 100%;
  }
`;

export type FormInputProps = {
  ariaLabel?: string;
  error?: string;
  defaultValue?: string;
  id?: string;
  inputmode?: 'numeric' | 'text';
  label: string;
  name: string;
  onBlur?: () => void;
  onChange?: (a: string) => void;
  onFocus?: () => void;
  pattern?: string;
  placeholder?: string;
  readOnly?: boolean;
  renderAs?: 'block' | 'inline';
  type?: string;
  value?: string;
};

const FormInput = ({
  ariaLabel = '',
  defaultValue = '',
  error = '',
  id = '',
  inputmode = 'text',
  label,
  name,
  onBlur = () => {},
  onChange = () => {},
  onFocus = () => {},
  pattern = undefined,
  placeholder = '',
  readOnly = false,
  renderAs = 'inline',
  type = 'text',
  value = '',
}: FormInputProps) => {
  const [val, setVal] = useState(value);
  return (
    <InputWrapper>
      <FormLabel
        inputId={id}
        hidden
      >
        {label}
      </FormLabel>
      <FormTextInput
        aria-label={ariaLabel}
        data-valid={Boolean(error)}
        defaultValue={defaultValue}
        error={Boolean(error)}
        id={id}
        inputMode={inputmode}
        name={name}
        onBlur={onBlur}
        onChange={(evt) => {
          setVal(evt.target.value);
          if (onChange) onChange(evt.target.value);
        }}
        onFocus={onFocus}
        placeholder={placeholder}
        pattern={pattern}
        readOnly={readOnly}
        type={type}
        value={val}
      />
      {error && <FormError renderAs={renderAs}>{error}</FormError>}
    </InputWrapper>
  );
};

export default FormInput;
