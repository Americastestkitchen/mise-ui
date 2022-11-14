import React from "react";

import useIconMap, { IconType } from "./svgs/useIconMap";

export type IconProps = {
  type: IconType;
};

const Icon = ({ type }: IconProps) => {
  const Icon = useIconMap(type);
  return <Icon  />;
};

export default Icon;