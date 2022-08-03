import React from 'react';

import useLogoMap, { LogoType } from './svgs/useLogoMap';

type LogoProps = {
  type: LogoType;
};

const Logo = ({ type }: LogoProps) => {
  const LogoSvg = useLogoMap(type);
  return <LogoSvg />;
};

export default Logo;
