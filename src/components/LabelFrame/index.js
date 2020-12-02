import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { color, font, fontSize } from '../../styles';

const Frame = styled.div`
  border: 1px solid ${color.nobel};
  border-top: none;
  border-radius: 0;
  padding: 5rem 3rem 3rem;
  position: relative;
  width: 100%;

  .label-frame__label {
    border-radius: 0 0 0.5rem 0;
  }

  &:first-of-type {
    border-radius: 0.5rem 0.5rem 0 0;
    border-top: solid 1px ${color.nobel};

    .label-frame__label {
      border-radius: 0.5rem 0 0.5rem 0;
    }
  }

  &:last-of-type {
    border-radius: 0 0 0.5rem 0.5rem;
  }

  &:only-child {
    border-radius: 0.5rem;
  }
`;

const Label = styled.p.attrs({
  className: 'label-frame__label',
})`
  align-items: center;
  background-color: #E2E2E2;
  border: 1px solid ${color.nobel};
  border-left: none;
  border-top: none;
  color: ${color.eclipse};
  display: flex;
  font: ${fontSize.sm} ${font.pnr};
  height: 2rem;
  left: 0;
  padding: 0 1rem;
  position: absolute;
  top: 0;
`;

const LabelFrame = ({ className, children, label }) => (
  <Frame className={className}>
    <Label>
      {label}
    </Label>
    {children}
  </Frame>
);

LabelFrame.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  label: PropTypes.string.isRequired,
};

LabelFrame.defaultProps = {
  className: '',
};

export default LabelFrame;
