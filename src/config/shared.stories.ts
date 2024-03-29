/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line import/no-extraneous-dependencies
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import type { ComponentStory } from '@storybook/react';
import breakpoints from '../styles/breakpoints';

export const storybookParameters = {
  decorators: [withKnobs],
  parameters: {
    layout: 'fullscreen',
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

const getKnob = (key: string, value: unknown): any => {
  if (typeof value === 'string') return text(key, value);
  if (typeof value === 'boolean') return boolean(key, value);
  if (typeof value === 'object') return object(key, value);
  return value;
};

export const wrapKnobs = (args: any): any => Object.fromEntries(
  Object.entries(args).map(([key, value]: any) => [key, getKnob(key, value)]),
);

export const setBackground = (background: string, ...stories: ComponentStory<any>[]): void => {
  stories.forEach((story) => {
    story.parameters = {
      ...story.parameters,
      backgrounds: {
        default: background,
        values: [
          { name: 'atk', value: '#f5f5f5' },
          { name: 'cco', value: '#ffffff' },
          { name: 'cio', value: '#fcf9f3' },
        ],
      },
    };
  });
};

// https://github.com/storybookjs/storybook/blob/next/addons/viewport/src/defaults.ts
export const setViewport = (viewport: string, ...stories: ComponentStory<any>[]): void => {
  stories.forEach((story) => {
    story.parameters = { ...story.parameters, viewport: { defaultViewport: viewport } };
  });
};

export const setArgs = (args: any, ...stories: ComponentStory<any>[]): void => {
  stories.forEach((story) => {
    story.args = { ...story.args, ...args };
  });
};

export const setParameters = (parameters: any, ...stories: ComponentStory<any>[]): void => {
  stories.forEach((story) => {
    story.parameters = { ...story.parameters, ...parameters };
  });
};

/**
 * Sets the siteKey used in .storybook/preview.js decorators
 *  (may be confusing if siteKey is also component property)
 */
export const setTheme = (siteKey: 'atk' | 'cio' | 'cco', ...stories: ComponentStory<any>[]): void => {
  setBackground(siteKey, ...stories);
  setArgs({ siteKey }, ...stories);
};
