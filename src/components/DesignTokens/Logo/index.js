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

export const CIO = ({
  fill,
}) => (
  <Logo>
    <Logos.CIO
      fill={fill}
    />
  </Logo>
);

CIO.propTypes = Logos.CIO.propTypes;

export const MysteryRecipe = ({
  fill,
}) => (
  <Logo>
    <Logos.MysteryRecipe
      fill={fill}
    />
  </Logo>
);

MysteryRecipe.propTypes = Logos.MysteryRecipe.propTypes;

export const PerfectlySeasonal = ({
  fill,
}) => (
  <Logo>
    <Logos.PerfectlySeasonal
      fill={fill}
    />
  </Logo>
);

PerfectlySeasonal.propTypes = Logos.PerfectlySeasonal.propTypes;

export const Proof = ({
  fill,
}) => (
  <Logo>
    <Logos.Proof
      fill={fill}
    />
  </Logo>
);

Proof.propTypes = Logos.Proof.propTypes;

export const TheWalkIn = ({
  fill,
}) => (
  <Logo>
    <Logos.TheWalkIn
      fill={fill}
    />
  </Logo>
);

TheWalkIn.propTypes = Logos.TheWalkIn.propTypes;

export const WhatsEatingDan = ({
  fill,
}) => (
  <Logo>
    <Logos.WhatsEatingDan
      fill={fill}
    />
  </Logo>
);

WhatsEatingDan.propTypes = Logos.WhatsEatingDan.propTypes;

export const keyToLogo = key => ({
  atk: ATK,
  cco: CCO,
  cio: CIO,
  mysteryRecipe: MysteryRecipe,
  perfectlySeasonal: PerfectlySeasonal,
  proof: Proof,
  walkIn: TheWalkIn,
  whatsEatingDan: WhatsEatingDan,
}[key] || null);

export default Logos;
