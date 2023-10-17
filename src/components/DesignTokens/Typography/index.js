import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, letterSpacing, lineHeight, spacing } from '../../../styles';
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

export default function Typography({
  brand,
  description,
  heading,
  notes,
  tokenGroup,
}) {
  const atkFonts = [
    'pnb',
    'pnr',
    'mwr',
  ];

  const ccoFonts = [
    'clb',
    'pnr',
    'pnb',
    'mwr',
  ];

  const cioFonts = [
    'mwr',
    'pnr',
    'pnb',
  ];

  const kidsFonts = [
    'cwf',
    'gdn',
    'pnr',
    'pnb',
  ];

  const brands = {
    atkFonts,
    ccoFonts,
    cioFonts,
    kidsFonts,
  };

  const tokenGroups = {
    fontSize,
    font,
    lineHeight,
    letterSpacing,
  };

  // TODO: add documentation for line-height and letter-spacing usage guidelines
  // when it's available

  const tokensArray = [];

  if (tokenGroup === 'font') {
    const tokens = brands[brand];

    tokens.map((keys) => {
      const tokenValue = font[keys];
      tokensArray.push(
        <>
          <td>{`${tokenGroup}.${keys}`}</td>
          <td>{tokenValue}</td>
          <td style={{ fontFamily: `${tokenValue}` }}>{tokenValue}</td>
          <td>{notes}</td>
        </>,
      );
      return tokensArray;
    });
  } else {
    const tokens = tokenGroups[tokenGroup];

    Object.keys(tokens).forEach((token) => {
      const tokenValue = tokens[token];
      if (tokenValue) {
        tokensArray.push(
          <>
            <td>{`${tokenGroup}.${token}`}</td>
            <td>{tokenValue}</td>
            <td style={{ [tokenGroup]: tokenValue }}>{token}</td>
            <td>{notes}</td>
          </>,
        );
      }
    });
  }
  return (
    <TokenGroup tokenGroup={tokenGroup} brand={brand}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <TokenTable tokens={tokensArray} />
    </TokenGroup>
  );
}

Typography.propTypes = {
  brand: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  notes: PropTypes.string,
  tokenGroup: PropTypes.string,
};

Typography.defaultProps = {
  brand: null,
  description: null,
  heading: null,
  notes: null,
  tokenGroup: null,
};
