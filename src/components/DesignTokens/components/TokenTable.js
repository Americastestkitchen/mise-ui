import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';

const TokenTableEl = styled.table`
  border-collapse: collapse;
  font: ${fontSize.md}/${lineHeight.lg} ${font.pnr};
  width: 100%;

  th {
    background-color: ${color.whiteSmoke};
    font: ${fontSize.sm}/${lineHeight.sm} ${font.pnb} 700;
    text-align: left;
  }

  th,
  td {
    padding: ${spacing.xsm};
  }

  tr {
    border-bottom: 1px solid ${color.miseUiGrayBorder};
    padding-left: ${spacing.md};
    padding-right: ${spacing.md};
  }

  .notes {
    font-size: ${fontSize.xsm};
  }
`;

const TokenTable = ({ tokens }) => (
  <TokenTableEl>
    <thead>
      <tr>
        <th>Token</th>
        <th>Value</th>
        <th>Example</th>
        <th>Notes</th>
      </tr>
    </thead>
    <tbody>
      {tokens.map((el, i) => (
        <tr key={i}>{el}</tr>
      ))}
    </tbody>
  </TokenTableEl>
);

/**
 * Basic Table Component that helps visually organizes design tokens
 * into four categories: Token(Name), Value, Example and Notes
 */

TokenTable.propTypes = {
  tokens: PropTypes.array,
};

TokenTable.defaultProps = {
  tokens: null,
};

export default TokenTable;
