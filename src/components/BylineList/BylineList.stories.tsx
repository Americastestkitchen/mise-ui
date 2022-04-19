import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import styled, { css } from 'styled-components';
import BylineList, { BylineListLight } from './BylineList';
import { setArgs, setParameters, setTheme, setViewport } from '../../config/shared.stories';
import args from './exampleAuthorsProp.stories';
import { md, untilMd } from '../../styles/breakpoints';

export default {
  title: 'Components/BylineList',
  component: BylineList,
} as ComponentMeta<typeof BylineList>;

const Template: ComponentStory<typeof BylineList> = props => <BylineList {...props} />;

const DarkBackground = styled.div`
  background-color: darkblue;
`;

const TemplateLight: ComponentStory<typeof BylineListLight> = props => (
  <DarkBackground>
    <BylineListLight {...props} />
  </DarkBackground>
);

// Styled Variants
export const BylineListLightVariant = TemplateLight.bind({});

// Author Handling
export const NoAuthor = Template.bind({});
export const OneAuthor = Template.bind({});
export const OneAuthorNoPhoto = Template.bind({});
export const TwoAuthor = Template.bind({});
export const ThreeAuthors = Template.bind({});

// Theming
export const CCOTheme = Template.bind({});
export const CIOTheme = Template.bind({});

// Viewport Styles
export const NoAuthorMobile = Template.bind({});
export const OneAuthorMobile = Template.bind({});
export const OneAuthorMobileNoPhoto = Template.bind({});
export const ThreeAuthorsMobile = Template.bind({});

// Link Styles
export const PhotoAuthorsClickable = Template.bind({});
export const AtkAuthorsClickable = Template.bind({});
export const CcoAuthorsClickable = Template.bind({});
export const CioAuthorsClickable = Template.bind({});

const DesktopFlexLayout = styled.div<{width: number}>`
  width: ${props => props.width}px;
  margin: 16px;
  display: flex;

  ${untilMd(css`
    flex-direction: column;
  `)}

  ${md(css`
    flex-direction: row;
    justify-content: space-between;
  `)}
`;

const DetailActionMock = styled.div`
  height: 40px;
  width: 120px;
  background-color: gray;
`;

const DetailActionsWrapperMock = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  ${DetailActionMock}:first-child {
    margin-right: 16px;
  }
`;

const DetailActionsMock = () => (
  <DetailActionsWrapperMock>
    <DetailActionMock />
    <DetailActionMock />
  </DetailActionsWrapperMock>
);

// Self Alignment behavior
const Template2: ComponentStory<typeof BylineList> = (props, { parameters }) => (
  <DesktopFlexLayout width={parameters.width ?? 1_000}>
    <BylineList {...props} />
    <DetailActionsMock />
  </DesktopFlexLayout>
);

export const AlignPhoto = Template2.bind({});
export const AlignNoPhoto = Template2.bind({});
export const AlignPhotoWrap = Template2.bind({});
export const AlignNoPhotoWrap = Template2.bind({});

// component args
setArgs(args.noAuthor,
  NoAuthor, NoAuthorMobile,
);
setArgs(args.oneAuthor,
  BylineListLightVariant, OneAuthor, OneAuthorMobile,
  PhotoAuthorsClickable, AlignPhoto, AlignPhotoWrap,
);
setArgs(args.oneAuthorNoPhoto,
  OneAuthorNoPhoto, OneAuthorMobileNoPhoto, AlignNoPhoto, AlignNoPhotoWrap,
);
setArgs(args.twoAuthors,
  TwoAuthor,
);
setArgs(args.threeAuthors,
  ThreeAuthors, ThreeAuthorsMobile, AtkAuthorsClickable, CcoAuthorsClickable, CioAuthorsClickable,
);

// arg that triggers click themes
setArgs({ onClick: () => {} },
  PhotoAuthorsClickable, AtkAuthorsClickable, CcoAuthorsClickable, CioAuthorsClickable,
);

// background and provider siteKey
setTheme('atk', BylineListLightVariant, NoAuthor, OneAuthor, OneAuthorNoPhoto, TwoAuthor, ThreeAuthors);
setTheme('cio', CIOTheme, CioAuthorsClickable);
setTheme('cco', CCOTheme, CcoAuthorsClickable);

// line-wrapping parameters
setParameters({ width: 700 }, AlignPhoto, AlignNoPhoto);
setParameters({ width: 500 }, AlignPhotoWrap, AlignNoPhotoWrap);

// viewport args
setViewport('iphone5', NoAuthorMobile, OneAuthorMobile, OneAuthorMobileNoPhoto, ThreeAuthorsMobile);
