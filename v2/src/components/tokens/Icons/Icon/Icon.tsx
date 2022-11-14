import useIconMap, { IconType } from "./useIconMap";

export interface IconProps {
  className?: string;
  type: IconType;
};

const Icon: React.FC<IconProps> = ({
  className,
  type
}) => {
  const Icon = useIconMap(type);
  return <Icon className={className} />;
};

export default Icon;