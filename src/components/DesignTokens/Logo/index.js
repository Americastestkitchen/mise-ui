import React from 'react';
import PropTypes from 'prop-types';
import Logos from './svgs';

function Logo({ children }) {
  return children;
}

Logo.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ATK = ({
  backgroundFill,
  fill,
}) => (
  <Logo>
    <Logos.ATK
      backgroundFill={backgroundFill}
      fill={fill}
    />
  </Logo>
);

ATK.propTypes = Logos.ATK.propTypes;


export const CCO = ({
  fill,
}) => (
  <Logo>
    <Logos.CCO
      fill={fill}
    />
  </Logo>
);

CCO.propTypes = Logos.CCO.propTypes;


export const keyToLogo = key => ({
  atk: ATK,
  cco: CCO,
}[key] || null);

export default Logos;
