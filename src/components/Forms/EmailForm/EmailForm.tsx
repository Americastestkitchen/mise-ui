import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { md, lg } from '../../../styles/breakpoints';
import {
  color,
  font,
  fontSize,
  lineHeight,
  spacing,
  mixins,
} from '../../../styles';

import { ColorName } from '../../../styles/colors';

import Button from '../../Buttons/Button/Button';
import FormInput from '../shared/FormInput/FormInput';

// eslint-disable-next-line no-useless-escape
const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validateEmail = (val: string) => (
  emailRe.test(val)
);

const EmailFormWrapper = styled.div.attrs({
  className: 'email-form-wrapper',
})``;

const EmailFormElement = styled.form.attrs<{disabled: boolean;}>(({ disabled }) => ({
  className: `email-form${disabled ? ' disabled' : ''}`,
}))<{disabled: boolean; buttonColor: ColorName; buttonTextColor: ColorName; buttonHoverColor: ColorName; buttonHoverTextColor: ColorName;}>`
  display: flex;
  flex-direction: column;

  .form-input {
    margin-bottom: ${spacing.xsm};
  }

  button[type="submit"] {
    background-color: ${({ buttonColor }) => color[buttonColor]};
    border: none;
    color: ${({ buttonTextColor }) => color[buttonTextColor]};

    @media(hover: hover) {
      &:hover {
        background-color: ${({ buttonHoverColor }) => color[buttonHoverColor]}
        color: ${({ buttonHoverTextColor }) => color[buttonHoverTextColor]};
      }
    }
  }

  .form-error__inline {
    text-transform: uppercase;
  }

  ${md(css`
    flex-direction: row;

    .form-input {
      flex: 4 0 auto;
      margin: 0;
    }

    button[type="submit"] {
      flex: 1 0 auto;
    }
  `)}
`;

const HowWeUseWrapper = styled.div`
  position: relative;

  ${md(css`
    display: flex;
    justify-content: flex-end;
  `)}
`;

const HowWeUseLink = styled.button.attrs({
  className: 'email-form__how how-we-use__link',
})`
  color: ${color.silver};
  cursor: pointer;
  display: block;
  font: 1.2rem/2rem ${font.pnr};
  padding: 0.8rem 0;

  &:focus {
    box-shadow: none !important;
    ${mixins.focusIndicator()}
  }

  @media(hover: hover) {
    &:hover {
      text-decoration: underline;
    }
  }

  ${lg(css`
    padding: 0.8rem 0 0;
  `)}
`;

const HowWeUseText = styled.div.attrs({
  className: 'how-we-use__text',
})<{isExpanded: boolean;}>`
  display: ${({ isExpanded }) => (isExpanded ? 'block' : 'none')};
  color: ${color.eclipse};
  background-color: ${color.white};
  border: 1px solid ${color.shadyLady};
  font: ${fontSize.xsm}/${lineHeight.sm} ${font.pnr};
  padding: 1.1rem 1.5rem;
  position: absolute;
  top: 100%;
  width: 23rem;
  z-index: 1;
`;

export type EmailFormProps = {
  buttonColor?: ColorName;
  buttonHoverColor?: ColorName;
  buttonHoverTextColor?: ColorName;
  buttonTextColor?: ColorName;
  buttonText?: string;
  errorText?: string;
  formId?: string;
  howWeUseText?: string;
  inputId: string;
  inputLabel?: string;
  instanceId?: string;
  onSubmit: (email: string) => void;
  optionalIcon?: string;
  placeholder?: string;
};

const EmailForm = ({
  buttonColor = 'frog',
  buttonHoverTextColor = 'darkFrog',
  buttonHoverColor = 'white',
  buttonTextColor = 'white',
  buttonText = 'Sign me up',
  errorText = 'Invalid email address',
  formId = 'email-form',
  howWeUseText = 'How we use your email address',
  inputId,
  inputLabel = 'Email address',
  instanceId = '',
  onSubmit,
  optionalIcon = '',
  placeholder = 'Enter your email address',
}: EmailFormProps) => {
  const [showHow, setShowHow] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const refocusInput = () => {
    const inputNode = document.getElementById(inputId);
    if (inputNode) {
      inputNode.focus();
    }
  };

  interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement
  }

  interface CurrentFormElements extends HTMLFormElement {
    readonly elements: FormElements
  }

  const handleSubmit = (evt: React.ChangeEvent<CurrentFormElements>) => {
    setDisabled(true);
    evt.preventDefault();
    const email = evt.currentTarget.elements.email.value;

    if (validateEmail(email)) {
      if (onSubmit) onSubmit(email);
    } else {
      setError(email.length === 0 ? 'Email is required' : errorText);
      setDisabled(false);
      refocusInput();
    }
  };

  const controlId = instanceId || inputLabel?.split(' ').join('') || 'email-form';
  return (
    <EmailFormWrapper data-testid="email-form-wrapper">
      <EmailFormElement
        buttonColor={buttonColor}
        buttonHoverColor={buttonHoverColor}
        buttonHoverTextColor={buttonHoverTextColor}
        buttonTextColor={buttonTextColor}
        disabled={disabled}
        id={formId}
        onSubmit={handleSubmit}
      >
        <FormInput
          error={error}
          id={inputId}
          label={inputLabel}
          name="email"
          placeholder={placeholder}
          readOnly={disabled}
        />
        <Button
          data-testid="email-submit-button"
          disabled={disabled}
          role="button"
          type="submit"
        >
          {buttonText}{optionalIcon ? <span>{optionalIcon}</span> : null}
        </Button>
      </EmailFormElement>
      <HowWeUseWrapper>
        <HowWeUseLink
          aria-controls={`email-form__how--text-${controlId}`}
          aria-expanded={showHow}
          data-testid="email-form__how--link"
          onClick={(evt) => {
            evt.preventDefault();
            setShowHow(curr => !curr);
          }}
        >
          {howWeUseText}
        </HowWeUseLink>
        <HowWeUseText
          data-testid="email-form__how--text"
          isExpanded={showHow}
          id={`email-form__how--text-${controlId}`}
        >
          America&#39;s Test Kitchen will not sell, rent, or disclose your email
          address to third parties unless otherwise notified.
          Your email address is required to identify you for free access to
          content on the site. You will also receive free newsletters and
          notification of America&#39;s Test Kitchen specials.
        </HowWeUseText>
      </HowWeUseWrapper>
    </EmailFormWrapper>
  );
};

export default EmailForm;
