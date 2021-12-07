import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import type { ComponentMeta } from '@storybook/react';
import BylineList, { BylineListProps } from './BylineList';
import { defaultTheme, setBackground, setViewport, storybookParameters, wrapKnobs } from '../../config/shared.stories';
import { untilMd, md } from '../../styles/breakpoints';
import exampleAuthorsProp from './exampleAuthorsProp.stories';

export default {
  title: 'Components/BylineList',
  component: BylineList,
  ...storybookParameters,
} as ComponentMeta<typeof BylineList>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type PreviewProps = { theme?: any, props?: Partial<BylineListProps> };

const defaultArgs: Partial<BylineListProps> = {
  attribution: 'Updated on Jun. 2020',
  authors: [],
};

const Preview = ({ theme, props }: PreviewProps) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    <BylineList {...wrapKnobs({ ...defaultArgs, ...props })} />
  </ThemeProvider>
);

// Author Handling
export const NoAuthor = () => <Preview />;
export const OneAuthor = () => <Preview props={exampleAuthorsProp.oneAuthor} />;
export const OneAuthorNoPhoto = () => <Preview props={exampleAuthorsProp.oneAuthorNoPhoto} />;
export const TwoAuthor = () => <Preview props={exampleAuthorsProp.twoAuthors} />;
export const ThreeAuthors = () => <Preview props={exampleAuthorsProp.threeAuthors} />;

// Theming
export const CCOTheme = () => <Preview theme={{ siteKey: 'cco' }} props={exampleAuthorsProp.oneAuthor} />;
setBackground('cco', CCOTheme);
export const CIOTheme = () => <Preview theme={{ siteKey: 'cio' }} props={exampleAuthorsProp.oneAuthor} />;
setBackground('cio', CIOTheme);

// Viewport Styles
export const NoAuthorMobile = () => <Preview />;
export const OneAuthorMobile = () => <Preview props={exampleAuthorsProp.oneAuthor} />;
export const OneAuthorMobileNoPhoto = () => <Preview props={exampleAuthorsProp.oneAuthorNoPhoto} />;
export const ThreeAuthorsMobile = () => <Preview props={exampleAuthorsProp.threeAuthors} />;
setViewport('iphone5', NoAuthorMobile, OneAuthorMobile, OneAuthorMobileNoPhoto, ThreeAuthorsMobile);

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

type Preview2Props = { width: number, props: Partial<BylineListProps> };
const Preview2 = ({ width, props }: Preview2Props) => (
  <ThemeProvider theme={{ ...defaultTheme }}>
    <DesktopFlexLayout width={width}>
      <BylineList {...wrapKnobs({ ...defaultArgs, ...props })} />
      <DetailActionsMock />
    </DesktopFlexLayout>
  </ThemeProvider>
);

// Self Alignment behavior
export const AlignPhoto = () => <Preview2 props={exampleAuthorsProp.oneAuthor} width={700} />;
export const AlignNoPhoto = () => (
  <Preview2 props={exampleAuthorsProp.oneAuthorNoPhoto} width={700} />
);
export const AlignPhotoWrap = () => <Preview2 props={exampleAuthorsProp.oneAuthor} width={500} />;
export const AlignNoPhotoWrap = () => (
  <Preview2 props={exampleAuthorsProp.oneAuthorNoPhoto} width={500} />
);
