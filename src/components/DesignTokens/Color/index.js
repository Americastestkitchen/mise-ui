import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color, font, fontSize, lineHeight, spacing } from '../../../styles';
import { TokenTable } from '../components';

const TokenGroup = styled.div`
  margin: 0 auto;
  padding: ${spacing.md} ${spacing.md} ${spacing.xlg} ${spacing.md};
  max-width: 80rem;

  h2 {
    color: ${color.eclipse};
    font: ${fontSize.lg}/${lineHeight.md} ${font.pnb};
  }

  p {
    font: ${fontSize.sm}/${lineHeight.md} ${font.pnr};
  }
`;

const ColorSwatch = styled.div`
  border: 2px solid ${color.whiteSmoke};
  height: 3rem;
  width: 6rem;
`;

export default function Color({
  description,
  heading,
  notes,
  tokenGroup,
}) {
  const atkColor = [
    'tomato',
    'rust',
    'mint',
    'darkerMint',
    'turquoise',
    'seaSalt',
    'whiteSmoke',
    'white',
    'black',
    'eclipse',
    'regentGray',
    'silver',
    'nobel',
  ];

  const globalColor = [
    'tomato',
    'rust',
    'black',
    'transparentBlack',
    'white',
  ];

  const ccoColor = [
    'white',
    'black',
    'denim',
    'malibu',
    'arapawa',
    'cornflower',
    'whiteSmoke',
    'silver',
  ];

  const cioColor = [
    'linen',
    'squirrel',
    'cork',
    'bone',
    'dijon',
    'sand',
  ];

  const socialColor = [
    'email',
    'emailHover',
    'facebook',
    'facebookHover',
    'pinterest',
    'pinterestHover',
    'twitter',
    'twitterHover',
  ];

  const tokenGroups = {
    globalColor,
    atkColor,
    ccoColor,
    cioColor,
    socialColor,
  };

  const tokensArray = [];
  const tokens = tokenGroups[tokenGroup];

  tokens.map((keys) => {
    const tokenValue = color[keys];
    tokensArray.push(
      <>
        <td>{`color.${keys}`}</td>
        <td>{tokenValue}</td>
        <td>
          <ColorSwatch style={{ backgroundColor: tokenValue }} />
        </td>
        <td>{notes}</td>
      </>,
    );
    return tokensArray;
  });

  return (
    <TokenGroup tokenGroup={tokenGroup}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <TokenTable tokens={tokensArray} />
    </TokenGroup>
  );
}

Color.propTypes = {
  description: PropTypes.string,
  heading: PropTypes.string,
  notes: PropTypes.string,
  tokenGroup: PropTypes.string,
};

Color.defaultProps = {
  description: null,
  heading: null,
  notes: null,
  tokenGroup: null,
};
