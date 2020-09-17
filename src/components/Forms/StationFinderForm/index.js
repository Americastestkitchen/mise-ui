import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '../../Buttons/Button';
import FormInput from '../shared/FormInput';
import { Arrow } from '../../DesignTokens/Icon/svgs';
import {
  color,
  font,
  fontSize,
} from '../../../styles';

const StationFinderFormWarpper = styled.form`
  display: flex;
  height: 4rem;

  input {
    background-color: ${color.eclipse};
    border: 0;
    border-bottom: solid 1px ${color.white};
    color: ${color.white};
    font: ${fontSize.md}/1.25 ${font.mwr};
    font-style: italic;
    height: 4rem;

    &::placeholder {
      color: ${color.white};
      font: ${fontSize.md}/1.25 ${font.mwr};
      font-style: italic;
    }
  }

  button {
    background-color: ${color.white};
    border: 0;
    height: 4rem;
    max-height: 4rem;
    max-width: 4rem;
    padding: 0;
    width: 4rem;

    svg {
      width: 1.76rem;
    }
  }
`;

const StationFinderForm = ({ ariaLabel, inputId, onSubmit, value }) => (
  <StationFinderFormWarpper onSubmit={onSubmit}>
    <FormInput
      aria-label={ariaLabel}
      defaultValue={value}
      error=""
      id={inputId}
      inputmode="numeric"
      label="Enter your zipcode"
      name="station-finder-zip-code"
      pattern="[0-9]*"
      placeholder="your zipcode"
      type="text"
    />
    <Button type="submit">
      <Arrow fill={color.jet} />
    </Button>
  </StationFinderFormWarpper>
);

StationFinderForm.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  inputId: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};

StationFinderForm.defaultProps = {
  value: '',
};

export default StationFinderForm;
