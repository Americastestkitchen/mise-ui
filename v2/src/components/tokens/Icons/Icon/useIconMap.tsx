import CheckmarkIcon from '../svgs/CheckmarkIcon';
import StarIcon from '../svgs/StarIcon';
import CommentIcon from '../svgs/CommentIcon';

export const iconMap = {
  checkmark: CheckmarkIcon,
  star: StarIcon,
  comment: CommentIcon,
};

export type IconType = keyof typeof iconMap;

const useIconMap = (type: IconType) => iconMap[type];

export default useIconMap;