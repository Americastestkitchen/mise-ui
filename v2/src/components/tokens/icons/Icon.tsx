import React from "react";

import IconSvgProps from "./svgs/iconSvgProps";
import useIconMap, { IconType } from "./svgs/useIconMap";

export type IconProps = IconSvgProps & {
  type: IconType;
};

const Icon = ({ fill = "#3D3D3D", type }: IconProps) => {
  const Icon = useIconMap(type);
  return <Icon fill={fill} />;
};

export default Icon;