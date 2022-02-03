import React, { useEffect, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { storybookParameters } from '../../../../config/shared.stories';
import UserAttributions, { UserAttributionsProps } from './UserAttributions';

export default {
  title: 'Components/Cards/shared/UserAttributions',
  component: UserAttributions,
  ...storybookParameters,
} as ComponentMeta<typeof UserAttributions>;

function DisplayAriaLabels({ numRatings, commentsCount, avgRating }: UserAttributionsProps) {
  const [labels, setLabels] = useState<string[]>([]);

  useEffect(() => {
    const ariaLabelElements = Array.from(document.querySelectorAll('[aria-label]').values()).map(element => element.ariaLabel ?? '');
    setLabels(ariaLabelElements);
  }, [numRatings, commentsCount, avgRating]);

  return (
    <div>
      {labels}
    </div>
  );
}

const Template = (args: UserAttributionsProps) => (
  <>
    <UserAttributions {...args} />
    <DisplayAriaLabels {...args} />
  </>
);

export const Default: ComponentStory<typeof UserAttributions> = Template.bind({});
Default.args = {
  avgRating: 4,
  numRatings: 10,
  commentsCount: 3,
};
