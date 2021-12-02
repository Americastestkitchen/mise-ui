import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Chip from './Chip';
import { storybookParameters } from '../../config/shared.stories';
import { Collection } from '../DesignTokens/Icon';

export default {
  title: 'Components/Chip',
  component: Chip,
  ...storybookParameters,
} as ComponentMeta<typeof Chip>;

export const ChipExample: ComponentStory<typeof Chip> = () => (
  <Chip>Cooking Tips</Chip>
);

ChipExample.storyName = 'Chip';

export const IconChip = () => (
  <Chip><Collection fill="white" />Cooking Tips</Chip>
);
