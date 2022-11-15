import CheckmarkIcon from '../svgs/CheckmarkIcon';
import StarIcon from '../svgs/StarIcon';
import CommentIcon from '../svgs/CommentIcon';
import SaveIcon from '../svgs/SaveIcon';
import LightningIcon from '../svgs/LightningIcon';
import SparkleIcon from '../svgs/SparkleIcon';
import UserIcon from '../svgs/UserIcon';

export const iconMap = {
  checkmark: CheckmarkIcon,
  star: StarIcon,
  comment: CommentIcon,
  save: SaveIcon,
  lightning: LightningIcon,
  sparkle: SparkleIcon,
  user: UserIcon,
};

export type IconType = keyof typeof iconMap;

const useIconMap = (type: IconType) => iconMap[type];

export default useIconMap;