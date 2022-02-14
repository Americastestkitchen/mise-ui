import React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakpoints } from '../../../../styles';

import LandingEmailAd from './index';
import { disable } from '../../../../config/argTypes';

export default {
  title: 'Components/Ads/ShowcaseAds/LandingEmailAd',
  component: LandingEmailAd,
  argTypes: {
    errorText: disable,
    inputId: disable,
    onSubmit: {action: 'OnSubmit'},
  }
};

const decorators = {
  default: [
    (Story) => (
      <ThemeProvider theme={{
        breakpoints,
      }}>
        <Story />
      </ThemeProvider>
    )
  ],
  dark: [
    (Story) => (
      <ThemeProvider theme={{
        breakpoints,
        mode: 'dark'
      }}>
        <Story />
      </ThemeProvider>
    )
  ]
}
  



const Template = args => <LandingEmailAd {...args}/>;

const defaultArgs = {
  buttonText: 'sign me up',
  desktopImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  tabletImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
}

export const Default = Template.bind({});
Default.decorators = decorators.default;
Default.argTypes = {
  successText: disable
}
Default.args = {
  headline: 'Well-Equipped Cook Newsletter',
  success: false,
  successText: 'Thank you! Get ready for watch and cook newsletter in your inbox.',
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
  ...defaultArgs,
};

export const Success = Template.bind({});
Success.decorators = decorators.default;
Success.argTypes = {
  buttonText: disable
}
Success.args = {
  headline: 'Well-Equipped Cook Newsletter',
  success: true,
  successText: 'Thank you! Get ready for watch and cook newsletter in your inbox.',
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
  ...defaultArgs,
};

export const DarkMode = Template.bind({});
DarkMode.decorators = decorators.dark;
DarkMode.argTypes = {
  successText: disable
}
DarkMode.args = {
  headline: "",
  success: false,
  title: 'Get out of that cooking rut with six weeks of this newsletter from Jack Bishop in your inbox.',
  ...defaultArgs
};

export const DarkModeSuccess = Template.bind({});
DarkModeSuccess.decorators = decorators.dark;
DarkModeSuccess.argTypes = {
  buttonText: disable,
}
DarkModeSuccess.args = {
  headline: 'Well-Equipped Cook Newsletter',
  success: true,
  successText: 'Thank you! Get ready for watch and cook newsletter in your inbox.',
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
  ...defaultArgs
};
