import { color } from '../styles';

const backgrounds = {
  values: [
    {
      name: 'atk',
      value: `${color.whiteSmoke}`,
    },
    {
      name: 'cco',
      value: `${color.white}`,
    },
    {
      name: 'cio',
      value: `${color.linen}`,
    },
    {
      name: 'atk-dark',
      value: `${color.eclipse}`,
    },
    {
      name: 'atk-dark-alt',
      value: `${color.gunmetal}`,
    },
  ],
};

type Prev = Record<string, string> | Record<string, never>;
export const backgroundColors = backgrounds.values.reduce((prev: Prev, curr)
:Record<string, string> => {
  prev[curr.name] = curr.value;
  return prev;
}, {});

export default backgrounds;
