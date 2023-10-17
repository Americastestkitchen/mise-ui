import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { color, font, fontSize, grid, lineHeight, spacing } from '../../../styles';
import { TokenTable } from '../components';

const TokenGroup = styled.div`
  margin: 0 auto;
  padding: ${spacing.md} ${spacing.md} ${spacing.xlg} ${spacing.md};
  max-width: 80rem;

  h2 {
    color: ${color.eclipse};
    font: 700 (${fontSize.lg}/${lineHeight.md} )${font.pnb};
  }

  p {
    font: ${fontSize.sm}/${lineHeight.md} ${font.pnr};
  }
`;

export default function Layout({
  notes,
  tokenGroup,
}) {
  const tokenGroups = {
    grid,
    spacing,
  };

  const tokensArray = [];
  const tokens = tokenGroups[tokenGroup];

  Object.keys(tokens).forEach((token) => {
    const tokenValue = tokens[token];

    if (tokenValue) {
      tokensArray.push(
        <>
          <td>{`${tokenGroup}.${token}`}</td>
          <td>{tokenValue}</td>
          <td>
            <span style={{
              width: `${tokenValue}`,
              display: 'inline-block',
              backgroundColor: `${color.silver}`,
              height: '1rem' }}
            />
          </td>
          <td>{notes}</td>
        </>,
      );
    }
  });
  return (
    <TokenGroup>
      <TokenTable tokens={tokensArray} />
    </TokenGroup>
  );
}

Layout.propTypes = {
  notes: PropTypes.string.isRequired,
  tokenGroup: PropTypes.object.isRequired,
};
