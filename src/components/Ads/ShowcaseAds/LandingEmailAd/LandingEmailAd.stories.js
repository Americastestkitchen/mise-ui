import React from 'react';
import { ThemeProvider } from 'styled-components';
import { breakpoints } from '../../../../styles';

import LandingEmailAd from './index';
import { disable, mode, textInput, trueFalse } from '../../../../config/argTypes';

export default {
  title: 'Components/Ads/ShowcaseAds/LandingEmailAd',
  component: LandingEmailAd,
  argTypes: {
    buttonText: textInput,
    desktopImageUrl: textInput,
    errorText: disable,
    inputId: disable,
    headline: textInput,
    onSubmit: {action: 'OnSubmit'},
    tabletImageUrl: textInput,
    title: textInput,
    success: trueFalse,
    successText: textInput,
  }
};

const Template = ({...args}) => (
  <ThemeProvider theme={{
    breakpoints,
  }}>
    <LandingEmailAd {...args}/>
  </ThemeProvider>
);

const defaultArgs = {
  buttonText: 'sign me up',
  desktopImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
  tabletImageUrl: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_16:9,c_scale,dpr_auto,h_330,w_560/v1618429645/ATK%20Landing%20Page/WellEquippedCookNewsletter_3x.jpg',
}

export const Default = Template.bind({});
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
DarkMode.argTypes = {
  mode: mode,
  successText: disable
}
DarkMode.args = {
  headline: "",
  mode: 'dark',
  success: false,
  title: 'Get out of that cooking rut with six weeks of this newsletter from Jack Bishop in your inbox.',
  ...defaultArgs
};

export const DarkModeSuccess = Template.bind({});
DarkModeSuccess.argTypes = {
  buttonText: disable,
  mode: mode
}
DarkModeSuccess.args = {
  headline: 'Well-Equipped Cook Newsletter',
  mode: 'dark',
  success: true,
  successText: 'Thank you! Get ready for watch and cook newsletter in your inbox.',
  title: 'How far does our team go to research equipment and ingredients on your behalf? Find out.',
  ...defaultArgs
};
