import CheckmarkIcon from './CheckmarkIcon';

export const iconMap = {
  checkmark: CheckmarkIcon,
};

export type IconType = keyof typeof iconMap;

const useIconMap = (type: IconType) => iconMap[type];

export default useIconMap;