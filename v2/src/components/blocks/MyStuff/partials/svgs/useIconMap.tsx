import SaveIcon from './SaveIcon';
import LightningIcon from './LightningIcon';
import SparkleIcon from './SparkleIcon';
import UserIcon from './UserIcon';

export const iconMap = {
  save: SaveIcon,
  lightning: LightningIcon,
  sparkle: SparkleIcon,
  user: UserIcon,
};

export type IconType = keyof typeof iconMap;

const useIconMap = (type: IconType) => iconMap[type];

export default useIconMap;