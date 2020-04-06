import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, fontSize, spacing } from '../../../styles';

const Import = styled.code`
  background: ${color.whiteSmoke};
  display: block;
  font-size: ${fontSize.sm};
  text-align: center;
  padding: ${spacing.sm};
`;

const ImportCode = ({ children }) => (
  <Import>
    {children}
  </Import>
);

ImportCode.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ImportCode;
