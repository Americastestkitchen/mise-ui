import CheckmarkIcon from './CheckmarkIcon';
import StarIcon from './StarIcon';
import CommentIcon from './CommentIcon';

export const iconMap = {
  checkmark: CheckmarkIcon,
  star: StarIcon,
  comment: CommentIcon,
};

export type IconType = keyof typeof iconMap;

const useIconMap = (type: IconType) => iconMap[type];

export default useIconMap;