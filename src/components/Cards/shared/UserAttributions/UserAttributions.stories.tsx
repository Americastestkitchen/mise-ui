import React, { useEffect, useState } from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { storybookParameters } from '../../../../config/shared.stories';
import UserAttributions, { UserAttributionsProps, FeatureCardUserAttributions, StandardUserAttributions } from './UserAttributions';

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

export const atkUserAttributions = () => (
  <ThemeProvider theme={{ siteKey: 'atk' }}>
    <StandardUserAttributions {...Default.args} />
  </ThemeProvider>
);

export const ccoUserAttributions = () => (
  <ThemeProvider theme={{ siteKey: 'cco' }}>
    <StandardUserAttributions {...Default.args} />
  </ThemeProvider>
);

export const cioUserAttributions = () => (
  <ThemeProvider theme={{ siteKey: 'cio' }}>
    <StandardUserAttributions {...Default.args} />
  </ThemeProvider>
);

export const featureCardUserAttributions = () => (
  <ThemeProvider theme={{ siteKey: 'atk' }}>
    <div style={{ background: 'black', padding: '16px' }}>
      <FeatureCardUserAttributions {...Default.args} />;
    </div>
  </ThemeProvider>
);
