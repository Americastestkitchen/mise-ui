import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { setArgs, setViewport, storybookParameters } from '../../../config/shared.stories';
import { breakpoints } from '../../../styles';
import { lg, md } from '../../../styles/breakpoints';
import TrialBeltAd, { TextImageTrialBeltAd, TextImageTrialBeltProps, TextTrialBeltAd, TextTrialBeltProps, TrialBeltAdProps } from './TrialBeltAd';

export default {
  title: 'Components/Ads/TrialBeltAd',
  component: TrialBeltAd,
  ...storybookParameters,
} as ComponentMeta<typeof TrialBeltAd>;

/**
 * Space between background and content is entirely controlled by external margins.
 * This always ensures the background belt reaches across the viewport width.
 */
const TestMargins = styled.section`
  margin: 32px 16px;
  ${md(css`
    margin: 32px 32px;
  `)}
  ${lg(css`
    margin: 32px 88px;
  `)}
`;

type Story = ComponentStory<typeof TrialBeltAd>;

const Template: Story = (args, { parameters }) => (
  <ThemeProvider theme={{ breakpoints, siteKey: parameters.siteKey ?? 'atk' }}>
    <TestMargins>
      <TrialBeltAd {...args} />
    </TestMargins>
  </ThemeProvider>
);

const cookingSchoolArgs: TrialBeltAdProps = {
  href: '#',
  cloudinaryId: 'AKO%20Articles/Author_Headshots/Grace_Kelly_Headshot_2021_1.jpg',
  /** can we remove nbsp when padding is added to image? */
  headline: 'Try our online cooking school',
  description: 'Take your skills to the next level with 320+ courses led by our expert test cooks.',
  cta: 'TRY FOR FREE',
  reducedTextSizing: true,
};

const magazineArgs: TrialBeltAdProps = {
  href: '#',
  cloudinaryId: 'cco-review-detail-magazine-ad_sagaxf',
  headline: 'Free Trial Issue',
  description: "Get a FREE TRIAL ISSUE of Cook's Illustrated Magazine!",
  cta: 'FREE ISSUE',
};

const textAdArgs: TextTrialBeltProps = {
  href: '#',
  headline: 'COOKING SCHOOL',
  description: 'Become fearless in the kitchen. 320+ online lessons for novice to advanced cooks.',
  cta: 'TRY FOR FREE',
};

const textImageAdArgs: TextImageTrialBeltProps = {
  href: '#',
  cloudinaryId: 'cooking-school/OCS_Logo',
  description: 'Become fearless in the kitchen. 320+ online lessons for novice to advanced cooks.',
  cta: 'TRY FOR FREE',
};

export const CookingSchoolAdMobile = Template.bind({});
export const CookingSchoolAdTablet = Template.bind({});
export const CookingSchoolAdLargeTablet = Template.bind({});
export const CookingSchoolAdDesktop = Template.bind({});
export const MagazineAdMobile = Template.bind({});
export const MagazineAdTablet = Template.bind({});
export const MagazineAdLargeTablet = Template.bind({});
export const MagazineAdDesktop = Template.bind({});
export const CookingSchoolAdDesktopCIO = Template.bind({});
export const CookingSchoolAdDesktopCCO = Template.bind({});

setViewport('iphone6', CookingSchoolAdMobile, MagazineAdMobile);
setViewport('ipad', CookingSchoolAdTablet, MagazineAdTablet);
setViewport('ipad12p', CookingSchoolAdLargeTablet, MagazineAdLargeTablet);

setArgs(
  cookingSchoolArgs,
  CookingSchoolAdMobile, CookingSchoolAdTablet, CookingSchoolAdLargeTablet, CookingSchoolAdDesktop,
  CookingSchoolAdDesktopCIO, CookingSchoolAdDesktopCCO,
);
setArgs(
  magazineArgs,
  MagazineAdMobile, MagazineAdTablet, MagazineAdLargeTablet, MagazineAdDesktop,
);

CookingSchoolAdDesktopCIO.parameters = { ...CookingSchoolAdDesktopCIO.parameters, siteKey: 'cio' };
CookingSchoolAdDesktopCCO.parameters = { ...CookingSchoolAdDesktopCCO.parameters, siteKey: 'cco' };

const Template2: Story = (args, { parameters }) => (
  <ThemeProvider theme={{ breakpoints, siteKey: parameters.siteKey ?? 'atk' }}>
    <TestMargins>
      <TextTrialBeltAd {...args} />
    </TestMargins>
  </ThemeProvider>
);

export const TextTrialBeltAdDefault = Template2.bind({});
TextTrialBeltAdDefault.args = textAdArgs;

const Template3: Story = (args, { parameters }) => (
  <ThemeProvider theme={{ breakpoints, siteKey: parameters.siteKey ?? 'atk' }}>
    <TestMargins>
      <TextImageTrialBeltAd {...args} />
    </TestMargins>
  </ThemeProvider>
);

export const TextImageTrialBeltAdDefault = Template3.bind({});
TextImageTrialBeltAdDefault.args = textImageAdArgs;
