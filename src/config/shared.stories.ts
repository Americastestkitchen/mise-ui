// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import breakpoints from '../styles/breakpoints';

export const storybookParameters = {
  decorators: [withKnobs],
  parameters: {
    backgrounds: {
      default: 'atk',
      values: [
        { name: 'atk', value: '#f5f5f5' },
        { name: 'cco', value: '#ffffff' },
        { name: 'cio', value: '#fcf9f3' },
      ],
    },
  },
};

export const defaultTheme = { breakpoints, mode: 'light', siteKey: 'atk' };

const getKnob = (key: any, value: any): any => {
  if (typeof value === 'string') return text(key, value);
  if (typeof value === 'boolean') return boolean(key, value);
  return value;
};

export const wrapKnobs = (args: any): any => Object.fromEntries(
  Object.entries(args).map(([key, value]: any) => [key, getKnob(key, value)]),
);

export const setBackground = (elements: any[], background: string): void => {
  elements.forEach((el: any) => {
    el.parameters = { ...el.parameters, backgrounds: { default: background } };
  });
};
